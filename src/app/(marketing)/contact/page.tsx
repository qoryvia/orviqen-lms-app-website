import type { Metadata } from "next";
import React from "react";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import ContactHero from "@/components/contact/components/ContactHero";
import ContactInfo from "@/components/contact/components/ContactInfo";
import ContactForm from "@/components/contact/components/ContactForm";
import ContactReasons from "@/components/contact/components/ContactReasons";
import ContactFAQ from "@/components/contact/components/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Eklavya | Talk About Your Learning Journey",
  description:
    "Contact Eklavya about courses, programs, admissions, student support, learning paths and partnerships.",
  keywords: [
    "Eklavya contact",
    "contact Eklavya",
    "Eklavya courses",
    "course enquiry",
    "student support",
    "learning programs",
  ],
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        <ContactHero />

        {/* Contact workspace */}
        <section
          id="contact"
          className="scroll-mt-20 bg-slate-50"
        >
          <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 xl:gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        <ContactReasons />

        <ContactFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;