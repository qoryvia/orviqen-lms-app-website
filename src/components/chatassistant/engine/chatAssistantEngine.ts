import {
  companyInformationContext,
  companyInformationText,
} from "../context/companyInformationContext";

import { companyLeadersContext } from "../context/companyLeadersContext";
import { companyServicesContext } from "../context/companyServicesContext";
import { companyCoursesContext } from "../context/companyCoursesContext";

import {
  AssistantConversationContext,
  ChatSource,
  LocalAssistantResponse,
} from "../data/chatAssistantData";

import { resolveStudentQuery } from "./chatQueryResolver";

interface CourseRecord {
  name: string;
  category: string;
  slug: string;
}

const courses = companyCoursesContext as readonly CourseRecord[];

const fallbackResponses = [
  "I can help you explore Eklavya courses, technologies, training areas, pricing and learning paths. Tell me what you're interested in.",
  "Tell me what you are looking for — a course, technology, career path, training area or course comparison — and I’ll help you find the relevant Eklavya information.",
  "You can ask me about a specific technology such as React, Python, Cybersecurity, Data Science, AI, AWS or UI/UX, or ask me about the complete course catalog.",
  "I can help you find a suitable Eklavya course, explore a category, learn about our training areas, or understand how our courses are organized.",
  "Try asking something like “show me cybersecurity courses”, “I want to learn React”, “what courses do you have?” or “tell me about Data Science”.",
];

const greetingResponses = [
  "Hi! Welcome to Eklavya. What would you like to explore?",
  "Hello! I can help you explore Eklavya courses, learning paths, technologies and training areas.",
  "Hi there! Tell me what you would like to learn or explore at Eklavya.",
  "Welcome to Eklavya! Ask me about courses, technologies, pricing, services or career-focused learning.",
];

const catalogIntros = [
  "Eklavya offers courses across 19 major learning areas.",
  "There are Eklavya courses across software, data, AI, cybersecurity, cloud, design, infrastructure and professional skills.",
  "Eklavya's catalog covers a broad range of technology and career-focused training areas.",
];

const categoryIntros = [
  "Absolutely. Here are some courses from",
  "Yes. Eklavya offers several courses in",
  "Sure — these are some of the courses available in",
  "Here are some relevant Eklavya courses under",
];

const serviceFallback = [
  "software development",
  "web development",
  "mobile app development",
  "data and database",
  "data science and analytics",
  "artificial intelligence and machine learning",
  "cybersecurity",
  "networking",
  "cloud computing",
  "DevOps and infrastructure",
  "software testing",
  "UI/UX and design",
  "graphic and multimedia",
  "enterprise technologies",
  "blockchain and Web3",
  "IoT and embedded systems",
  "robotics",
  "Microsoft and Office",
  "career and professional skills",
];

const responseHistory: Record<string, string | undefined> = {};

function pickVariant(key: string, values: string[]) {
  if (!values.length) {
    return "";
  }

  if (values.length === 1) {
    responseHistory[key] = values[0];
    return values[0];
  }

  const previous = responseHistory[key];

  const available = values.filter((value) => value !== previous);

  const selected =
    available[Math.floor(Math.random() * available.length)];

  responseHistory[key] = selected;

  return selected;
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s./#+-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createContext(
  topic: AssistantConversationContext["lastTopic"],
  extras: Partial<AssistantConversationContext> = {},
): AssistantConversationContext {
  return {
    lastTopic: topic,
    ...extras,
  };
}

function getCategoryCourses(category: string) {
  return courses.filter(
    (course) =>
      normalize(course.category) === normalize(category),
  );
}

function createCourseSource(course: CourseRecord): ChatSource {
  return {
    title: course.name,
    url: `/courses/${course.slug}`,
    description: course.category,
  };
}

function getUniqueCategories() {
  return [...new Set(courses.map((course) => course.category))];
}

function getStringFromRecord(
  record: Record<string, unknown>,
  keys: string[],
) {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
}

function getRecordArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as Record<string, unknown>[];
  }

  return value.filter(
    (item): item is Record<string, unknown> =>
      typeof item === "object" && item !== null,
  );
}

function isGreeting(message: string) {
  const normalized = normalize(message);

  return (
    /^(hi|hello|hey|hii|helo|good morning|good afternoon|good evening)$/i.test(
      normalized,
    ) ||
    /^(hi|hello|hey)\b/i.test(normalized)
  );
}

