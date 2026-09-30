import { companyCoursesContext } from "../context/companyCoursesContext";

export interface CourseRecord {
  name: string;
  category: string;
  slug: string;
}

export type QueryResolutionType =
  | "course"
  | "category"
  | "catalog"
  | "unknown";

export interface QueryResolution {
  type: QueryResolutionType;
  confidence: number;
  originalQuery: string;
  cleanedQuery: string;

  course?: CourseRecord;
  category?: string;
}

interface EntityScore {
  value: string;
  score: number;
  exact: boolean;
}

const courses = companyCoursesContext as readonly CourseRecord[];

const CATEGORY_ALIASES: Record<string, string[]> = {
  "Software Development": [
    "software development",
    "software developer",
    "programming",
    "software engineering",
    "full stack",
  ],

  "Web Development": [
    "web development",
    "web developer",
    "frontend",
    "front end",
    "backend",
    "back end",
    "web development courses",
    "website development",
  ],

  "Mobile App Development": [
    "mobile development",
    "mobile app development",
    "mobile apps",
    "android development",
    "ios development",
    "app development",
  ],

  "Data & Database": [
    "data database",
    "database",
    "databases",
    "sql",
    "mysql",
    "postgresql",
    "mongodb",
    "data engineering",
    "data warehousing",
  ],

  "Data Science & Analytics": [
    "data science",
    "data scientist",
    "data analytics",
    "data analyst",
    "business analytics",
    "business intelligence",
    "power bi",
    "tableau",
    "statistics",
    "big data",
  ],

  "Artificial Intelligence & Machine Learning": [
    "artificial intelligence",
    "ai",
    "machine learning",
    "ml",
    "deep learning",
    "generative ai",
    "gen ai",
    "llm",
    "large language model",
    "ai agent",
    "computer vision",
    "nlp",
  ],

  Cybersecurity: [
    "cybersecurity",
    "cyber security",
    "cyber-security",
    "ethical hacking",
    "penetration testing",
    "pentesting",
    "soc analyst",
    "security",
    "digital forensics",
    "malware",
    "threat intelligence",
  ],

  Networking: [
    "networking",
    "computer networking",
    "network administration",
    "ccna",
    "routing switching",
    "wireless networking",
    "network infrastructure",
  ],

  "Cloud Computing": [
    "cloud computing",
    "cloud",
    "aws",
    "azure",
    "google cloud",
    "gcp",
    "cloud administration",
    "cloud architecture",
    "cloud engineering",
    "serverless",
  ],

  "DevOps & Infrastructure": [
    "devops",
    "devops engineering",
    "devsecops",
    "docker",
    "kubernetes",
    "ci cd",
    "jenkins",
    "terraform",
    "ansible",
    "infrastructure as code",
    "sre",
    "site reliability",
    "linux administration",
    "system administration",
  ],

  "Software Testing": [
    "software testing",
    "manual testing",
    "automation testing",
    "selenium",
    "cypress",
    "playwright",
    "api testing",
    "postman",
    "performance testing",
    "jmeter",
    "quality assurance",
    "qa",
  ],

  "UI/UX & Design": [
    "ui ux",
    "ui/ux",
    "ui ux design",
    "ui design",
    "ux design",
    "figma",
    "user experience",
    "user interface",
    "ux research",
    "interaction design",
    "design system",
    "wireframe",
    "prototyping",
  ],

  "Graphic & Multimedia": [
    "graphic design",
    "graphics",
    "photoshop",
    "illustrator",
    "coreldraw",
    "canva",
    "logo design",
    "brand identity",
    "motion graphics",
    "video editing",
    "premiere pro",
    "after effects",
  ],

  "Enterprise Technologies": [
    "enterprise technology",
    "enterprise technologies",
    "sap",
    "sap abap",
    "salesforce",
    "servicenow",
    "erp",
    "crm",
    "business analysis",
    "it service management",
    "itil",
    "enterprise application",
  ],

  "Blockchain & Web3": [
    "blockchain",
    "web3",
    "ethereum",
    "solidity",
    "smart contract",
    "decentralized application",
    "dapp",
    "blockchain security",
  ],

  "IoT & Embedded Systems": [
    "iot",
    "internet of things",
    "embedded systems",
    "embedded c",
    "arduino",
    "raspberry pi",
    "esp32",
    "industrial iot",
    "iot security",
  ],

  Robotics: [
    "robotics",
    "robotics development",
    "robot programming",
    "arduino robotics",
    "raspberry pi robotics",
    "ros",
    "ros development",
    "ai robotics",
    "robot vision",
  ],

  "Microsoft & Office": [
    "microsoft office",
    "office",
    "word",
    "excel",
    "advanced excel",
    "powerpoint",
    "access",
    "vba",
    "power query",
    "power pivot",
    "microsoft 365",
    "computer fundamentals",
  ],

  "Career & Professional Skills": [
    "career",
    "professional skills",
    "interview preparation",
    "technical interview",
    "coding interview",
    "placement preparation",
    "aptitude",
    "communication skills",
    "resume",
    "linkedin",
    "github portfolio",
    "freelancing",
    "remote work",
    "presentation skills",
  ],
};

