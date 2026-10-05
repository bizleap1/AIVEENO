import Link from "next/link";
import Logo from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { navigationData } from "@/data/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F7F6] text-[#6F7479] border-t border-[#D9DDDA] pt-16 pb-12 select-none">
      <Container>
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D9DDDA]">
          
          {/* Brand & Positioning Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            
            <p className="text-[13.5px] leading-relaxed text-[#6F7479] max-w-sm mt-3 font-normal">
              We help organizations transform how their business operates with AI. A disciplined consulting partnership from workflow strategy and architecture through to engineering and cloud modernization.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-[13px] font-mono font-medium text-[#0D1117] hover:text-[#C9A24A] underline-offset-4 hover:underline transition-colors"
              >
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>

          {/* AI Transformation Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
              AI Transformation
            </div>
            <ul className="space-y-2 text-[13.5px]">
              {navigationData.aiTransformation.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0D1117] hover:text-[#C9A24A] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud & Technology Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
              Cloud & Technology
            </div>
            <ul className="space-y-2 text-[13.5px]">
              {navigationData.cloudTechnology.items.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0D1117] hover:text-[#C9A24A] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cloud-technology"
                  className="text-[#0D1117] hover:text-[#C9A24A] underline-offset-4 hover:underline inline-flex items-center font-mono text-[12px]"
                >
                  <span>View all cloud capabilities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Overview & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
              Company
            </div>
            <ul className="space-y-2 text-[13.5px]">
              <li>
                <Link href="/about" className="hover:text-[#0D1117] hover:text-[#C9A24A] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/framework" className="hover:text-[#0D1117] hover:text-[#C9A24A] transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/ai-transformation-assessment" className="hover:text-[#0D1117] hover:text-[#C9A24A] transition-colors">
                  Assessment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0D1117] hover:text-[#C9A24A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#6F7479]">
          <div>
            © {currentYear} Aiveeno. Enterprise Technology Transformation. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-[#0D1117] transition-colors cursor-pointer">
              Privacy Notice
            </span>
            <span className="hover:text-[#0D1117] transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="hover:text-[#0D1117] transition-colors cursor-pointer">
              Security Architecture
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
