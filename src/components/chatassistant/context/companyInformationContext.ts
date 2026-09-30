export const companyInformationContext = {
  name: "Eklavya",

  supportingLogoName: "EklavyaED",

  companyType:
    "Education, IT and Software Development Training",

  focus: [
    "Education",
    "IT training",
    "Software development training",
    "Technical skill development",
    "Career preparation",
    "Professional skills",
  ],

  pricing:
    "All fixed course prices are displayed on the website with applicable discounts.",

  pricingRule:
    "The assistant must never invent or guess a numerical course price.",

  websiteLinks: {
    home: "/",
    courses: "/courses",
  },

  assistantPurpose: [
    "Explain Eklavya courses.",
    "Explain course categories.",
    "Explain learning paths.",
    "Compare courses.",
    "Explain technical subjects.",
    "Explain pricing information available on the website.",
    "Help visitors find relevant course pages.",
    "Help genuinely interested visitors connect with the team.",
  ],
};

export const companyInformationText = `
Company Name: ${companyInformationContext.name}

Supporting Logo:
${companyInformationContext.supportingLogoName}

Company Type:
${companyInformationContext.companyType}

Focus:
${companyInformationContext.focus.join(", ")}

Pricing:
${companyInformationContext.pricing}

Pricing Rule:
${companyInformationContext.pricingRule}

Courses Page:
${companyInformationContext.websiteLinks.courses}
`;