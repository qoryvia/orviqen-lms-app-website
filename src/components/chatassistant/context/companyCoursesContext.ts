export interface CompanyCourse {
  name: string;
  category: string;
  slug: string;
}

const slugify = (
  value: string,
) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const courseCategories: Record<
  string,
  string[]
> = {
  "Software Development": [
    "MERN Stack Development",
    "MEAN Stack Development",
    "MEVN Stack Development",
    "Java Full Stack Development",
    "Python Full Stack Development",
    "PHP Full Stack Development",
    ".NET Full Stack Development",
    "C++ Software Development",
    "Python Software Development",
    "Java Software Development",
    "JavaScript Development",
    "TypeScript Development",
    "Go Development",
    "Rust Development",
    "Data Structures & Algorithms",
    "Competitive Programming",
  ],

  "Web Development": [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "React.js Development",
    "Next.js Development",
    "Angular Development",
    "Vue.js Development",
    "Node.js Development",
    "Express.js Development",
    "REST API Development",
    "GraphQL Development",
    "WordPress Development",
    "E-Commerce Development",
  ],

  "Mobile App Development": [
    "Android App Development",
    "iOS App Development",
    "Flutter App Development",
    "React Native App Development",
    "Kotlin App Development",
    "Swift App Development",
    "Cross-Platform App Development",
    "Mobile UI/UX Development",
  ],

  "Data & Database": [
    "SQL Development",
    "MySQL Database Development",
    "PostgreSQL Database Development",
    "Oracle Database Development",
    "Microsoft SQL Server Development",
    "MongoDB Development",
    "Redis Development",
    "Database Administration",
    "Database Management",
    "Data Engineering",
    "Data Warehousing",
  ],

  "Data Science & Analytics": [
    "Data Analytics",
    "Data Science",
    "Business Analytics",
    "Business Intelligence",
    "Excel Data Analytics",
    "Power BI Development",
    "Tableau Development",
    "Python Data Analytics",
    "Statistical Data Analysis",
    "Big Data Analytics",
  ],

  "Artificial Intelligence & Machine Learning": [
    "Artificial Intelligence Development",
    "Machine Learning Development",
    "Deep Learning Development",
    "Generative AI Development",
    "Large Language Model Development",
    "LLM Application Development",
    "AI Agent Development",
    "Natural Language Processing",
    "Computer Vision Development",
    "Reinforcement Learning",
    "AI Automation Development",
    "MLOps Development",
  ],

  Cybersecurity: [
    "Cybersecurity",
    "Ethical Hacking",
    "Cybersecurity Analyst Training",
    "SOC Analyst Training",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Web Application Security",
    "API Security",
    "Network Security",
    "Cloud Security",
    "Mobile Application Security",
    "Digital Forensics",
    "Malware Analysis",
    "Incident Response",
    "Threat Intelligence",
    "Security Operations",
    "DevSecOps",
  ],

  Networking: [
    "Computer Networking",
    "Network Administration",
    "Network Security",
    "Cisco Networking",
    "CCNA Training",
    "Routing & Switching",
    "Network Infrastructure",
    "Wireless Networking",
    "Linux Networking",
    "Cloud Networking",
  ],

  "Cloud Computing": [
    "Cloud Computing",
    "AWS Cloud Computing",
    "Microsoft Azure Cloud Computing",
    "Google Cloud Computing",
    "AWS Cloud Administration",
    "Azure Cloud Administration",
    "Cloud Architecture",
    "Cloud Engineering",
    "Cloud Security",
    "Serverless Computing",
  ],

  "DevOps & Infrastructure": [
    "DevOps Engineering",
    "DevSecOps Engineering",
    "Docker Development",
    "Kubernetes Administration",
    "CI/CD Development",
    "Jenkins Administration",
    "Terraform Infrastructure",
    "Ansible Automation",
    "Infrastructure as Code",
    "Site Reliability Engineering",
    "Linux Administration",
    "Windows Server Administration",
    "System Administration",
  ],

  "Software Testing": [
    "Software Testing",
    "Manual Testing",
    "Automation Testing",
    "Selenium Automation Testing",
    "Cypress Automation Testing",
    "Playwright Automation Testing",
    "API Testing",
    "Postman API Testing",
    "Performance Testing",
    "JMeter Performance Testing",
    "Mobile App Testing",
    "Software Quality Assurance",
  ],

  "UI/UX & Design": [
    "UI/UX Design",
    "UI Design",
    "UX Design",
    "Figma Design",
    "Web UI Design",
    "Mobile UI Design",
    "UX Research",
    "Interaction Design",
    "Design System Development",
    "Prototyping & Wireframing",
  ],

  "Graphic & Multimedia": [
    "Graphic Design",
    "Adobe Photoshop Training",
    "Adobe Illustrator Training",
    "CorelDRAW Training",
    "Canva Design",
    "Logo Design",
    "Brand Identity Design",
    "Motion Graphics",
    "Video Editing",
    "Adobe Premiere Pro Training",
    "Adobe After Effects Training",
  ],
  "Blockchain & Web3": [
    "Blockchain Development",
    "Ethereum Development",
    "Solidity Development",
    "Smart Contract Development",
    "Web3 Development",
    "Decentralized Application Development",
    "Blockchain Security",
  ],

  Robotics: [
    "Robotics Development",
    "Robotics Programming",
    "Arduino Robotics",
    "Raspberry Pi Robotics",
    "ROS Development",
    "Robot Programming",
    "AI Robotics",
    "Computer Vision for Robotics",
  ],

  "Microsoft & Office": [
    "Computer Fundamentals",
    "Microsoft Office Training",
    "Microsoft Word Training",
    "Microsoft Excel Training",
    "Advanced Excel Training",
    "Microsoft PowerPoint Training",
    "Microsoft Access Training",
    "VBA Development",
    "Power Query Training",
    "Power Pivot Training",
    "Microsoft 365 Training",
  ],

  "Career & Professional Skills": [
    "IT Interview Preparation",
    "Technical Interview Preparation",
    "Coding Interview Preparation",
    "Placement Preparation",
    "Aptitude Training",
    "Communication Skills Training",
    "Resume Building",
    "LinkedIn Profile Development",
    "GitHub Portfolio Development",
    "Freelancing Training",
    "Remote Work Training",
    "Technical Presentation Skills",
    "Software Project Development",
  ],
};

export const companyCoursesContext: CompanyCourse[] =
  Object.entries(
    courseCategories,
  ).flatMap(
    ([category, courses]) =>
      courses.map(
        (name) => ({
          name,
          category,
          slug: slugify(name),
        }),
      ),
  );

export const companyCoursesText =
  companyCoursesContext
    .map(
      (course) =>
        `${course.name} — ${course.category}`,
    )
    .join("\n");

export const getCourseByName = (
  value: string,
) => {
  const normalized =
    value.toLowerCase().trim();

  return companyCoursesContext.find(
    (course) =>
      course.name.toLowerCase() ===
      normalized ||
      course.slug ===
        normalized,
  );
};

export const getCoursesByCategory = (
  category: string,
) => {
  return companyCoursesContext.filter(
    (course) =>
      course.category ===
      category,
  );
};