function isLeadIntent(message: string) {
  const normalized = normalize(message);

  const patterns = [
    /\bi want to enroll\b/i,
    /\bi want to join\b/i,
    /\bi want admission\b/i,
    /\bi want to register\b/i,
    /\bhow can i enroll\b/i,
    /\bhow do i enroll\b/i,
    /\bi would like to enroll\b/i,
    /\bi would like to join\b/i,
    /\bcontact me\b/i,
    /\bcall me\b/i,
    /\btalk to an advisor\b/i,
    /\bcontact an advisor\b/i,
    /\bspeak to an advisor\b/i,
    /\bwant a call\b/i,
    /\bwant someone to call\b/i,
  ];

  return patterns.some((pattern) => pattern.test(normalized));
}

function isFounderQuestion(message: string) {
  const normalized = normalize(message);

  const words = [
    "founder",
    "founders",
    "foundrs",
    "fondrs",
    "leadership",
    "leader",
    "leaders",
    "company leaders",
    "who runs ekalvya",
    "who runs eklavya",
  ];

  return words.some((word) => normalized.includes(word));
}

function isFounderEducationQuestion(message: string) {
  const normalized = normalize(message);

  return (
    /\beducation\b/i.test(normalized) ||
    /\bqualification\b/i.test(normalized) ||
    /\bdegree\b/i.test(normalized) ||
    /\bstudy\b/i.test(normalized) ||
    /\bbackground\b/i.test(normalized)
  );
}

function isFounderRoleQuestion(message: string) {
  const normalized = normalize(message);

  return (
    /\brole\b/i.test(normalized) ||
    /\broles\b/i.test(normalized) ||
    /\bposition\b/i.test(normalized) ||
    /\bdesignation\b/i.test(normalized)
  );
}

function isServiceQuestion(message: string) {
  const normalized = normalize(message);

  return (
    /\bservices?\b/i.test(normalized) ||
    /\bwhat do you provide\b/i.test(normalized) ||
    /\bwhat does ekalvya provide\b/i.test(normalized) ||
    /\bwhat does eklavya offer\b/i.test(normalized) ||
    /\btraining areas\b/i.test(normalized)
  );
}

function isPricingQuestion(message: string) {
  const normalized = normalize(message);

  return (
    /\bprice\b/i.test(normalized) ||
    /\bprices\b/i.test(normalized) ||
    /\bpricing\b/i.test(normalized) ||
    /\bcost\b/i.test(normalized) ||
    /\bfee\b/i.test(normalized) ||
    /\bfees\b/i.test(normalized) ||
    /\bdiscount\b/i.test(normalized) ||
    /\bdiscounts\b/i.test(normalized)
  );
}

function isIdentityQuestion(message: string) {
  const normalized = normalize(message);

  return (
    /\bwhat are you doing\b/i.test(normalized) ||
    /\bwhat can you do\b/i.test(normalized) ||
    /\bwho are you\b/i.test(normalized)
  );
}

function buildCatalogResponse(): LocalAssistantResponse {
  const categories = getUniqueCategories();

  const categoryText = categories
    .map((category, index) => `${index + 1}. ${category}`)
    .join("\n");

  return {
    reply: [
      pickVariant("catalogIntro", catalogIntros),
      "",
      categoryText,
      "",
      "Tell me a category or a specific technology and I can show you the related courses.",
    ].join("\n"),
    leadAction: "none",
    sources: [],
    nextContext: createContext("catalog"),
  };
}

function buildCategoryResponse(
  category: string,
): LocalAssistantResponse {
  const categoryCourses = getCategoryCourses(category);

  const visibleCourses = categoryCourses.slice(0, 10);

  const courseLines = visibleCourses
    .map((course) => `• ${course.name}`)
    .join("\n");

  const sourceCards = visibleCourses.map(createCourseSource);

  return {
    reply: [
      `${pickVariant("categoryIntro", categoryIntros)} **${category}**.`,
      "",
      courseLines,
      "",
      categoryCourses.length > visibleCourses.length
        ? `There are ${categoryCourses.length} courses in this category. I can show you more, or you can ask about a specific course.`
        : "Tell me which course you want to explore in more detail.",
    ].join("\n"),
    leadAction: "none",
    sources: sourceCards,
    nextContext: createContext("category", {
      lastCategory: category,
    }),
  };
}

function buildCourseResponse(
  course: CourseRecord,
): LocalAssistantResponse {
  const relatedCourses = getCategoryCourses(course.category)
    .filter((item) => item.slug !== course.slug)
    .slice(0, 5);

  const relatedText =
    relatedCourses.length > 0
      ? [
          "",
          `Related ${course.category} courses include:`,
          relatedCourses.map((item) => `• ${item.name}`).join("\n"),
        ].join("\n")
      : "";

  return {
    reply: [
      `Yes — **${course.name}** is available at Eklavya.`,
      "",
      `Category: **${course.category}**.`,
      "",
      `You can open the course page using the link below.`,
      relatedText,
    ].join("\n"),
    leadAction: "none",
    sources: [
      createCourseSource(course),
      ...relatedCourses.map(createCourseSource),
    ],
    nextContext: createContext("course", {
      lastCourseName: course.name,
      lastCourseSlug: course.slug,
      lastCategory: course.category,
    }),
  };
}

