export interface ChatLeadMock {
  name: string;
  phone: string;
  course: string;
}

export function submitChatLeadMock(lead: ChatLeadMock) {
  if (
    !lead.name.trim() ||
    !lead.phone.trim() ||
    !lead.course.trim()
  ) {
    return;
  }

  console.log("[Eklavya Chat Lead]", {
    name: lead.name.trim(),
    phone: lead.phone.trim(),
    course: lead.course.trim(),
    submittedAt: new Date().toISOString(),
  });
}