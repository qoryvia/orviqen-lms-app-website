export type RoadmapLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface RoadmapStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  technologies: string[];
  resources: string[];
  project?: string;
}

export interface Roadmap {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  icon: string;
  level: RoadmapLevel[];
  estimatedDuration: string;
  prerequisites: string[];
  outcomes: string[];
  technologies: string[];
  steps: RoadmapStep[];
  courseIds: string[];
}

export const resourceCategories = [
  "All",
  "Software Development",
  "Programming",
  "AI & Machine Learning",
  "Data",
  "Cybersecurity",
  "Cloud & DevOps",
  "Mobile Development",
  "Career",
];

export const resourceTypes = [
  "Roadmaps",
  "Courses",
  "Practice",
  "Projects",
  "Documentation",
  "Career",
];

export const roadmaps: Roadmap[] = [
  {
    id: "frontend-development",
    slug: "frontend-development",
    title: "Frontend Development Roadmap",
    shortTitle: "Frontend",
    category: "Software Development",
    description:
      "A step-by-step path from web fundamentals to modern frontend engineering with JavaScript, React, TypeScript and Next.js.",
    icon: "code",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "4–8 Months",
    prerequisites: [
      "Basic computer knowledge",
      "Willingness to practice consistently",
    ],
    outcomes: [
      "Build responsive web interfaces",
      "Understand modern frontend architecture",
      "Develop React applications",
      "Work with TypeScript and APIs",
      "Deploy production-ready frontend applications",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
    ],
    steps: [
      {
        id: "frontend-web-fundamentals",
        step: 1,
        title: "Web Fundamentals",
        description:
          "Understand how websites work before moving into frameworks.",
        duration: "2–3 Weeks",
        skills: [
          "HTML",
          "CSS",
          "Browser Fundamentals",
          "Accessibility",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "Chrome DevTools",
        ],
        resources: [
          "HTML fundamentals",
          "CSS fundamentals",
          "Responsive design",
        ],
        project: "Build a responsive personal website.",
      },
      {
        id: "frontend-javascript",
        step: 2,
        title: "JavaScript",
        description:
          "Build strong programming fundamentals and browser interaction skills.",
        duration: "4–6 Weeks",
        skills: [
          "Functions",
          "Objects",
          "Arrays",
          "Async Programming",
        ],
        technologies: [
          "JavaScript",
          "ES6+",
          "Fetch API",
        ],
        resources: [
          "JavaScript fundamentals",
          "DOM manipulation",
          "Promises and async programming",
        ],
        project: "Build an interactive JavaScript application.",
      },
      {
        id: "frontend-react",
        step: 3,
        title: "React",
        description:
          "Learn component-based application development.",
        duration: "4–6 Weeks",
        skills: [
          "Components",
          "Props",
          "State",
          "Hooks",
        ],
        technologies: [
          "React",
          "React Router",
          "REST APIs",
        ],
        resources: [
          "React fundamentals",
          "Hooks",
          "API integration",
        ],
        project: "Build a dashboard or course application.",
      },
      {
        id: "frontend-typescript",
        step: 4,
        title: "TypeScript & Modern Frontend",
        description:
          "Make applications more maintainable with type-safe development.",
        duration: "3–4 Weeks",
        skills: [
          "Types",
          "Interfaces",
          "Generics",
          "Reusable Components",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Tailwind CSS",
        ],
        resources: [
          "TypeScript fundamentals",
          "React with TypeScript",
          "Component architecture",
        ],
        project: "Convert a React application to TypeScript.",
      },
      {
        id: "frontend-nextjs",
        step: 5,
        title: "Next.js & Deployment",
        description:
          "Learn routing, server components, SEO, APIs and deployment.",
        duration: "3–5 Weeks",
        skills: [
          "Routing",
          "SEO",
          "Server Components",
          "Deployment",
        ],
        technologies: [
          "Next.js",
          "Vercel",
          "GitHub",
        ],
        resources: [
          "Next.js App Router",
          "SEO",
          "Deployment",
        ],
        project: "Build and deploy a production-style application.",
      },
    ],
    courseIds: [
      "frontend-development",
      "typescript-development",
      "full-stack-development",
    ],
  },

  {
    id: "backend-development",
    slug: "backend-development",
    title: "Backend Development Roadmap",
    shortTitle: "Backend",
    category: "Software Development",
    description:
      "Learn server-side development, APIs, authentication, databases, testing, security and deployment.",
    icon: "server",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "4–7 Months",
    prerequisites: [
      "Basic programming knowledge",
      "Basic web fundamentals",
    ],
    outcomes: [
      "Build REST APIs",
      "Design backend services",
      "Work with SQL and NoSQL databases",
      "Implement authentication and authorization",
      "Deploy backend applications",
    ],
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    steps: [
      {
        id: "backend-programming",
        step: 1,
        title: "Programming Foundations",
        description:
          "Build a solid programming foundation before server-side architecture.",
        duration: "2–4 Weeks",
        skills: [
          "Variables",
          "Functions",
          "Objects",
          "Error Handling",
        ],
        technologies: [
          "JavaScript",
          "TypeScript",
        ],
        resources: [
          "Programming fundamentals",
          "Async programming",
          "Error handling",
        ],
        project: "Build a CLI or small utility application.",
      },
      {
        id: "backend-node",
        step: 2,
        title: "Node.js & HTTP",
        description:
          "Understand the runtime, HTTP requests and server-side applications.",
        duration: "3–4 Weeks",
        skills: [
          "HTTP",
          "Routing",
          "Middleware",
          "File Systems",
        ],
        technologies: [
          "Node.js",
          "Express",
        ],
        resources: [
          "Node.js fundamentals",
          "HTTP",
          "Express",
        ],
        project: "Build a REST API.",
      },
      {
        id: "backend-database",
        step: 3,
        title: "Databases",
        description:
          "Learn relational and document databases and how applications interact with them.",
        duration: "3–5 Weeks",
        skills: [
          "Data Modeling",
          "Queries",
          "Indexes",
          "Transactions",
        ],
        technologies: [
          "PostgreSQL",
          "MongoDB",
          "Prisma",
        ],
        resources: [
          "SQL fundamentals",
          "MongoDB",
          "Database design",
        ],
        project: "Build a database-backed application.",
      },
      {
        id: "backend-security",
        step: 4,
        title: "Authentication & Security",
        description:
          "Build secure application boundaries and user access controls.",
        duration: "2–4 Weeks",
        skills: [
          "Authentication",
          "Authorization",
          "Validation",
          "Rate Limiting",
        ],
        technologies: [
          "JWT",
          "OAuth Concepts",
          "Express",
        ],
        resources: [
          "Authentication",
          "RBAC",
          "API security",
        ],
        project: "Build an authentication service.",
      },
      {
        id: "backend-deployment",
        step: 5,
        title: "Testing & Deployment",
        description:
          "Make your backend reliable and ready for deployment.",
        duration: "3–4 Weeks",
        skills: [
          "Testing",
          "Docker",
          "CI/CD",
          "Monitoring",
        ],
        technologies: [
          "Docker",
          "GitHub Actions",
          "AWS",
        ],
        resources: [
          "API testing",
          "Docker",
          "Deployment",
        ],
        project: "Deploy a backend API.",
      },
    ],
    courseIds: [
      "backend-development-node",
      "typescript-development",
      "cloud-devops",
    ],
  },

  {
    id: "full-stack-development",
    slug: "full-stack-development",
    title: "Full Stack Development Roadmap",
    shortTitle: "Full Stack",
    category: "Software Development",
    description:
      "Connect frontend, backend, databases, authentication, APIs, testing and deployment into one complete development path.",
    icon: "layers",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "6–10 Months",
    prerequisites: [
      "Basic computer knowledge",
      "Consistent practice",
    ],
    outcomes: [
      "Build complete web applications",
      "Design frontend and backend systems",
      "Connect applications with databases",
      "Implement authentication",
      "Deploy full-stack applications",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    steps: [
      {
        id: "fullstack-foundations",
        step: 1,
        title: "Web & Programming Foundations",
        description:
          "Learn HTML, CSS and JavaScript fundamentals.",
        duration: "4–6 Weeks",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Git",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Git",
        ],
        resources: [
          "Web fundamentals",
          "JavaScript",
          "Git",
        ],
        project: "Build a responsive web application.",
      },
      {
        id: "fullstack-frontend",
        step: 2,
        title: "Frontend Engineering",
        description:
          "Build structured, reusable user interfaces.",
        duration: "4–6 Weeks",
        skills: [
          "Components",
          "State",
          "Routing",
          "API Integration",
        ],
        technologies: [
          "React",
          "Next.js",
          "Tailwind CSS",
        ],
        resources: [
          "React",
          "Next.js",
          "Frontend architecture",
        ],
        project: "Build a dashboard application.",
      },
      {
        id: "fullstack-backend",
        step: 3,
        title: "Backend & APIs",
        description:
          "Build business logic and backend APIs.",
        duration: "4–6 Weeks",
        skills: [
          "REST APIs",
          "Validation",
          "Authentication",
          "Services",
        ],
        technologies: [
          "Node.js",
          "Express",
          "TypeScript",
        ],
        resources: [
          "REST APIs",
          "Backend architecture",
          "Authentication",
        ],
        project: "Build a production-style API.",
      },
      {
        id: "fullstack-database",
        step: 4,
        title: "Databases & Architecture",
        description:
          "Connect applications to reliable data systems.",
        duration: "3–5 Weeks",
        skills: [
          "Data Modeling",
          "SQL",
          "NoSQL",
          "Transactions",
        ],
        technologies: [
          "PostgreSQL",
          "MongoDB",
          "Prisma",
        ],
        resources: [
          "SQL",
          "MongoDB",
          "Database architecture",
        ],
        project: "Build a complete database-backed platform.",
      },
      {
        id: "fullstack-deployment",
        step: 5,
        title: "Testing & Deployment",
        description:
          "Deploy your full-stack application and understand production basics.",
        duration: "3–4 Weeks",
        skills: [
          "Testing",
          "Docker",
          "CI/CD",
          "Monitoring",
        ],
        technologies: [
          "Docker",
          "GitHub Actions",
          "Vercel",
          "AWS",
        ],
        resources: [
          "Deployment",
          "CI/CD",
          "Monitoring",
        ],
        project: "Deploy a production-style SaaS application.",
      },
    ],
    courseIds: [
      "full-stack-development",
      "frontend-development",
      "backend-development-node",
      "cloud-devops",
    ],
  },

  {
    id: "python-development",
    slug: "python-development",
    title: "Python Developer Roadmap",
    shortTitle: "Python",
    category: "Programming",
    description:
      "Progress from Python fundamentals to OOP, automation, APIs, backend development and practical projects.",
    icon: "python",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "3–6 Months",
    prerequisites: [
      "No prior programming experience required",
    ],
    outcomes: [
      "Write production-style Python programs",
      "Understand object-oriented programming",
      "Build Python APIs",
      "Automate repetitive tasks",
      "Build portfolio projects",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "PostgreSQL",
    ],
    steps: [
      {
        id: "python-basics",
        step: 1,
        title: "Python Fundamentals",
        description:
          "Learn Python syntax and basic programming concepts.",
        duration: "2–4 Weeks",
        skills: [
          "Variables",
          "Loops",
          "Functions",
          "Collections",
        ],
        technologies: ["Python"],
        resources: [
          "Python basics",
          "Functions",
          "Collections",
        ],
        project: "Build a CLI expense tracker.",
      },
      {
        id: "python-oop",
        step: 2,
        title: "Object-Oriented Python",
        description:
          "Learn how to structure larger Python applications.",
        duration: "2–3 Weeks",
        skills: [
          "Classes",
          "Objects",
          "Inheritance",
          "Composition",
        ],
        technologies: ["Python"],
        resources: [
          "OOP",
          "Classes",
          "Exception handling",
        ],
        project: "Build a modular Python application.",
      },
      {
        id: "python-api",
        step: 3,
        title: "APIs & Backend",
        description:
          "Move Python into backend development.",
        duration: "3–5 Weeks",
        skills: [
          "REST APIs",
          "Validation",
          "Authentication",
        ],
        technologies: [
          "FastAPI",
          "PostgreSQL",
        ],
        resources: [
          "FastAPI",
          "REST APIs",
          "SQL",
        ],
        project: "Build a Python REST API.",
      },
      {
        id: "python-automation",
        step: 4,
        title: "Automation & Projects",
        description:
          "Use Python to solve practical problems.",
        duration: "2–4 Weeks",
        skills: [
          "Automation",
          "File Processing",
          "APIs",
          "Testing",
        ],
        technologies: [
          "Python",
          "PyTest",
        ],
        resources: [
          "Automation",
          "Testing",
          "API integrations",
        ],
        project: "Build an automation toolkit.",
      },
    ],
    courseIds: [
      "python-development",
      "python-dsa",
      "ai-machine-learning",
    ],
  },

  {
    id: "java-development",
    slug: "java-development",
    title: "Java Developer Roadmap",
    shortTitle: "Java",
    category: "Programming",
    description:
      "Learn Java, object-oriented programming, collections, SQL and Spring Boot for backend development.",
    icon: "java",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "4–7 Months",
    prerequisites: [
      "Basic programming concepts recommended",
    ],
    outcomes: [
      "Write strong Java programs",
      "Understand OOP deeply",
      "Work with collections",
      "Build Spring Boot applications",
      "Develop database-backed APIs",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JPA",
    ],
    steps: [
      {
        id: "java-core",
        step: 1,
        title: "Core Java",
        description:
          "Build strong Java fundamentals.",
        duration: "3–4 Weeks",
        skills: [
          "Syntax",
          "Methods",
          "Classes",
          "OOP",
        ],
        technologies: ["Java"],
        resources: [
          "Core Java",
          "OOP",
          "Exception handling",
        ],
        project: "Build a console-based management system.",
      },
      {
        id: "java-collections",
        step: 2,
        title: "Collections & Advanced Java",
        description:
          "Learn collections, streams and advanced programming concepts.",
        duration: "3–4 Weeks",
        skills: [
          "Collections",
          "Streams",
          "Generics",
          "Multithreading",
        ],
        technologies: ["Java"],
        resources: [
          "Collections Framework",
          "Streams",
          "Concurrency",
        ],
        project: "Build a Java data-processing application.",
      },
      {
        id: "java-spring",
        step: 3,
        title: "Spring Boot",
        description:
          "Build modern Java backend applications.",
        duration: "4–6 Weeks",
        skills: [
          "REST APIs",
          "Dependency Injection",
          "Security",
        ],
        technologies: [
          "Spring Boot",
          "Spring Security",
        ],
        resources: [
          "Spring Boot",
          "REST APIs",
          "Security",
        ],
        project: "Build a Spring Boot API.",
      },
      {
        id: "java-database",
        step: 4,
        title: "Databases & Deployment",
        description:
          "Connect applications to relational databases and deploy them.",
        duration: "3–4 Weeks",
        skills: [
          "SQL",
          "JPA",
          "Testing",
          "Deployment",
        ],
        technologies: [
          "PostgreSQL",
          "JPA",
          "Docker",
        ],
        resources: [
          "SQL",
          "JPA",
          "Docker",
        ],
        project: "Deploy a complete Spring Boot service.",
      },
    ],
    courseIds: [
      "java-development",
      "java-dsa",
      "cloud-devops",
    ],
  },

  {
    id: "dsa",
    slug: "dsa",
    title: "Data Structures & Algorithms Roadmap",
    shortTitle: "DSA",
    category: "Programming",
    description:
      "Master programming fundamentals, data structures, algorithms, complexity and technical interview problem solving.",
    icon: "algorithm",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "4–8 Months",
    prerequisites: [
      "Basic programming knowledge",
      "One programming language",
    ],
    outcomes: [
      "Understand algorithmic complexity",
      "Master core data structures",
      "Recognize common problem-solving patterns",
      "Prepare for technical interviews",
      "Solve programming problems systematically",
    ],
    technologies: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
    ],
    steps: [
      {
        id: "dsa-foundations",
        step: 1,
        title: "Programming & Complexity",
        description:
          "Learn problem solving and complexity analysis.",
        duration: "2–3 Weeks",
        skills: [
          "Big O",
          "Recursion",
          "Problem Decomposition",
        ],
        technologies: [
          "C++",
          "Java",
          "Python",
        ],
        resources: [
          "Big O notation",
          "Recursion",
          "Problem solving",
        ],
        project: "Create an algorithm practice repository.",
      },
      {
        id: "dsa-linear",
        step: 2,
        title: "Linear Data Structures",
        description:
          "Learn arrays, linked lists, stacks, queues and hash tables.",
        duration: "4–5 Weeks",
        skills: [
          "Arrays",
          "Linked Lists",
          "Stacks",
          "Queues",
          "Hashing",
        ],
        technologies: [
          "C++",
          "Java",
          "Python",
        ],
        resources: [
          "Arrays",
          "Linked Lists",
          "Hashing",
        ],
        project: "Implement your own data-structure library.",
      },
      {
        id: "dsa-trees",
        step: 3,
        title: "Trees & Graphs",
        description:
          "Understand non-linear data structures and traversal algorithms.",
        duration: "4–5 Weeks",
        skills: [
          "Trees",
          "Heaps",
          "Graphs",
          "Traversal",
        ],
        technologies: [
          "C++",
          "Java",
          "Python",
        ],
        resources: [
          "Binary trees",
          "Graphs",
          "BFS",
          "DFS",
        ],
        project: "Build an algorithm visualizer.",
      },
      {
        id: "dsa-advanced",
        step: 4,
        title: "Advanced Problem Solving",
        description:
          "Learn patterns used in higher-difficulty problems.",
        duration: "4–8 Weeks",
        skills: [
          "Greedy",
          "Backtracking",
          "Dynamic Programming",
          "Graph Algorithms",
        ],
        technologies: [
          "C++",
          "Java",
          "Python",
        ],
        resources: [
          "Dynamic programming",
          "Greedy algorithms",
          "Graph algorithms",
        ],
        project: "Complete a structured coding problem set.",
      },
    ],
    courseIds: [
      "dsa-algorithms",
      "cpp-dsa",
      "java-dsa",
      "python-dsa",
    ],
  },

  {
    id: "ai-machine-learning",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Roadmap",
    shortTitle: "AI & ML",
    category: "AI & Machine Learning",
    description:
      "Progress from Python and data foundations to machine learning, deep learning, NLP and practical AI applications.",
    icon: "brain",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "6–10 Months",
    prerequisites: [
      "Basic Python knowledge recommended",
      "Basic mathematics",
    ],
    outcomes: [
      "Understand machine learning workflows",
      "Build and evaluate ML models",
      "Work with deep learning frameworks",
      "Understand NLP and computer vision",
      "Deploy practical AI applications",
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
    ],
    steps: [
      {
        id: "ai-python",
        step: 1,
        title: "Python & Mathematics",
        description:
          "Build the foundations required for practical AI development.",
        duration: "3–5 Weeks",
        skills: [
          "Python",
          "Statistics",
          "Probability",
          "Data Handling",
        ],
        technologies: [
          "Python",
          "NumPy",
          "Pandas",
        ],
        resources: [
          "Python",
          "Statistics",
          "NumPy",
        ],
        project: "Analyze a real-world dataset.",
      },
      {
        id: "ai-ml",
        step: 2,
        title: "Machine Learning",
        description:
          "Learn supervised and unsupervised learning.",
        duration: "5–7 Weeks",
        skills: [
          "Regression",
          "Classification",
          "Clustering",
          "Evaluation",
        ],
        technologies: [
          "Scikit-learn",
          "Pandas",
        ],
        resources: [
          "Machine learning",
          "Feature engineering",
          "Model evaluation",
        ],
        project: "Build a predictive model.",
      },
      {
        id: "ai-deep-learning",
        step: 3,
        title: "Deep Learning",
        description:
          "Understand neural networks and modern deep-learning workflows.",
        duration: "5–7 Weeks",
        skills: [
          "Neural Networks",
          "CNN",
          "Optimization",
        ],
        technologies: [
          "PyTorch",
          "TensorFlow",
        ],
        resources: [
          "Neural networks",
          "CNN",
          "Transfer learning",
        ],
        project: "Build an image-classification model.",
      },
      {
        id: "ai-specialization",
        step: 4,
        title: "NLP, Computer Vision & AI Apps",
        description:
          "Move into practical AI application development.",
        duration: "5–8 Weeks",
        skills: [
          "NLP",
          "Embeddings",
          "Computer Vision",
          "Model Deployment",
        ],
        technologies: [
          "PyTorch",
          "OpenCV",
          "FastAPI",
        ],
        resources: [
          "NLP",
          "Computer vision",
          "Model serving",
        ],
        project: "Build an AI-powered application.",
      },
    ],
    courseIds: [
      "ai-machine-learning",
      "data-science",
      "python-development",
    ],
  },

  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science Roadmap",
    shortTitle: "Data Science",
    category: "Data",
    description:
      "Learn Python, SQL, statistics, data analysis, visualization and machine learning for practical data science.",
    icon: "chart",
    level: [
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "5–9 Months",
    prerequisites: [
      "Basic mathematics",
      "Basic computer knowledge",
    ],
    outcomes: [
      "Analyze datasets",
      "Perform exploratory data analysis",
      "Build visualizations",
      "Use statistical reasoning",
      "Develop predictive models",
    ],
    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter",
    ],
    steps: [
      {
        id: "data-foundations",
        step: 1,
        title: "Python & SQL",
        description:
          "Build programming and data querying foundations.",
        duration: "3–5 Weeks",
        skills: [
          "Python",
          "SQL",
          "Data Structures",
        ],
        technologies: [
          "Python",
          "PostgreSQL",
        ],
        resources: [
          "Python",
          "SQL",
          "Jupyter",
        ],
        project: "Build a data analysis notebook.",
      },
      {
        id: "data-statistics",
        step: 2,
        title: "Statistics",
        description:
          "Understand the mathematical thinking behind data analysis.",
        duration: "3–4 Weeks",
        skills: [
          "Probability",
          "Distributions",
          "Hypothesis Testing",
        ],
        technologies: [
          "Python",
          "Pandas",
        ],
        resources: [
          "Statistics",
          "Probability",
          "Hypothesis testing",
        ],
        project: "Analyze a statistical dataset.",
      },
      {
        id: "data-analysis",
        step: 3,
        title: "Data Analysis & Visualization",
        description:
          "Turn raw datasets into useful insights.",
        duration: "4–6 Weeks",
        skills: [
          "Data Cleaning",
          "EDA",
          "Visualization",
        ],
        technologies: [
          "Pandas",
          "Matplotlib",
          "Seaborn",
        ],
        resources: [
          "Data cleaning",
          "EDA",
          "Visualization",
        ],
        project: "Build a complete analytics report.",
      },
      {
        id: "data-ml",
        step: 4,
        title: "Machine Learning",
        description:
          "Move from descriptive analysis toward prediction.",
        duration: "5–7 Weeks",
        skills: [
          "Regression",
          "Classification",
          "Model Evaluation",
        ],
        technologies: [
          "Scikit-learn",
        ],
        resources: [
          "Machine learning",
          "Feature engineering",
        ],
        project: "Build a predictive model.",
      },
    ],
    courseIds: [
      "data-science",
      "data-analytics",
      "ai-machine-learning",
    ],
  },

  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics Roadmap",
    shortTitle: "Data Analytics",
    category: "Data",
    description:
      "Learn Excel, SQL, Python, Power BI and business analytics to turn data into actionable insights.",
    icon: "analytics",
    level: [
      "Beginner",
      "Intermediate",
    ],
    estimatedDuration: "4–7 Months",
    prerequisites: [
      "Basic computer skills",
    ],
    outcomes: [
      "Query business data",
      "Clean and analyze datasets",
      "Build dashboards",
      "Create analytical reports",
      "Communicate useful insights",
    ],
    technologies: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Pandas",
    ],
    steps: [
      {
        id: "analytics-excel",
        step: 1,
        title: "Excel & Spreadsheet Analytics",
        description:
          "Learn the fundamentals of business data analysis.",
        duration: "2–3 Weeks",
        skills: [
          "Formulas",
          "Pivot Tables",
          "Charts",
        ],
        technologies: [
          "Excel",
        ],
        resources: [
          "Excel fundamentals",
          "Pivot tables",
          "Power Query",
        ],
        project: "Build a sales analysis workbook.",
      },
      {
        id: "analytics-sql",
        step: 2,
        title: "SQL",
        description:
          "Learn to retrieve and transform data from databases.",
        duration: "3–4 Weeks",
        skills: [
          "SELECT",
          "JOIN",
          "Aggregation",
          "Window Functions",
        ],
        technologies: [
          "SQL",
          "PostgreSQL",
        ],
        resources: [
          "SQL",
          "Joins",
          "Window functions",
        ],
        project: "Analyze a business database.",
      },
      {
        id: "analytics-python",
        step: 3,
        title: "Python Analytics",
        description:
          "Use Python for data cleaning and advanced analysis.",
        duration: "3–4 Weeks",
        skills: [
          "Pandas",
          "NumPy",
          "Data Cleaning",
        ],
        technologies: [
          "Python",
          "Pandas",
        ],
        resources: [
          "Pandas",
          "Data cleaning",
          "EDA",
        ],
        project: "Analyze a real-world dataset.",
      },
      {
        id: "analytics-bi",
        step: 4,
        title: "Power BI & Reporting",
        description:
          "Build dashboards and communicate insights.",
        duration: "3–4 Weeks",
        skills: [
          "Data Modeling",
          "DAX",
          "Dashboards",
        ],
        technologies: [
          "Power BI",
          "DAX",
        ],
        resources: [
          "Power BI",
          "DAX",
          "Dashboard design",
        ],
        project: "Build an interactive business dashboard.",
      },
    ],
    courseIds: [
      "data-analytics",
      "data-science",
    ],
  },

  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity Roadmap",
    shortTitle: "Cybersecurity",
    category: "Cybersecurity",
    description:
      "Build a security foundation through networking, Linux, application security, monitoring and incident-response concepts.",
    icon: "shield",
    level: [
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "5–9 Months",
    prerequisites: [
      "Basic computer knowledge",
    ],
    outcomes: [
      "Understand networking",
      "Work confidently with Linux",
      "Understand security fundamentals",
      "Analyze application-security concepts",
      "Understand security operations",
    ],
    technologies: [
      "Linux",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Python",
    ],
    steps: [
      {
        id: "security-networking",
        step: 1,
        title: "Networking Fundamentals",
        description:
          "Understand how systems and networks communicate.",
        duration: "3–4 Weeks",
        skills: [
          "TCP/IP",
          "DNS",
          "HTTP",
          "Ports",
        ],
        technologies: [
          "Wireshark",
        ],
        resources: [
          "Networking",
          "HTTP",
          "DNS",
        ],
        project: "Create a network-analysis lab.",
      },
      {
        id: "security-linux",
        step: 2,
        title: "Linux Fundamentals",
        description:
          "Learn the operating system concepts used across security environments.",
        duration: "3–4 Weeks",
        skills: [
          "Shell",
          "Permissions",
          "Processes",
          "Logs",
        ],
        technologies: [
          "Linux",
          "Bash",
        ],
        resources: [
          "Linux",
          "Shell scripting",
          "System logs",
        ],
        project: "Build a Linux administration lab.",
      },
      {
        id: "security-web",
        step: 3,
        title: "Application Security",
        description:
          "Understand common application-security risks and defensive concepts.",
        duration: "4–6 Weeks",
        skills: [
          "Authentication",
          "Authorization",
          "Input Validation",
          "API Security",
        ],
        technologies: [
          "Burp Suite",
          "OWASP",
        ],
        resources: [
          "OWASP concepts",
          "Web security",
          "API security",
        ],
        project:
          "Analyze an intentionally vulnerable training application.",
      },
      {
        id: "security-operations",
        step: 4,
        title: "Security Operations",
        description:
          "Learn monitoring, detection and incident-response concepts.",
        duration: "3–5 Weeks",
        skills: [
          "Logging",
          "Monitoring",
          "Incident Response",
        ],
        technologies: [
          "Linux",
          "SIEM Concepts",
        ],
        resources: [
          "Security monitoring",
          "Incident response",
        ],
        project: "Build a basic security-monitoring lab.",
      },
    ],
    courseIds: [
      "cybersecurity",
      "ethical-hacking",
      "python-development",
    ],
  },

  {
    id: "ethical-hacking",
    slug: "ethical-hacking",
    title: "Ethical Hacking Roadmap",
    shortTitle: "Ethical Hacking",
    category: "Cybersecurity",
    description:
      "Learn authorized security assessment through networking, Linux, reconnaissance, web security and controlled testing labs.",
    icon: "lock",
    level: [
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "4–8 Months",
    prerequisites: [
      "Basic networking",
      "Basic Linux",
      "Web fundamentals",
    ],
    outcomes: [
      "Understand security testing methodology",
      "Work with common security tools",
      "Assess deliberately vulnerable applications",
      "Document security findings",
      "Understand defensive remediation",
    ],
    technologies: [
      "Kali Linux",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Python",
      "Bash",
    ],
    steps: [
      {
        id: "ethical-networking",
        step: 1,
        title: "Networking & Linux",
        description:
          "Strengthen the infrastructure foundations required for security testing.",
        duration: "3–4 Weeks",
        skills: [
          "Networking",
          "Linux",
          "Shell",
        ],
        technologies: [
          "Linux",
          "Bash",
        ],
        resources: [
          "Networking",
          "Linux",
          "Shell scripting",
        ],
        project: "Build a controlled security lab.",
      },
      {
        id: "ethical-recon",
        step: 2,
        title: "Reconnaissance & Enumeration",
        description:
          "Understand how authorized assessments identify assets and services.",
        duration: "3–4 Weeks",
        skills: [
          "Asset Discovery",
          "Enumeration",
          "Service Analysis",
        ],
        technologies: [
          "Nmap",
          "Linux",
        ],
        resources: [
          "Reconnaissance",
          "Enumeration",
        ],
        project:
          "Perform an assessment against a controlled lab target.",
      },
      {
        id: "ethical-web",
        step: 3,
        title: "Web Application Security",
        description:
          "Study common application-security vulnerabilities in authorized labs.",
        duration: "4–6 Weeks",
        skills: [
          "Authentication",
          "Input Validation",
          "Authorization",
          "API Security",
        ],
        technologies: [
          "Burp Suite",
          "OWASP",
        ],
        resources: [
          "OWASP",
          "Web application security",
        ],
        project:
          "Assess an intentionally vulnerable application.",
      },
      {
        id: "ethical-reporting",
        step: 4,
        title: "Assessment & Reporting",
        description:
          "Turn technical findings into structured security reports.",
        duration: "2–4 Weeks",
        skills: [
          "Evidence",
          "Risk Description",
          "Remediation",
        ],
        technologies: [
          "Markdown",
          "Security Tools",
        ],
        resources: [
          "Security reporting",
          "Risk assessment",
        ],
        project: "Create a complete security assessment report.",
      },
    ],
    courseIds: [
      "ethical-hacking",
      "cybersecurity",
    ],
  },

  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Roadmap",
    shortTitle: "Cloud & DevOps",
    category: "Cloud & DevOps",
    description:
      "Learn Linux, cloud infrastructure, containers, CI/CD, infrastructure automation and application operations.",
    icon: "cloud",
    level: [
      "Beginner",
      "Intermediate",
      "Advanced",
    ],
    estimatedDuration: "4–8 Months",
    prerequisites: [
      "Basic Linux knowledge recommended",
      "Basic networking knowledge",
    ],
    outcomes: [
      "Understand cloud infrastructure",
      "Containerize applications",
      "Build CI/CD pipelines",
      "Understand Kubernetes fundamentals",
      "Deploy applications",
    ],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Linux",
    ],
    steps: [
      {
        id: "cloud-linux",
        step: 1,
        title: "Linux & Networking",
        description:
          "Build the infrastructure foundation for cloud work.",
        duration: "3–4 Weeks",
        skills: [
          "Linux",
          "SSH",
          "Networking",
          "Processes",
        ],
        technologies: [
          "Linux",
          "Bash",
        ],
        resources: [
          "Linux",
          "Networking",
          "Shell",
        ],
        project: "Configure a Linux server environment.",
      },
      {
        id: "cloud-basics",
        step: 2,
        title: "Cloud Fundamentals",
        description:
          "Understand compute, storage, networking and identity in the cloud.",
        duration: "3–5 Weeks",
        skills: [
          "Compute",
          "Storage",
          "Networking",
          "IAM",
        ],
        technologies: [
          "AWS",
        ],
        resources: [
          "AWS fundamentals",
          "Cloud architecture",
        ],
        project: "Deploy an application to a cloud environment.",
      },
      {
        id: "cloud-docker",
        step: 3,
        title: "Docker & Containers",
        description:
          "Learn how to package applications for repeatable environments.",
        duration: "2–3 Weeks",
        skills: [
          "Images",
          "Containers",
          "Volumes",
          "Networks",
        ],
        technologies: [
          "Docker",
        ],
        resources: [
          "Docker",
          "Container architecture",
        ],
        project: "Containerize a full-stack application.",
      },
      {
        id: "cloud-cicd",
        step: 4,
        title: "CI/CD & Kubernetes",
        description:
          "Automate delivery and learn orchestration concepts.",
        duration: "4–6 Weeks",
        skills: [
          "CI/CD",
          "Deployment",
          "Orchestration",
        ],
        technologies: [
          "GitHub Actions",
          "Kubernetes",
          "Terraform",
        ],
        resources: [
          "CI/CD",
          "Kubernetes",
          "Infrastructure as Code",
        ],
        project: "Build an automated deployment pipeline.",
      },
    ],
    courseIds: [
      "cloud-devops",
      "backend-development-node",
      "full-stack-development",
    ],
  },

  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile App Development Roadmap",
    shortTitle: "Mobile Development",
    category: "Mobile Development",
    description:
      "Learn application development for mobile platforms through UI development, state management, APIs and deployment.",
    icon: "smartphone",
    level: [
      "Beginner",
      "Intermediate",
    ],
    estimatedDuration: "4–8 Months",
    prerequisites: [
      "Basic programming knowledge recommended",
    ],
    outcomes: [
      "Build mobile interfaces",
      "Connect applications to APIs",
      "Manage application state",
      "Implement authentication",
      "Prepare applications for release",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Flutter",
      "Dart",
      "Firebase",
    ],
    steps: [
      {
        id: "mobile-foundations",
        step: 1,
        title: "Programming & UI Foundations",
        description:
          "Learn programming and interface fundamentals.",
        duration: "3–4 Weeks",
        skills: [
          "Programming",
          "UI Design",
          "Components",
        ],
        technologies: [
          "JavaScript",
          "TypeScript",
        ],
        resources: [
          "Programming fundamentals",
          "Mobile UI",
        ],
        project: "Build a multi-screen mobile prototype.",
      },
      {
        id: "mobile-framework",
        step: 2,
        title: "React Native or Flutter",
        description:
          "Choose a mobile framework and learn application development.",
        duration: "4–6 Weeks",
        skills: [
          "Navigation",
          "State",
          "Components",
        ],
        technologies: [
          "React Native",
          "Flutter",
        ],
        resources: [
          "React Native",
          "Flutter",
        ],
        project: "Build a mobile productivity app.",
      },
      {
        id: "mobile-api",
        step: 3,
        title: "APIs & Authentication",
        description:
          "Connect the application to backend systems.",
        duration: "3–4 Weeks",
        skills: [
          "REST APIs",
          "Authentication",
          "Storage",
        ],
        technologies: [
          "Firebase",
          "REST APIs",
        ],
        resources: [
          "API integration",
          "Authentication",
          "Mobile storage",
        ],
        project: "Build a login and data-driven application.",
      },
      {
        id: "mobile-release",
        step: 4,
        title: "Testing & Release",
        description:
          "Prepare applications for release and maintenance.",
        duration: "2–4 Weeks",
        skills: [
          "Testing",
          "Builds",
          "Release",
        ],
        technologies: [
          "Android",
          "iOS",
        ],
        resources: [
          "Mobile testing",
          "Release preparation",
        ],
        project: "Publish a release-ready mobile application.",
      },
    ],
    courseIds: [
      "full-stack-development",
      "frontend-development",
    ],
  },
];

