export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
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
  groups?: NavGroup[];
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
        description: "The flagship transformation offering",
      },
      {
        title: "AI Transformation Assessment",
        href: "/ai-transformation-assessment",
        description: "Identify and prioritize opportunities",
      },
      {
        title: "Our Framework",
        href: "/framework",
        description: "Explore our transformation approach",
      },
      {
        title: "AI Solutions / Use Cases",
        href: "/ai-solutions",
        description: "Discover practical AI applications",
      },
    ],
  },
  cloudTechnology: {
    title: "Cloud & Technology",
    href: "/cloud-technology",
    description: "Enterprise infrastructure, data architectures, DevOps and software foundations.",
    featured: {
      title: "Cloud & Technology Overview",
      description: "Explore our technology capabilities and approach.",
      href: "/cloud-technology",
      ctaLabel: "Overview",
    },
    groups: [
      {
        label: "CLOUD SERVICES",
        items: [
          {
            title: "Cloud Consulting / Advisory",
            href: "/cloud-consulting",
          },
          {
            title: "Cloud Migration & Modernization",
            href: "/cloud-migration-modernization",
          },
          {
            title: "Cloud Managed Services",
            href: "/cloud-managed-services",
          },
          {
            title: "Cloud Security & Governance",
            href: "/cloud-security-governance",
          },
          {
            title: "Cloud Optimization",
            href: "/cloud-optimization",
          },
        ],
      },
      {
        label: "ENGINEERING & DEVELOPMENT",
        items: [
          {
            title: "DevOps & Automation",
            href: "/devops-automation",
          },
          {
            title: "Data Engineering",
            href: "/data-engineering",
          },
          {
            title: "Software Development",
            href: "/software-development",
          },
        ],
      },
    ],
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