function buildCompanyServicesResponse(): LocalAssistantResponse {
  const records = getRecordArray(companyServicesContext);

  const serviceNames = records
    .map((record) =>
      getStringFromRecord(record, [
        "name",
        "title",
        "label",
      ]),
    )
    .filter(Boolean);

  const names =
    serviceNames.length > 0
      ? serviceNames.slice(0, 20)
      : serviceFallback;

  return {
    reply: [
      "Eklavya provides education and software-development training across a broad range of technical and professional areas.",
      "",
      names.map((name) => `• ${name}`).join("\n"),
      "",
      "Tell me one area, such as Web Development, AI, Cybersecurity, Data Science, Cloud or UI/UX, and I can show you the related courses.",
    ].join("\n"),
    leadAction: "none",
    sources: [],
    nextContext: createContext("services"),
  };
}

function buildPricingResponse(): LocalAssistantResponse {
  return {
    reply:
      "Eklavya displays fixed course prices on the website along with applicable discounts. I don't invent or estimate numerical prices. Ask me for a specific course and I can point you to its course page.",
    leadAction: "none",
    sources: [],
    nextContext: createContext("pricing"),
  };
}

function buildFounderResponse(
  roleOnly = false,
): LocalAssistantResponse {
  const records = getRecordArray(companyLeadersContext);

  if (records.length > 0) {
    const lines = records
      .slice(0, 10)
      .map((record) => {
        const name = getStringFromRecord(record, [
          "name",
          "title",
        ]);

        const role = getStringFromRecord(record, [
          "role",
          "designation",
          "position",
        ]);

        return `• ${name}${role ? ` — ${role}` : ""}`;
      });

    return {
      reply: [
        "Eklavya's leadership and training team includes:",
        "",
        ...lines,
      ].join("\n"),
      leadAction: "none",
      sources: [],
      nextContext: createContext("leaders"),
    };
  }

  if (roleOnly) {
    return {
      reply: [
        "Eklavya's core team includes:",
        "",
        "• Vivek Sharma — Founder & CEO",
        "• Abhishek Prajapati — Managing Director",
        "• Awanish Tiwari — Faculty / Trainer",
        "• Tausif Alam — Faculty / Trainer",
      ].join("\n"),
      leadAction: "none",
      sources: [],
      nextContext: createContext("leaders"),
    };
  }

  return {
    reply: [
      "Eklavya's core team includes:",
      "",
      "• Vivek Sharma — Founder & CEO",
      "• Abhishek Prajapati — Managing Director",
      "• Awanish Tiwari — Faculty / Trainer",
      "• Tausif Alam — Faculty / Trainer",
    ].join("\n"),
    leadAction: "none",
    sources: [],
    nextContext: createContext("leaders"),
  };
}

function buildFounderEducationResponse(): LocalAssistantResponse {
  const records = getRecordArray(companyLeadersContext);

  const recordLines = records
    .map((record) => {
      const name = getStringFromRecord(record, [
        "name",
        "title",
      ]);

      const education = getStringFromRecord(record, [
        "education",
        "qualification",
        "degree",
      ]);

      if (!name) {
        return "";
      }

      if (education) {
        return `• ${name} — ${education}`;
      }

      return "";
    })
    .filter(Boolean);

  const fallback = [
    "• Vivek Sharma — B Tech",
    "• Awanish Tiwari — B Tech",
    "• Abhishek Prajapati — education details are not specified in the current company information.",
    "• Tausif Alam — software engineer; a specific degree is not specified in the current company information.",
  ];

  return {
    reply: [
      "From the available Eklavya information:",
      "",
      ...(recordLines.length > 0 ? recordLines : fallback),
    ].join("\n"),
    leadAction: "none",
    sources: [],
    nextContext: createContext("leaders"),
  };
}

function buildCompanyInfoResponse(): LocalAssistantResponse {
  const contextRecord =
    typeof companyInformationContext === "object" &&
    companyInformationContext !== null
      ? (companyInformationContext as Record<string, unknown>)
      : {};

  const companyName =
    typeof contextRecord.name === "string"
      ? contextRecord.name
      : "Eklavya";

  const companyType =
    typeof contextRecord.companyType === "string"
      ? contextRecord.companyType
      : "Education, IT and Software Development Training";

  return {
    reply:
      typeof companyInformationText === "string" &&
      companyInformationText.trim()
        ? companyInformationText
        : [
            `${companyName} is an ${companyType} company.`,
            "",
            "I can help you explore its courses, services, training areas, leadership team and course pages.",
          ].join("\n"),
    leadAction: "none",
    sources: [],
    nextContext: createContext("company"),
  };
}

