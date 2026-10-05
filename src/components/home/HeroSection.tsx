"use client";

/**
 * Aiveeno — HeroSection (Modifia-style scroll journey)
 * Stack: Next.js App Router + React 19 + Tailwind v4 + lucide-react. No Three.js needed:
 * a small built-in 3D projection draws everything on one 2D canvas.
 *
 * Scroll sequence (scrubbed, fully reverses on scroll up):
 *   0. Load: heading + empty 3D grid floor + scroll-mouse hint at the bottom.
 *   1. Journey: the camera glides forward over the floor. An ink cable grows out from the
 *      bottom of the screen and snakes ahead; 3D bars, blocks and coin stacks rise along it,
 *      with message cards that type themselves out.
 *   2. Hold: the camera stops at the coin stack so the third card can be read.
 *   3. Finale: the cable rises out of the coin stack and is reeled up into the CTA, which grows
 *      from an ink dot into the "Book a Discovery Call" button (+ subtext and secondary CTA).
 *   4. CTA hold, then the next section (passed as children) slides up over the pinned hero.
 *
 * Navbar is NOT included — the site's own <Navbar /> should be fixed with a solid #F5F7F6 bg.
 */

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

const CONTAINER = 1200; // must match the max width of the next section's grid

// Message cards shown along the journey (desktop)
const MESSAGES = [
  { text: "We identify where AI creates real business value.", width: "250px" },
  { text: "We design the strategy, systems and roadmap to make it real.", width: "250px" },
  { text: "We build, implement and optimise AI for measurable impact.", width: "250px" },
];

// Mobile editorial statements (centered text overlay, no white cards)
const MESSAGES_MOBILE = [
  "We identify where AI creates real business value.",
  "We design the strategy and systems to make it real.",
  "We implement and optimise for measurable impact.",
];

interface HeroSectionProps {
  onOpenDiscoveryModal?: (context?: string) => void;
  children?: ReactNode;
}

