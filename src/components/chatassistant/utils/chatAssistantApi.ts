import {
  CHAT_ASSISTANT_CONFIG,
  ChatLead,
  ChatMessage,
} from "../data/chatAssistantData";

interface SubmitChatLeadParams {
  lead: ChatLead;
  messages: ChatMessage[];
}

export const submitChatLead = async ({
  lead,
  messages,
}: SubmitChatLeadParams) => {
  const payload = {
    name: lead.name.trim(),
    phone: lead.phone.trim(),
    course: lead.course,

    source: "chat-assistant",

    sourcePage:
      typeof window !== "undefined"
        ? window.location.href
        : "/chatassistant",

    initialQuestion:
      messages.find(
        (message) => message.role === "user"
      )?.content || "",

    conversation: messages.map((message) => ({
      role: message.role,
      message: message.content,
      createdAt: message.createdAt,
    })),
  };

  const response = await fetch(
    CHAT_ASSISTANT_CONFIG.apiEndpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  let responseBody: unknown = null;

  try {
    responseBody = await response.json();
  } catch {
    responseBody = null;
  }

  if (!response.ok) {
    const message =
      typeof responseBody === "object" &&
      responseBody !== null &&
      "message" in responseBody &&
      typeof responseBody.message === "string"
        ? responseBody.message
        : "Unable to submit assistance request.";

    throw new Error(message);
  }

  return responseBody;
};