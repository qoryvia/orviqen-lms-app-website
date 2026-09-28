export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;

  category: string;
  subCategory?: string;

  level: string;
  duration: string;
  mode?: string;
  language?: string[];

  description: string;
  shortDescription?: string;

  image: string;

  skills: string[];
  technologies?: string[];
  programmingLanguages?: string[];

  featured?: boolean;
  popular?: boolean;

  price?: {
    amount: number;
    currency: string;
    display: string;
  };

  rating?: number;
  reviewsCount?: number;

  lessons?: number;
  projectsCount?: number;

  prerequisites?: string[];
  learningOutcomes?: string[];

  careerPaths?: string[];
  certification?: string;

  projects?: {
    title: string;
    description: string;
    technologies: string[];
  }[];

  curriculum?: {
    title: string;
    description?: string;
    topics: string[];
  }[];

  tools?: string[];

  relatedCourses?: string[];

  faq?: {
    question: string;
    answer: string;
  }[];

  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };

  detailPage?: {
    heroTitle: string;
    heroDescription: string;
    overview: string;
    whyLearn: string[];
    audience: string[];
    highlights: string[];
  };

  href: string;
}

export const courseCategories = [
  "All",
  "Software Development",
  "Programming",
  "Data",
  "Artificial Intelligence",
  "Cybersecurity",
  "Cloud & DevOps",
];

