"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenDiscoveryModal: (interest?: string) => void;
}

export default function Navbar({ onOpenDiscoveryModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AI Transformation", href: "#ai-transformation" },
    { name: "Cloud & Technology", href: "#capabilities" },
    { name: "Framework", href: "#framework" },
    { name: "About", href: "#the-shift" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#E4E0D7] py-3.5 shadow-[0_1px_3px_rgba(20,20,20,0.03)]"
          : "bg-[#F5F3EE]/70 backdrop-blur-sm border-b border-[#E4E0D7]/60 py-4"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Aiveeno Logo */}
          <div className="flex items-center">
            <Logo variant="dark" showSubtitle={false} />
          </div>

          {/* Center: Clean Enterprise Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-[#6F7378] hover:text-[#141414] transition-colors py-1 relative group tracking-[-0.01em]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#141414] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Book a Discovery Call CTA */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onOpenDiscoveryModal("Navbar Consultation")}
              className="inline-flex items-center rounded-lg bg-[#141414] px-4 py-2 text-xs font-medium text-white hover:bg-[#262626] transition-all shadow-xs active:scale-[0.98]"
            >
              <span>Book a Discovery Call</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={() => onOpenDiscoveryModal("Mobile Direct")}
              className="sm:hidden rounded-md bg-[#141414] px-3 py-1.5 text-[11px] font-medium text-white"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#141414] hover:bg-[#EAE6DE] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E0D7] bg-[#F5F3EE] px-6 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#141414] py-2 px-2 rounded hover:bg-[#EAE6DE]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E4E0D7]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiscoveryModal("Mobile Drawer");
              }}
              className="w-full flex items-center justify-center rounded-lg bg-[#141414] py-2.5 text-xs font-medium text-white hover:bg-[#262626] transition-colors"
            >
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
