import {
  FiBookOpen,
  FiBriefcase,
  FiCompass,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiShield,
  FiUsers,
} from "react-icons/fi";

export const destinations = [
  {
    name: "USA",
    shortName: "United States",
    description:
      "Explore undergraduate and postgraduate opportunities across technology, business, engineering and more.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=85",
    popularPrograms: ["Computer Science", "AI & ML", "Business", "Engineering"],
    href: "/study-abroad/usa",
  },
  {
    name: "UK",
    shortName: "United Kingdom",
    description:
      "Discover internationally recognized universities and career-focused programs across multiple disciplines.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    popularPrograms: ["Business", "Data Science", "Computing", "Management"],
    href: "/study-abroad/uk",
  },
  {
    name: "Germany",
    shortName: "Germany",
    description:
      "Explore technology, engineering, business and applied programs across leading European institutions.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    popularPrograms: ["Engineering", "AI", "Management", "Data"],
    href: "/study-abroad/germany",
  },
  {
    name: "Canada",
    shortName: "Canada",
    description:
      "Find practical academic pathways across technology, business, analytics, healthcare and more.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85",
    popularPrograms: ["Technology", "Business", "Analytics", "Management"],
    href: "/study-abroad/canada",
  },
  {
    name: "Australia",
    shortName: "Australia",
    description:
      "Discover globally oriented programs with opportunities to develop academic and professional skills.",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=85",
    popularPrograms: ["Business", "IT", "Data", "Engineering"],
    href: "/study-abroad/australia",
  },
  {
    name: "Ireland",
    shortName: "Ireland",
    description:
      "Explore programs in technology, business and other growing academic and professional fields.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85",
    popularPrograms: ["Technology", "Business", "Data", "Finance"],
    href: "/study-abroad/ireland",
  },
];

export const studyDomains = [
  {
    title: "Technology & Computing",
    description:
      "Computer science, software development, AI, cybersecurity, cloud and emerging technologies.",
    icon: FiGlobe,
  },
  {
    title: "Business & Management",
    description:
      "Business administration, management, finance, marketing, entrepreneurship and related fields.",
    icon: FiBriefcase,
  },
  {
    title: "Engineering",
    description:
      "Explore engineering pathways across technology, computing and specialized disciplines.",
    icon: FiLayers,
  },
  {
    title: "Data & Analytics",
    description:
      "Build skills around data science, analytics, business intelligence and machine learning.",
    icon: FiBookOpen,
  },
];

export const pathways = [
  {
    number: "01",
    icon: FiCompass,
    title: "Choose a Destination",
    description:
      "Compare destinations based on your academic goals, preferred field, budget and long-term plans.",
  },
  {
    number: "02",
    icon: FiCompass,
    title: "Find Your Program",
    description:
      "Explore universities and programs aligned with your interests, profile and future direction.",
  },
  {
    number: "03",
    icon: FiFileText,
    title: "Prepare Your Application",
    description:
      "Organize your academic documents, application materials and next steps with structured guidance.",
  },
  {
    number: "04",
    icon: FiGlobe,
    title: "Prepare for the Journey",
    description:
      "Move from admission planning toward visa, travel and pre-departure preparation.",
  },
];

export const studyPrograms = [
  {
    title: "Master's in Computer Science",
    destination: "Germany",
    level: "Postgraduate",
    duration: "1–2 Years",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    tags: ["Computer Science", "Technology", "Postgraduate"],
  },
  {
    title: "Master's in Data Science",
    destination: "UK",
    level: "Postgraduate",
    duration: "1 Year",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Data", "AI", "Analytics"],
  },
  {
    title: "MBA & Business Management",
    destination: "USA",
    level: "Postgraduate",
    duration: "1–2 Years",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tags: ["MBA", "Business", "Management"],
  },
  {
    title: "Bachelor's in Business",
    destination: "Australia",
    level: "Undergraduate",
    duration: "3–4 Years",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tags: ["Business", "Undergraduate", "Global"],
  },
];

export const supportServices = [
  {
    icon: FiUsers,
    title: "Profile Guidance",
    description:
      "Understand how your academic background and goals can shape your study abroad options.",
  },
  {
    icon: FiBookOpen,
    title: "University & Program Selection",
    description:
      "Compare destinations, universities and programs based on your priorities.",
  },
  {
    icon: FiFileText,
    title: "Application Support",
    description:
      "Get guidance on documents, applications and important steps throughout the process.",
  },
  {
    icon: FiShield,
    title: "Visa & Pre-Departure",
    description:
      "Prepare for important stages of the journey after receiving your admission.",
  },
];

export const studentStories = [
  {
    name: "Ananya Sharma",
    destination: "Germany",
    program: "Business & Management",
    quote:
      "Having a structured process made studying abroad feel much more manageable. I understood what I needed to do at every stage.",
  },
  {
    name: "Rohan Mehta",
    destination: "United Kingdom",
    program: "Data Science",
    quote:
      "Comparing destinations and programs helped me move from a general idea to a much clearer study plan.",
  },
  {
    name: "Kavya Singh",
    destination: "Australia",
    program: "Business",
    quote:
      "The biggest help was having someone explain the options clearly instead of trying to figure everything out on my own.",
  },
  {
    name: "Arjun Verma",
    destination: "Canada",
    program: "Computer Science",
    quote:
      "Understanding the difference between universities and programs helped me narrow down my options and focus on what matched my goals.",
  },
  {
    name: "Priya Kapoor",
    destination: "Ireland",
    program: "Data Analytics",
    quote:
      "The process became easier once I had a clear idea of what documents, timelines and academic requirements I needed to prepare for.",
  },
  {
    name: "Aditya Sharma",
    destination: "USA",
    program: "Computer Science",
    quote:
      "I had many questions about studying abroad. Having the options explained step by step helped me make more informed decisions.",
  },
  {
    name: "Sneha Verma",
    destination: "United Kingdom",
    program: "Artificial Intelligence",
    quote:
      "I was unsure which specialization to choose. Exploring different programs helped me understand where my interests could fit best.",
  },
  {
    name: "Vivek Patel",
    destination: "Germany",
    program: "Engineering",
    quote:
      "The destination comparison gave me a better understanding of the academic options and helped me plan the next stage of my application.",
  },
  {
    name: "Meera Joshi",
    destination: "Australia",
    program: "Information Technology",
    quote:
      "Having a clear roadmap from choosing a program to preparing the application made the whole process feel much more organized.",
  },
];

export const studyFAQs = [
  {
    question: "Which countries can I explore for studying abroad?",
    answer:
      "You can explore destinations such as the USA, UK, Germany, Canada, Australia and Ireland, depending on your academic goals and program requirements.",
  },
  {
    question: "How do I choose the right country?",
    answer:
      "Start with your intended field, academic level, budget, preferred learning environment and long-term career goals. These factors can help narrow down suitable destinations.",
  },
  {
    question: "Can I get help choosing a university and program?",
    answer:
      "Yes. The guidance process can help you compare programs, destinations and universities based on your profile and goals.",
  },
  {
    question: "What documents are usually required?",
    answer:
      "Requirements vary by university and country, but commonly include academic records, identification documents, English-language test results where applicable and application-specific materials.",
  },
  {
    question: "Do I need an English-language test?",
    answer:
      "Requirements depend on the university, program and country. Some institutions may accept alternative evidence or offer waivers under specific conditions.",
  },
];