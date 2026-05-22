type DetailSubsection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type DetailSection = {
  index: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: DetailSubsection[];
};

type PageBlock = {
  title: string;
  text?: string;
  items?: string[];
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageFile: string;
  externalUrl: string;
  referenceLabel: string;
  heroParagraphs?: string[];
  detailSections?: DetailSection[];
  skills?: string[];
  pageBlocks?: PageBlock[];
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "twilio-studio",
    title: "Twilio Studio",
    subtitle:
      "Visual workflow builder for communication automation powered by Twilio APIs.",
    description:
      "Twilio Studio is a visual platform for building communication workflows across messaging, voice, and customer interaction channels using Twilio's infrastructure.",
    imageFile: "twilio_studio.jpg",
    externalUrl: "https://www.twilio.com/docs/studio",
    referenceLabel: "Twilio Studio docs",
    heroParagraphs: [
      "Twilio Studio is a visual platform for building communication workflows across messaging, voice, and customer interaction channels using Twilio's infrastructure. The product enables teams to design, configure, validate, and deploy communication flows through a graphical interface instead of writing orchestration logic manually.",
      "I contributed as a Team Lead focused on frontend architecture, workflow editor capabilities, product implementation, and cross-functional delivery for a complex customer-facing platform.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "Twilio Studio is a visual workflow builder that allows teams to create communication and automation flows using Twilio services such as SMS, voice, chat, and integrations with external systems.",
          "The platform supports a wide range of users, including developers, product teams, operations teams, and customer support organizations. Some users interact with Studio as technical builders, while others rely on the visual interface to configure workflows without deep engineering involvement.",
          "The product solves a common problem in communication systems: orchestrating complex multi-step interactions across channels while maintaining reliability, flexibility, and operational visibility. Instead of building communication logic entirely in code, teams can design workflows visually, configure transitions and integrations, and iterate more quickly.",
          "Visual workflow building is especially important for communication automation because these systems often evolve rapidly and involve multiple stakeholders. A graphical editor reduces implementation friction, improves collaboration between technical and non-technical teams, and makes complex communication flows easier to understand, debug, and maintain.",
        ],
      },
      {
        index: "02",
        title: "Role and Responsibilities",
        paragraphs: [
          "I worked as a Team Lead focused on frontend architecture, workflow editor capabilities, product implementation, and cross-functional delivery for a complex customer-facing platform. My responsibilities included both hands-on development and broader engineering collaboration across multiple parts of the product lifecycle.",
        ],
        items: [
          "Building and improving frontend architecture and workflow editor functionality",
          "Implementing complex UI interactions and configuration experiences",
          "Integrating frontend workflows with backend APIs and Twilio services",
          "Supporting workflow validation, publishing, and runtime-related functionality",
          "Contributing to maintainability and long-term scalability of the codebase",
          "Participating in technical discussions, implementation planning, and delivery coordination",
          "Collaborating closely with product managers, designers, QA engineers, and backend/frontend teams",
          "Performing code reviews and helping maintain engineering quality standards",
          "Supporting architectural decisions and implementation patterns across features",
        ],
        subsections: [
          {
            title: "Delivery Model",
            paragraphs: [
              "The role involved both hands-on implementation and broader engineering collaboration across multiple parts of the product lifecycle.",
            ],
          },
        ],
      },
      {
        index: "03",
        title: "Technical Scope",
        paragraphs: [
          "The work involved building and maintaining complex frontend systems for a visual workflow editor with highly interactive UI behavior.",
        ],
        items: [
          "Frontend architecture for large-scale React/JavaScript or TypeScript applications",
          "Visual node-based workflow editing interfaces",
          "Dynamic configuration panels and workflow state management",
          "Real-time UI updates and interaction handling",
          "Validation systems for workflow correctness and publish readiness",
          "API integration with Twilio communication services and backend workflow systems",
          "Workflow persistence, publishing flows, and runtime configuration concerns",
          "Error handling and edge-case management across complex workflow states",
          "Reusable UI abstractions and shared engineering patterns",
          "Performance optimization for large or deeply nested workflows",
          "Maintainability improvements for long-lived product areas",
        ],
        subsections: [
          {
            title: "State and Synchronization",
            paragraphs: [
              "The project required careful handling of application state, user interaction flows, and synchronization between frontend representations and backend workflow definitions.",
            ],
          },
          {
            title: "Testing Responsibilities",
            items: [
              "Unit testing for UI and business logic",
              "Integration testing for workflow interactions",
              "Validation and edge-case testing",
              "Collaboration with QA on release confidence and regression coverage",
            ],
          },
        ],
      },
      {
        index: "04",
        title: "Key Challenges",
        subsections: [
          {
            title: "Complex Visual Editor Interactions",
            paragraphs: [
              "Visual workflow builders introduce significantly more complexity than traditional forms or dashboards. Features such as drag-and-drop interactions, node connections, inline editing, conditional paths, and dynamic configuration required careful coordination between UI rendering, state management, and validation systems.",
            ],
          },
          {
            title: "Workflow State and Validation",
            paragraphs: [
              "Workflow definitions could become deeply nested and highly configurable. Managing state consistency while providing immediate feedback to users required balancing flexibility with strong validation and predictable behavior.",
            ],
          },
          {
            title: "Supporting Both Technical and Non-Technical Users",
            paragraphs: [
              "The interface needed to remain approachable for less technical users while still supporting advanced communication logic and configuration depth. This required thoughtful UX implementation and clear interaction patterns.",
            ],
          },
          {
            title: "Edge Cases in Flow Configuration",
            paragraphs: [
              "Communication workflows naturally contain many edge cases: incomplete configurations, invalid transitions, unsupported states, publishing conflicts, and runtime-related concerns. The system needed to guide users toward valid configurations without becoming restrictive.",
            ],
          },
          {
            title: "Long-Term Maintainability",
            paragraphs: [
              "As workflow capabilities expanded, maintaining consistency across the editor became increasingly important. Reducing duplication, improving abstractions, and organizing shared logic helped keep the platform maintainable as complexity grew.",
            ],
          },
        ],
      },
      {
        index: "05",
        title: "Engineering Decisions",
        paragraphs: [
          "Several engineering decisions focused on balancing maintainability, usability, and correctness in a highly interactive product environment.",
        ],
        items: [
          "Structuring workflow state in a way that supported complex editing operations while remaining predictable and debuggable",
          "Building reusable abstractions for editor components and configuration systems",
          "Separating rendering concerns from workflow business logic where possible",
          "Designing validation layers that could provide immediate user feedback without tightly coupling validation to UI components",
          "Improving consistency across workflow configuration experiences to reduce implementation overhead for future features",
          "Prioritizing maintainable patterns over short-term feature-specific solutions when complexity justified the investment",
        ],
        subsections: [
          {
            title: "Tradeoffs",
            items: [
              "Flexibility versus simplicity in workflow configuration",
              "Immediate responsiveness versus validation correctness",
              "Product iteration speed versus long-term architecture quality",
              "Rich editor functionality versus frontend performance and complexity",
            ],
          },
          {
            title: "Reusable Patterns",
            paragraphs: [
              "Shared abstractions and reusable patterns helped reduce duplication and improve delivery consistency across the platform.",
            ],
          },
        ],
      },
      {
        index: "06",
        title: "Outcome and Impact",
        paragraphs: [
          "The work contributed to a business-critical platform used for designing and operating communication workflows across Twilio services.",
        ],
        items: [
          "Improved workflow creation and editing experiences",
          "More reliable workflow configuration and validation",
          "Better maintainability and extensibility within the product",
          "Faster implementation of workflow-related product capabilities",
          "Improved developer and customer-facing tooling experiences",
        ],
        subsections: [
          {
            title: "Product Goals Supported",
            paragraphs: [
              "The project supported broader product goals around communication automation, operational flexibility, and scalable workflow management.",
            ],
          },
          {
            title: "Potential Measurable Outcomes",
            items: [
              "[add adoption metric]",
              "[add workflow creation improvement]",
              "[add performance improvement]",
              "[add editor usability result]",
              "[add launch or delivery result]",
            ],
          },
        ],
      },
    ],
    skills: [
      "Team leadership",
      "Cross-functional collaboration",
      "Frontend architecture",
      "React and TypeScript/JavaScript development",
      "Complex UI systems",
      "Visual workflow/editor implementation",
      "API-driven product development",
      "State management for interactive applications",
      "Product engineering collaboration",
      "Technical leadership and code review",
      "Cross-functional delivery",
      "Maintainability and scalability planning",
      "Testing and quality engineering",
    ],
    pageBlocks: [
      {
        title: "Project Summary Card",
        text: "Visual workflow platform for building communication automation flows across messaging and voice channels using Twilio APIs. Contributed to frontend architecture, workflow editor functionality, API integrations, validation systems, and product delivery.",
      },
      {
        title: "What I Worked On",
        items: [
          "Workflow editor UI and interaction systems",
          "Frontend architecture and reusable abstractions",
          "Workflow validation and publishing flows",
          "API integration with communication services",
          "State management for complex editor interactions",
          "Cross-functional product delivery",
        ],
      },
      {
        title: "Technical Highlights",
        items: [
          "Complex visual workflow editing",
          "Interactive state-heavy frontend systems",
          "Scalable UI architecture",
          "Validation and configuration systems",
          "Performance and maintainability improvements",
          "Product-focused engineering collaboration",
        ],
      },
      {
        title: "Lessons Learned",
        text: "Building visual workflow systems reinforced the importance of predictable state management, strong UI abstractions, and balancing flexibility with usability. It also highlighted how product engineering decisions directly impact both developer velocity and customer experience.",
      },
      {
        title: "Next Project Transition",
        text: "Explore another project focused on large-scale frontend architecture, developer tooling, or workflow-driven product engineering.",
      },
    ],
  },
  {
    index: "02",
    slug: "hero-transformation",
    title: "HERO Transformation",
    subtitle: "Enterprise transformation framework and playbook",
    description:
      "Worked on a practical enterprise transformation framework, playbook, and resource set focused on value-driven large-scale change.",
    imageFile: "hero_transformation.svg",
    externalUrl: "https://www.linkedin.com/company/herotransformation/",
    referenceLabel: "HERO Transformation LinkedIn",
    heroParagraphs: [
      "HERO Transformation is a practical framework and playbook for delivering large-scale enterprise change with measurable value at the center. The public materials position it as a step-by-step approach for leaders and teams planning, governing, and delivering complex transformation programs.",
      "The project brings together transformation methodology, governance patterns, reusable templates, and executive-facing guidance for organizations that need to move beyond activity tracking and manage change around outcomes, value, and disciplined delivery.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "Enterprise transformation programs often struggle when the work is organized around visible activity rather than measurable business value. HERO Transformation addresses that problem by framing change around outcomes, value creation, clear governance, and practical delivery discipline.",
          "The public HERO materials describe the framework as a playbook for effective enterprise value creation through change. The site presents the work from authors Arif Harbott and Cuan Mulligan, who position it as a practitioner-built guide for organizations running high-stakes transformation efforts.",
          "Background material on the framework describes it as codified experience from years of large transformation delivery, including work across more than $1bn of transformations. That framing makes the product more practical than conceptual: it is designed to help teams run transformation work with clearer roles, processes, meetings, governance, and templates.",
          "The framework emphasizes that value must stay central at every step. Instead of treating transformation as a high-level change narrative, it focuses on the operational mechanics needed to define outcomes, design the work, manage initiatives, remove blockers, and sustain accountability.",
        ],
      },
      {
        index: "02",
        title: "Product and Framework Scope",
        paragraphs: [
          "The HERO Transformation project combines a book, public web presence, reusable transformation templates, and a structured methodology for planning and delivering change programs.",
          "The framework is organized around core transformation concepts including the transformation outcome, transformation design, and transformation delivery. These areas help teams connect the target business result to the plan, governance model, resources, risks, and delivery cadence required to achieve it.",
        ],
        items: [
          "Transformation outcome definition and current-state context",
          "Business case, budget, investment ratio, and value framing",
          "Transformation design across workstreams, initiatives, resources, teams, and capability",
          "Delivery governance, accountability, blockers, risks, and stakeholder management",
          "Reusable templates for statements, plans, initiatives, and blocker tracking",
          "Guidance for executive sponsors, transformation leaders, delivery teams, and advisors",
        ],
      },
      {
        index: "03",
        title: "Audience and Use Cases",
        paragraphs: [
          "The materials are designed for leaders and practitioners responsible for enterprise-scale change. The audience includes executives commissioning transformations, transformation leaders accountable for outcomes, and consultants or team leaders supporting delivery.",
          "HERO is especially relevant for organizations that need to make difficult, value-focused changes rather than only the changes that are easiest to implement. The framework is also positioned as useful when an existing change effort is failing and needs clearer measurement, prioritization, and delivery control.",
        ],
        items: [
          "C-suite executives sponsoring or funding transformation initiatives",
          "CIOs and transformation leaders responsible for operating-model or technology change",
          "Delivery leads coordinating workstreams, initiatives, teams, risks, and blockers",
          "Consultants and advisors facilitating complex change programs",
          "Organizations that need a practical mechanism to measure, direct, and track value",
        ],
      },
      {
        index: "04",
        title: "Key Challenges",
        subsections: [
          {
            title: "Turning Methodology Into Practical Tools",
            paragraphs: [
              "A transformation framework only works if teams can apply it in real operating conditions. HERO needed to connect executive-level concepts such as enterprise value, outcomes, and business cases to concrete templates and repeatable delivery practices.",
            ],
          },
          {
            title: "Balancing Strategy and Delivery",
            paragraphs: [
              "The project had to bridge strategic transformation design with the daily delivery mechanics of initiatives, workstreams, risks, resources, governance, and blockers. That balance is important because large transformation programs fail when planning and execution drift apart.",
            ],
          },
          {
            title: "Keeping Value Visible",
            paragraphs: [
              "A central challenge in enterprise change is keeping teams focused on value instead of activity. HERO addresses this by repeatedly tying work back to measurable outcomes, business cases, ROI, and the transformation bridge from current performance to target performance.",
            ],
          },
        ],
      },
      {
        index: "05",
        title: "Engineering and Content Decisions",
        paragraphs: [
          "The project required a clear information architecture for a methodology-heavy product: explain the value proposition quickly, make the framework approachable, and give practitioners enough structure to act on it.",
        ],
        items: [
          "Positioning the product around measurable enterprise value rather than generic change management",
          "Separating the framework into outcome, design, and delivery concepts",
          "Creating reusable assets that turn abstract transformation language into applied working documents",
          "Making the content usable for both executive sponsors and delivery practitioners",
          "Supporting a resource model that can extend from the public site into books, templates, and advisory materials",
        ],
        subsections: [
          {
            title: "Reusable Resource Model",
            paragraphs: [
              "The publicly available templates show how the framework becomes operational: teams can document a transformation statement, plan the transformation, define initiatives, and track blockers using a consistent structure.",
            ],
          },
        ],
      },
      {
        index: "06",
        title: "Outcome and Impact",
        paragraphs: [
          "HERO Transformation presents a practical, value-focused operating model for enterprise change. It gives transformation leaders a structured way to define outcomes, plan the work, manage governance, and keep delivery tied to measurable business value.",
          "The project turns practitioner experience into a reusable framework and resource set that can support executive alignment, team coordination, transformation planning, and disciplined delivery across complex programs.",
        ],
        items: [
          "Clearer transformation narrative for leaders and teams",
          "Reusable templates for planning, initiative definition, and blocker management",
          "A framework for connecting current context, target performance, and enterprise value increase",
          "Better alignment between strategic transformation goals and delivery execution",
          "A public knowledge product supporting books, resources, and transformation advisory work",
        ],
      },
    ],
    skills: [
      "Enterprise transformation",
      "Product positioning",
      "Content architecture",
      "Framework design",
      "Business value mapping",
      "Governance modeling",
      "Stakeholder alignment",
      "Transformation planning",
      "Reusable template systems",
      "Executive communication",
      "Delivery operations",
      "Systems thinking",
    ],
    pageBlocks: [
      {
        title: "Project Summary Card",
        text: "Enterprise transformation framework and playbook for planning, governing, and delivering large-scale change with measurable value at the center.",
      },
      {
        title: "What I Worked On",
        items: [
          "Transformation framework structure",
          "Value-focused product narrative",
          "Reusable transformation resource model",
          "Project and initiative planning concepts",
          "Audience framing for executives, leaders, and consultants",
          "Content architecture for methodology-heavy materials",
        ],
      },
      {
        title: "Framework Highlights",
        items: [
          "Transformation outcome definition",
          "Transformation design and planning",
          "Delivery governance and blocker tracking",
          "Business case and value mapping",
          "Workstream, resource, stakeholder, and risk structure",
          "Templates for repeatable transformation execution",
        ],
      },
      {
        title: "Lessons Learned",
        text: "A transformation framework becomes useful when it turns strategic intent into concrete operating mechanisms. The strongest materials connect executive outcomes, delivery governance, reusable templates, and day-to-day decision making.",
      },
      {
        title: "Next Project Transition",
        text: "Explore another project focused on workflow systems, collaboration platforms, or operational tooling for complex business processes.",
      },
    ],
  },
  {
    index: "03",
    slug: "the-lean-way",
    title: "The Lean Way",
    subtitle: "Lean collaboration platform",
    description:
      "Worked on a collaboration platform for Lean improvement ideas, knowledge sharing, and community-driven continuous improvement.",
    imageFile: "the_lean_way.jpg",
    externalUrl: "https://theleanway.net/",
    referenceLabel: "The Lean Way website",
  },
  {
    index: "04",
    slug: "asset-review-platform",
    title: "Asset Review Platform",
    subtitle: "Shutterstock internal review system",
    description:
      "Developed internal tooling for multi-vendor asset review, moderation queues, and content operations workflows.",
    imageFile: "assets_review_tool.jpg",
    externalUrl: "https://www.shutterstock.com/",
    referenceLabel: "Shutterstock website",
  },
  {
    index: "05",
    slug: "numberbank",
    title: "Numberbank",
    subtitle: "GS1 product identification platform",
    description:
      "Worked on barcode and product identification workflows used to manage structured product data for the UAE market.",
    imageFile: "gs1.jpg",
    externalUrl: "https://www.gs1.org/",
    referenceLabel: "GS1 website",
  },
  {
    index: "06",
    slug: "financial-automation-tools",
    title: "Financial Automation Tools",
    subtitle: "AlixPartners internal applications",
    description:
      "Built internal applications that automated financial analysis workflows and improved operational efficiency for consulting teams.",
    imageFile: "alix_partners.jpg",
    externalUrl: "https://www.alixpartners.com/",
    referenceLabel: "AlixPartners website",
  },
];
