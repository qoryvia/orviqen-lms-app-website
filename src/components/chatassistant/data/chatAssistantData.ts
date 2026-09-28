export type LeadStep =
  | "idle"
  | "name"
  | "phone"
  | "course"
  | "submitted";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export interface ChatLead {
  name: string;
  phone: string;
  course: string;
}

export interface AssistantCourse {
  id: string;
  name: string;
}

export const CHAT_ASSISTANT_CONFIG = {
  title: "Learning Assistant",
  subtitle: "Ask about courses, roadmaps and careers.",
  whatsappNumber: "919999999999",
  whatsappMessage:
    "Hi, I need help choosing a course and learning roadmap.",
  apiEndpoint:
    process.env.NEXT_PUBLIC_CHAT_ASSISTANT_API_URL ||
    "/api/v1/chatbot-leads",
};

export const assistantCourses: AssistantCourse[] = [
  {
    id: "frontend-development",
    name: "Frontend Development",
  },
  {
    id: "backend-development",
    name: "Backend Development",
  },
  {
    id: "full-stack-development",
    name: "Full Stack Development",
  },
  {
    id: "python-development",
    name: "Python Development",
  },
  {
    id: "java-development",
    name: "Java Development",
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
  },
  {
    id: "data-science",
    name: "Data Science",
  },
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
  },
  {
    id: "not-sure",
    name: "Not sure yet",
  },
];

export const assistantSuggestions = [
  "Which course should I start with?",
  "Help me choose a roadmap",
  "I am a beginner. Where should I start?",
  "How can I prepare for a tech career?",
];

interface AssistantKnowledge {
  keywords: string[];
  answer: string;
}

const assistantKnowledge: AssistantKnowledge[] = [
  {
    keywords: [
      "which course",
      "what course",
      "choose course",
      "course should i",
      "best course",
    ],
    answer:
      "I can help you choose a course based on your goal, current experience and the type of work you want to do. Tell me which area interests you — software development, data, AI, cybersecurity, cloud or mobile development.",
  },
  {
    keywords: [
      "roadmap",
      "learning path",
      "learning roadmap",
      "what should i learn",
      "learn next",
    ],
    answer:
      "A good roadmap usually follows this sequence: fundamentals → core skills → practice → projects → advanced skills → interview or career preparation. Tell me your target domain and I can help you break it into stages.",
  },
  {
    keywords: [
      "beginner",
      "beginner start",
      "no experience",
      "new to",
      "fresher",
    ],
    answer:
      "Start with one domain instead of learning everything together. For software, you can begin with frontend, backend or Python. For data, start with Python, SQL and data fundamentals. I can also help you choose a path based on your goal.",
  },
  {
    keywords: [
      "frontend",
      "front end",
      "web development",
    ],
    answer:
      "A frontend path generally starts with HTML, CSS and JavaScript, followed by a framework such as React, Git, APIs, responsive design and real projects.",
  },
  {
    keywords: [
      "backend",
      "back end",
      "server",
      "api development",
    ],
    answer:
      "Backend development usually covers programming fundamentals, APIs, databases, authentication, server-side architecture, testing and deployment.",
  },
  {
    keywords: [
      "full stack",
      "fullstack",
    ],
    answer:
      "Full stack development combines frontend and backend skills. A practical path is frontend fundamentals → React or another framework → backend → databases → APIs → authentication → deployment → complete projects.",
  },
  {
    keywords: [
      "python",
    ],
    answer:
      "Python is useful for development, automation, data and AI. A structured path can start with Python fundamentals, problem solving, projects and then specialization into backend, data or AI.",
  },
  {
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
    ],
    answer:
      "A sensible AI/ML path starts with Python, mathematics and statistics fundamentals, data handling, machine learning concepts, projects and then more advanced AI topics.",
  },
  {
    keywords: [
      "data analytics",
      "analytics",
      "data analyst",
      "sql",
    ],
    answer:
      "A data analytics path can start with spreadsheets and data fundamentals, followed by SQL, Python, visualization and portfolio projects.",
  },
  {
    keywords: [
      "data science",
      "data scientist",
    ],
    answer:
      "Data science usually combines Python, statistics, SQL, data analysis, machine learning and practical projects.",
  },
  {
    keywords: [
      "cybersecurity",
      "cyber security",
      "ethical hacking",
      "security",
    ],
    answer:
      "Cybersecurity fundamentals include networking, operating systems, Linux and security concepts. From there, you can specialize in application security, cloud security, penetration testing and other areas.",
  },
  {
    keywords: [
      "cloud",
      "devops",
      "aws",
      "azure",
      "docker",
    ],
    answer:
      "Cloud and DevOps learning commonly covers Linux, networking, Git, containers, CI/CD, cloud platforms and infrastructure fundamentals.",
  },
  {
    keywords: [
      "career",
      "job",
      "placement",
      "interview",
      "technical interview",
    ],
    answer:
      "For a technical career, combine fundamentals with practical projects, problem solving, a clear portfolio and interview preparation. Consistent practice is more useful than simply completing lessons.",
  },
  {
    keywords: [
      "certificate",
      "certification",
    ],
    answer:
      "Certification details depend on the specific course. Tell me which course you're considering and I can guide you toward the relevant information.",
  },
];

export const getAssistantAnswer = (
  question: string
): string => {
  const normalized = question.toLowerCase().trim();

  const matched = assistantKnowledge.find((item) =>
    item.keywords.some((keyword) =>
      normalized.includes(keyword)
    )
  );

  if (matched) {
    return matched.answer;
  }

  return "I can help with course selection, learning roadmaps, programming, AI, data, cybersecurity, cloud and career preparation. Tell me what you want to learn or what career you're working toward.";
};

export const getCourseName = (
  courseId: string
): string => {
  return (
    assistantCourses.find(
      (course) => course.id === courseId
    )?.name || courseId
  );
};