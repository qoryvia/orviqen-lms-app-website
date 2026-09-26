import {
  FiBarChart2,
  FiCloud,
  FiCode,
  FiDatabase,
  FiLock,
  FiCpu,
} from "react-icons/fi";

export type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  skills: string[];
  href: string;
  icon: typeof FiCode;
};

export const courseCategories = [
  "All",
  "Software Development",
  "Data",
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud & DevOps",
];

export const courses: Course[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Software Development",
    level: "Beginner to Advanced",
    duration: "6–9 Months",
    description:
      "Learn frontend, backend, databases, APIs and deployment through practical application development.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "SQL"],
    href: "#lead",
    icon: FiCode,
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    category: "Software Development",
    level: "Beginner to Intermediate",
    duration: "4–6 Months",
    description:
      "Build responsive and accessible interfaces using modern frontend development tools and practices.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    href: "#lead",
    icon: FiCode,
  },
  {
    id: "data-science",
    title: "Data Science",
    category: "Data",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    description:
      "Learn Python, statistics, data analysis, visualization and machine learning through projects.",
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
    description:
      "Learn to analyze data, build dashboards and communicate insights for practical business problems.",
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
    description:
      "Understand machine learning, deep learning and modern AI applications through practical projects.",
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
    description:
      "Develop practical knowledge of networking, Linux, security concepts and application security.",
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
    description:
      "Learn ethical security testing concepts, vulnerability assessment and practical security workflows.",
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
    description:
      "Learn cloud infrastructure, containers, deployment automation, CI/CD and application operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    skills: ["Linux", "Docker", "AWS", "CI/CD", "Monitoring"],
    href: "#lead",
    icon: FiCloud,
  },
];