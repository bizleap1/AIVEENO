export interface OpportunityDomain {
  id: string;
  name: string;
  executiveSummary: string;
  focusAreas: string[];
  workflowImpact: string[];
  technicalRequirements: string[];
}

export interface FrameworkStep {
  stageNumber: string;
  title: string;
  principle: string;
  whatHappens: string;
  whyItMatters: string;
  whatIsProduced: string;
  advancement: string;
}

export interface TransformationInclusion {
  title: string;
  category: string;
  description: string;
  typicalWorkloads: string[];
}

export interface CloudFoundationItem {
  id: string;
  title: string;
  roleInAI: string;
  capabilities: string[];
  link: string;
}

export const homepageData = {
  hero: {
    eyebrow: "Enterprise AI Transformation + Cloud & Technology",
    headline: "Transform how your business operates with AI.",
    supportingText:
      "Move beyond isolated AI experimentation toward a structured transformation program grounded in business value, operational workflows, and resilient cloud architecture.",
    primaryCta: {
      label: "Book a Discovery Call",
      context: "Homepage Hero Primary",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore AI Transformation",
      href: "/ai-business-transformation",
    },
    systemFlow: [
      { id: "business", label: "Business", detail: "Strategy & Operating Reality" },
      { id: "workflows", label: "Workflows", detail: "Process & Bottleneck Mapping" },
      { id: "data", label: "Data", detail: "Governed Semantic Architecture" },
      { id: "ai-systems", label: "AI Systems", detail: "Agents, Models & Decision Engines" },
      { id: "technology", label: "Technology", detail: "Cloud, DevOps & Integrations" },
      { id: "outcomes", label: "Outcomes", detail: "Efficiency, Scalability & Value" },
    ],
  },

  theShift: {
    eyebrow: "Strategic Distinction",
    title: "AI adoption is not AI transformation.",
    narrative:
      "Organizations frequently experiment with disconnected tools. Meaningful transformation requires redesigning workflows, systems, data, and decision-making around real business opportunities.",
    comparison: {
      isolated: {
        title: "Adopting Isolated AI Tools",
        description:
          "Tactical adoption of disjointed chatbots, point tools, and experimental copilots across disconnected departments.",
        characteristics: [
          "Siloed tools deployed without workflow redesign",
          "Lack of integration with enterprise data and ERP/CRM systems",
          "Unmanaged compliance, privacy, and shadow AI vulnerabilities",
          "Experimentation spend without measurable operational return",
          "Fails to scale when edge cases and legacy dependencies emerge",
        ],
        consequence: "Uncertain ROI, fragmented technology landscape, and stalled pilots.",
      },
      transformed: {
        title: "Transforming Business Operations with AI",
        description:
          "Systemic redesign of core business processes, decision flows, and data architecture to create compounding operational leverage.",
        characteristics: [
          "Begins with business strategy and workflow economics, not a tool",
          "Governed data fabric and secure integration into core record systems",
          "Production-grade agents and models embedded directly in user workflows",
          "Resilient cloud, security, and continuous evaluation foundation",
          "Iterative delivery with clear executive milestones and accountability",
        ],
        consequence: "Measurable efficiency, scalable throughput, and enduring operational advantage.",
      },
    },
  },

  businessFirst: {
    eyebrow: "Consulting Philosophy",
    title: "AI transformation starts with the business.",
    subtitle:
      "Technology succeeds only when it is designed around operational reality. We bridge executive strategy with deep systems engineering.",
    steps: [
      {
        step: "01",
        name: "Business Strategy",
        description: "Align transformation with strategic priorities, growth targets, and capital constraints.",
      },
      {
        step: "02",
        name: "Operational Reality",
        description: "Audit actual everyday workflows, regulatory boundaries, and human decision points.",
      },
      {
        step: "03",
        name: "Workflow Opportunities",
        description: "Identify high-friction, high-volume processes where automation produces structural gain.",
      },
      {
        step: "04",
        name: "Technology Architecture",
        description: "Design the required AI models, data pipelines, integrations, and cloud infrastructure.",
      },
      {
        step: "05",
        name: "Implementation",
        description: "Engineer production-ready systems with robust security, observability, and failover.",
      },
      {
        step: "06",
        name: "Adoption & Change",
        description: "Embed tools into employee workflows with proper training, change management, and governance.",
      },
      {
        step: "07",
        name: "Continuous Optimization",
        description: "Monitor model drift, cost per transaction, and operational throughput over time.",
      },
    ],
  },

  opportunityMap: {
    eyebrow: "Enterprise Opportunity Map",
    title: "Where AI creates meaningful business value.",
    subtitle:
      "Explore functional business areas to examine how workflows, data foundations, and intelligent systems come together to transform enterprise operations.",
    domains: [
      {
        id: "operations",
        name: "Operations",
        executiveSummary:
          "Transform core operating workflows, resource allocation, and logistics through intelligent orchestration and automated exception handling.",
        focusAreas: [
          "Cross-system workflow coordination across ERP, WMS, and legacy systems",
          "Predictive demand forecasting and automated inventory rebalancing",
          "Operational exception routing and intelligent triage protocols",
        ],
        workflowImpact: [
          "Reduces manual data entry and multi-system reconciliation cycles",
          "Minimizes downtime through early anomaly identification",
          "Enables 24/7 continuous process execution with human oversight",
        ],
        technicalRequirements: [
          "Real-time event streaming and ERP integration connectors",
          "Stateful workflow orchestrators and policy enforcement engines",
          "Deterministic audit logging for all automated actions",
        ],
      },
      {
        id: "sales",
        name: "Sales",
        executiveSummary:
          "Empower commercial teams with real-time account intelligence, automated technical proposal assembly, and dynamic pipeline analytics.",
        focusAreas: [
          "Multi-signal account intent synthesis and buying committee mapping",
          "Automated RFP, security questionnaire, and proposal generation",
          "Contract intelligence and pricing recommendation engines",
        ],
        workflowImpact: [
          "Compresses proposal response timelines from days to hours",
          "Improves pipeline visibility through objective interaction analysis",
          "Frees senior account executives from repetitive administrative tasks",
        ],
        technicalRequirements: [
          "CRM and communication data pipeline synchronization",
          "Private retrieval-augmented generation (RAG) over past winning bids",
          "Strict multi-tenant security and commercial data isolation",
        ],
      },
      {
        id: "cx",
        name: "Customer Experience",
        executiveSummary:
          "Deliver context-aware, multimodal resolution systems that resolve complex customer requests directly inside backend systems.",
        focusAreas: [
          "Tier-1 and Tier-2 autonomous case resolution with verified data access",
          "Real-time customer journey sentiment analysis and proactive escalation",
          "Automated inquiry summarization and CRM record synchronization",
        ],
        workflowImpact: [
          "Accelerates first-contact resolution while preserving empathy",
          "Reduces support backlog during seasonal volume surges",
          "Gives support agents immediate context and suggested resolution paths",
        ],
        technicalRequirements: [
          "Low-latency model inference pipelines with guardrails",
          "Bi-directional API integrations into ticketing and billing systems",
          "Role-based access control protecting customer PII",
        ],
      },
      {
        id: "finance",
        name: "Finance",
        executiveSummary:
          "Modernize financial workflows with continuous reconciliation, automated audit preparation, and scenario-based forecasting models.",
        focusAreas: [
          "Multi-entity ledger, invoice, and payment matching automation",
          "Automated financial document extraction and structured validation",
          "Continuous compliance screening and transaction anomaly detection",
        ],
        workflowImpact: [
          "Compresses monthly and quarterly financial close cycles",
          "Eliminates manual spreadsheet data copying and human error",
          "Provides continuous, audit-ready financial transaction lineage",
        ],
        technicalRequirements: [
          "High-accuracy document processing and schema validation pipelines",
          "Immutable audit trails compliant with financial reporting standards",
          "Secure enclave processing for sensitive payroll and ledger data",
        ],
      },
      {
        id: "hr",
        name: "HR",
        executiveSummary:
          "Streamline employee onboarding, internal policy navigation, and skills inventory management with intelligent knowledge systems.",
        focusAreas: [
          "Contextual employee query resolution over complex policy manuals",
          "Automated candidate profile parsing and structured skills mapping",
          "Personalized onboarding workflows tailored to department and role",
        ],
        workflowImpact: [
          "Reduces routine internal ticket load on people operations teams",
          "Shortens time-to-competency for newly hired enterprise staff",
          "Ensures consistent policy interpretation across regional offices",
        ],
        technicalRequirements: [
          "Semantic search over enterprise handbooks and benefits portals",
          "Fine-grained access control reflecting employee clearance levels",
          "Privacy-preserving analytics preventing individual surveillance",
        ],
      },
      {
        id: "marketing",
        name: "Marketing",
        executiveSummary:
          "Scale market intelligence, content localization, and customer segmentation within strictly governed brand and compliance boundaries.",
        focusAreas: [
          "Automated brand-compliant asset variation and multi-channel localization",
          "Predictive customer lifetime value and churn risk modeling",
          "Competitive intelligence gathering and market synthesis",
        ],
        workflowImpact: [
          "Accelerates campaign iteration cycles across global territories",
          "Ensures regulatory and legal compliance review before publication",
          "Aligns campaign messaging directly with product telemetry",
        ],
        technicalRequirements: [
          "Brand-specific style and compliance guardrail evaluators",
          "Unified customer data platform (CDP) ingestion pipelines",
          "Vector-indexed digital asset management (DAM) connectors",
        ],
      },
      {
        id: "it",
        name: "IT",
        executiveSummary:
          "Accelerate internal support, legacy code documentation, and automated incident triage to boost technology engineering velocity.",
        focusAreas: [
          "Automated IT service desk ticket classification and resolution",
          "Legacy code repository analysis, documentation, and migration support",
          "Automated observability alert correlation and incident runbook triggering",
        ],
        workflowImpact: [
          "Decreases mean time to resolution (MTTR) on critical production incidents",
          "Reduces onboarding friction for engineers working with legacy systems",
          "Automates routine credential provisioning and access workflows",
        ],
        technicalRequirements: [
          "ITSM platform integration (ServiceNow, Jira Service Management)",
          "Codebase parsing, AST analysis, and semantic code search",
          "Secure API webhook orchestration with rollback capabilities",
        ],
      },
      {
        id: "knowledge",
        name: "Knowledge",
        executiveSummary:
          "Transform scattered institutional documentation into a governed, queryable enterprise knowledge base with source verification.",
        focusAreas: [
          "Enterprise search across unstructured wikis, PDFs, drives, and emails",
          "Source-cited question answering with cryptographic document lineage",
          "Automated documentation generation and cross-reference validation",
        ],
        workflowImpact: [
          "Eliminates hours wasted by professionals hunting for prior art",
          "Prevents knowledge loss during key personnel transitions",
          "Ensures teams make decisions backed by current corporate standards",
        ],
        technicalRequirements: [
          "Hybrid lexical and semantic vector search infrastructure",
          "Automated document re-indexing on source update events",
          "Confidence scoring and hallucination suppression guardrails",
        ],
      },
      {
        id: "data",
        name: "Data",
        executiveSummary:
          "Construct the unified data foundation, semantic layers, and automated governance needed to sustain reliable enterprise AI systems.",
        focusAreas: [
          "Automated data quality monitoring and schema drift alerting",
          "Semantic layer definition for natural language analytics",
          "Metadata cataloging, lineage tracking, and regulatory governance",
        ],
        workflowImpact: [
          "Restores trust in enterprise data assets across leadership teams",
          "Shortens pipeline development cycles for new analytics initiatives",
          "Ensures AI systems consume verified, clean, and authorized data",
        ],
        technicalRequirements: [
          "Modern lakehouse architectures (Snowflake, Databricks, BigQuery)",
          "Automated data contracts and transformation orchestration",
          "Zero-trust data masking and policy-based access enforcement",
        ],
      },
    ],
  },

  frameworkPreview: {
    eyebrow: "Consulting Methodology",
    title: "A disciplined, iterative transformation lifecycle.",
    subtitle:
      "We apply a structured consulting methodology to de-risk investment, align stakeholders, and ensure systems deliver measurable operational returns.",
    note: "Official framework terminology and stage definitions are configured to align with specific client governance requirements.",
    stages: [
      {
        stageNumber: "01",
        title: "Business Understanding",
        principle: "Ground every initiative in business strategy and operational constraints.",
        whatHappens:
          "We engage executive stakeholders, analyze operational bottlenecks, examine cost structures, and map regulatory requirements.",
        whyItMatters:
          "Prevents building impressive technical prototypes that fail to solve high-priority commercial challenges.",
        whatIsProduced: "Operational bottleneck map and prioritized business value thesis.",
        advancement: "Establishes verified alignment on problems worth solving.",
      },
      {
        stageNumber: "02",
        title: "Opportunity Identification",
        principle: "Screen potential initiatives by operational feasibility and commercial impact.",
        whatHappens:
          "We evaluate specific workflows, system interdependencies, data availability, and integration complexity across departments.",
        whyItMatters:
          "Separates low-leverage hype from practical initiatives capable of sustained enterprise delivery.",
        whatIsProduced: "Feasibility matrix and prioritized transformation opportunity backlog.",
        advancement: "Defines the exact high-value targets for solution design.",
      },
      {
        stageNumber: "03",
        title: "Solution Design",
        principle: "Architect systems, data flows, and security before writing code.",
        whatHappens:
          "We design system architecture, select appropriate model strategies, specify cloud infrastructure, and outline integration contracts.",
        whyItMatters:
          "Ensures enterprise compliance, cost predictability, and seamless interoperability with legacy systems.",
        whatIsProduced: "Architecture blueprint, security specification, and technical execution roadmap.",
        advancement: "Provides engineering teams with unambiguous implementation specs.",
      },
      {
        stageNumber: "04",
        title: "Engineering & Integration",
        principle: "Build production-grade systems directly inside your technology environment.",
        whatHappens:
          "Our engineering teams build data pipelines, configure model agents, integrate enterprise APIs, and harden cloud infrastructure.",
        whyItMatters:
          "Transforms theoretical designs into reliable, scalable software integrated into everyday business operations.",
        whatIsProduced: "Production-ready software, automated CI/CD pipelines, and integration harnesses.",
        advancement: "Deploys tested capabilities into operational pilot environments.",
      },
      {
        stageNumber: "05",
        title: "Adoption & Operationalization",
        principle: "Ensure workflows, teams, and operating rhythms successfully absorb new capabilities.",
        whatHappens:
          "We conduct structured enablement, integrate feedback loops, establish operating procedures, and assist operational teams.",
        whyItMatters:
          "Guarantees that technology investments translate into actual workflow change and human productivity.",
        whatIsProduced: "Standard operating procedures, governance playbooks, and adoption telemetry.",
        advancement: "Transitions systems from pilot validation into primary operational usage.",
      },
      {
        stageNumber: "06",
        title: "Continuous Refinement",
        principle: "Treat transformation as an ongoing operational capability, not a one-time project.",
        whatHappens:
          "We monitor system accuracy, evaluate model drift, optimize inference costs, and expand capabilities based on empirical telemetry.",
        whyItMatters:
          "Ensures performance improves over time while maintaining strict cost control and governance standards.",
        whatIsProduced: "Performance telemetry dashboards, FinOps audit reports, and capability roadmap updates.",
        advancement: "Creates compounding operational leverage and long-term organizational capability.",
      },
    ],
    cta: {
      label: "Explore Our Full Framework",
      href: "/framework",
    },
  },

  assessment: {
    eyebrow: "Structured Strategic Entry",
    title: "Find where AI can create meaningful value before deciding what to build.",
    subtitle:
      "A structured, paid consulting engagement designed to identify high-impact transformation opportunities, assess technical feasibility, and produce an executive-ready roadmap.",
    positioningNote: "Paid Engagement • Partner-Led • Strategic Entry Point",
    timing: "Approximately one week, subject to stakeholder access and information availability.",
    deliverable:
      "An executive-ready Transformation Opportunity Report and Roadmap, detailing evaluated workflows, recommended solutions, feasibility considerations, impact analysis, and practical next steps.",
    whatWeExamine: [
      {
        title: "Core Workflows & Processes",
        description: "Mapping end-to-end departmental procedures to uncover manual bottlenecks and delays.",
      },
      {
        title: "Repetitive & Manual Work",
        description: "Quantifying hours lost to routine data entry, reconciliation, and cross-system copying.",
      },
      {
        title: "Systems & Architecture",
        description: "Evaluating ERP, CRM, custom databases, and legacy infrastructure constraints.",
      },
      {
        title: "Data Flows & Availability",
        description: "Assessing data quality, accessibility, governance standards, and pipeline readiness.",
      },
      {
        title: "Technology Landscape",
        description: "Reviewing existing cloud setups, software licenses, security requirements, and technical debt.",
      },
      {
        title: "AI & Automation Opportunities",
        description: "Identifying where intelligence and workflow orchestration yield defensible operational gains.",
      },
      {
        title: "Integration Requirements",
        description: "Specifying API endpoints, webhook requirements, and security boundaries needed for execution.",
      },
      {
        title: "Potential Business Impact",
        description: "Evaluating feasibility, cost-benefit trade-offs, and risk profiles across prioritized initiatives.",
      },
    ],
    cta: {
      label: "Discuss the AI Transformation Assessment",
      context: "Homepage Assessment Section",
      href: "/ai-transformation-assessment",
    },
  },

  whatTransformationIncludes: {
    eyebrow: "Enterprise Capabilities",
    title: "What enterprise AI transformation can include.",
    subtitle:
      "We design and build complete systems tailored to your operating environment, avoiding generic consumer tool wrappers in favor of resilient enterprise software.",
    capabilities: [
      {
        category: "Workflow Automation",
        title: "End-to-End Workflow Automation",
        description:
          "Orchestrating complex multi-step processes across legacy systems, databases, and third-party software without requiring manual intervention.",
        typicalWorkloads: [
          "Cross-system data synchronization",
          "Automated exception triage & routing",
          "Document verification workflows",
        ],
      },
      {
        category: "AI Systems / Agents",
        title: "Autonomous AI Systems & Agents",
        description:
          "Specialized agentic architectures capable of reasoning through complex tasks, utilizing enterprise tools, and operating within strict business guardrails.",
        typicalWorkloads: [
          "Multi-agent collaborative problem solving",
          "Deterministic policy-bounded action engines",
          "Role-specific digital analysts",
        ],
      },
      {
        category: "Intelligent Knowledge",
        title: "Intelligent Knowledge Systems",
        description:
          "Secure, private enterprise retrieval systems that connect unstructured corporate knowledge to natural language interfaces with source attribution.",
        typicalWorkloads: [
          "Regulatory & policy intelligence engines",
          "Institutional memory discovery",
          "Audit-ready citation retrieval",
        ],
      },
      {
        category: "Integrations",
        title: "Enterprise System Integrations",
        description:
          "Secure API gateways, webhook listeners, and event buses connecting modern AI workloads directly into SAP, Salesforce, Oracle, and proprietary software.",
        typicalWorkloads: [
          "ERP & CRM bi-directional synchronization",
          "Event-driven messaging fabrics",
          "Legacy system wrapper APIs",
        ],
      },
      {
        category: "Data Pipelines",
        title: "Modern Data Pipelines",
        description:
          "Governed data ingestion, transformation, and semantic vector indexing that ensures AI systems operate on clean, timely, and authorized data.",
        typicalWorkloads: [
          "Real-time event streaming architectures",
          "Automated data quality enforcement",
          "Vector & semantic index maintenance",
        ],
      },
      {
        category: "Decision Support",
        title: "Intelligent Decision Support",
        description:
          "Predictive models and analytical engines that synthesize complex multi-variable scenarios to assist executive and operational decision-makers.",
        typicalWorkloads: [
          "Dynamic pricing & risk modeling",
          "Supply chain bottleneck forecasting",
          "Resource allocation optimization",
        ],
      },
      {
        category: "Custom Software",
        title: "Custom Enterprise Software",
        description:
          "Bespoke internal platforms, executive dashboards, and specialized applications engineered specifically to execute proprietary business logic.",
        typicalWorkloads: [
          "Role-tailored operational workspaces",
          "Secure customer and vendor portals",
          "Real-time operational command centers",
        ],
      },
    ],
  },

  cloudFoundation: {
    eyebrow: "Technology Foundation",
    title: "Transformation requires the right technology foundation.",
    subtitle:
      "Enterprise AI cannot function in isolation. Modern cloud architecture, reliable data pipelines, automated DevOps, and rigorous security provide the essential backbone for transformation at scale.",
    pillars: [
      {
        id: "cloud",
        title: "Cloud Infrastructure",
        roleInAI: "Scalable, resilient computing environments that provide the elastic capacity required for modern AI workloads.",
        capabilities: ["Multi-cloud architecture (AWS, Azure, GCP)", "High-availability compute clusters", "FinOps and resource cost governance"],
        link: "/cloud-consulting",
      },
      {
        id: "data",
        title: "Data Architecture",
        roleInAI: "The source of truth that feeds AI models, ensuring high quality, low latency, and strict governance across pipelines.",
        capabilities: ["Lakehouse and warehouse architectures", "Automated ETL/ELT pipelines", "Semantic models and vector repositories"],
        link: "/data-engineering",
      },
      {
        id: "devops",
        title: "DevOps & Automation",
        roleInAI: "Continuous deployment pipelines and automated infrastructure ensuring rapid, reliable delivery of software updates.",
        capabilities: ["Automated CI/CD for models & code", "Infrastructure as Code (Terraform)", "Kubernetes container orchestration"],
        link: "/devops-automation",
      },
      {
        id: "security",
        title: "Security & Governance",
        roleInAI: "Zero-trust architectures, data isolation, and policy enforcement that keep enterprise data private and compliant.",
        capabilities: ["Zero-trust network access control", "Confidential compute enclaves", "Model safety & prompt guardrails"],
        link: "/cloud-security-governance",
      },
      {
        id: "software",
        title: "Software Engineering",
        roleInAI: "Robust applications, scalable APIs, and intuitive user interfaces that bring AI intelligence into daily employee workflows.",
        capabilities: ["Modern web applications & portals", "Distributed microservices", "Enterprise API integration layers"],
        link: "/software-development",
      },
    ],
    cta: {
      label: "Explore Cloud & Technology",
      href: "/cloud-technology",
    },
  },

  methodologyCredibility: {
    eyebrow: "Operational Principles",
    title: "Architectural integrity & enterprise commitments.",
    subtitle:
      "We build systems engineered for mission-critical enterprise environments, adhering strictly to verifiable engineering standards, IP ownership, and data privacy.",
    commitments: [
      {
        title: "Complete Client IP Ownership",
        description:
          "All custom software, pipeline code, model configurations, and documentation created during our engagement remain the exclusive intellectual property of your organization.",
      },
      {
        title: "Zero Data Leakage Architecture",
        description:
          "Client data is never used to train public foundational models. All AI deployments operate within private tenancies, dedicated VPCs, or on-premises enclaves.",
      },
      {
        title: "Platform & Cloud Neutrality",
        description:
          "We provide objective advisory across AWS, Microsoft Azure, Google Cloud, and specialized providers, selecting technologies strictly based on technical merit and cost efficiency.",
      },
      {
        title: "Production-Grade Engineering Standards",
        description:
          "Every system is delivered with declarative Infrastructure as Code, automated integration tests, deterministic error handling, and comprehensive documentation.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Next Step",
    headline: "Start with the business challenge.",
    supportingText:
      "Begin with a focused conversation about your workflows, systems, and where transformation may create meaningful business value.",
    primaryCta: {
      label: "Book a Discovery Call",
      context: "Homepage Final CTA",
      href: "/contact",
    },
    secondaryCta: {
      label: "Discuss Assessment",
      href: "/ai-transformation-assessment",
    },
  },
};
