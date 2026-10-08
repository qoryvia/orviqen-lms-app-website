export interface Instructor {
  id: string;
  name: string;
  initials: string;
  role: string;
  shortRole: string;
  location: string;
  experience: string;
  expertise: string[];
  courses: number;
  students: string;
  rating: number;
  bio: string;
  skills: string[];
  featured?: boolean;
}

export const instructorCategories = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Data & AI",
  "Cloud & DevOps",
  "Business & Management",
];

export const instructors: Instructor[] = [
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    initials: "RV",
    role: "Senior Full Stack Instructor",
    shortRole: "Full Stack Development",
    location: "Delhi NCR",
    experience: "10+ years",
    expertise: [
      "Frontend Development",
      "Backend Development",
    ],
    courses: 8,
    students: "6.2K+",
    rating: 4.9,
    bio:
      "Rahul helps learners build strong foundations in modern web development and turn concepts into production-ready applications.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "REST APIs",
    ],
    featured: true,
  },
  {
    id: "neha-sharma",
    name: "Neha Sharma",
    initials: "NS",
    role: "Data & AI Instructor",
    shortRole: "Data & Artificial Intelligence",
    location: "Bengaluru",
    experience: "8+ years",
    expertise: ["Data & AI"],
    courses: 6,
    students: "4.8K+",
    rating: 4.8,
    bio:
      "Neha focuses on making data and AI concepts practical, understandable and useful for learners at different experience levels.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "AI Fundamentals",
    ],
  },
  {
    id: "aman-kumar",
    name: "Aman Kumar",
    initials: "AK",
    role: "Backend & API Instructor",
    shortRole: "Backend Engineering",
    location: "Pune",
    experience: "9+ years",
    expertise: ["Backend Development"],
    courses: 7,
    students: "5.1K+",
    rating: 4.9,
    bio:
      "Aman teaches backend engineering through APIs, databases, architecture and practical application development.",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    id: "priya-singh",
    name: "Priya Singh",
    initials: "PS",
    role: "Cloud & DevOps Instructor",
    shortRole: "Cloud & DevOps",
    location: "Hyderabad",
    experience: "9+ years",
    expertise: ["Cloud & DevOps"],
    courses: 5,
    students: "3.9K+",
    rating: 4.8,
    bio:
      "Priya helps learners understand cloud infrastructure, deployment workflows and DevOps practices through practical projects.",
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "Linux",
      "Kubernetes",
    ],
  },
  {
    id: "rohit-mehta",
    name: "Rohit Mehta",
    initials: "RM",
    role: "Frontend Engineering Instructor",
    shortRole: "Frontend Development",
    location: "Mumbai",
    experience: "7+ years",
    expertise: ["Frontend Development"],
    courses: 5,
    students: "4.4K+",
    rating: 4.8,
    bio:
      "Rohit specialises in modern frontend engineering and teaches learners how to create fast, accessible and maintainable interfaces.",
    skills: [
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI Architecture",
    ],
  },
  {
    id: "simran-kaur",
    name: "Simran Kaur",
    initials: "SK",
    role: "Business & Management Instructor",
    shortRole: "Business & Management",
    location: "Gurugram",
    experience: "11+ years",
    expertise: ["Business & Management"],
    courses: 6,
    students: "5.3K+",
    rating: 4.9,
    bio:
      "Simran combines academic frameworks with practical business thinking to help learners develop professional and decision-making skills.",
    skills: [
      "Business Strategy",
      "Product Management",
      "Leadership",
      "Communication",
      "Operations",
    ],
  },
  {
    id: "vikas-yadav",
    name: "Vikas Yadav",
    initials: "VY",
    role: "Software Engineering Instructor",
    shortRole: "Backend Engineering",
    location: "Lucknow",
    experience: "8+ years",
    expertise: ["Backend Development"],
    courses: 6,
    students: "4.1K+",
    rating: 4.7,
    bio:
      "Vikas focuses on helping learners understand software engineering fundamentals, databases and scalable application development.",
    skills: [
      "Java",
      "Spring Boot",
      "SQL",
      "REST APIs",
      "System Design",
    ],
  },
  {
    id: "anjali-gupta",
    name: "Anjali Gupta",
    initials: "AG",
    role: "Data Analytics Instructor",
    shortRole: "Data & Analytics",
    location: "Noida",
    experience: "7+ years",
    expertise: ["Data & AI"],
    courses: 4,
    students: "3.2K+",
    rating: 4.8,
    bio:
      "Anjali helps learners turn raw data into useful insights through practical analytics workflows and business-focused projects.",
    skills: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Analytics",
    ],
  },
];

export const instructorStats = [
  {
    value: "40+",
    label: "Courses & learning paths",
  },
  {
    value: "30K+",
    label: "Learners supported",
  },
  {
    value: "4.8/5",
    label: "Average learner rating",
  },
];