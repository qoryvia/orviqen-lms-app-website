export interface CompanyService {
  id: string;
  name: string;
  keywords: string[];
  description: string;
}

export const companyServicesContext: CompanyService[] =
  [
    {
      id: "software-development",
      name: "Software Development",
      keywords: [
        "software",
        "software development",
        "programming",
        "full stack",
        "development",
      ],
      description:
        "Training across programming languages, full stack development, software engineering, algorithms and competitive programming.",
    },

    {
      id: "web-development",
      name: "Web Development",
      keywords: [
        "web",
        "website",
        "web development",
        "frontend",
        "backend",
        "react",
        "next",
        "angular",
        "vue",
        "node",
      ],
      description:
        "Training across frontend, backend, React, Next.js, Angular, Vue, Node.js, APIs, WordPress and e-commerce.",
    },

    {
      id: "mobile-development",
      name: "Mobile App Development",
      keywords: [
        "mobile",
        "android",
        "ios",
        "flutter",
        "react native",
        "kotlin",
        "swift",
      ],
      description:
        "Training across Android, iOS, Flutter, React Native, Kotlin, Swift and cross-platform development.",
    },

    {
      id: "data-database",
      name: "Data & Database",
      keywords: [
        "database",
        "sql",
        "mysql",
        "postgresql",
        "mongodb",
        "redis",
        "data engineering",
      ],
      description:
        "Training across SQL, relational databases, MongoDB, Redis, database administration, data engineering and data warehousing.",
    },

    {
      id: "data-science",
      name: "Data Science & Analytics",
      keywords: [
        "data science",
        "data analytics",
        "analytics",
        "business analytics",
        "business intelligence",
        "power bi",
        "tableau",
        "statistics",
      ],
      description:
        "Training across Data Science, Data Analytics, Business Analytics, BI, Excel, Power BI, Tableau and statistical analysis.",
    },

    {
      id: "ai",
      name: "Artificial Intelligence & Machine Learning",
      keywords: [
        "ai",
        "artificial intelligence",
        "machine learning",
        "deep learning",
        "generative ai",
        "llm",
        "ai agent",
        "computer vision",
      ],
      description:
        "Training across AI, Machine Learning, Deep Learning, Generative AI, LLM applications, AI agents, NLP, Computer Vision and MLOps.",
    },

    {
      id: "cybersecurity",
      name: "Cybersecurity",
      keywords: [
        "cybersecurity",
        "cyber security",
        "ethical hacking",
        "penetration testing",
        "soc",
        "security",
        "digital forensics",
      ],
      description:
        "Training across cybersecurity, ethical hacking, SOC, penetration testing, vulnerability assessment, application security and digital forensics.",
    },

    {
      id: "networking",
      name: "Networking",
      keywords: [
        "network",
        "networking",
        "ccna",
        "cisco",
        "routing",
        "switching",
        "linux networking",
      ],
      description:
        "Training across networking, administration, Cisco, CCNA, routing, switching, wireless and cloud networking.",
    },

    {
      id: "cloud",
      name: "Cloud Computing",
      keywords: [
        "cloud",
        "aws",
        "azure",
        "google cloud",
        "gcp",
        "serverless",
      ],
      description:
        "Training across AWS, Azure, Google Cloud, administration, architecture, engineering, security and serverless computing.",
    },

    {
      id: "devops",
      name: "DevOps & Infrastructure",
      keywords: [
        "devops",
        "devsecops",
        "docker",
        "kubernetes",
        "jenkins",
        "terraform",
        "ansible",
        "linux",
        "infrastructure",
      ],
      description:
        "Training across DevOps, DevSecOps, Docker, Kubernetes, CI/CD, Jenkins, Terraform, Ansible, IaC and system administration.",
    },

    {
      id: "testing",
      name: "Software Testing",
      keywords: [
        "testing",
        "manual testing",
        "automation testing",
        "selenium",
        "cypress",
        "playwright",
        "api testing",
        "performance testing",
      ],
      description:
        "Training across manual testing, automation testing, Selenium, Cypress, Playwright, API testing, performance testing and QA.",
    },

    {
      id: "uiux",
      name: "UI/UX & Design",
      keywords: [
        "ui",
        "ux",
        "ui ux",
        "figma",
        "ux research",
        "wireframe",
        "prototype",
        "design system",
      ],
      description:
        "Training across UI design, UX design, Figma, research, interaction design, design systems, prototyping and wireframing.",
    },

    {
      id: "graphic",
      name: "Graphic & Multimedia",
      keywords: [
        "graphic",
        "photoshop",
        "illustrator",
        "coreldraw",
        "canva",
        "logo",
        "video",
        "premiere",
        "after effects",
      ],
      description:
        "Training across graphic design, Photoshop, Illustrator, CorelDRAW, Canva, branding, motion graphics and video editing.",
    },

    {
      id: "enterprise",
      name: "Enterprise Technologies",
      keywords: [
        "sap",
        "salesforce",
        "servicenow",
        "erp",
        "crm",
        "itil",
        "business analysis",
      ],
      description:
        "Training across SAP, Salesforce, ServiceNow, ERP, CRM, business analysis, IT service management and ITIL.",
    },

    {
      id: "blockchain",
      name: "Blockchain & Web3",
      keywords: [
        "blockchain",
        "ethereum",
        "solidity",
        "smart contract",
        "web3",
        "dapp",
      ],
      description:
        "Training across blockchain, Ethereum, Solidity, smart contracts, Web3, decentralized applications and blockchain security.",
    },

    {
      id: "iot",
      name: "IoT & Embedded Systems",
      keywords: [
        "iot",
        "internet of things",
        "embedded",
        "arduino",
        "raspberry pi",
        "esp32",
      ],
      description:
        "Training across IoT, embedded systems, Embedded C, Arduino, Raspberry Pi, ESP32 and IoT security.",
    },

    {
      id: "robotics",
      name: "Robotics",
      keywords: [
        "robotics",
        "robot",
        "ros",
        "arduino robotics",
        "ai robotics",
      ],
      description:
        "Training across robotics programming, Arduino, Raspberry Pi, ROS, robot programming, AI robotics and computer vision.",
    },

    {
      id: "microsoft",
      name: "Microsoft & Office",
      keywords: [
        "microsoft",
        "office",
        "excel",
        "word",
        "powerpoint",
        "access",
        "vba",
        "power query",
        "power pivot",
      ],
      description:
        "Training across computer fundamentals, Microsoft Office, Excel, Advanced Excel, Word, PowerPoint, Access, VBA, Power Query and Power Pivot.",
    },

    {
      id: "career",
      name: "Career & Professional Skills",
      keywords: [
        "career",
        "interview",
        "placement",
        "resume",
        "linkedin",
        "github",
        "freelancing",
        "remote work",
        "communication",
      ],
      description:
        "Training across interview preparation, coding interviews, placements, aptitude, communication, resume, LinkedIn, GitHub, freelancing and remote work.",
    },
  ];

export const companyServicesText =
  companyServicesContext
    .map(
      (service) =>
        `${service.name}: ${service.description}`,
    )
    .join("\n");