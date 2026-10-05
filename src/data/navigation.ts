export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  href?: string;
  description?: string;
  featured?: {
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
  };
  items: NavItem[];
}

export const navigationData: {
  aiTransformation: NavCategory;
  cloudTechnology: NavCategory;
  simpleLinks: NavItem[];
  futureLinks: NavItem[];
  primaryCta: {
    label: string;
    href: string;
    context: string;
  };
} = {
  aiTransformation: {
    title: "AI Transformation",
    href: "/ai-business-transformation",
    description: "Move from isolated experimentation to a structured enterprise transformation program.",
    featured: {
      title: "AI Transformation Assessment",
      description: "A focused, paid one-week engagement examining workflows and systems before committing capital.",
      href: "/ai-transformation-assessment",
      ctaLabel: "Explore Assessment",
    },
    items: [
      {
        title: "AI Business Transformation",
        href: "/ai-business-transformation",
        description: "Transform how the organization operates, makes decisions and creates value.",
      },
      {
        title: "Our Framework",
        href: "/framework",
        description: "Proprietary consulting methodology connecting business reality to engineering execution.",
      },
      {
        title: "AI Transformation Assessment",
        href: "/ai-transformation-assessment",
        description: "Structured entry point delivering an executive opportunity report and roadmap.",
      },
      {
        title: "AI Solutions / Use Cases",
        href: "/ai-solutions",
        description: "Production AI systems, intelligent workflows and enterprise automation.",
      },
    ],
  },
  cloudTechnology: {
    title: "Cloud & Technology",
    href: "/cloud-technology",
    description: "Enterprise infrastructure, data architectures, DevOps and software foundations.",
    featured: {
      title: "Technology Architecture",
      description: "Resilient cloud and data foundations engineered specifically to support AI transformation.",
      href: "/cloud-technology",
      ctaLabel: "Explore Overview",
    },
    items: [
      {
        title: "Cloud Consulting",
        href: "/cloud-consulting",
        description: "Assess environment, determine platform fit and design scalable cloud strategy.",
      },
      {
        title: "Cloud Migration & Modernization",
        href: "/cloud-migration-modernization",
        description: "Modernize legacy workloads with architectural continuity, security and cost discipline.",
      },
      {
        title: "Managed Services",
        href: "/cloud-managed-services",
        description: "Ongoing management focused on availability, security and operational performance.",
      },
      {
        title: "Security & Governance",
        href: "/cloud-security-governance",
        description: "Zero-trust architecture, policy enforcement, data privacy and cloud protection.",
      },
      {
        title: "Cloud Optimization",
        href: "/cloud-optimization",
        description: "Optimize cloud architecture, utilization, performance and FinOps efficiency.",
      },
      {
        title: "DevOps & Automation",
        href: "/devops-automation",
        description: "Automate development, testing, CI/CD pipelines and infrastructure as code.",
      },
      {
        title: "Data Engineering",
        href: "/data-engineering",
        description: "Reliable data pipelines, warehouses and lakes powering analytics and AI.",
      },
      {
        title: "Software Development",
        href: "/software-development",
        description: "Design and build scalable custom applications and distributed software platforms.",
      },
    ],
  },
  simpleLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  futureLinks: [
    {
      title: "Industries",
      href: "/industries",
      badge: "Phase 2",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
      badge: "Phase 2",
    },
    {
      title: "Insights",
      href: "/insights",
      badge: "Phase 2",
    },
  ],
  primaryCta: {
    label: "Book a Discovery Call",
    href: "/contact",
    context: "Global Header",
  },
};
