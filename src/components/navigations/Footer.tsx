import React from "react";
import Link from "next/link";
import faviconlogo from "../../assets/logos/favicon.png";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Image from "next/image";

const CRIMSON = "#A41034";

const footerLinks = {
  Explore: [
    { label: "Programs", href: "/programs" },
    { label: "Courses", href: "/courses" },
    { label: "Study Abroad", href: "/study-abroad" },
    { label: "Careers", href: "/career" },
  ],
  Resources: [
    { label: "Resources", href: "/resources" },
    { label: "Student Stories", href: "/student-stories" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Apply Now", href: "/apply" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="px-6 py-12 sm:py-14 xl:px-30">
        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Institutional Monogram */}
              <div className="flex h-11 w-11 items-center justify-center">
                <Image src={faviconlogo} alt="henley crest logo" />
              </div>

              {/* Wordmark */}
              <div className="leading-none">
                <div
                  className="font-serif text-[23px] font-bold tracking-[-0.02em]"
                  style={{ color: CRIMSON }}
                >
                  EklavyaED
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.23em] text-white/45">
                  Education & Global Careers
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
              Helping students build practical skills, explore meaningful
              opportunities and prepare for their academic and career journey.
            </p>

            <Link
              href="/apply"
              className="mt-5 inline-flex items-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
            >
              Apply Now
              <FiArrowRight size={15} />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  {title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-3">
          <a
            href="mailto:hello@Eklavya.com"
            className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
          >
            <FiMail size={16} className="shrink-0" style={{ color: CRIMSON }} />
            hello@eklavyaed.com
          </a>

          <a
            href="tel:+917800777099"
            className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
          >
            <FiPhone
              size={16}
              className="shrink-0"
              style={{ color: CRIMSON }}
            />
            +91 7800777099
          </a>

          <div className="flex items-center gap-3 text-sm text-white/55">
            <FiMapPin
              size={16}
              className="shrink-0"
              style={{ color: CRIMSON }}
            />
            India
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Eklavya. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-medium text-white/50 transition-colors hover:text-white"
            >
              Contact
              <FiArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