export const courses: Course[] = [
  {
    id: "frontend-development",
    slug: "frontend-development",
    title: "Frontend Development",
    shortTitle: "Frontend Development",
    category: "Software Development",
    subCategory: "Web Development",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],
    description:
      "Build modern, responsive and accessible web interfaces using HTML, CSS, JavaScript, React, Next.js and modern frontend engineering practices.",
    shortDescription:
      "Master modern frontend development from HTML and CSS to React and Next.js.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Git",
      "Responsive Design",
      "REST APIs",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],

    programmingLanguages: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],

    featured: true,
    popular: true,

    rating: 4.8,
    reviewsCount: 1260,
    lessons: 120,
    projectsCount: 8,

    prerequisites: [
      "Basic computer knowledge",
      "No prior programming experience required",
      "Willingness to practice regularly",
    ],

    learningOutcomes: [
      "Build responsive websites from scratch",
      "Write modern JavaScript and TypeScript",
      "Develop reusable React components",
      "Build production-ready Next.js applications",
      "Consume and integrate REST APIs",
      "Use Git and GitHub professionally",
      "Deploy frontend applications",
    ],

    careerPaths: [
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "UI Developer",
      "Web Developer",
      "JavaScript Developer",
    ],

    certification:
      "Certificate of Completion in Frontend Development",

    projects: [
      {
        title: "Responsive Business Website",
        description:
          "Build a responsive multi-page business website with reusable UI components.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "React Dashboard",
        description:
          "Create an interactive dashboard with reusable components, charts and API integration.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Next.js E-Commerce Platform",
        description:
          "Build a production-style e-commerce frontend with routing, product pages and cart functionality.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],

    curriculum: [
      {
        title: "Web Fundamentals",
        topics: [
          "Internet Fundamentals",
          "HTML5",
          "Semantic HTML",
          "Forms",
          "Accessibility",
        ],
      },
      {
        title: "CSS & Responsive Design",
        topics: [
          "CSS Fundamentals",
          "Flexbox",
          "Grid",
          "Responsive Design",
          "Animations",
          "Tailwind CSS",
        ],
      },
      {
        title: "JavaScript",
        topics: [
          "Variables",
          "Functions",
          "Arrays",
          "Objects",
          "DOM",
          "Async JavaScript",
          "Promises",
          "Fetch API",
        ],
      },
      {
        title: "React",
        topics: [
          "Components",
          "Props",
          "State",
          "Hooks",
          "Forms",
          "Context API",
          "API Integration",
        ],
      },
      {
        title: "Next.js",
        topics: [
          "App Router",
          "Layouts",
          "Server Components",
          "API Routes",
          "SEO",
          "Authentication",
          "Deployment",
        ],
      },
    ],

    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Vercel",
    ],

    relatedCourses: [
      "javascript-development",
      "backend-development-node",
      "full-stack-development",
      "typescript-development",
    ],

    faq: [
      {
        question: "Do I need prior coding experience?",
        answer:
          "No. The course starts with web fundamentals and gradually moves to advanced frontend development.",
      },
      {
        question: "Will I build real projects?",
        answer:
          "Yes. The curriculum includes multiple practical projects covering websites, dashboards and production-style applications.",
      },
      {
        question: "Which technologies are covered?",
        answer:
          "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git and API integration.",
      },
    ],

    seo: {
      metaTitle:
        "Frontend Development Course | HTML, CSS, JavaScript, React & Next.js",
      metaDescription:
        "Learn frontend development with HTML, CSS, JavaScript, TypeScript, React and Next.js through practical projects and industry-focused training.",
      keywords: [
        "frontend development course",
        "frontend developer course",
        "React course",
        "Next.js course",
        "JavaScript course",
        "TypeScript course",
        "web development course",
      ],
      canonical: "/courses/frontend-development",
      ogTitle: "Frontend Development Course",
      ogDescription:
        "Learn modern frontend development with JavaScript, React, TypeScript and Next.js.",
    },

    detailPage: {
      heroTitle: "Become a Job-Ready Frontend Developer",
      heroDescription:
        "Learn how to design, develop and deploy modern web applications using today's most widely used frontend technologies.",
      overview:
        "This program takes you from web fundamentals to modern frontend engineering with hands-on projects and real-world development practices.",
      whyLearn: [
        "Build modern responsive interfaces",
        "Learn React and Next.js",
        "Develop reusable components",
        "Work with APIs",
        "Create portfolio-ready projects",
      ],
      audience: [
        "College students",
        "Beginners",
        "Career switchers",
        "Aspiring web developers",
      ],
      highlights: [
        "Hands-on projects",
        "Modern technology stack",
        "Portfolio development",
        "Git and GitHub",
        "Deployment experience",
      ],
    },

    href: "#lead",
  },

  {
    id: "backend-development-node",
    slug: "backend-development-node",
    title: "Backend Development with Node.js",
    shortTitle: "Backend Development",
    category: "Software Development",
    subCategory: "Backend Development",
    level: "Intermediate to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn backend engineering using Node.js, Express, REST APIs, authentication, databases, caching, testing and deployment.",
    shortDescription:
      "Build scalable APIs and backend applications using Node.js and modern backend technologies.",

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Authentication",
      "Testing",
      "Docker",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT",
      "Prisma",
      "Mongoose",
    ],

    programmingLanguages: [
      "JavaScript",
      "TypeScript",
    ],

    featured: true,
    popular: true,

    rating: 4.8,
    reviewsCount: 980,
    lessons: 115,
    projectsCount: 7,

    prerequisites: [
      "Basic JavaScript knowledge",
      "Basic programming concepts",
      "Understanding of HTML and web fundamentals",
    ],

    learningOutcomes: [
      "Build REST APIs",
      "Design backend architectures",
      "Work with SQL and NoSQL databases",
      "Implement authentication and authorization",
      "Build scalable services",
      "Write automated tests",
      "Deploy backend applications",
    ],

    careerPaths: [
      "Backend Developer",
      "Node.js Developer",
      "API Developer",
      "Software Engineer",
      "Backend Engineer",
    ],

    certification:
      "Certificate of Completion in Backend Development",

    projects: [
      {
        title: "Authentication API",
        description:
          "Build a secure authentication system with registration, login, refresh tokens and role-based authorization.",
        technologies: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "JWT",
        ],
      },
      {
        title: "E-Commerce Backend",
        description:
          "Develop product, cart, order and payment-ready backend APIs.",
        technologies: [
          "Node.js",
          "Express",
          "MongoDB",
          "Redis",
        ],
      },
    ],

    curriculum: [
      {
        title: "Node.js Fundamentals",
        topics: [
          "Node.js Runtime",
          "Modules",
          "NPM",
          "Async Programming",
          "Streams",
          "File System",
        ],
      },
      {
        title: "API Development",
        topics: [
          "Express.js",
          "REST Architecture",
          "Routing",
          "Controllers",
          "Validation",
          "Error Handling",
        ],
      },
      {
        title: "Databases",
        topics: [
          "MongoDB",
          "PostgreSQL",
          "Mongoose",
          "Prisma",
          "Indexes",
          "Transactions",
        ],
      },
      {
        title: "Security",
        topics: [
          "JWT",
          "OAuth Concepts",
          "RBAC",
          "Password Hashing",
          "Rate Limiting",
          "API Security",
        ],
      },
      {
        title: "Deployment",
        topics: [
          "Docker",
          "Environment Variables",
          "CI/CD",
          "Cloud Deployment",
          "Monitoring",
        ],
      },
    ],

    tools: [
      "VS Code",
      "Postman",
      "Git",
      "GitHub",
      "Docker",
      "MongoDB Compass",
    ],

    relatedCourses: [
      "frontend-development",
      "full-stack-development",
      "typescript-development",
      "cloud-devops",
    ],

    faq: [
      {
        question: "Which programming languages are used?",
        answer:
          "The primary languages are JavaScript and TypeScript.",
      },
      {
        question: "Are databases included?",
        answer:
          "Yes. Both MongoDB and PostgreSQL are covered along with ORM and ODM concepts.",
      },
    ],

    seo: {
      metaTitle:
        "Backend Development Course | Node.js, Express, MongoDB & PostgreSQL",
      metaDescription:
        "Learn backend development using Node.js, Express, MongoDB, PostgreSQL, REST APIs, authentication, Docker and modern backend architecture.",
      keywords: [
        "backend development course",
        "Node.js course",
        "Express.js course",
        "backend developer course",
        "REST API course",
        "MongoDB course",
        "PostgreSQL course",
      ],
      canonical: "/courses/backend-development-node",
      ogTitle: "Backend Development with Node.js",
      ogDescription:
        "Build production-ready APIs and backend applications with Node.js.",
    },

    detailPage: {
      heroTitle: "Build Production-Ready Backend Applications",
      heroDescription:
        "Learn APIs, databases, authentication, security and deployment through real-world backend projects.",
      overview:
        "A practical backend program focused on building reliable APIs and scalable server-side applications.",
      whyLearn: [
        "Build REST APIs",
        "Learn databases",
        "Understand backend architecture",
        "Implement authentication",
        "Deploy APIs",
      ],
      audience: [
        "JavaScript developers",
        "Computer science students",
        "Aspiring backend developers",
        "Frontend developers",
      ],
      highlights: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "API Security",
      ],
    },

    href: "#lead",
  },

  {
    id: "full-stack-development",
    slug: "full-stack-development",
    title: "Full Stack Development",
    shortTitle: "Full Stack Development",
    category: "Software Development",
    subCategory: "Web Development",
    level: "Beginner to Advanced",
    duration: "6–9 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Become a full stack developer by learning frontend, backend, databases, authentication, APIs, testing, Git, deployment and cloud fundamentals.",

    shortDescription:
      "Master frontend and backend development and build complete production-ready applications.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "Git",
      "Docker",
    ],

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "GitHub",
    ],

    programmingLanguages: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],

    featured: true,
    popular: true,

    rating: 4.9,
    reviewsCount: 2150,
    lessons: 220,
    projectsCount: 12,

    prerequisites: [
      "Basic computer knowledge",
      "Basic mathematics",
      "No professional coding experience required",
    ],

    learningOutcomes: [
      "Build complete web applications",
      "Develop modern frontend interfaces",
      "Create secure backend APIs",
      "Work with SQL and NoSQL databases",
      "Implement authentication",
      "Integrate third-party APIs",
      "Use Git and GitHub",
      "Deploy applications to the cloud",
    ],

    careerPaths: [
      "Full Stack Developer",
      "Software Developer",
      "Web Application Developer",
      "JavaScript Developer",
      "MERN Stack Developer",
      "Next.js Developer",
    ],

    certification:
      "Professional Certificate in Full Stack Development",

    projects: [
      {
        title: "Learning Management System",
        description:
          "Build a complete learning platform with users, courses, authentication and dashboards.",
        technologies: [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Prisma",
        ],
      },
      {
        title: "E-Commerce Platform",
        description:
          "Develop a full-stack shopping platform with products, cart, orders and authentication.",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
        ],
      },
      {
        title: "SaaS Dashboard",
        description:
          "Build a multi-page SaaS dashboard with API integration, role-based access and analytics.",
        technologies: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Redis",
        ],
      },
    ],

    curriculum: [
      {
        title: "HTML, CSS & Web Fundamentals",
        topics: [
          "HTML5",
          "Semantic HTML",
          "CSS",
          "Flexbox",
          "Grid",
          "Responsive Design",
        ],
      },
      {
        title: "JavaScript & TypeScript",
        topics: [
          "JavaScript Fundamentals",
          "ES6+",
          "Async Programming",
          "Promises",
          "TypeScript",
          "Generics",
          "Interfaces",
        ],
      },
      {
        title: "Frontend Development",
        topics: [
          "React",
          "Hooks",
          "State Management",
          "Tailwind CSS",
          "Next.js",
          "API Integration",
        ],
      },
      {
        title: "Backend Development",
        topics: [
          "Node.js",
          "Express",
          "REST APIs",
          "Authentication",
          "Authorization",
          "Validation",
        ],
      },
      {
        title: "Databases",
        topics: [
          "MongoDB",
          "PostgreSQL",
          "Prisma",
          "Mongoose",
          "Indexes",
          "Transactions",
        ],
      },
      {
        title: "Deployment & DevOps",
        topics: [
          "Git",
          "GitHub",
          "Docker",
          "CI/CD",
          "Cloud Deployment",
          "Monitoring",
        ],
      },
    ],

    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Figma",
      "Vercel",
    ],

    relatedCourses: [
      "frontend-development",
      "backend-development-node",
      "typescript-development",
      "cloud-devops",
      "dsa-algorithms",
    ],

    faq: [
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes. The program starts with fundamentals and gradually progresses to advanced full stack development.",
      },
      {
        question: "Which stack is used?",
        answer:
          "The main stack includes React, Next.js, Node.js, Express, MongoDB, PostgreSQL and TypeScript.",
      },
      {
        question: "How many projects are included?",
        answer:
          "The program includes multiple portfolio projects, including LMS, e-commerce and SaaS applications.",
      },
    ],

    seo: {
      metaTitle:
        "Full Stack Development Course | React, Next.js, Node.js & MongoDB",
      metaDescription:
        "Learn full stack development with React, Next.js, Node.js, Express, MongoDB, PostgreSQL and TypeScript through practical projects.",
      keywords: [
        "full stack development course",
        "full stack developer course",
        "MERN stack course",
        "React Node.js course",
        "Next.js course",
        "JavaScript full stack course",
        "web development course",
      ],
      canonical: "/courses/full-stack-development",
      ogTitle: "Full Stack Development Course",
      ogDescription:
        "Master frontend, backend, databases and deployment with a modern full stack curriculum.",
    },

    detailPage: {
      heroTitle: "Become a Full Stack Developer",
      heroDescription:
        "Learn how modern web applications are designed, built, secured and deployed from frontend to backend.",
      overview:
        "A complete development program covering frontend, backend, databases, APIs, authentication, testing and deployment.",
      whyLearn: [
        "Learn complete application development",
        "Build production-style projects",
        "Master modern JavaScript technologies",
        "Learn frontend and backend architecture",
        "Develop a strong project portfolio",
      ],
      audience: [
        "Beginners",
        "College students",
        "Career switchers",
        "Frontend developers",
        "Backend developers",
      ],
      highlights: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "TypeScript",
        "Docker",
      ],
    },

    href: "#lead",
  },

  {
    id: "python-development",
    slug: "python-development",
    title: "Python Programming",
    shortTitle: "Python Programming",
    category: "Programming",
    subCategory: "Programming Languages",
    level: "Beginner to Advanced",
    duration: "3–5 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn Python programming from fundamentals to object-oriented programming, automation, APIs, data handling and advanced Python development.",

    shortDescription:
      "Learn Python from beginner fundamentals to advanced programming concepts.",

    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Python",
      "OOP",
      "Data Structures",
      "Algorithms",
      "File Handling",
      "APIs",
      "Automation",
      "Testing",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "PyTest",
    ],

    programmingLanguages: ["Python"],

    featured: false,
    popular: true,

    rating: 4.8,
    reviewsCount: 870,
    lessons: 100,
    projectsCount: 6,

    prerequisites: [
      "No coding experience required",
      "Basic computer knowledge",
    ],

    learningOutcomes: [
      "Write clean Python programs",
      "Understand OOP",
      "Work with files and APIs",
      "Build Python applications",
      "Automate repetitive tasks",
      "Write tests",
    ],

    careerPaths: [
      "Python Developer",
      "Backend Developer",
      "Automation Developer",
      "Software Developer",
      "Junior Data Engineer",
    ],

    certification: "Certificate of Completion in Python Programming",

    projects: [
      {
        title: "Expense Tracker",
        description:
          "Build a command-line expense tracking application.",
        technologies: ["Python", "SQLite"],
      },
      {
        title: "REST API",
        description:
          "Build a backend API using modern Python frameworks.",
        technologies: ["Python", "FastAPI", "PostgreSQL"],
      },
    ],

    curriculum: [
      {
        title: "Python Fundamentals",
        topics: [
          "Variables",
          "Data Types",
          "Conditions",
          "Loops",
          "Functions",
          "Modules",
        ],
      },
      {
        title: "Object-Oriented Programming",
        topics: [
          "Classes",
          "Objects",
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
        ],
      },
      {
        title: "Advanced Python",
        topics: [
          "Decorators",
          "Generators",
          "Iterators",
          "Exception Handling",
          "Testing",
        ],
      },
      {
        title: "Python APIs",
        topics: [
          "FastAPI",
          "Flask",
          "REST APIs",
          "Authentication",
          "Database Integration",
        ],
      },
    ],

    tools: [
      "VS Code",
      "PyCharm",
      "Git",
      "GitHub",
      "Postman",
    ],

    relatedCourses: [
      "python-dsa",
      "data-science",
      "ai-machine-learning",
      "backend-development-node",
    ],

    faq: [
      {
        question: "Is Python difficult to learn?",
        answer:
          "Python has a beginner-friendly syntax and the course gradually introduces advanced programming concepts.",
      },
      {
        question: "Is Python useful for backend development?",
        answer:
          "Yes. Python is widely used for APIs, automation, backend engineering, data and AI applications.",
      },
    ],

    seo: {
      metaTitle:
        "Python Programming Course | Learn Python from Beginner to Advanced",
      metaDescription:
        "Master Python programming, OOP, APIs, automation, testing and application development through practical projects.",
      keywords: [
        "Python course",
        "Python programming course",
        "learn Python",
        "Python developer course",
        "Python programming",
        "Python backend course",
      ],
      canonical: "/courses/python-development",
      ogTitle: "Python Programming Course",
      ogDescription:
        "Learn Python programming through practical projects and structured lessons.",
    },

    detailPage: {
      heroTitle: "Master Python Programming",
      heroDescription:
        "Build a strong programming foundation and learn how Python is used in backend development, automation, data and AI.",
      overview:
        "A structured Python program covering programming fundamentals, OOP, APIs and practical application development.",
      whyLearn: [
        "Beginner-friendly syntax",
        "Strong programming fundamentals",
        "Backend development",
        "Automation",
        "AI and data applications",
      ],
      audience: [
        "Beginners",
        "Students",
        "Aspiring developers",
        "Career switchers",
      ],
      highlights: [
        "Python fundamentals",
        "OOP",
        "FastAPI",
        "Automation",
        "Projects",
      ],
    },

    href: "#lead",
  },

  {
    id: "java-development",
    slug: "java-development",
    title: "Java Programming & Development",
    shortTitle: "Java Development",
    category: "Programming",
    subCategory: "Java Development",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn Java programming, object-oriented programming, collections, exception handling, SQL, Spring Boot and backend application development.",

    shortDescription:
      "Learn Java programming and backend development using Spring Boot.",

    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Java",
      "OOP",
      "Collections",
      "Multithreading",
      "SQL",
      "Spring Boot",
      "REST APIs",
      "JPA",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "PostgreSQL",
      "Maven",
    ],

    programmingLanguages: ["Java", "SQL"],

    rating: 4.8,
    reviewsCount: 760,
    lessons: 130,
    projectsCount: 7,

    prerequisites: [
      "Basic programming knowledge recommended",
      "Basic computer knowledge",
    ],

    learningOutcomes: [
      "Master Java fundamentals",
      "Understand OOP deeply",
      "Work with collections",
      "Build REST APIs",
      "Develop Spring Boot applications",
      "Connect applications with databases",
    ],

    careerPaths: [
      "Java Developer",
      "Backend Developer",
      "Spring Boot Developer",
      "Software Engineer",
      "Application Developer",
    ],

    certification: "Certificate of Completion in Java Development",

    projects: [
      {
        title: "Banking API",
        description:
          "Develop a secure banking-style REST API using Spring Boot.",
        technologies: [
          "Java",
          "Spring Boot",
          "PostgreSQL",
        ],
      },
      {
        title: "Employee Management System",
        description:
          "Build a CRUD application with authentication and database integration.",
        technologies: [
          "Java",
          "Spring Boot",
          "JPA",
          "PostgreSQL",
        ],
      },
    ],

    curriculum: [
      {
        title: "Java Fundamentals",
        topics: [
          "Variables",
          "Conditions",
          "Loops",
          "Methods",
          "Arrays",
        ],
      },
      {
        title: "Object-Oriented Programming",
        topics: [
          "Classes",
          "Objects",
          "Inheritance",
          "Interfaces",
          "Polymorphism",
        ],
      },
      {
        title: "Advanced Java",
        topics: [
          "Collections",
          "Streams",
          "Generics",
          "Exceptions",
          "Multithreading",
        ],
      },
      {
        title: "Spring Boot",
        topics: [
          "REST APIs",
          "Dependency Injection",
          "Spring Data JPA",
          "Security",
          "Database Integration",
        ],
      },
    ],

    tools: [
      "IntelliJ IDEA",
      "VS Code",
      "Maven",
      "Postman",
      "Git",
      "GitHub",
    ],

    relatedCourses: [
      "java-dsa",
      "backend-development-node",
      "full-stack-development",
      "cloud-devops",
    ],

    faq: [
      {
        question: "Is Java included for DSA?",
        answer:
          "Yes. Java can be used as the primary language for the separate Java DSA track.",
      },
      {
        question: "Does this course include Spring Boot?",
        answer:
          "Yes. The program progresses from Java fundamentals into Spring Boot backend development.",
      },
    ],

    seo: {
      metaTitle:
        "Java Development Course | Core Java, Spring Boot & REST APIs",
      metaDescription:
        "Learn Java programming, OOP, collections, Spring Boot, REST APIs, JPA and PostgreSQL through practical software development projects.",
      keywords: [
        "Java course",
        "Java programming course",
        "Java developer course",
        "Spring Boot course",
        "Java backend course",
        "Core Java course",
      ],
      canonical: "/courses/java-development",
      ogTitle: "Java Programming & Development",
      ogDescription:
        "Learn Java and Spring Boot for modern backend application development.",
    },

    detailPage: {
      heroTitle: "Build Applications with Java & Spring Boot",
      heroDescription:
        "Develop strong Java fundamentals and build production-style backend applications using Spring Boot.",
      overview:
        "A structured Java development track covering core programming, OOP, advanced Java and backend development.",
      whyLearn: [
        "Strong programming foundation",
        "Enterprise development",
        "Spring Boot",
        "REST APIs",
        "Database development",
      ],
      audience: [
        "Beginners",
        "Computer science students",
        "Aspiring Java developers",
        "Backend developers",
      ],
      highlights: [
        "Core Java",
        "OOP",
        "Collections",
        "Spring Boot",
        "JPA",
        "REST APIs",
      ],
    },

    href: "#lead",
  },

  {
    id: "typescript-development",
    slug: "typescript-development",
    title: "TypeScript Development",
    shortTitle: "TypeScript",
    category: "Programming",
    subCategory: "Modern JavaScript",
    level: "Intermediate to Advanced",
    duration: "2–4 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn TypeScript for scalable frontend and backend applications with strong typing, interfaces, generics and modern application architecture.",

    shortDescription:
      "Build scalable applications using TypeScript across frontend and backend development.",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "TypeScript",
      "JavaScript",
      "Interfaces",
      "Generics",
      "Types",
      "React",
      "Node.js",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
    ],

    programmingLanguages: [
      "TypeScript",
      "JavaScript",
    ],

    rating: 4.7,
    reviewsCount: 420,
    lessons: 70,
    projectsCount: 4,

    prerequisites: [
      "Basic JavaScript knowledge",
      "Basic programming concepts",
    ],

    learningOutcomes: [
      "Use static typing effectively",
      "Create reusable TypeScript types",
      "Understand interfaces and generics",
      "Build typed React applications",
      "Build typed Node.js APIs",
    ],

    careerPaths: [
      "TypeScript Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
      "Full Stack Developer",
    ],

    certification: "Certificate of Completion in TypeScript Development",

    projects: [
      {
        title: "Typed Admin Dashboard",
        description:
          "Build a type-safe dashboard with reusable components and API integration.",
        technologies: [
          "TypeScript",
          "React",
          "Tailwind CSS",
        ],
      },
      {
        title: "Typed REST API",
        description:
          "Build a strongly typed backend API using Node.js and TypeScript.",
        technologies: [
          "TypeScript",
          "Node.js",
          "Express",
        ],
      },
    ],

    curriculum: [
      {
        title: "TypeScript Fundamentals",
        topics: [
          "Types",
          "Type Inference",
          "Union Types",
          "Intersection Types",
          "Enums",
        ],
      },
      {
        title: "Advanced TypeScript",
        topics: [
          "Interfaces",
          "Generics",
          "Utility Types",
          "Type Guards",
          "Decorators",
        ],
      },
      {
        title: "Frontend TypeScript",
        topics: [
          "React with TypeScript",
          "Props",
          "Hooks",
          "Forms",
          "API Types",
        ],
      },
      {
        title: "Backend TypeScript",
        topics: [
          "Node.js",
          "Express",
          "API Validation",
          "Database Types",
          "Error Handling",
        ],
      },
    ],

    tools: [
      "VS Code",
      "Node.js",
      "Git",
      "GitHub",
      "Postman",
    ],

    relatedCourses: [
      "frontend-development",
      "backend-development-node",
      "full-stack-development",
    ],

    faq: [
      {
        question: "Do I need JavaScript before learning TypeScript?",
        answer:
          "Basic JavaScript knowledge is recommended because TypeScript extends the JavaScript ecosystem.",
      },
    ],

    seo: {
      metaTitle:
        "TypeScript Course | Learn TypeScript for React & Node.js",
      metaDescription:
        "Learn TypeScript, generics, interfaces, type-safe React applications and Node.js backend development through projects.",
      keywords: [
        "TypeScript course",
        "TypeScript tutorial",
        "React TypeScript course",
        "Node TypeScript course",
        "TypeScript developer course",
      ],
      canonical: "/courses/typescript-development",
      ogTitle: "TypeScript Development Course",
      ogDescription:
        "Master TypeScript for modern frontend and backend applications.",
    },

    detailPage: {
      heroTitle: "Build Scalable Applications with TypeScript",
      heroDescription:
        "Learn how strong typing improves the maintainability and scalability of modern web applications.",
      overview:
        "A focused TypeScript track for developers working with React, Next.js and Node.js.",
      whyLearn: [
        "Better code quality",
        "Type safety",
        "Large application development",
        "React and Next.js support",
        "Node.js backend development",
      ],
      audience: [
        "JavaScript developers",
        "Frontend developers",
        "Backend developers",
        "Full stack developers",
      ],
      highlights: [
        "Advanced types",
        "Generics",
        "React",
        "Next.js",
        "Node.js",
      ],
    },

    href: "#lead",
  },

  {
    id: "dsa-algorithms",
    slug: "dsa-algorithms",
    title: "Data Structures & Algorithms",
    shortTitle: "DSA",
    category: "Programming",
    subCategory: "DSA & Problem Solving",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Master data structures, algorithms, problem solving and coding interview patterns using multiple programming languages.",

    shortDescription:
      "Master DSA and problem solving for technical interviews and software engineering.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    skills: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees",
      "Graphs",
      "Recursion",
      "Dynamic Programming",
      "Algorithms",
    ],

    technologies: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
    ],

    programmingLanguages: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
    ],

    featured: true,
    popular: true,

    rating: 4.9,
    reviewsCount: 1860,
    lessons: 180,
    projectsCount: 50,

    prerequisites: [
      "Basic programming knowledge",
      "Understanding of variables and loops",
      "Any one programming language",
    ],

    learningOutcomes: [
      "Understand core data structures",
      "Analyze time and space complexity",
      "Solve coding problems systematically",
      "Understand common interview patterns",
      "Implement algorithms in multiple languages",
      "Prepare for coding interviews",
    ],

    careerPaths: [
      "Software Engineer",
      "Backend Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "Competitive Programmer",
    ],

    certification:
      "Certificate of Completion in Data Structures & Algorithms",

    projects: [
      {
        title: "Algorithm Visualizer",
        description:
          "Build an interactive application to visualize sorting and searching algorithms.",
        technologies: [
          "JavaScript",
          "React",
          "Algorithms",
        ],
      },
      {
        title: "DSA Problem Repository",
        description:
          "Create a categorized collection of coding problems and solutions.",
        technologies: [
          "JavaScript",
          "TypeScript",
          "Node.js",
        ],
      },
    ],

    curriculum: [
      {
        title: "Complexity Analysis",
        topics: [
          "Big O",
          "Time Complexity",
          "Space Complexity",
          "Trade-offs",
        ],
      },
      {
        title: "Linear Data Structures",
        topics: [
          "Arrays",
          "Strings",
          "Linked Lists",
          "Stacks",
          "Queues",
        ],
      },
      {
        title: "Non-Linear Data Structures",
        topics: [
          "Trees",
          "Binary Trees",
          "BST",
          "Heaps",
          "Graphs",
        ],
      },
      {
        title: "Algorithms",
        topics: [
          "Sorting",
          "Searching",
          "Two Pointer",
          "Sliding Window",
          "Binary Search",
          "Greedy",
        ],
      },
      {
        title: "Advanced Problem Solving",
        topics: [
          "Backtracking",
          "Dynamic Programming",
          "Graph Algorithms",
          "Recursion",
          "Bit Manipulation",
        ],
      },
    ],

    tools: [
      "VS Code",
      "LeetCode",
      "HackerRank",
      "CodeChef",
      "GitHub",
    ],

    relatedCourses: [
      "cpp-dsa",
      "java-dsa",
      "python-dsa",
      "full-stack-development",
    ],

    faq: [
      {
        question: "Which languages can I use for DSA?",
        answer:
          "The course supports C++, Java, Python, JavaScript and TypeScript.",
      },
      {
        question: "Is DSA useful for interviews?",
        answer:
          "Yes. DSA is commonly used in technical assessments and software engineering interviews.",
      },
    ],

    seo: {
      metaTitle:
        "DSA Course | Data Structures & Algorithms in C++, Java & Python",
      metaDescription:
        "Master data structures, algorithms, complexity analysis and coding interview patterns using C++, Java, Python, JavaScript and TypeScript.",
      keywords: [
        "DSA course",
        "data structures algorithms course",
        "DSA in C++",
        "DSA in Java",
        "DSA in Python",
        "coding interview preparation",
        "algorithms course",
      ],
      canonical: "/courses/dsa-algorithms",
      ogTitle: "Data Structures & Algorithms Course",
      ogDescription:
        "Learn DSA and solve coding problems using multiple programming languages.",
    },

    detailPage: {
      heroTitle: "Master Data Structures & Algorithms",
      heroDescription:
        "Build strong problem-solving skills and prepare for software engineering coding interviews.",
      overview:
        "A structured DSA program covering core data structures, algorithms, complexity analysis and advanced problem-solving patterns.",
      whyLearn: [
        "Improve problem solving",
        "Prepare for technical interviews",
        "Understand algorithm efficiency",
        "Strengthen programming fundamentals",
        "Practice across multiple languages",
      ],
      audience: [
        "College students",
        "Software engineering aspirants",
        "Developers",
        "Competitive programmers",
      ],
      highlights: [
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "150+ problems",
        "Interview patterns",
      ],
    },

    href: "#lead",
  },

  {
    id: "cpp-dsa",
    slug: "cpp-dsa",
    title: "C++ & DSA",
    shortTitle: "C++ DSA",
    category: "Programming",
    subCategory: "C++ & DSA",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn modern C++ programming and solve data structures and algorithm problems for competitive programming and technical interviews.",

    shortDescription:
      "Master C++ programming, STL, DSA and competitive programming.",

    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "C++",
      "STL",
      "OOP",
      "Arrays",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],

    technologies: [
      "C++",
      "STL",
      "GDB",
      "CMake",
    ],

    programmingLanguages: ["C++"],

    rating: 4.9,
    reviewsCount: 920,
    lessons: 160,
    projectsCount: 35,

    prerequisites: [
      "Basic programming concepts recommended",
      "No prior C++ experience required",
    ],

    learningOutcomes: [
      "Master modern C++",
      "Use STL effectively",
      "Implement common data structures",
      "Solve algorithmic problems",
      "Prepare for coding interviews",
    ],

    careerPaths: [
      "C++ Developer",
      "Software Engineer",
      "Systems Programmer",
      "Competitive Programmer",
    ],

    certification: "Certificate of Completion in C++ & DSA",

    curriculum: [
      {
        title: "C++ Fundamentals",
        topics: [
          "Variables",
          "Pointers",
          "Functions",
          "Classes",
          "References",
        ],
      },
      {
        title: "STL",
        topics: [
          "Vector",
          "Map",
          "Set",
          "Stack",
          "Queue",
          "Priority Queue",
        ],
      },
      {
        title: "DSA",
        topics: [
          "Linked List",
          "Trees",
          "Graphs",
          "Sorting",
          "Searching",
        ],
      },
      {
        title: "Advanced Algorithms",
        topics: [
          "Greedy",
          "Backtracking",
          "Dynamic Programming",
          "Graph Algorithms",
        ],
      },
    ],

    projects: [
      {
        title: "DSA Practice Engine",
        description:
          "Build a C++ based problem-solving application for algorithm practice.",
        technologies: ["C++", "STL"],
      },
    ],

    tools: [
      "VS Code",
      "CLion",
      "GDB",
      "Git",
      "GitHub",
    ],

    relatedCourses: [
      "dsa-algorithms",
      "java-dsa",
      "python-dsa",
    ],

    faq: [
      {
        question: "Is STL covered?",
        answer:
          "Yes. STL containers, iterators, algorithms and common usage patterns are included.",
      },
    ],

    seo: {
      metaTitle:
        "C++ DSA Course | Learn C++ Data Structures & Algorithms",
      metaDescription:
        "Learn C++, STL, data structures, algorithms and competitive programming for technical interviews.",
      keywords: [
        "C++ DSA course",
        "C++ programming course",
        "DSA in C++",
        "competitive programming",
        "C++ interview preparation",
      ],
      canonical: "/courses/cpp-dsa",
      ogTitle: "C++ & DSA Course",
      ogDescription:
        "Master C++, STL and data structures for coding interviews.",
    },

    detailPage: {
      heroTitle: "Master C++ & Data Structures",
      heroDescription:
        "Build strong C++ fundamentals and solve complex algorithmic problems.",
      overview:
        "A C++ focused DSA program for students preparing for coding interviews and software engineering roles.",
      whyLearn: [
        "Learn modern C++",
        "Master STL",
        "Strengthen problem solving",
        "Prepare for interviews",
      ],
      audience: [
        "College students",
        "Competitive programmers",
        "Software engineering aspirants",
      ],
      highlights: [
        "Modern C++",
        "STL",
        "DSA",
        "Competitive Programming",
      ],
    },

    href: "#lead",
  },

  {
    id: "java-dsa",
    slug: "java-dsa",
    title: "Java & DSA",
    shortTitle: "Java DSA",
    category: "Programming",
    subCategory: "Java & DSA",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Master Java programming, collections, object-oriented programming and data structures and algorithms for technical interviews.",

    shortDescription:
      "Learn Java and DSA for software engineering interviews.",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Java",
      "OOP",
      "Collections",
      "Arrays",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],

    technologies: [
      "Java",
      "JDK",
      "Collections Framework",
      "Maven",
    ],

    programmingLanguages: ["Java"],

    rating: 4.8,
    reviewsCount: 680,
    lessons: 150,
    projectsCount: 30,

    prerequisites: [
      "Basic programming knowledge",
    ],

    learningOutcomes: [
      "Master Java syntax",
      "Understand OOP deeply",
      "Use Java Collections",
      "Solve DSA problems",
      "Prepare for technical interviews",
    ],

    careerPaths: [
      "Java Developer",
      "Software Engineer",
      "Backend Developer",
      "Application Developer",
    ],

    certification: "Certificate of Completion in Java & DSA",

    projects: [
      {
        title: "Java Algorithm Library",
        description:
          "Implement common data structures and algorithms using Java.",
        technologies: ["Java", "Collections"],
      },
    ],

    curriculum: [
      {
        title: "Core Java",
        topics: [
          "Variables",
          "Methods",
          "Classes",
          "OOP",
          "Interfaces",
        ],
      },
      {
        title: "Java Collections",
        topics: [
          "ArrayList",
          "HashMap",
          "HashSet",
          "Stack",
          "Queue",
          "PriorityQueue",
        ],
      },
      {
        title: "DSA",
        topics: [
          "Linked Lists",
          "Trees",
          "Graphs",
          "Sorting",
          "Searching",
        ],
      },
      {
        title: "Advanced Algorithms",
        topics: [
          "Greedy",
          "Backtracking",
          "Dynamic Programming",
          "Graph Algorithms",
        ],
      },
    ],

    tools: [
      "IntelliJ IDEA",
      "VS Code",
      "Git",
      "GitHub",
    ],

    relatedCourses: [
      "dsa-algorithms",
      "java-development",
      "cpp-dsa",
      "python-dsa",
    ],

    faq: [
      {
        question: "Is Core Java covered?",
        answer:
          "Yes. The course starts with Java fundamentals and progresses into collections and advanced DSA.",
      },
    ],

    seo: {
      metaTitle:
        "Java DSA Course | Data Structures & Algorithms in Java",
      metaDescription:
        "Learn Java programming, collections, data structures and algorithms for software engineering interviews.",
      keywords: [
        "Java DSA course",
        "DSA in Java",
        "Java programming course",
        "Java interview preparation",
        "Java coding course",
      ],
      canonical: "/courses/java-dsa",
      ogTitle: "Java & DSA Course",
      ogDescription:
        "Master Java programming and DSA for technical interviews.",
    },

    detailPage: {
      heroTitle: "Learn Java & Master DSA",
      heroDescription:
        "Build strong Java programming skills and solve real coding interview problems.",
      overview:
        "A Java-focused DSA program covering programming fundamentals, collections and advanced algorithms.",
      whyLearn: [
        "Master Java",
        "Learn collections",
        "Improve problem solving",
        "Prepare for interviews",
      ],
      audience: [
        "Students",
        "Java beginners",
        "Software engineering aspirants",
      ],
      highlights: [
        "Core Java",
        "Collections",
        "DSA",
        "Interview preparation",
      ],
    },

    href: "#lead",
  },

  {
    id: "python-dsa",
    slug: "python-dsa",
    title: "Python & DSA",
    shortTitle: "Python DSA",
    category: "Programming",
    subCategory: "Python & DSA",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn Python programming and master data structures, algorithms and problem-solving techniques for software engineering interviews.",

    shortDescription:
      "Master Python and DSA with structured problem-solving practice.",

    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=85",


    skills: [
      "Python",
      "Lists",
      "Dictionaries",
      "Stacks",
      "Queues",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],

    technologies: [
      "Python",
      "PyCharm",
      "Jupyter",
    ],

    programmingLanguages: ["Python"],

    rating: 4.8,
    reviewsCount: 720,
    lessons: 145,
    projectsCount: 30,

    prerequisites: [
      "Basic programming concepts recommended",
    ],

    learningOutcomes: [
      "Master Python syntax",
      "Use Python collections",
      "Implement data structures",
      "Solve algorithmic problems",
      "Prepare for technical interviews",
    ],

    careerPaths: [
      "Python Developer",
      "Software Engineer",
      "Backend Developer",
      "Data Engineer",
    ],

    certification: "Certificate of Completion in Python & DSA",

    curriculum: [
      {
        title: "Python Programming",
        topics: [
          "Functions",
          "Lists",
          "Tuples",
          "Dictionaries",
          "Sets",
          "Classes",
        ],
      },
      {
        title: "Data Structures",
        topics: [
          "Linked Lists",
          "Stacks",
          "Queues",
          "Trees",
          "Heaps",
          "Graphs",
        ],
      },
      {
        title: "Algorithms",
        topics: [
          "Sorting",
          "Searching",
          "Greedy",
          "Backtracking",
          "Dynamic Programming",
        ],
      },
    ],

    projects: [
      {
        title: "Algorithm Toolkit",
        description:
          "Implement and organize common algorithms and data structures in Python.",
        technologies: ["Python"],
      },
    ],

    tools: [
      "VS Code",
      "PyCharm",
      "Jupyter",
      "Git",
      "GitHub",
    ],

    relatedCourses: [
      "dsa-algorithms",
      "python-development",
      "ai-machine-learning",
      "data-science",
    ],

    faq: [
      {
        question: "Can Python be used for coding interviews?",
        answer:
          "Yes. Python is widely used for algorithmic problem solving and technical interviews.",
      },
    ],

    seo: {
      metaTitle:
        "Python DSA Course | Data Structures & Algorithms in Python",
      metaDescription:
        "Learn Python, data structures, algorithms and coding interview techniques through practical problem solving.",
      keywords: [
        "Python DSA course",
        "DSA in Python",
        "Python coding interview",
        "Python algorithms",
        "Python programming course",
      ],
      canonical: "/courses/python-dsa",
      ogTitle: "Python & DSA Course",
      ogDescription:
        "Master Python and data structures for coding interviews.",
    },

    detailPage: {
      heroTitle: "Master Python & Data Structures",
      heroDescription:
        "Use Python to understand data structures, algorithms and systematic problem solving.",
      overview:
        "A practical Python DSA program designed for students and developers preparing for technical interviews.",
      whyLearn: [
        "Easy-to-read syntax",
        "Strong DSA foundation",
        "Interview preparation",
        "Problem solving",
      ],
      audience: [
        "Students",
        "Python developers",
        "Interview aspirants",
      ],
      highlights: [
        "Python",
        "DSA",
        "Algorithms",
        "Coding Problems",
      ],
    },

    href: "#lead",
  },

  {
    id: "ai-machine-learning",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortTitle: "AI & Machine Learning",
    category: "Artificial Intelligence",
    subCategory: "Machine Learning",
    level: "Intermediate to Advanced",
    duration: "5–8 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn machine learning, deep learning, NLP, computer vision and modern AI application development using Python and popular AI frameworks.",

    shortDescription:
      "Build machine learning and AI applications using Python and modern frameworks.",

    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Statistics",
      "Feature Engineering",
      "Model Evaluation",
    ],

    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Jupyter",
    ],

    programmingLanguages: ["Python", "SQL"],

    featured: true,
    popular: true,

    rating: 4.9,
    reviewsCount: 1140,
    lessons: 140,
    projectsCount: 10,

    prerequisites: [
      "Basic Python knowledge",
      "Basic mathematics",
      "Basic statistics recommended",
    ],

    learningOutcomes: [
      "Understand machine learning fundamentals",
      "Build supervised and unsupervised models",
      "Train and evaluate models",
      "Work with neural networks",
      "Build NLP applications",
      "Build computer vision applications",
      "Deploy ML models",
    ],

    careerPaths: [
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Scientist",
      "Python Developer",
      "Applied AI Engineer",
    ],

    certification:
      "Professional Certificate in AI & Machine Learning",

    projects: [
      {
        title: "Customer Churn Prediction",
        description:
          "Build and evaluate a machine learning model to predict customer churn.",
        technologies: [
          "Python",
          "Pandas",
          "Scikit-learn",
        ],
      },
      {
        title: "Image Classification",
        description:
          "Build a deep learning model for image classification.",
        technologies: [
          "Python",
          "TensorFlow",
          "OpenCV",
        ],
      },
      {
        title: "NLP Application",
        description:
          "Build a text classification or sentiment analysis application.",
        technologies: [
          "Python",
          "NLP",
          "PyTorch",
        ],
      },
    ],

    curriculum: [
      {
        title: "Python for AI",
        topics: [
          "Python",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Jupyter",
        ],
      },
      {
        title: "Machine Learning",
        topics: [
          "Regression",
          "Classification",
          "Clustering",
          "Feature Engineering",
          "Model Evaluation",
        ],
      },
      {
        title: "Deep Learning",
        topics: [
          "Neural Networks",
          "CNN",
          "RNN",
          "Optimization",
          "Transfer Learning",
        ],
      },
      {
        title: "NLP",
        topics: [
          "Text Processing",
          "Embeddings",
          "Classification",
          "Transformers",
          "LLM Fundamentals",
        ],
      },
      {
        title: "Model Deployment",
        topics: [
          "FastAPI",
          "Model Serving",
          "Docker",
          "Cloud Deployment",
        ],
      },
    ],

    tools: [
      "Jupyter",
      "VS Code",
      "Google Colab",
      "Git",
      "GitHub",
      "Docker",
    ],

    relatedCourses: [
      "python-development",
      "data-science",
      "data-analytics",
      "dsa-algorithms",
    ],

    faq: [
      {
        question: "Do I need Python before starting?",
        answer:
          "Basic Python knowledge is recommended because most of the practical work is implemented in Python.",
      },
      {
        question: "Is deep learning included?",
        answer:
          "Yes. The curriculum covers neural networks, CNNs and other deep learning concepts.",
      },
    ],

    seo: {
      metaTitle:
        "AI & Machine Learning Course | Python, ML, Deep Learning & NLP",
      metaDescription:
        "Learn AI and machine learning using Python, Scikit-learn, TensorFlow and PyTorch with practical projects in ML, NLP and computer vision.",
      keywords: [
        "AI course",
        "machine learning course",
        "AI and ML course",
        "deep learning course",
        "Python machine learning",
        "NLP course",
        "computer vision course",
      ],
      canonical: "/courses/ai-machine-learning",
      ogTitle: "AI & Machine Learning Course",
      ogDescription:
        "Learn machine learning, deep learning and AI application development.",
    },

    detailPage: {
      heroTitle: "Build Real-World AI & Machine Learning Applications",
      heroDescription:
        "Learn how data is transformed into intelligent applications using machine learning and modern AI technologies.",
      overview:
        "A project-focused program covering machine learning, deep learning, NLP, computer vision and deployment.",
      whyLearn: [
        "Learn practical machine learning",
        "Build AI projects",
        "Understand model evaluation",
        "Explore NLP and computer vision",
        "Deploy models",
      ],
      audience: [
        "Python developers",
        "Students",
        "Data professionals",
        "Aspiring AI engineers",
      ],
      highlights: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Model Deployment",
      ],
    },

    href: "#lead",
  },

  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science",
    shortTitle: "Data Science",
    category: "Data",
    subCategory: "Data Science",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn Python, statistics, data analysis, visualization, machine learning and predictive modeling through practical projects.",

    shortDescription:
      "Learn data analysis, statistics and machine learning with Python.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",


    skills: [
      "Python",
      "Statistics",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Visualization",
      "Machine Learning",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "SQL",
    ],

    programmingLanguages: [
      "Python",
      "SQL",
    ],

    rating: 4.8,
    reviewsCount: 850,
    lessons: 130,
    projectsCount: 8,

    prerequisites: [
      "Basic mathematics",
      "Basic computer knowledge",
    ],

    learningOutcomes: [
      "Clean and analyze datasets",
      "Use Python for data science",
      "Perform statistical analysis",
      "Create data visualizations",
      "Build predictive models",
      "Work with SQL",
    ],

    careerPaths: [
      "Data Scientist",
      "Data Analyst",
      "ML Analyst",
      "Junior ML Engineer",
      "Business Intelligence Analyst",
    ],

    certification: "Certificate of Completion in Data Science",

    projects: [
      {
        title: "Sales Analysis",
        description:
          "Analyze a business dataset and identify sales trends and insights.",
        technologies: [
          "Python",
          "Pandas",
          "Matplotlib",
        ],
      },
      {
        title: "Predictive Model",
        description:
          "Develop and evaluate a machine learning prediction model.",
        technologies: [
          "Python",
          "Scikit-learn",
          "Pandas",
        ],
      },
    ],

    curriculum: [
      {
        title: "Python for Data Science",
        topics: [
          "Python",
          "NumPy",
          "Pandas",
          "Jupyter",
        ],
      },
      {
        title: "Statistics",
        topics: [
          "Probability",
          "Distributions",
          "Mean",
          "Variance",
          "Hypothesis Testing",
        ],
      },
      {
        title: "Data Analysis",
        topics: [
          "Data Cleaning",
          "EDA",
          "Feature Engineering",
          "Data Visualization",
        ],
      },
      {
        title: "Machine Learning",
        topics: [
          "Regression",
          "Classification",
          "Clustering",
          "Evaluation",
        ],
      },
    ],

    tools: [
      "Jupyter",
      "Google Colab",
      "VS Code",
      "Git",
      "GitHub",
    ],

    relatedCourses: [
      "data-analytics",
      "ai-machine-learning",
      "python-development",
      "python-dsa",
    ],

    faq: [
      {
        question: "Is machine learning included?",
        answer:
          "Yes. The course includes foundational machine learning and predictive modeling.",
      },
    ],

    seo: {
      metaTitle:
        "Data Science Course | Python, Statistics, SQL & Machine Learning",
      metaDescription:
        "Learn data science using Python, Pandas, NumPy, SQL, statistics and machine learning through practical projects.",
      keywords: [
        "data science course",
        "Python data science",
        "machine learning course",
        "data analysis course",
        "statistics course",
        "SQL data science",
      ],
      canonical: "/courses/data-science",
      ogTitle: "Data Science Course",
      ogDescription:
        "Learn Python, statistics, data analysis and machine learning.",
    },

    detailPage: {
      heroTitle: "Learn Data Science with Python",
      heroDescription:
        "Turn raw datasets into useful insights using statistics, Python and machine learning.",
      overview:
        "A practical data science program covering data analysis, statistics, visualization and machine learning.",
      whyLearn: [
        "Learn Python for data",
        "Analyze real datasets",
        "Understand statistics",
        "Build predictive models",
      ],
      audience: [
        "Students",
        "Analysts",
        "Python beginners",
        "Data professionals",
      ],
      highlights: [
        "Python",
        "SQL",
        "Statistics",
        "Pandas",
        "Machine Learning",
      ],
    },

    href: "#lead",
  },

  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics",
    shortTitle: "Data Analytics",
    category: "Data",
    subCategory: "Analytics & BI",
    level: "Beginner to Job Ready",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn Excel, SQL, Python, data visualization, Power BI and business analytics through practical business datasets.",

    shortDescription:
      "Learn data analysis, SQL, Excel and Power BI for business decision-making.",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Visualization",
      "Dashboards",
      "Business Analytics",
    ],

    technologies: [
      "Microsoft Excel",
      "SQL",
      "Python",
      "Power BI",
      "Pandas",
    ],

    programmingLanguages: [
      "Python",
      "SQL",
    ],

    rating: 4.7,
    reviewsCount: 640,
    lessons: 100,
    projectsCount: 6,

    prerequisites: [
      "Basic computer skills",
      "No prior analytics experience required",
    ],

    learningOutcomes: [
      "Analyze structured datasets",
      "Write SQL queries",
      "Build Power BI dashboards",
      "Use Excel for analytics",
      "Create business reports",
      "Present actionable insights",
    ],

    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "BI Analyst",
      "Reporting Analyst",
      "Junior Data Scientist",
    ],

    certification:
      "Certificate of Completion in Data Analytics",

    projects: [
      {
        title: "Sales Dashboard",
        description:
          "Build an interactive business dashboard using Power BI.",
        technologies: [
          "Power BI",
          "SQL",
          "Excel",
        ],
      },
      {
        title: "Customer Analysis",
        description:
          "Analyze customer data and produce actionable business insights.",
        technologies: [
          "Python",
          "Pandas",
          "SQL",
        ],
      },
    ],

    curriculum: [
      {
        title: "Excel Analytics",
        topics: [
          "Formulas",
          "Pivot Tables",
          "Charts",
          "Power Query",
        ],
      },
      {
        title: "SQL",
        topics: [
          "SELECT",
          "JOIN",
          "GROUP BY",
          "Subqueries",
          "Window Functions",
        ],
      },
      {
        title: "Python Analytics",
        topics: [
          "Pandas",
          "NumPy",
          "Data Cleaning",
          "Visualization",
        ],
      },
      {
        title: "Power BI",
        topics: [
          "Data Modeling",
          "DAX",
          "Dashboards",
          "Reports",
        ],
      },
    ],

    tools: [
      "Excel",
      "Power BI",
      "SQL Server",
      "Python",
      "VS Code",
    ],

    relatedCourses: [
      "data-science",
      "python-development",
      "ai-machine-learning",
    ],

    faq: [
      {
        question: "Is Power BI included?",
        answer:
          "Yes. Power BI dashboards, data modeling and DAX fundamentals are included.",
      },
      {
        question: "Is SQL included?",
        answer:
          "Yes. SQL is an important part of the analytics curriculum.",
      },
    ],

    seo: {
      metaTitle:
        "Data Analytics Course | Excel, SQL, Python & Power BI",
      metaDescription:
        "Learn data analytics using Excel, SQL, Python, Pandas and Power BI with practical dashboards and business projects.",
      keywords: [
        "data analytics course",
        "data analyst course",
        "SQL course",
        "Power BI course",
        "Excel analytics course",
        "Python data analytics",
      ],
      canonical: "/courses/data-analytics",
      ogTitle: "Data Analytics Course",
      ogDescription:
        "Build practical data analytics skills with Excel, SQL, Python and Power BI.",
    },

    detailPage: {
      heroTitle: "Become a Job-Ready Data Analyst",
      heroDescription:
        "Learn how to clean, analyze and visualize data to support real business decisions.",
      overview:
        "A practical analytics program covering Excel, SQL, Python and Power BI.",
      whyLearn: [
        "Learn practical analytics",
        "Build dashboards",
        "Master SQL",
        "Work with business datasets",
      ],
      audience: [
        "Students",
        "Career switchers",
        "Business professionals",
        "Aspiring analysts",
      ],
      highlights: [
        "Excel",
        "SQL",
        "Python",
        "Power BI",
        "Dashboards",
      ],
    },

    href: "#lead",
  },

  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    category: "Cybersecurity",
    subCategory: "Security Fundamentals",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn networking, Linux, security fundamentals, application security, monitoring, incident response and secure development practices.",

    shortDescription:
      "Build practical cybersecurity knowledge from networking and Linux to application security.",

    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",


    skills: [
      "Networking",
      "Linux",
      "Security Fundamentals",
      "Web Security",
      "Application Security",
      "Incident Response",
      "Security Monitoring",
    ],

    technologies: [
      "Linux",
      "Wireshark",
      "Burp Suite",
      "Nmap",
      "Python",
      "Docker",
    ],

    programmingLanguages: [
      "Python",
      "Bash",
      "JavaScript",
    ],

    rating: 4.8,
    reviewsCount: 560,
    lessons: 120,
    projectsCount: 8,

    prerequisites: [
      "Basic computer knowledge",
      "Basic networking recommended",
    ],

    learningOutcomes: [
      "Understand networking fundamentals",
      "Work confidently with Linux",
      "Identify common security risks",
      "Understand web application security",
      "Perform defensive security analysis",
      "Understand security monitoring",
    ],

    careerPaths: [
      "Security Analyst",
      "Cybersecurity Analyst",
      "SOC Analyst",
      "Application Security Analyst",
      "Security Engineer",
    ],

    certification:
      "Certificate of Completion in Cybersecurity",

    curriculum: [
      {
        title: "Networking Fundamentals",
        topics: [
          "TCP/IP",
          "DNS",
          "HTTP",
          "Ports",
          "Routing",
          "Firewalls",
        ],
      },
      {
        title: "Linux Security",
        topics: [
          "Linux Commands",
          "Permissions",
          "Processes",
          "Logs",
          "Shell Scripting",
        ],
      },
      {
        title: "Web Security",
        topics: [
          "Authentication",
          "Authorization",
          "OWASP Concepts",
          "Secure APIs",
          "Session Security",
        ],
      },
      {
        title: "Security Operations",
        topics: [
          "Monitoring",
          "Logging",
          "Incident Response",
          "Threat Detection",
        ],
      },
    ],

    projects: [
      {
        title: "Secure Web Application Review",
        description:
          "Analyze a deliberately vulnerable application in a controlled training environment and document defensive findings.",
        technologies: [
          "Linux",
          "Burp Suite",
          "OWASP Concepts",
        ],
      },
    ],

    tools: [
      "Kali Linux",
      "Wireshark",
      "Burp Suite",
      "Nmap",
      "Docker",
      "Git",
    ],

    relatedCourses: [
      "ethical-hacking",
      "cloud-devops",
      "python-development",
    ],

    faq: [
      {
        question: "Is practical security testing included?",
        answer:
          "Yes. Practical security concepts are covered using controlled training environments and intentionally vulnerable applications.",
      },
    ],

    seo: {
      metaTitle:
        "Cybersecurity Course | Networking, Linux, Web & Application Security",
      metaDescription:
        "Learn cybersecurity fundamentals, networking, Linux, web security, application security and security operations through practical training.",
      keywords: [
        "cybersecurity course",
        "cyber security course",
        "security analyst course",
        "network security course",
        "Linux security course",
        "application security course",
      ],
      canonical: "/courses/cybersecurity",
      ogTitle: "Cybersecurity Course",
      ogDescription:
        "Build practical cybersecurity skills across networking, Linux and application security.",
    },

    detailPage: {
      heroTitle: "Build Practical Cybersecurity Skills",
      heroDescription:
        "Understand how modern systems are protected across networks, applications and infrastructure.",
      overview:
        "A practical cybersecurity program covering Linux, networking, application security and security operations.",
      whyLearn: [
        "Understand modern security",
        "Learn networking",
        "Work with Linux",
        "Understand web security",
        "Practice defensive security",
      ],
      audience: [
        "IT students",
        "Developers",
        "System administrators",
        "Cybersecurity beginners",
      ],
      highlights: [
        "Networking",
        "Linux",
        "Web Security",
        "Security Operations",
      ],
    },

    href: "#lead",
  },

  {
    id: "ethical-hacking",
    slug: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    shortTitle: "Ethical Hacking",
    category: "Cybersecurity",
    subCategory: "Ethical Hacking",
    level: "Intermediate to Advanced",
    duration: "4–7 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn ethical security testing, reconnaissance, vulnerability assessment, web application security and penetration testing in authorized lab environments.",

    shortDescription:
      "Learn ethical hacking and security testing through controlled, authorized lab environments.",

    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Linux",
      "Networking",
      "Reconnaissance",
      "Vulnerability Assessment",
      "Web Security",
      "Penetration Testing",
      "Security Reporting",
    ],

    technologies: [
      "Kali Linux",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Python",
      "Bash",
    ],

    programmingLanguages: [
      "Python",
      "Bash",
      "JavaScript",
    ],

    featured: true,
    popular: true,

    rating: 4.9,
    reviewsCount: 730,
    lessons: 110,
    projectsCount: 7,

    prerequisites: [
      "Basic networking knowledge",
      "Basic Linux knowledge recommended",
      "Understanding of web fundamentals",
    ],

    learningOutcomes: [
      "Understand reconnaissance methodology",
      "Assess vulnerabilities in authorized environments",
      "Analyze web application security",
      "Understand common attack and defense concepts",
      "Produce structured security reports",
      "Practice using security tools responsibly",
    ],

    careerPaths: [
      "Penetration Tester",
      "Security Analyst",
      "Application Security Analyst",
      "Cybersecurity Consultant",
      "Security Engineer",
    ],

    certification:
      "Certificate of Completion in Ethical Hacking",

    projects: [
      {
        title: "Web Security Lab",
        description:
          "Perform security assessments against an intentionally vulnerable training application.",
        technologies: [
          "Kali Linux",
          "Burp Suite",
          "OWASP Concepts",
        ],
      },
      {
        title: "Security Assessment Report",
        description:
          "Conduct an authorized lab assessment and document findings, severity and defensive recommendations.",
        technologies: [
          "Nmap",
          "Wireshark",
          "Linux",
        ],
      },
    ],

    curriculum: [
      {
        title: "Networking & Linux",
        topics: [
          "TCP/IP",
          "Ports",
          "DNS",
          "Linux Commands",
          "Shell Scripting",
        ],
      },
      {
        title: "Reconnaissance",
        topics: [
          "Asset Discovery",
          "Service Enumeration",
          "Information Gathering",
          "Security Documentation",
        ],
      },
      {
        title: "Web Application Security",
        topics: [
          "Authentication",
          "Authorization",
          "Input Validation",
          "OWASP Top 10",
          "API Security",
        ],
      },
      {
        title: "Penetration Testing",
        topics: [
          "Security Assessment",
          "Vulnerability Validation",
          "Reporting",
          "Remediation",
        ],
      },
    ],

    tools: [
      "Kali Linux",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Git",
      "Docker",
    ],

    relatedCourses: [
      "cybersecurity",
      "cloud-devops",
      "python-development",
    ],

    faq: [
      {
        question: "Is ethical hacking taught in a safe environment?",
        answer:
          "Yes. Practical exercises should be performed only against intentionally vulnerable labs, test systems or systems where explicit authorization has been provided.",
      },
      {
        question: "Do I need Linux knowledge?",
        answer:
          "Basic Linux knowledge is recommended and reinforced during the course.",
      },
    ],

    seo: {
      metaTitle:
        "Ethical Hacking Course | Penetration Testing & Web Security",
      metaDescription:
        "Learn ethical hacking, penetration testing, web security and vulnerability assessment through authorized cybersecurity labs.",
      keywords: [
        "ethical hacking course",
        "penetration testing course",
        "cybersecurity course",
        "web security course",
        "ethical hacking training",
        "pentesting course",
      ],
      canonical: "/courses/ethical-hacking",
      ogTitle: "Ethical Hacking & Penetration Testing",
      ogDescription:
        "Learn ethical hacking and penetration testing using controlled security labs.",
    },

    detailPage: {
      heroTitle: "Learn Ethical Hacking Responsibly",
      heroDescription:
        "Develop practical security testing skills using authorized labs and controlled environments.",
      overview:
        "An ethical security testing program covering networking, reconnaissance, web security and vulnerability assessment.",
      whyLearn: [
        "Understand security testing",
        "Learn security tools",
        "Practice in controlled labs",
        "Learn vulnerability reporting",
      ],
      audience: [
        "Cybersecurity students",
        "Developers",
        "IT professionals",
        "Security beginners",
      ],
      highlights: [
        "Kali Linux",
        "Burp Suite",
        "Nmap",
        "Web Security",
        "Pentesting",
      ],
    },

    href: "#lead",
  },

  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    category: "Cloud & DevOps",
    subCategory: "Cloud Engineering",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    mode: "Online",
    language: ["English"],

    description:
      "Learn Linux, cloud infrastructure, Docker, CI/CD, deployment automation, monitoring and modern DevOps practices.",

    shortDescription:
      "Learn cloud infrastructure, containers, CI/CD and deployment automation.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",

    skills: [
      "Linux",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Monitoring",
      "Cloud Infrastructure",
    ],

    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "Nginx",
      "Linux",
    ],

    programmingLanguages: [
      "Bash",
      "Python",
      "YAML",
    ],

    rating: 4.7,
    reviewsCount: 540,
    lessons: 95,
    projectsCount: 6,

    prerequisites: [
      "Basic Linux knowledge",
      "Basic networking knowledge",
      "Basic programming knowledge recommended",
    ],

    learningOutcomes: [
      "Understand cloud infrastructure",
      "Deploy applications",
      "Create Docker containers",
      "Build CI/CD pipelines",
      "Understand Kubernetes fundamentals",
      "Monitor production systems",
    ],

    careerPaths: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
      "Platform Engineer",
      "Cloud Administrator",
    ],

    certification:
      "Certificate of Completion in Cloud & DevOps",

    projects: [
      {
        title: "Containerized Application",
        description:
          "Containerize a full-stack application and create a repeatable deployment workflow.",
        technologies: [
          "Docker",
          "Node.js",
          "Nginx",
        ],
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Build an automated test and deployment pipeline.",
        technologies: [
          "GitHub Actions",
          "Docker",
          "AWS",
        ],
      },
    ],

    curriculum: [
      {
        title: "Linux & Networking",
        topics: [
          "Linux",
          "Shell",
          "Processes",
          "Networking",
          "SSH",
        ],
      },
      {
        title: "Cloud Fundamentals",
        topics: [
          "AWS",
          "Compute",
          "Storage",
          "Networking",
          "IAM",
        ],
      },
      {
        title: "Containers",
        topics: [
          "Docker",
          "Images",
          "Containers",
          "Volumes",
          "Networks",
        ],
      },
      {
        title: "DevOps",
        topics: [
          "Git",
          "CI/CD",
          "GitHub Actions",
          "Kubernetes",
          "Monitoring",
        ],
      },
    ],

    tools: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "Linux",
    ],

    relatedCourses: [
      "backend-development-node",
      "full-stack-development",
      "cybersecurity",
    ],

    faq: [
      {
        question: "Is AWS included?",
        answer:
          "Yes. The course introduces AWS cloud infrastructure and deployment concepts.",
      },
      {
        question: "Is Docker covered?",
        answer:
          "Yes. Docker is covered from container fundamentals through application deployment workflows.",
      },
    ],

    seo: {
      metaTitle:
        "Cloud & DevOps Course | AWS, Docker, Kubernetes & CI/CD",
      metaDescription:
        "Learn cloud computing and DevOps with AWS, Docker, Kubernetes, CI/CD, Linux, Terraform and deployment automation.",
      keywords: [
        "DevOps course",
        "cloud computing course",
        "AWS course",
        "Docker course",
        "Kubernetes course",
        "CI CD course",
        "DevOps engineer course",
      ],
      canonical: "/courses/cloud-devops",
      ogTitle: "Cloud & DevOps Course",
      ogDescription:
        "Learn AWS, Docker, Kubernetes, CI/CD and cloud deployment.",
    },

    detailPage: {
      heroTitle: "Learn Cloud & DevOps",
      heroDescription:
        "Build, deploy and operate applications using modern cloud and DevOps practices.",
      overview:
        "A practical Cloud and DevOps program covering Linux, AWS, Docker, CI/CD and infrastructure fundamentals.",
      whyLearn: [
        "Learn cloud infrastructure",
        "Automate deployments",
        "Understand containers",
        "Build CI/CD pipelines",
        "Learn infrastructure practices",
      ],
      audience: [
        "Developers",
        "IT students",
        "System administrators",
        "Cloud beginners",
      ],
      highlights: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Linux",
      ],
    },

    href: "#lead",
  },
];