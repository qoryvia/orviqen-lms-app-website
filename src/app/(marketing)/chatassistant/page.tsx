import type { Metadata } from "next";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import ChatAssistant from "@/components/chatassistant/components/ChatAssistant";

export const metadata: Metadata = {
  title: "Learning Assistant | Orviqen",
  description:
    "Ask questions about courses, learning roadmaps, skills and careers.",
};

const ChatAssistantPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="px-6 py-10 xl:px-30 sm:py-14">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Learning Assistance
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              How can we help?
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Ask about courses, learning roadmaps, programming,
              projects or your career direction.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[900px]">
              <ChatAssistant />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ChatAssistantPage;