const CONVERSATION_WORDS = new Set([
  "i",
  "me",
  "my",
  "mine",
  "we",
  "our",
  "you",
  "your",
  "yours",
  "the",
  "a",
  "an",
  "this",
  "that",
  "these",
  "those",
  "there",
  "here",
  "something",
  "anything",
  "thing",
  "please",
  "can",
  "could",
  "would",
  "will",
  "should",
  "do",
  "does",
  "did",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "want",
  "need",
  "looking",
  "look",
  "like",
  "would",
  "show",
  "shown",
  "tell",
  "telling",
  "give",
  "provide",
  "get",
  "find",
  "help",
  "know",
  "learn",
  "study",
  "about",
  "related",
  "type",
  "kind",
  "sort",
  "of",
  "to",
  "for",
  "with",
  "from",
  "in",
  "on",
  "at",
  "and",
  "or",
  "but",
  "me",
]);

const COURSE_GENERIC_WORDS = new Set([
  "course",
  "courses",
  "training",
  "program",
  "programs",
  "development",
  "application",
  "applications",
  "engineering",
  "administration",
  "management",
  "design",
  "systems",
  "system",
  "technology",
  "technologies",
  "skills",
  "learning",
  "education",
  "software",
]);

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\w\s./#+-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compact(value: string) {
  return normalize(value).replace(/[\s./#+_-]+/g, "");
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function levenshtein(a: string, b: string) {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i += 1) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1,
            );
    }
  }

  return matrix[b.length][a.length];
}

function fuzzyTokenMatch(source: string, target: string) {
  if (source === target) {
    return true;
  }

  if (source.includes(target) || target.includes(source)) {
    return true;
  }

  if (source.length < 4 || target.length < 4) {
    return false;
  }

  const distance = levenshtein(source, target);

  return distance <= (Math.max(source.length, target.length) >= 8 ? 2 : 1);
}

function getTokens(
  value: string,
  removeCourseGenericWords = false,
) {
  return normalize(value)
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean)
    .filter((token) => !CONVERSATION_WORDS.has(token))
    .filter(
      (token) =>
        !removeCourseGenericWords || !COURSE_GENERIC_WORDS.has(token),
    );
}

function tokenScore(
  query: string,
  target: string,
  removeCourseGenericWords = false,
) {
  const queryTokens = getTokens(query, removeCourseGenericWords);
  const targetTokens = getTokens(target, false);

  if (!queryTokens.length || !targetTokens.length) {
    return 0;
  }

  let matched = 0;

  for (const queryToken of queryTokens) {
    const found = targetTokens.some((targetToken) =>
      fuzzyTokenMatch(queryToken, targetToken),
    );

    if (found) {
      matched += 1;
    }
  }

  return matched / queryTokens.length;
}

