"use client";

import Logo from "./Logo";
import { ArrowUpRight, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FCFBF9] border-t border-[#E4E0D7] pt-16 pb-12 text-[#6F7378]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#ECE8E1]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" showSubtitle={false} />
            
            <p className="text-xs sm:text-sm text-[#6F7378] max-w-sm leading-relaxed">
              Aiveeno is an enterprise technology consulting company. We help organizations identify where AI creates real business value, then design and build the cloud, data, and software architecture to implement it at scale.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#6F7378] font-mono">
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-[#141414]" />
                <span>SOC 2 Type II Practice</span>
              </span>
              <span>•</span>
              <span>ISO 27001 Aligned</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#141414] font-mono">
              Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ai-transformation" className="hover:text-[#141414] transition-colors">
                  AI Transformation
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#141414] transition-colors">
                  Cloud Migration & Modernization
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#141414] transition-colors">
                  Enterprise Data Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#141414] transition-colors">
                  DevOps & Platform Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#141414] transition-colors">
                  Security & AI Governance
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#141414] transition-colors">
                  Custom Software Development
                </a>
              </li>
            </ul>
          </div>

          {/* Methodology & Services Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#141414] font-mono">
              Advisory
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#assessment" className="hover:text-[#141414] transition-colors">
                  2-Week Executive Assessment
                </a>
              </li>
              <li>
                <a href="#the-shift" className="hover:text-[#141414] transition-colors">
                  The Transformation Shift
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-[#141414] transition-colors">
                  6-Stage Engineering Lifecycle
                </a>
              </li>
              <li>
                <a href="#outcomes" className="hover:text-[#141414] transition-colors">
                  Enterprise Case Studies
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#141414] transition-colors">
                  Managed Cloud & AI Operations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Global Presence Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#141414] font-mono">
              Engagement
            </div>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#6F7378]" />
                <a href="mailto:advisory@aiveeno.com" className="hover:text-[#141414] transition-colors font-mono">
                  advisory@aiveeno.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#6F7378]">
                <MapPin className="h-3.5 w-3.5 text-[#6F7378] shrink-0 mt-0.5" />
                <span>San Francisco • London • Bengaluru</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-medium text-[#141414] hover:underline"
              >
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7378]">
          <div>
            © {new Date().getFullYear()} Aiveeno Technology Advisory Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#141414] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#141414] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#141414] cursor-pointer">Security Standards</span>
            <span className="hover:text-[#141414] cursor-pointer">Subprocessors</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
