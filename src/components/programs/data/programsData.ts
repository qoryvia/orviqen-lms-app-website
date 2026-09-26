import {
  FiBarChart2,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLock,
} from "react-icons/fi";

export type Program = {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  format: string;
  description: string;
  image: string;
  skills: string[];
  href: string;
  icon: typeof FiCode;
  featured?: boolean;
};

export const programCategories = [
  "All",
  "Software Development",
  "Data",
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud & DevOps",
];

export const programs: Program[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Software Development",
    level: "Beginner to Advanced",
    duration: "6–9 Months",
    format: "Project Based",
    description:
      "Build modern web applications across frontend, backend, databases, APIs and deployment.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "SQL"],
    href: "#lead",
    icon: FiCode,
    featured: true,
  },
  {
    id: "data-science",
    title: "Data Science",
    category: "Data",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    format: "Project Based",
    description:
      "Develop practical skills in Python, statistics, data analysis, visualization and machine learning.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    skills: ["Python", "Pandas", "NumPy", "Statistics", "ML"],
    href: "#lead",
    icon: FiDatabase,
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "Data",
    level: "Beginner to Job Ready",
    duration: "4–6 Months",
    format: "Practical Learning",
    description:
      "Learn how to clean, analyze and visualize data and turn it into useful business insights.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    skills: ["Excel", "SQL", "Python", "Power BI", "Dashboards"],
    href: "#lead",
    icon: FiBarChart2,
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    category: "AI & Machine Learning",
    level: "Intermediate to Advanced",
    duration: "5–8 Months",
    format: "Project Based",
    description:
      "Learn machine learning, deep learning and practical AI concepts through real applications.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85",
    skills: ["Python", "ML", "Deep Learning", "NLP", "AI"],
    href: "#lead",
    icon: FiCpu,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Cybersecurity",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    format: "Practical Learning",
    description:
      "Build foundational and practical knowledge of networks, Linux, application security and security workflows.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    skills: ["Linux", "Networking", "Security", "Web Security"],
    href: "#lead",
    icon: FiLock,
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    category: "Cybersecurity",
    level: "Intermediate to Advanced",
    duration: "4–7 Months",
    format: "Hands-on Learning",
    description:
      "Understand ethical security testing, vulnerability assessment and practical security methodologies.",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=85",
    skills: ["Linux", "Pentesting", "Web Security", "Networking"],
    href: "#lead",
    icon: FiLock,
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    category: "Cloud & DevOps",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    format: "Project Based",
    description:
      "Learn cloud infrastructure, containers, CI/CD, deployment automation and modern application operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    skills: ["Linux", "Docker", "AWS", "CI/CD", "Monitoring"],
    href: "#lead",
    icon: FiCloud,
  },
];