function phraseScore(query: string, alias: string) {
  const normalizedQuery = normalize(query);
  const normalizedAlias = normalize(alias);

  if (!normalizedAlias) {
    return 0;
  }

  if (
    normalizedQuery === normalizedAlias ||
    normalizedQuery.includes(normalizedAlias)
  ) {
    return 1;
  }

  const compactQuery = compact(query);
  const compactAlias = compact(alias);

  if (
    compactQuery === compactAlias ||
    compactQuery.includes(compactAlias)
  ) {
    return 0.98;
  }

  return 0;
}

function findCategoryMatch(message: string): EntityScore | null {
  let best: EntityScore | null = null;

  for (const category of [
    ...new Set(courses.map((course) => course.category)),
  ]) {
    const aliases = [
      category,
      ...(CATEGORY_ALIASES[category] ?? []),
    ];

    for (const alias of aliases) {
      const phrase = phraseScore(message, alias);

      if (phrase > 0) {
        if (!best || phrase > best.score) {
          best = {
            value: category,
            score: phrase,
            exact: true,
          };
        }

        continue;
      }

      const score = tokenScore(message, alias);

      if (score >= 0.75 && (!best || score > best.score)) {
        best = {
          value: category,
          score,
          exact: false,
        };
      }
    }
  }

  return best;
}

function findCourseMatch(message: string): {
  course: CourseRecord;
  score: number;
} | null {
  let best: {
    course: CourseRecord;
    score: number;
  } | null = null;

  for (const course of courses) {
    const aliases = [
      course.name,
      course.slug.replace(/-/g, " "),
    ];

    let score = 0;

    for (const alias of aliases) {
      score = Math.max(score, phraseScore(message, alias));
    }

    if (score < 1) {
      score = tokenScore(
        message,
        `${course.name} ${course.slug.replace(/-/g, " ")}`,
        true,
      );
    }

    /*
     * Compact matching catches:
     * React.js → react
     * ReactJS → reactjs
     * NodeJS → nodejs
     * cyber security → cybersecurity
     */
    const compactMessage = compact(message);

    for (const alias of aliases) {
      const compactAlias = compact(alias);

      if (
        compactAlias.length >= 4 &&
        compactMessage.includes(compactAlias)
      ) {
        score = Math.max(score, 0.98);
      }
    }

    if (score > 0 && (!best || score > best.score)) {
      best = {
        course,
        score,
      };
    }
  }

  return best;
}

function hasCourseCollectionLanguage(message: string) {
  const normalized = normalize(message);

  return (
    /\bcourses?\b/i.test(normalized) ||
    /\bprograms?\b/i.test(normalized) ||
    /\boptions?\b/i.test(normalized) ||
    /\brelated to\b/i.test(normalized) ||
    /\bwhich\b/i.test(normalized) ||
    /\bshow me\b/i.test(normalized) ||
    /\bprovide me\b/i.test(normalized) ||
    /\bin\b/i.test(normalized) ||
    /\bfor\b/i.test(normalized) ||
    /\btraining\b/i.test(normalized)
  );
}

function isSpecificCourseQuestion(message: string) {
  const normalized = normalize(message);

  return (
    /\bthe course\b/i.test(normalized) ||
    /\babout the\b/i.test(normalized) ||
    /\bdetails\b/i.test(normalized) ||
    /\bsyllabus\b/i.test(normalized) ||
    /\bcurriculum\b/i.test(normalized) ||
    /\bfees?\b/i.test(normalized) ||
    /\bprice\b/i.test(normalized) ||
    /\bduration\b/i.test(normalized) ||
    /\beligibility\b/i.test(normalized) ||
    /\bprerequisites?\b/i.test(normalized) ||
    /\bi want to learn\b/i.test(normalized) ||
    /\bi would like to learn\b/i.test(normalized)
  );
}

function isGeneralCatalogRequest(message: string) {
  const normalized = normalize(message);

  return (
    normalized === "courses" ||
    normalized === "course" ||
    normalized === "show courses" ||
    normalized === "provide me courses" ||
    normalized === "provide courses" ||
    /\bwhat courses do you have\b/i.test(normalized) ||
    /\bwhich courses do you have\b/i.test(normalized) ||
    /\bwhat courses are available\b/i.test(normalized) ||
    /\bshow me all courses\b/i.test(normalized) ||
    /\bcourse catalog\b/i.test(normalized) ||
    /\bcourse list\b/i.test(normalized) ||
    /\bwhat do you offer\b/i.test(normalized)
  );
}