function buildIdentityResponse(): LocalAssistantResponse {
  return {
    reply: [
      "I'm Eklavya's local learning assistant.",
      "",
      "I can help you explore courses, categories, technologies, training areas, pricing information and relevant course pages.",
    ].join("\n"),
    leadAction: "none",
    sources: [],
    nextContext: createContext("help"),
  };
}

function buildGreetingResponse(): LocalAssistantResponse {
  return {
    reply: pickVariant("greeting", greetingResponses),
    leadAction: "none",
    sources: [],
    nextContext: createContext("greeting"),
  };
}

function buildFallbackResponse(): LocalAssistantResponse {
  return {
    reply: pickVariant("fallback", fallbackResponses),
    leadAction: "none",
    sources: [],
    nextContext: createContext("unknown"),
  };
}

function buildContextualResponse(
  message: string,
  context: AssistantConversationContext,
) {
  const normalized = normalize(message);

  if (
    context.lastTopic === "course" &&
    context.lastCourseName &&
    (
      /\bthis course\b/i.test(normalized) ||
      /\bthat course\b/i.test(normalized) ||
      /\bit\b/i.test(normalized) ||
      /\bmore about\b/i.test(normalized) ||
      /\bdetails\b/i.test(normalized) ||
      /\bwhat does it cover\b/i.test(normalized)
    )
  ) {
    const course = courses.find(
      (item) =>
        normalize(item.name) ===
        normalize(context.lastCourseName ?? ""),
    );

    if (course) {
      return buildCourseResponse(course);
    }
  }

  if (
    context.lastTopic === "category" &&
    context.lastCategory &&
    (
      /\bmore\b/i.test(normalized) ||
      /\bother courses\b/i.test(normalized) ||
      /\bmore courses\b/i.test(normalized) ||
      /\bshow more\b/i.test(normalized)
    )
  ) {
    return buildCategoryResponse(context.lastCategory);
  }

  if (
    context.lastTopic === "leaders" &&
    isFounderEducationQuestion(message)
  ) {
    return buildFounderEducationResponse();
  }

  return null;
}

export function getLocalAssistantResponse(
  message: string,
  context: AssistantConversationContext = {
    lastTopic: "unknown",
  },
): LocalAssistantResponse {
  const value = message.trim();

  if (!value) {
    return buildFallbackResponse();
  }

  /*
   * Lead intent is deliberately detected before normal
   * course handling. This only starts lead capture when
   * there is explicit action intent.
   */
  if (isLeadIntent(value)) {
    return {
      reply:
        "Absolutely. I can help you connect with the Eklavya team. First, what is your name?",
      leadAction: "start",
      sources: [],
      nextContext: createContext("help"),
    };
  }

  /*
   * Contextual follow-up gets the first opportunity.
   */
  const contextualResponse = buildContextualResponse(
    value,
    context,
  );

  if (contextualResponse) {
    return contextualResponse;
  }

  if (isGreeting(value)) {
    return buildGreetingResponse();
  }

  if (isIdentityQuestion(value)) {
    return buildIdentityResponse();
  }

  if (isFounderEducationQuestion(value) && context.lastTopic === "leaders") {
    return buildFounderEducationResponse();
  }

  if (isFounderRoleQuestion(value) || isFounderQuestion(value)) {
    return buildFounderResponse(
      isFounderRoleQuestion(value),
    );
  }

  if (isServiceQuestion(value)) {
    return buildCompanyServicesResponse();
  }

  if (isPricingQuestion(value)) {
    return buildPricingResponse();
  }

  /*
   * Company-level information.
   */
  const normalized = normalize(value);

  if (
    normalized.includes("about eklavya") ||
    normalized.includes("about company") ||
    normalized.includes("company information") ||
    normalized.includes("what is eklavya")
  ) {
    return buildCompanyInfoResponse();
  }

  /*
   * COURSE / CATEGORY / CATALOG ENTITY RESOLUTION
   */
  const resolution = resolveStudentQuery(value);

  if (resolution.type === "course" && resolution.course) {
    return buildCourseResponse(resolution.course);
  }

  if (resolution.type === "category" && resolution.category) {
    return buildCategoryResponse(resolution.category);
  }

  if (resolution.type === "catalog") {
    return buildCatalogResponse();
  }

  return buildFallbackResponse();
}