export default function HeroSection({ onOpenDiscoveryModal, children }: HeroSectionProps = {}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileHeroRef = useRef<HTMLDivElement>(null);
  const mobileStatementsRef = useRef<HTMLDivElement>(null);
  const mobileLabelRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    const wrap = wrapRef.current;
    const heading = headingRef.current;
    const cta = ctaRef.current;
    const sub = subRef.current;
    const hint = hintRef.current;
    const labels = labelRefs.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !hero || !wrap || !heading || !cta || !hint) return;   // services and sub are optional

    const INK = "#0D1117";
    const GRAPHITE_SIDE = "#202833";
    const GRAPHITE_TOP = "#343F4F";
    const LINE = [217, 221, 218]; // #D9DDDA
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, dpr = 1, mobile = false;
    const anchor = { x: 0, y: 0 };
    const btn = { w: 0, h: 0 };
    let journey = 0;   // 0..1 camera journey (smoothed)
    let cableP = 0;    // 0..1 finale, cable -> button (smoothed)
    let journeyTarget = 0, cableTarget = 0;   // raw values from the scroll position
    let approach = 0;  // 0..1 next section rising into view
    let raf = 0;
    let alive = true;

    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const easeOutBack = (t: number) => { const c1 = 1.5, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const rgba = (a: number) => `rgba(${LINE[0]},${LINE[1]},${LINE[2]},${a})`;

    function measure() {
      const hr = hero!.getBoundingClientRect();
      const br = cta!.getBoundingClientRect();
      anchor.x = br.left - hr.left + br.width / 2;
      anchor.y = br.top - hr.top + br.height / 2;
      btn.w = br.width;
      btn.h = br.height;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = hero!.clientWidth;
      H = hero!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      mobile = W < 768;
      measure();
      labels.forEach((el) => {
        if (!el || el.dataset.full === undefined) return;
        el.textContent = el.dataset.full;
        el.style.width = "";
        el.style.minHeight = "";
        delete el.dataset.full;
        delete el.dataset.n;
      });
    }

    function columnXs() {
      const cw = Math.min(CONTAINER, W - 48);
      const left = (W - cw) / 2;
      return mobile ? [left, left + cw] : [left, left + cw / 3, left + (2 * cw) / 3, left + cw];
    }

    // ================= tiny 3D camera =================
    const CAM_H = 1.6;           // camera height above the floor
    const Z_END = 24.5;          // camera z at the end of the journey
    const FAR = 46;
    const cam = { x: 0, z: 0 };
    let camFollow = 0;
    const focal = () => H * (mobile ? 0.65 : 0.95);
    const horizon = () => H * (mobile ? 0.52 : 0.47);

    type P = { x: number; y: number; s: number; dz: number };
    function proj(x: number, y: number, z: number): P | null {
      const dz = z - cam.z;
      if (dz < 0.35) return null;
      const f = focal();
      const s = f / dz;
      return { x: W / 2 + (x - cam.x) * s, y: horizon() + (CAM_H - y) * s, s, dz };
    }
    const fog = (dz: number) => clamp01(1 - (dz - 4) / (FAR - 4));

    // ---------- floor grid (moves with the camera) ----------
    function drawFloor(alpha: number) {
      if (alpha <= 0.01) return;
      const c = ctx!;
      c.lineWidth = 1;
      const step = 2;
      const lineAlpha = mobile ? 0.35 : 0.85;
      // lines running into the distance: drawn in short segments, each faded by its own depth
      for (let k = -16; k <= 16; k++) {
        const x = k * step;
        for (let z = cam.z + 0.6; z < cam.z + FAR; z += step) {
          const a = proj(x, 0, z), b = proj(x, 0, z + step);
          if (!a || !b) continue;
          if ((a.x < -50 && b.x < -50) || (a.x > W + 50 && b.x > W + 50)) continue;
          const al = lineAlpha * alpha * Math.pow(fog(b.dz), 1.4);
          if (al < 0.02) break;
          c.strokeStyle = rgba(al);
          c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
        }
      }
      // cross lines (these slide toward the viewer as the camera moves)
      const first = Math.ceil((cam.z + 0.6) / step) * step;
      for (let z = first; z < cam.z + FAR; z += step) {
        const a = proj(-40, 0, z), b = proj(40, 0, z);
        if (!a || !b) continue;
        const al = lineAlpha * alpha * Math.pow(fog(a.dz), 1.4);
        if (al < 0.02) continue;
        c.strokeStyle = rgba(al);
        c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      }
    }

    // ---------- cable path on the floor ----------
    const CTRL: [number, number][] = [
      [0.15, 0.9], [0.5, 3.5], [1.2, 6.5], [1.7, 10], [0.9, 12.8], [-1.4, 15], [-2.6, 17],
      [-1.6, 19.4], [1.0, 21.2], [2.8, 23], [2.4, 26], [1.1, 28.6], [1.35, 31.3],
    ];
    // Catmull-Rom sample
    const PATH: { x: number; z: number }[] = [];
    for (let i = 0; i < CTRL.length - 1; i++) {
      const p0 = CTRL[Math.max(0, i - 1)], p1 = CTRL[i], p2 = CTRL[i + 1], p3 = CTRL[Math.min(CTRL.length - 1, i + 2)];
      for (let t = 0; t < 1; t += 1 / 14) {
        const t2 = t * t, t3 = t2 * t;
        const f = (a: number, b: number, c2: number, d: number) =>
          0.5 * (2 * b + (-a + c2) * t + (2 * a - 5 * b + 4 * c2 - d) * t2 + (-a + 3 * b - 3 * c2 + d) * t3);
        PATH.push({ x: f(p0[0], p1[0], p2[0], p3[0]), z: f(p0[1], p1[1], p2[1], p3[1]) });
      }
    }
    PATH.push({ x: CTRL[CTRL.length - 1][0], z: CTRL[CTRL.length - 1][1] });

    // the cable is drawn on an offscreen layer, then composited once, so fading it never stripes
    const layer = document.createElement("canvas");
    const lctx = layer.getContext("2d")!;
    function drawPath(headZ: number, alpha: number, zMin = -Infinity, zMax = Infinity, mode: "shadow" | "cable" = "cable") {
      if (mobile && mode === "shadow") return; // On mobile, no shadow for clean 1.8px graphite line

      if (layer.width !== canvas!.width || layer.height !== canvas!.height) {
        layer.width = canvas!.width;
        layer.height = canvas!.height;
      }
      lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lctx.clearRect(0, 0, W, H);
      const c = lctx;
      const pts: P[] = [];
      for (let qi = 0; qi < PATH.length; qi++) {
        const q = PATH[qi];
        if (q.z > headZ) break;
        // include one point either side of the range so chunks join without gaps
        const next = PATH[qi + 1], prev = PATH[qi - 1];
        const inRange = q.z >= zMin && q.z <= zMax;
        const touches = (next && next.z >= zMin && next.z <= zMax) || (prev && prev.z >= zMin && prev.z <= zMax);
        if (!inRange && !touches) continue;
        // On mobile: keep path centered within narrow bounds (+/-0.25 units)
        const qx = mobile ? q.x * 0.15 : q.x;
        const p = proj(qx, 0.04, q.z);
        if (p && p.dz < FAR) pts.push(p);
      }
      if (pts.length < 2) return;
      c.lineCap = "round";
      c.lineJoin = "round";

      if (mobile) {
        // Mobile: Thin graphite line around 1.5–2px (no giant black curve)
        c.strokeStyle = "#343F4F";
        c.lineWidth = 1.8;
        c.beginPath();
        c.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          c.lineTo(pts[i].x, pts[i].y);
        }
        c.stroke();
      } else {
        // Desktop: soft shadow
        if (mode === "shadow") {
          c.strokeStyle = "#E2E6E4";
          for (let i = 1; i < pts.length; i++) {
            c.lineWidth = Math.min(20, Math.max(3, 0.08 * pts[i].s));
            c.beginPath();
            c.moveTo(pts[i - 1].x + Math.min(4, 0.012 * pts[i - 1].s), pts[i - 1].y + Math.min(2, 0.006 * pts[i - 1].s));
            c.lineTo(pts[i].x + Math.min(4, 0.012 * pts[i].s), pts[i].y + Math.min(2, 0.006 * pts[i].s));
            c.stroke();
          }
        } else {
          // Desktop: cable (~5px far, ~15px right at the bottom of the screen, like Modifia)
          c.strokeStyle = INK;
          for (let i = 1; i < pts.length; i++) {
            c.lineWidth = Math.min(15, Math.max(2.5, 0.06 * pts[i].s));
            c.beginPath(); c.moveTo(pts[i - 1].x, pts[i - 1].y); c.lineTo(pts[i].x, pts[i].y); c.stroke();
          }
        }
      }
      const m = ctx!;
      m.save();
      m.setTransform(1, 0, 0, 1, 0, 0);
      m.globalAlpha = mobile ? alpha * 0.85 : alpha;
      m.drawImage(layer, 0, 0);
      m.restore();
    }

    // ---------- solids ----------
    function poly(pts: (P | null)[], fill: string) {
      if (pts.some((p) => !p)) return;
      const c = ctx!;
      c.fillStyle = fill;
      c.beginPath();
      c.moveTo(pts[0]!.x, pts[0]!.y);
      for (let i = 1; i < pts.length; i++) c.lineTo(pts[i]!.x, pts[i]!.y);
      c.closePath();
      c.fill();
    }

    function box(x: number, z: number, w: number, d: number, h: number) {
      const x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2;
      // shadow: softer, cleaner architectural contact shadow
      ctx!.globalAlpha *= 0.3;
      poly([proj(x0 + 0.05, 0, z0 + 0.08), proj(x1 + 0.18, 0, z0 + 0.08), proj(x1 + 0.18, 0, z1 + 0.15), proj(x0 + 0.05, 0, z1 + 0.15)], "rgba(13,17,23,0.1)");
      ctx!.globalAlpha /= 0.3;
      // side face (the one facing the camera's x)
      if (x0 > cam.x) poly([proj(x0, 0, z0), proj(x0, 0, z1), proj(x0, h, z1), proj(x0, h, z0)], GRAPHITE_SIDE);
      else if (x1 < cam.x) poly([proj(x1, 0, z0), proj(x1, 0, z1), proj(x1, h, z1), proj(x1, h, z0)], GRAPHITE_SIDE);
      // top face
      if (h < CAM_H) poly([proj(x0, h, z0), proj(x1, h, z0), proj(x1, h, z1), proj(x0, h, z1)], GRAPHITE_TOP);
      // front
      poly([proj(x0, 0, z0), proj(x1, 0, z0), proj(x1, h, z0), proj(x0, h, z0)], INK);
    }

    function coinStack(x: number, z: number, r: number, count: number, th: number) {
      if (count <= 0) return;
      const c = ctx!;
      const base = proj(x, 0, z);
      if (!base) return;
      // shadow: softer, cleaner contact shadow
      c.save();
      c.globalAlpha *= 0.08;
      c.fillStyle = INK;
      c.beginPath();
      c.ellipse(base.x + r * 0.25 * base.s, base.y, r * 1.15 * base.s, r * 0.35 * base.s, 0, 0, Math.PI * 2);
      c.fill();
      c.restore();
      for (let i = 0; i < count; i++) {
        const y = i * th;
        const b = proj(x, y, z), t = proj(x, y + th * 0.85, z);
        if (!b || !t) return;
        const rx = r * b.s;
        const ry = Math.max(1, rx * clamp01((CAM_H - y) / b.dz) * 0.95);
        c.fillStyle = GRAPHITE_SIDE;
        c.beginPath();
        c.ellipse(b.x, b.y, rx, ry, 0, 0, Math.PI);
        c.lineTo(t.x - rx, t.y);
        c.ellipse(t.x, t.y, rx, ry, 0, Math.PI, 0, true);
        c.closePath();
        c.fill();
        c.fillStyle = i === count - 1 ? GRAPHITE_TOP : INK;
        c.beginPath();
        c.ellipse(t.x, t.y, rx, ry, 0, 0, Math.PI * 2);
        c.fill();
      }
    }

    // objects sit ON the cable route (the cable runs into and through them) — nothing off the path
    function pathXAt(z: number) {
      for (let i = 1; i < PATH.length; i++) {
        if (PATH[i].z >= z) {
          const a = PATH[i - 1], b = PATH[i];
          return lerp(a.x, b.x, (z - a.z) / Math.max(1e-6, b.z - a.z));
        }
      }
      return PATH[PATH.length - 1].x;
    }

    const OBJ_SCALE = 0.75; // 25% smaller, refined architectural scale
    const COIN_TH = 0.075 * OBJ_SCALE;
    const COIN_R = 0.3 * OBJ_SCALE;
    const COIN_DX = 0.55 * OBJ_SCALE;
    const COIN_DZ = 0.2 * OBJ_SCALE;

    type Obj = { kind: "bars" | "blocks" | "coins"; x: number; z: number; label?: number; scale?: number };
    const PATH_END = PATH[PATH.length - 1];
    const OBJECTS: Obj[] = [
      { kind: "bars", x: pathXAt(10), z: 10, label: 0 },
      { kind: "blocks", x: pathXAt(17), z: 17, label: 1 },
      // left coin stack sits right on the cable's end, so the cable plugs into it
      { kind: "coins", x: PATH_END.x + COIN_DX, z: PATH_END.z - COIN_DZ, label: 2 },
    ];

    // g(i) = growth 0..1 of piece i; every piece rises out of the floor on its own
    function drawObject(o: Obj, g: (i: number) => number, alpha: number) {
      const s = (o.scale ?? 1) * (mobile ? 0.52 : OBJ_SCALE);
      const ox = mobile ? 0 : o.x;
      const oz = mobile ? (o.kind === "bars" ? 7 : o.kind === "blocks" ? 14 : 21) : o.z;
      ctx!.globalAlpha = alpha;
      if (o.kind === "bars") {
        const hs = [0.55, 0.95, 1.4];
        [0, 1, 2].forEach((i) => {
          const h = hs[i] * s * g(i);
          if (h > 0.005) box(ox + (i - 1) * 0.42 * s, oz, 0.3 * s, 0.3 * s, h);
        });
      } else if (o.kind === "blocks") {
        // back pieces first so the front piece overlaps them
        const pieces: [number, number, number, number, number][] = [
          [-0.6, 0.15, 0.55, 0.6, 0.6],   // x offset, z offset, w, d, h
          [0.6, 0.15, 0.55, 0.6, 0.6],
          [0, 0.1, 0.65, 0.7, 0.9],
        ];
        pieces.forEach(([dx, dzz, w, d, h], i) => {
          const hh = h * s * g(i);
          if (hh > 0.005) box(ox + dx * s, oz + dzz * s, w * s, d * s, hh);
        });
      } else {
        const cdx = COIN_DX * (mobile ? 0.75 : 1);
        const cr = COIN_R * (mobile ? 0.8 : 1);
        coinStack(ox - cdx, oz + COIN_DZ, cr, Math.round(14 * g(0)), COIN_TH);
        coinStack(ox, oz, cr, Math.round(11 * g(1)), COIN_TH);
        coinStack(ox + cdx, oz - 0.1 * OBJ_SCALE, cr, Math.round(7 * g(2)), COIN_TH);
      }
      ctx!.globalAlpha = 1;
    }

    function drawJourney(pathAlpha: number, coinsK: number, labelK: number) {
      const alpha = 1;
      // cable tip runs ~8 units ahead of the camera. The camera stops before the coin stack, so in
      // the last stretch the tip keeps pushing a few units further: this fully grows the coins and
      // lets the third card finish typing before the finale starts.
      const headZ = cam.z + lerp(1.2, 8, clamp01(journey * 7)) + 4 * clamp01((journey - 0.88) / 0.12);
      const head = Math.min(headZ, 40);
      // far objects first; the cable is drawn in pieces between them so a nearer stretch of
      // cable is never hidden behind (or looks like it passes through) a farther object
      const order = OBJECTS.map((o, i) => ({ o, i })).sort((a, b) => b.o.z - a.o.z);
      if (pathAlpha > 0.01) drawPath(head, pathAlpha, -Infinity, Infinity, "shadow");   // all shadow first
      let drawnFrom = Infinity;   // cable already drawn for z >= drawnFrom
      for (const { o } of order) {
        const oz = mobile ? (o.kind === "bars" ? 7 : o.kind === "blocks" ? 14 : 21) : o.z;
        const dz = oz - cam.z;
        if (dz > FAR) continue;
        const front = oz - 0.35; // object's front edge
        if (pathAlpha > 0.01 && front < drawnFrom) {
          drawPath(head, pathAlpha, front, drawnFrom);
          drawnFrom = front;
        }
        if (dz < 0.8) continue;
        // first piece pops up just before the cable arrives, the rest rise one by one after it
        const reach = headZ - oz;
        const g = (i: number) => {
          const v = easeOutBack(clamp01((reach + 1.6 - i * 0.9) / 1.4));
          return o.kind === "coins" ? Math.min(v, coinsK) : v;
        };
        if (g(0) <= 0.01) continue;
        drawObject(o, g, 0.6 + 0.4 * fog(dz));
      }
      if (pathAlpha > 0.01) drawPath(head, pathAlpha, -Infinity, drawnFrom);

      // On mobile, simple centered editorial text is used instead of floating cards
      if (mobile) {
        labels.forEach((el) => { if (el) el.style.opacity = "0"; });
      } else {
        // Desktop: message cards follow their objects
        OBJECTS.forEach((o) => {
          if (o.label === undefined) return;
          const el = labels[o.label];
          if (!el) return;
          // anchor = top of the tallest piece
          const sc = (o.scale ?? 1) * OBJ_SCALE;
          const tip =
            o.kind === "bars" ? { x: o.x + 0.42 * sc, y: 1.4 * sc, z: o.z } :
              o.kind === "blocks" ? { x: o.x, y: 0.9 * sc, z: o.z + 0.1 * sc } :
                { x: o.x - COIN_DX, y: 14 * COIN_TH, z: o.z + COIN_DZ };
          const p = proj(tip.x, tip.y, tip.z);
          const dz = o.z - cam.z;
          const reach = headZ - o.z;
          const vis = p ? clamp01((reach + 0.5) / 0.8) * clamp01((dz - 2.5) / 1.5) * alpha * labelK : 0;
          el.style.opacity = String(vis);
          if (p && vis > 0) {
            const k = Math.max(0.75, Math.min(1.35, p.s / (focal() * 0.12)));   // grows as the camera gets closer
            const w = el.offsetWidth * k, h = el.offsetHeight * k;
            let left: number, top: number;
            if (o.kind === "bars") {        // left edge just left of the tip, centred on it, runs right
              left = p.x - 14 * k; top = p.y - h / 2;
            } else if (o.kind === "blocks") { // bottom-right corner on the tip, card sits up-left
              left = p.x + 12 * k - w; top = p.y + 10 * k - h;
            } else {                          // bottom-left corner on the tip, card sits up-right
              left = p.x - 10 * k; top = p.y + 12 * k - h;
            }
            // keep the whole card on screen
            left = Math.max(16, Math.min(W - 16 - w, left));
            top = Math.max(84, Math.min(H - 16 - h, top));
            el.style.transformOrigin = "0 0";
            el.style.transform = `translate(${left}px, ${top}px) scale(${k})`;
          }
          // typewriter reveal, like Modifia
          if (el.dataset.full === undefined) {
            el.style.width = `${el.offsetWidth + 1}px`;
            el.style.minHeight = `${el.offsetHeight}px`;
          }
          const full = el.dataset.full ?? (el.dataset.full = el.textContent ?? "");
          const n = Math.round(full.length * clamp01((reach + 0.3) / 2.6));
          if (el.dataset.n !== String(n)) { el.dataset.n = String(n); el.textContent = full.slice(0, n); }
        });
      }
    }

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      const c = ctx!;
      r = Math.min(r, w / 2, h / 2);
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }

    // ================= finale: coin stack -> cable rises straight up -> reeled into the button =================
    const COIN = OBJECTS[OBJECTS.length - 1];
    const STACK = { x: COIN.x - COIN_DX, z: COIN.z + COIN_DZ, h: 14 * COIN_TH };   // tallest (left) stack
    function finalePhases(k: number) {
      return {
        pan: ease(clamp01(k / 0.25)),
        climb: ease(clamp01((k - 0.25) / 0.25)),
        unplug: ease(clamp01((k - 0.5) / 0.18)),
        lift: ease(clamp01((k - 0.66) / 0.22)),
        grow: ease(clamp01((k - 0.7) / 0.18)),   // dot -> full button by k = 0.88
      };
    }

    function drawFinale(k: number) {
      if (mobile || k <= 0 || k >= 0.9) return;   // on mobile, CTA is resting cleanly; no finale cable
      const c = ctx!;
      const { climb, unplug, lift, grow } = finalePhases(k);
      if (climb <= 0) return;
      const top = proj(STACK.x, STACK.h * (1 - unplug), STACK.z);   // top of the stack (sinks while unplugging)
      if (!top) return;
      const x = lerp(top.x, anchor.x, climb);
      const topY = lerp(top.y, anchor.y, climb);                     // upper end climbs to the dot
      const bottomY = lerp(lerp(top.y, top.y - 40, unplug), anchor.y, lift);   // lower end lifts off, then reels in

      if (bottomY - topY > 1) {
        c.strokeStyle = INK;
        c.lineWidth = 5;
        c.lineCap = "round";
        c.beginPath();
        c.moveTo(x, topY);
        c.lineTo(lerp(top.x, anchor.x, Math.max(climb, unplug)), bottomY);
        c.stroke();
      }
      if (climb >= 1) {
        if (grow <= 0) {
          c.fillStyle = INK;
          c.beginPath();
          c.arc(anchor.x, anchor.y, 4, 0, Math.PI * 2);
          c.fill();
        } else {
          const w = lerp(12, btn.w, grow), h = lerp(12, btn.h, Math.min(1, grow * 1.3));
          c.fillStyle = "rgba(232,237,235,0.9)";
          roundRect(anchor.x - w / 2 - 6 * grow, anchor.y - h / 2 - 6 * grow, w + 12 * grow, h + 12 * grow, 14);
          c.fill();
          c.fillStyle = INK;
          roundRect(anchor.x - w / 2, anchor.y - h / 2, w, h, 10);
          c.fill();
        }
      }
    }

    // ================= DOM sync =================
    const ctaParts = Array.from(cta.children) as HTMLElement[];
    cta.style.transition = "transform .2s";
    ctaParts.forEach((el) => { el.style.transition = "opacity .3s ease"; });
    if (sub) sub.style.transition = "opacity .3s ease, transform .2s";
    let buttonShown: boolean | null = null;
    function setButton(show: boolean) {
      if (mobile) return; // Mobile CTA is always cleanly visible
      if (show === buttonShown) return;
      buttonShown = show;
      cta!.style.visibility = show ? "visible" : "hidden";
      ctaParts.forEach((el) => { el.style.opacity = show ? "1" : "0"; });
      if (sub) {
        sub.dataset.show = show ? "true" : "false";
        sub.style.opacity = show ? "1" : "0";
      }
    }

    function onScroll() {
      const vh = window.innerHeight;
      const scrolled = Math.max(0, -wrap!.getBoundingClientRect().top);
      if (mobile) {
        const mMax = vh * 0.70;
        journeyTarget = clamp01(scrolled / mMax);
        cableTarget = 0;
      } else {
        // Desktop: journey runs over 4.5vh, cable finale from 4.7vh to 5.7vh
        journeyTarget = clamp01(scrolled / (vh * 4.5));
        cableTarget = clamp01((scrolled - vh * 4.7) / (vh * 1.0));
      }

      const sEl = servicesRef.current;
      // approach measures the fraction of the viewport that the Approach section has covered (0 = just entering at bottom, 1 = scrolled to top)
      approach = sEl ? clamp01((vh - sEl.getBoundingClientRect().top) / vh) : 0;

      // Only fade out hero elements once the Approach section has actually covered more than 65% of the screen
      const fadeOut = clamp01((approach - 0.65) / 0.3);
      hint!.style.opacity = String(1 - clamp01(scrolled / (vh * 0.08)));

      if (!mobile) {
        cta!.style.opacity = String(Math.max(0, 1 - fadeOut));
        cta!.style.transform = `translateY(-${approach * 40}px)`;
        cta!.style.pointerEvents = approach > 0.5 ? "none" : "";

        if (sub) {
          if (sub.dataset.show === "true") {
            sub.style.opacity = String(Math.max(0, 1 - fadeOut));
            sub.style.transform = `translateY(-${approach * 35}px)`;
            sub.style.pointerEvents = approach > 0.5 ? "none" : "auto";
          } else {
            sub.style.opacity = "0";
            sub.style.pointerEvents = "none";
          }
        }

        heading!.style.opacity = String(Math.max(0, 1 - fadeOut));
        heading!.style.transform = `translateY(-${approach * 50}px)`;
      } else {
        // Mobile: hero elements stay visible as Approach section slides up over them, fading out only near full coverage
        if (mobileHeroRef.current) {
          mobileHeroRef.current.style.opacity = String(Math.max(0, 1 - fadeOut));
          mobileHeroRef.current.style.transform = `translateY(-${approach * 25}px)`;
          mobileHeroRef.current.style.pointerEvents = approach > 0.5 ? "none" : "auto";
        }
        if (mobileStatementsRef.current) {
          mobileStatementsRef.current.style.opacity = String(Math.max(0, 1 - fadeOut));
        }
      }

      canvas!.style.transform = `translateY(-${approach * 30}px)`;
      canvas!.style.opacity = String(Math.max(0, 1 - fadeOut));

      if (heroRef.current) {
        heroRef.current.style.visibility = approach >= 0.98 ? "hidden" : "visible";
      }
    }

    function frame() {
      if (!alive) return;
      journey += (journeyTarget - journey) * (mobile ? 0.12 : 0.075);
      cableP += (cableTarget - cableP) * 0.09;
      if (Math.abs(journeyTarget - journey) < 0.0005) journey = journeyTarget;
      if (Math.abs(cableTarget - cableP) < 0.0005) cableP = cableTarget;
      if (!mobile) {
        setButton(reduce || cableP >= 0.9);
      }
      cam.z = journey * Z_END;
      if (mobile) {
        cam.x = 0; // centered camera on mobile
      } else {
        const pan = finalePhases(cableP).pan;
        const followX = 0;
        camFollow += (followX - camFollow) * 0.08;
        cam.x = lerp(camFollow, STACK.x, pan);
      }
      const c = ctx!;
      c.clearRect(0, 0, W, H);

      const floorA = Math.max(0, 1 - approach * 1.2);
      drawFloor(floorA);

      if (!reduce) {
        const f = finalePhases(cableP);
        if (journey > 0) drawJourney(1 - clamp01(cableP / 0.22), 1 - f.unplug, 1 - clamp01(cableP * 2.5));
        else {
          labels.forEach((el) => { if (el) el.style.opacity = "0"; });
        }
        drawFinale(cableP);
      }

      if (mobile) {
        // Smoothly crossfade the 3 editorial statements based on journey
        const mP = journey;
        const p0 = mobileLabelRefs.current[0];
        const p1 = mobileLabelRefs.current[1];
        const p2 = mobileLabelRefs.current[2];
        if (p0) {
          const op0 = clamp01((mP - 0.03) / 0.08) * (1 - clamp01((mP - 0.32) / 0.06));
          p0.style.opacity = String(op0);
        }
        if (p1) {
          const op1 = clamp01((mP - 0.35) / 0.08) * (1 - clamp01((mP - 0.64) / 0.06));
          p1.style.opacity = String(op1);
        }
        if (p2) {
          // Final statement remains visible until hero scroll container ends and Approach enters
          const op2 = clamp01((mP - 0.67) / 0.08);
          p2.style.opacity = String(op2);
        }
      }

      // straight column lines that guide into the next section
      if (approach > 0.01 && approach < 0.99) {
        c.strokeStyle = rgba(0.75 * Math.sin(approach * Math.PI));
        c.lineWidth = 1;
        for (const x of columnXs()) {
          const px = Math.round(x) + 0.5;
          c.beginPath(); c.moveTo(px, 0); c.lineTo(px, H); c.stroke();
        }
      }
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    document.fonts.ready.then(() => {
      if (!alive) return;
      resize();
      onScroll();
      raf = requestAnimationFrame(frame);
    });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-[#F5F7F6] text-[#0D1117]">
      {/* Hero stays pinned during the journey + finale, then the next section slides up over it */}
      <div ref={wrapRef} className="relative">
        <section ref={heroRef} className="sticky top-0 h-svh overflow-hidden">
          <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-0 h-full w-full" />

          {/* floating message cards (positioned by the canvas script) - desktop only */}
          {MESSAGES.map((m, i) => (
            <div
              key={m.text}
              ref={(el) => { labelRefs.current[i] = el; }}
              aria-hidden="true"
              style={{ width: m.width }}
              className="pointer-events-none absolute left-0 top-0 z-[1] hidden md:block max-w-[calc(100vw-32px)] rounded-[12px] border border-[#E2E7E4] bg-[#FBFCFB]/80 px-3.5 py-2.5 text-left text-[13px] leading-[1.45] text-[#0D1117] opacity-0 backdrop-blur-md"
            >
              {m.text}
            </div>
          ))}

          {/* Mobile initial viewport container (< 768px) */}
          <div
            ref={mobileHeroRef}
            className="pointer-events-none relative z-[2] flex h-full flex-col items-center px-4 pt-[80px] text-center md:hidden"
          >
            <h1
              className="mx-auto text-center font-sans"
              style={{
                fontFamily: 'var(--font-instrument-sans), "Instrument Sans", sans-serif',
                fontWeight: 500,
                fontSize: "clamp(39px, 10.2vw, 42px)",
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                maxWidth: "340px",
                margin: 0,
              }}
            >
              <span className="block">Transform how your</span>
              <span className="block">business operates</span>
              <span className="block">with AI.</span>
            </h1>

            <button
              type="button"
              onClick={() => onOpenDiscoveryModal?.("Mobile Hero: Book a Discovery Call")}
              className="pointer-events-auto mt-[26px] inline-flex h-11 cursor-pointer items-center justify-center rounded-[10px] bg-[#0D1117] px-5 text-[14px] font-medium leading-none text-[#F5F7F6] shadow-[0_0_0_5px_rgba(232,237,235,0.9)] active:scale-[0.98] transition-transform"
            >
              <span>Book a Discovery Call</span>
            </button>

            <p className="mt-4 max-w-[320px] text-center text-[15px] sm:text-[16px] leading-[1.45] text-[#6F7479]">
              Move from isolated AI experimentation to a structured transformation program.
            </p>
          </div>

          {/* Mobile editorial statements overlay (centered, no white pill card, 15-16px, max-w ~290px) */}
          <div
            ref={mobileStatementsRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-20 z-[4] flex justify-center px-4 md:hidden"
          >
            <div className="relative flex h-[48px] w-full max-w-[290px] items-center justify-center">
              {MESSAGES_MOBILE.map((msg, i) => (
                <p
                  key={msg}
                  ref={(el) => { mobileLabelRefs.current[i] = el; }}
                  style={{ opacity: 0 }}
                  className="absolute inset-x-0 text-center font-sans text-[15px] sm:text-[16px] font-normal leading-[1.38] tracking-[-0.01em] text-[#0D1117] transition-opacity duration-150"
                >
                  {msg}
                </p>
              ))}
            </div>
          </div>

          {/* Desktop initial viewport & finale container (>= 768px) */}
          <div className="pointer-events-none relative z-[2] hidden md:flex h-full flex-col items-center pt-[clamp(110px,16vh,190px)] text-center">
            <h1
              ref={headingRef}
              className="mx-auto max-w-[1040px] px-5"
              /* inline on purpose: global h1 styles in globals.css were overriding the Tailwind size */
              style={{ fontSize: "clamp(34px, 4.2vw, 62px)", lineHeight: 1.08, letterSpacing: "-0.025em", fontWeight: 500, margin: 0 }}
            >
              <span className="inline-block whitespace-nowrap">Transform how your business</span>
              <br />
              <span className="inline-block whitespace-nowrap">operates with AI.</span>
            </h1>

            <button
              ref={ctaRef}
              onClick={() => onOpenDiscoveryModal?.("Hero: Book a Discovery Call")}
              style={{ visibility: "hidden" }}
              className="pointer-events-auto mt-8 inline-flex h-12 cursor-pointer items-center justify-center rounded-[10px] bg-[#0D1117] px-[22px] text-[15px] font-medium leading-none text-[#F5F7F6] shadow-[0_0_0_6px_rgba(232,237,235,0.9)] hover:-translate-y-px transition-all focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[#D4A64A]"
            >
              <span>Book a Discovery Call</span>
            </button>

            {/* subtext + secondary CTA */}
            <div
              ref={subRef}
              data-show="false"
              style={{ opacity: 0 }}
              className="pointer-events-none mt-4 flex flex-col items-center gap-2 transition-opacity duration-300 data-[show=true]:pointer-events-auto"
            >
              <p className="max-w-[540px] px-4 text-[15px] leading-relaxed text-[#6F7479]">
                Move from isolated AI experimentation to a structured transformation program.
              </p>
              <Link
                href="/ai-business-transformation/"
                className="inline-flex items-center text-[15px] font-medium text-[#0D1117] transition-all hover:underline"
              >
                <span>Explore AI Transformation</span>
              </Link>
            </div>
          </div>

          {/* scroll hint */}
          <div ref={hintRef} aria-hidden="true" className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 md:bottom-7">
            <div className="flex h-[32px] w-[20px] justify-center rounded-full border-[1.5px] border-[#D9DDDA] pt-1.5 md:h-[34px] md:w-[22px]">
              <span className="h-1.5 w-[2.5px] animate-bounce rounded-full bg-[#6F7479] md:h-2 md:w-[3px]" />
            </div>
          </div>
        </section>

        {/* scroll room: mobile 75svh (total wrapper ~175svh) vs desktop 600vh */}
        <div aria-hidden="true" className="h-[75svh] md:h-[600vh]" />

        {/* next section slides up smoothly over the pinned hero */}
        <div ref={servicesRef} className="relative z-10 bg-[#E8EDEB]">
          {children}
        </div>
      </div>
    </div>
  );
}