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
  title: "Contact Orviqen | Talk About Your Learning Journey",
  description:
    "Contact Orviqen about courses, programs, admissions, student support, learning paths and partnerships.",
  keywords: [
    "Orviqen contact",
    "contact Orviqen",
    "Orviqen courses",
    "course enquiry",
    "student support",
    "learning programs",
  ],
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ContactHero />

        <section className="bg-white">
          <div className="px-6 py-14 xl:px-30 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
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