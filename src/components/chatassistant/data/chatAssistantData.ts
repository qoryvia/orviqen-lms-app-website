export type ChatRole = "user" | "assistant";

export type LeadStep =
  | "idle"
  | "name"
  | "phone"
  | "course"
  | "submitted";

export interface ChatSource {
  title: string;
  url: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
  sources?: ChatSource[];
}

export interface ChatLead {
  name: string;
  phone: string;
  course: string;
}

export interface AssistantConversationContext {
  lastTopic:
    | "greeting"
    | "catalog"
    | "course"
    | "category"
    | "leaders"
    | "services"
    | "pricing"
    | "company"
    | "help"
    | "unknown";

  lastCourseName?: string;
  lastCourseSlug?: string;
  lastCategory?: string;
}

export interface LocalAssistantResponse {
  reply: string;
  leadAction: "none" | "start";
  sources: ChatSource[];
  nextContext: AssistantConversationContext;
}

export const CHAT_ASSISTANT_CONFIG = {
  title: "Eklavya Assistant",
  subtitle: "Courses, learning paths & career guidance",

  /*
   * Replace this only with your real WhatsApp number.
   * Example:
   * "919876543210"
   */
  whatsappNumber: "YOUR_WHATSAPP_NUMBER",

  whatsappMessage:
    "Hi Eklavya, I would like to know more about your courses.",
};

export const assistantSuggestions = [
  "What courses do you offer?",
  "Show me cybersecurity courses",
  "I want to learn React",
  "Tell me about Data Science",
  "What services does Eklavya provide?",
];

export const assistantCourses = [
  {
    id: "software-development",
    name: "Software Development",
  },
  {
    id: "mern-stack-development",
    name: "MERN Stack Development",
  },
  {
    id: "react-js-development",
    name: "React.js Development",
  },
  {
    id: "python-software-development",
    name: "Python Software Development",
  },
  {
    id: "data-science",
    name: "Data Science",
  },
  {
    id: "artificial-intelligence-development",
    name: "Artificial Intelligence Development",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
  },
  {
    id: "ethical-hacking",
    name: "Ethical Hacking",
  },
  {
    id: "aws-cloud-computing",
    name: "AWS Cloud Computing",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
  },
];

export const getCourseName = (value: string) => {
  const normalized = value.trim().toLowerCase();

  const selected = assistantCourses.find(
    (course) =>
      course.id.toLowerCase() === normalized ||
      course.name.toLowerCase() === normalized,
  );

  return selected?.name ?? value.trim();
};

export const createMessage = (
  role: ChatRole,
  content: string,
  sources: ChatSource[] = [],
): ChatMessage => ({
  id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  role,
  content,
  createdAt: new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date()),
  sources,
});