export const resourceLibrary = [
  {
    id: "roadmaps",
    title: "Career Roadmaps",
    description:
      "Follow a structured path from fundamentals to advanced skills.",
    type: "Roadmaps",
    icon: "map",
    href: "#roadmap-explorer",
  },
  {
    id: "courses",
    title: "Learning Courses",
    description:
      "Go deeper with structured courses and project-based learning.",
    type: "Courses",
    icon: "book",
    href: "/courses",
  },
  {
    id: "practice",
    title: "Practice & DSA",
    description:
      "Improve problem-solving through coding practice and algorithms.",
    type: "Practice",
    icon: "code",
    href: "/courses/dsa-algorithms",
  },
  {
    id: "projects",
    title: "Project Ideas",
    description:
      "Use practical project ideas to turn concepts into experience.",
    type: "Projects",
    icon: "folder",
    href: "#roadmap-explorer",
  },
  {
    id: "documentation",
    title: "Learning Resources",
    description:
      "Explore technologies, tools and concepts worth learning next.",
    type: "Documentation",
    icon: "file",
    href: "/blogs",
  },
  {
    id: "career",
    title: "Career Resources",
    description:
      "Build portfolios, prepare for interviews and understand technical careers.",
    type: "Career",
    icon: "briefcase",
    href: "/blogs/technical-interviews",
  },
];

export const resourcesFaqs = [
  {
    question: "Which roadmap should I start with?",
    answer:
      "Start with the domain that matches the type of work you want to do. For example, choose Frontend for interface development, Backend for APIs and server-side systems, AI & ML for intelligent applications, Data for analytics and data science, or Cybersecurity for security-focused roles.",
  },
  {
    question: "Can a beginner use these roadmaps?",
    answer:
      "Yes. Several roadmaps start from fundamentals. The roadmap also shows prerequisites, estimated duration, technologies and projects so you can identify where to begin.",
  },
  {
    question: "Do I need to follow every step?",
    answer:
      "The roadmap is a guide rather than a rigid sequence. Some learners may already know certain topics and can move ahead, while beginners can follow the steps from the beginning.",
  },
  {
    question: "Can I switch domains later?",
    answer:
      "Yes. Many technical domains overlap. For example, frontend developers can move toward full stack development, Python can lead into data or AI, and backend knowledge can connect naturally with cloud and DevOps.",
  },
  {
    question: "Where should I practice?",
    answer:
      "Use the roadmap projects, coding practice platforms, documentation, personal projects and structured courses together. The goal is to combine learning with application.",
  },
];