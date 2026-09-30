export const companyLeadersContext = [
  {
    name: "Vivek Sharma",
    role: "Founder & CEO",
    education: "B.Tech",
    expertise: "Technical Expert",
    location: "Lucknow, Uttar Pradesh",
    experience:
      "Technical and educational leadership.",
  },

  {
    name: "Abhishek Prajapati",
    role: "Managing Director",
    education:
      "Teaching and academic experience",
    expertise:
      "Competitive examination teaching and student guidance",
    experience:
      "Experience teaching in multiple schools and colleges.",
  },

  {
    name: "Awanish Tiwari",
    role: "Trainer",
    education: "B.Tech",
    expertise:
      "Technical courses and robotics",
    experience:
      "Experience teaching technical courses on YouTube and teaching robotics in multiple schools in Lucknow.",
  },

  {
    name: "Tausif Alam",
    role: "Trainer",
    education: "Software Engineer",
    expertise:
      "Software engineering and technical training",
    experience:
      "Supporting technical trainer for Eklavya.",
  },
];

export const companyLeadersText =
  companyLeadersContext
    .map(
      (leader) => `
Name: ${leader.name}
Role: ${leader.role}
Education: ${leader.education}
Expertise: ${leader.expertise}
Experience: ${leader.experience}
`,
    )
    .join("\n");