function isCategoryOnlyRequest(
  message: string,
  category: EntityScore | null,
) {
  if (!category) {
    return false;
  }

  const cleaned = normalize(message)
    .replace(
      /\b(i|want|need|to|learn|study|know|about|tell|me|please|show|can|you|do|have|this|that|type|kind|something|looking|for)\b/gi,
      " ",
    )
    .replace(/\bcourses?\b/gi, " ")
    .replace(/\btraining\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const aliases = [
    category.value,
    ...(CATEGORY_ALIASES[category.value] ?? []),
  ];

  return aliases.some(
    (alias) =>
      normalize(cleaned) === normalize(alias) ||
      compact(cleaned) === compact(alias),
  );
}

export function resolveStudentQuery(
  message: string,
): QueryResolution {
  const originalQuery = message.trim();

  if (!originalQuery) {
    return {
      type: "unknown",
      confidence: 0,
      originalQuery,
      cleanedQuery: "",
    };
  }

  const cleanedQuery = getTokens(message).join(" ");

  const categoryMatch = findCategoryMatch(message);
  const courseMatch = findCourseMatch(message);

  /*
   * General catalog has priority when no specific entity
   * was found.
   */
  if (isGeneralCatalogRequest(message)) {
    const hasStrongEntity =
      Boolean(categoryMatch && categoryMatch.score >= 0.92) ||
      Boolean(courseMatch && courseMatch.score >= 0.92);

    /*
     * "cybersecurity courses" is NOT the entire catalog.
     */
    if (!hasStrongEntity) {
      return {
        type: "catalog",
        confidence: 1,
        originalQuery,
        cleanedQuery,
      };
    }
  }

  /*
   * Example:
   * "I want this cyber security"
   */
  if (
    categoryMatch &&
    categoryMatch.score >= 0.95 &&
    isCategoryOnlyRequest(message, categoryMatch)
  ) {
    return {
      type: "category",
      confidence: categoryMatch.score,
      originalQuery,
      cleanedQuery,
      category: categoryMatch.value,
    };
  }

  /*
   * Example:
   * "Can you show me courses related to cybersecurity?"
   */
  if (
    categoryMatch &&
    categoryMatch.score >= 0.78 &&
    hasCourseCollectionLanguage(message) &&
    (!courseMatch ||
      categoryMatch.score >= courseMatch.score - 0.05)
  ) {
    return {
      type: "category",
      confidence: categoryMatch.score,
      originalQuery,
      cleanedQuery,
      category: categoryMatch.value,
    };
  }

  /*
   * Specific course questions:
   *
   * I want this type of courses ethical hacking
   * I want to learn React
   * Tell me about the ethical hacking course
   */
  if (
    courseMatch &&
    courseMatch.score >= 0.82 &&
    (
      isSpecificCourseQuestion(message) ||
      !categoryMatch ||
      courseMatch.score > categoryMatch.score + 0.1
    )
  ) {
    return {
      type: "course",
      confidence: courseMatch.score,
      originalQuery,
      cleanedQuery,
      course: courseMatch.course,
    };
  }

  /*
   * Category fallback.
   */
  if (categoryMatch && categoryMatch.score >= 0.72) {
    return {
      type: "category",
      confidence: categoryMatch.score,
      originalQuery,
      cleanedQuery,
      category: categoryMatch.value,
    };
  }

  /*
   * Course fallback.
   */
  if (courseMatch && courseMatch.score >= 0.7) {
    return {
      type: "course",
      confidence: courseMatch.score,
      originalQuery,
      cleanedQuery,
      course: courseMatch.course,
    };
  }

  if (isGeneralCatalogRequest(message)) {
    return {
      type: "catalog",
      confidence: 0.9,
      originalQuery,
      cleanedQuery,
    };
  }

  return {
    type: "unknown",
    confidence: 0,
    originalQuery,
    cleanedQuery,
  };
}