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
  pageBlocksEyebrow?: string;
  pageBlocksHeading?: string;
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
              "Improved workflow creation and editing experiences",
              "More reliable workflow configuration and validation",
              "Better maintainability and extensibility within the product",
              "Faster implementation of workflow-related capabilities",
              "Improved developer and customer-facing tooling experiences",
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
    pageBlocksEyebrow: "Project Overview",
    pageBlocksHeading: "Summary and Highlights",
    pageBlocks: [
      {
        title: "Summary",
        text: "A visual workflow platform for building communication automation across messaging and voice channels. I contributed to the workflow editor, frontend architecture, API integrations, validation, and product delivery.",
      },
      {
        title: "Highlights",
        items: [
          "Visual node-based workflow editing",
          "Interactive state and configuration systems",
          "Workflow validation and publishing flows",
          "Twilio API and backend integrations",
          "Reusable frontend architecture and UI abstractions",
          "Team leadership and cross-functional delivery",
        ],
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
    pageBlocksEyebrow: "Project Overview",
    pageBlocksHeading: "Summary and Highlights",
    pageBlocks: [
      {
        title: "Summary",
        text: "A practical framework for turning enterprise transformation goals into measurable outcomes, coordinated delivery plans, and accountable governance.",
      },
      {
        title: "Highlights",
        items: [
          "Outcome-led transformation planning",
          "Value and business-case mapping",
          "Workstream, initiative, and resource structure",
          "Governance, risk, stakeholder, and blocker tracking",
          "Reusable templates for disciplined delivery",
        ],
      },
    ],
  },
  {
    index: "03",
    slug: "ebay-storefront",
    title: "eBay Storefront Rebuild",
    subtitle: "Modern full-stack e-commerce storefront redevelopment",
    description:
      "Rebuilt an established e-commerce storefront across frontend and backend systems, working within the requirements and behavior of a major online marketplace.",
    imageFile: "ebay.jpg",
    externalUrl: "https://www.ebay.com/",
    referenceLabel: "eBay website",
    heroParagraphs: [
      "eBay operates one of the world's largest online marketplaces, connecting buyers and sellers across a wide range of product categories. The project focused on rebuilding an existing storefront with modern web development technologies.",
      "I contributed as a Full-Stack Software Engineer, developing customer-facing functionality across the frontend and backend while preserving the established business requirements and application behavior.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "The project modernized an existing e-commerce storefront supporting the customer shopping experience on a large online marketplace.",
          "Redeveloping an established storefront required understanding existing requirements and behavior while replacing or improving the underlying implementation. The work combined customer-facing interface development with backend functionality and service integration.",
        ],
      },
      {
        index: "02",
        title: "Role and Responsibilities",
        paragraphs: [
          "I worked as a Full-Stack Software Engineer, contributing across the frontend and backend of the rebuilt storefront.",
        ],
        items: [
          "Developing functionality for the rebuilt e-commerce storefront",
          "Implementing frontend application components and features",
          "Working on backend functionality supporting the application",
          "Integrating frontend functionality with backend services",
          "Working with existing application requirements and behavior",
          "Collaborating on debugging, testing, and ongoing development",
        ],
      },
      {
        index: "03",
        title: "Technical Scope",
        paragraphs: [
          "The work involved full-stack web development, frontend and backend integration, customer-facing application behavior, and development within an established e-commerce environment.",
        ],
        items: [
          "Customer-facing storefront functionality",
          "Frontend component and feature development",
          "Backend application functionality",
          "Frontend-to-backend service integration",
          "Debugging, testing, and collaborative delivery",
        ],
      },
      {
        index: "04",
        title: "Outcome and Impact",
        paragraphs: [
          "The project strengthened and modernized the storefront experience while giving me hands-on experience delivering software within the scale, constraints, and business requirements of a major e-commerce platform.",
        ],
      },
    ],
    skills: [
      "Full-stack development",
      "Frontend application development",
      "Backend development",
      "API and service integration",
      "E-commerce product engineering",
      "Debugging and testing",
      "Collaborative delivery",
    ],
  },
  {
    index: "04",
    slug: "the-lean-way",
    title: "The Lean Way",
    subtitle: "Continuous improvement and knowledge-sharing platform",
    description:
      "Contributed to a collaborative SaaS platform for improvement ideas, knowledge sharing, team discussion, and organizational progress tracking.",
    imageFile: "the_lean_way.jpg",
    externalUrl: "https://theleanway.net/",
    referenceLabel: "The Lean Way website",
    heroParagraphs: [
      "The Lean Way is a web-based platform that helps organizations apply Lean principles and build a culture of continuous improvement. It provides a shared workspace for capturing improvement opportunities, exchanging knowledge, discussing solutions, and monitoring progress.",
      "I worked as a Software Engineer, contributing to the application features and product functionality that supported collaboration, improvement management, and organizational knowledge sharing.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "Lean methodology focuses on identifying inefficiencies, reducing waste, improving processes, and empowering employees to contribute improvements. The Lean Way translates those principles into a collaborative web application for organizations and teams.",
          "The product combines elements of knowledge management, team collaboration, workflow tracking, and community discussion. Its approach is similar in some ways to knowledge-sharing platforms such as Stack Overflow, with a stronger focus on organizational process improvement.",
        ],
      },
      {
        index: "02",
        title: "Product Scope",
        items: [
          "Improvement ideas and problem documentation",
          "Knowledge sharing and lessons learned",
          "Team discussion and feedback",
          "Public and private boards for organizing work",
          "Progress tracking, reports, and dashboards",
        ],
      },
      {
        index: "03",
        title: "Role and Responsibilities",
        paragraphs: [
          "I worked as a Software Engineer, contributing to the development and implementation of application features across the collaborative web platform.",
        ],
        items: [
          "Developing functionality for the web application",
          "Implementing features for collaboration and improvement management",
          "Extending existing application components",
          "Participating in frontend and backend development as required",
          "Troubleshooting issues and improving existing code",
          "Collaborating with developers to deliver product functionality",
        ],
      },
      {
        index: "04",
        title: "Engineering Focus and Impact",
        paragraphs: [
          "The project provided experience developing a business-oriented SaaS application that combines knowledge management, organizational workflows, and interactive web functionality. The work supported a product designed to make continuous improvement more visible, collaborative, and actionable inside organizations.",
        ],
      },
    ],
    skills: [
      "SaaS product development",
      "Collaborative web applications",
      "Knowledge management",
      "Workflow and improvement tracking",
      "Frontend and backend development",
      "Application troubleshooting",
      "Team collaboration",
    ],
  },
  {
    index: "05",
    slug: "shutterstock-pond5-asset-review",
    title: "Shutterstock / Pond5 Asset Review Platform",
    subtitle: "Modernized internal platform for digital asset review",
    description:
      "Led the modernization of an internal asset review platform used to evaluate submitted photography, video, music, and other digital creative assets.",
    imageFile: "assets_review_tool.jpg",
    externalUrl: "under-nda",
    referenceLabel: "Project under NDA",
    heroParagraphs: [
      "Shutterstock and Pond5 operate digital content marketplaces where submitted photography, video, music, and other creative assets must be reviewed before becoming available to customers. The asset review platform provided an internal environment for evaluating submissions against quality, technical, licensing, and content requirements.",
      "As Technical Lead / Lead Full-Stack Engineer, I led a team of five developers through the modernization of an existing legacy review tool, balancing preservation of critical business workflows with a more maintainable application architecture.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "An important part of a digital content marketplace is the review process that determines whether submitted assets can be accepted, rejected, or sent through additional operational workflows. Reviewers need a reliable internal environment for evaluating a high volume of content and applying consistent business rules.",
          "The project involved rebuilding an existing legacy review tool using modern technologies. Modernizing an established internal system required understanding current workflows, preserving important functionality, and introducing a maintainable architecture without disrupting essential review operations.",
        ],
      },
      {
        index: "02",
        title: "Role and Responsibilities",
        paragraphs: [
          "As Technical Lead / Lead Full-Stack Engineer, I managed a team of five developers and owned the technical direction and development lifecycle for the modernized system.",
        ],
        items: [
          "Leading the modernization of the existing asset review application",
          "Designing the architecture for the modernized system",
          "Making technical decisions about application structure and implementation",
          "Planning and coordinating development across the engineering team",
          "Participating hands-on in development and implementation",
          "Reviewing code and maintaining engineering standards",
          "Managing technical challenges involved in replacing legacy functionality",
          "Overseeing delivery from initial planning through implementation",
        ],
      },
      {
        index: "03",
        title: "Engineering Focus",
        paragraphs: [
          "The work required balancing modern technology choices with the operational requirements of an established content review platform. Key areas included application architecture, maintainability, frontend and backend development, legacy system analysis, and coordinating delivery across a team.",
        ],
      },
      {
        index: "04",
        title: "Outcome and Impact",
        paragraphs: [
          "The project demonstrates technical ownership of a business-critical internal platform, team leadership during a legacy modernization effort, and hands-on full-stack engineering in a digital content marketplace environment.",
        ],
      },
    ],
    skills: [
      "Technical leadership",
      "Team leadership of five developers",
      "Legacy system modernization",
      "Application architecture",
      "Full-stack development",
      "Code review and engineering standards",
      "Content operations workflows",
      "Delivery ownership",
    ],
  },
  {
    index: "06",
    slug: "confidential-digital-health-platform",
    title: "Confidential Digital Health Platform",
    subtitle: "Cloud-based healthcare operations platform",
    description:
      "Led engineering work across customer onboarding, business workflows, payments, third-party integrations, cloud services, and delivery operations for a confidential healthcare product.",
    imageFile: "healthcare_project_nda.jpg",
    externalUrl: "under-nda",
    referenceLabel: "Project under NDA",
    heroParagraphs: [
      "This confidential digital health platform supports customer onboarding, operational workflows, payment processing, and integrations with external service providers. Product and company details are intentionally omitted because the work is covered by an NDA.",
      "As Engineering Team Lead, I coordinate technical development across customer-facing applications, backend APIs, cloud infrastructure, databases, third-party services, and the environments and release processes needed to operate the platform.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "The platform combines customer-facing web applications with backend services that manage sensitive business workflows, payments, and integrations with external providers. The engineering environment includes multiple applications and services, so delivery requires coordination across the full product stack.",
          "The work involves regulated-domain workflows and payment functionality, making reliability, controlled delivery, and clear integration boundaries especially important. Specific business and system details are omitted under NDA.",
        ],
      },
      {
        index: "02",
        title: "Project Scope",
        items: [
          "Web-based customer onboarding and registration workflows",
          "Backend APIs for business operations",
          "Payment processing and subscription functionality",
          "Integrations with external service platforms",
          "Cloud-hosted application services and databases",
          "Development, staging, and production environments",
          "Continuous integration, deployment, and release processes",
        ],
      },
      {
        index: "03",
        title: "Role and Responsibilities",
        paragraphs: [
          "As Engineering Team Lead, I coordinate technical development and help the team deliver features across the application stack.",
        ],
        items: [
          "Planning and coordinating frontend and backend development",
          "Reviewing architecture and implementation approaches",
          "Contributing to backend API design and integration planning",
          "Coordinating work involving external services and payment providers",
          "Supporting development environments, deployment workflows, and cloud infrastructure",
          "Organizing engineering work into actionable tasks and milestones",
          "Reviewing technical issues, risks, testing, and release preparation",
          "Supporting production deployment and delivery coordination",
        ],
      },
      {
        index: "04",
        title: "Technical Environment",
        items: [
          "Backend services and APIs",
          "Frontend web applications",
          "Relational database systems",
          "Cloud-hosted infrastructure and managed services",
          "Infrastructure as code and deployment automation",
          "Continuous integration and release workflows",
          "Payment and third-party service integrations",
        ],
      },
      {
        index: "05",
        title: "Outcome and Impact",
        paragraphs: [
          "This project demonstrates experience coordinating a modern cloud-based platform with multiple engineering workstreams, sensitive data, payment processing, external services, and production delivery responsibilities.",
        ],
      },
    ],
    skills: [
      "Engineering team leadership",
      "Technical planning and coordination",
      "Backend API development",
      "Frontend web applications",
      "Relational databases",
      "Cloud infrastructure",
      "Infrastructure as code",
      "Payment integrations",
      "CI/CD and release management",
    ],
  },
  {
    index: "07",
    slug: "pearson-prevent",
    title: "Pearson Prevent",
    subtitle: "Student success, retention, and learning analytics platform",
    description:
      "Contributed to an education technology initiative focused on identifying retention risks and supporting earlier interventions for students.",
    imageFile: "person_prevent.jpg",
    externalUrl: "https://www.pearson.com/",
    referenceLabel: "Pearson website",
    heroParagraphs: [
      "Pearson Prevent is an education technology initiative focused on identifying students who may be at risk of dropping out or failing to complete their educational programs. Its objective is to help educational institutions recognize potential retention problems earlier and support timely interventions.",
      "I contributed to the project as part of my software engineering experience, working in a domain where student information, educational progress indicators, engagement, and institutional support workflows come together.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "Student retention systems help educational institutions identify learners who may need additional support, recognize potential dropout risks, organize intervention efforts, and make student progress information more accessible to relevant staff.",
          "Pearson Prevent sits within that broader domain of learning analytics and student success software, where technology supports earlier, better-informed decisions about educational outcomes.",
        ],
      },
      {
        index: "02",
        title: "Product Context",
        items: [
          "Identifying students who may need additional support",
          "Recognizing potential dropout risks earlier",
          "Organizing intervention efforts for educational institutions",
          "Making student progress information more accessible to staff",
          "Supporting better-informed decisions about student success",
        ],
      },
      {
        index: "03",
        title: "My Involvement",
        paragraphs: [
          "I worked on Pearson Prevent as a Software Engineering Contributor. The project expanded my experience into education technology and systems designed to support student retention, academic progress, and real-world educational outcomes.",
        ],
      },
      {
        index: "04",
        title: "Project Significance",
        paragraphs: [
          "Pearson Prevent demonstrates experience contributing to software that supports institutional decisions and intervention workflows, extending my product engineering experience beyond commercial applications into education and learning analytics.",
        ],
      },
    ],
    skills: [
      "Education technology",
      "Learning analytics domain",
      "Student retention workflows",
      "Student success systems",
      "Software engineering contribution",
      "Decision-support applications",
    ],
  },
  {
    index: "08",
    slug: "numberbank",
    title: "Numberbank",
    subtitle: "GS1 product identification platform",
    description:
      "Worked on barcode and product identification workflows used to manage structured product data for the UAE market.",
    imageFile: "gs1.jpg",
    externalUrl: "https://www.gs1.org/",
    referenceLabel: "GS1 website",
    heroParagraphs: [
      "Numberbank is a GS1 product identification platform supporting barcode and structured product data workflows for the UAE market.",
      "I contributed to the software used to manage product identification information and support reliable data workflows within a national product-registration context.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "Product identification systems help organizations assign, manage, and use standardized identifiers for products. Numberbank supported these workflows for the UAE market within the GS1 ecosystem.",
        ],
      },
      {
        index: "02",
        title: "Product Scope",
        items: [
          "Barcode and product identification workflows",
          "Structured product information management",
          "Data-entry and registration processes",
          "Product records and identification lifecycle support",
        ],
      },
      {
        index: "03",
        title: "My Contribution",
        paragraphs: [
          "I worked on the application as a software engineer, contributing to product identification workflows and the implementation of features supporting structured product data management.",
        ],
      },
      {
        index: "04",
        title: "Project Significance",
        paragraphs: [
          "The project provided experience working on a domain-specific platform where data consistency, clear workflows, and dependable management of structured information are central to the user experience.",
        ],
      },
    ],
    skills: [
      "Product identification workflows",
      "Structured data management",
      "Registration and data-entry systems",
      "Domain-specific web applications",
      "Software feature development",
    ],
  },
  {
    index: "09",
    slug: "financial-automation-tools",
    title: "Financial Automation Tools",
    subtitle: "AlixPartners internal applications",
    description:
      "Built internal applications that automated financial analysis workflows and improved operational efficiency for consulting teams.",
    imageFile: "alix_partners.jpg",
    externalUrl: "https://www.alixpartners.com/",
    referenceLabel: "AlixPartners website",
    heroParagraphs: [
      "These internal applications supported financial analysis workflows for consulting teams at AlixPartners.",
      "I contributed to tools that automated repeatable analysis work, brought complex financial information into usable interfaces, and improved operational efficiency for internal users.",
    ],
    detailSections: [
      {
        index: "01",
        title: "Project Context",
        paragraphs: [
          "Consulting and financial advisory teams often work with complex datasets, recurring analysis steps, and time-sensitive reporting requirements. The project focused on internal applications that made parts of this work more efficient and repeatable.",
        ],
      },
      {
        index: "02",
        title: "Product Scope",
        items: [
          "Internal financial analysis tools",
          "Automation of repeatable analysis workflows",
          "Data-focused interfaces for consulting teams",
          "Operational support for financial advisory work",
        ],
      },
      {
        index: "03",
        title: "My Contribution",
        paragraphs: [
          "I built and improved internal applications used by consulting teams, contributing to feature development, workflow automation, debugging, and ongoing product delivery.",
        ],
        items: [
          "Implementing application features and internal tooling",
          "Automating financial analysis workflows",
          "Improving existing application functionality",
          "Collaborating on technical discussions and implementation decisions",
          "Supporting testing, refactoring, and code quality",
        ],
      },
      {
        index: "04",
        title: "Outcome and Impact",
        paragraphs: [
          "The work helped internal users complete financial analysis tasks more efficiently and demonstrates experience building business-critical tools for professional services teams.",
        ],
      },
    ],
    skills: [
      "Internal application development",
      "Financial workflow automation",
      "Data-driven interfaces",
      "Business process improvement",
      "Feature development and refactoring",
      "Testing and code quality",
    ],
  },
];
