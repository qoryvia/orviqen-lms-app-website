"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiChevronDown,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

const CRIMSON = "#A41034";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-[76px] items-center justify-between px-6 xl:px-30">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >
            {/* Institutional Monogram */}
            <div
              className="flex h-11 w-11 items-center justify-center border-2 font-serif text-[15px] font-bold tracking-tight text-white"
              style={{
                backgroundColor: CRIMSON,
                borderColor: CRIMSON,
              }}
            >
              HC
            </div>

            {/* Wordmark */}
            <div className="leading-none">
              <div
                className="font-serif text-[23px] font-bold tracking-[-0.02em]"
                style={{ color: CRIMSON }}
              >
                HenleyCrest
              </div>

              <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.23em] text-slate-500">
                Education & Global Careers
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-7">
              <Link
                href="/programs"
                className="text-[14px] font-medium text-slate-700 transition-colors hover:text-[#A41034]"
              >
                Programs
              </Link>

              <Link
                href="/courses"
                className="text-[14px] font-medium text-slate-700 transition-colors hover:text-[#A41034]"
              >
                Courses
              </Link>

              <Link
                href="/study-abroad"
                className="flex items-center gap-1.5 text-[14px] font-medium text-slate-700 transition-colors hover:text-[#A41034]"
              >
                Study Abroad
              </Link>

              <Link
                href="/career"
                className="text-[14px] font-medium text-slate-700 transition-colors hover:text-[#A41034]"
              >
                Careers
              </Link>

              <Link
                href="/resources"
                className="flex items-center justifyce gap-1.5 text-[14px] font-medium text-slate-700 transition-colors hover:text-[#A41034]"
              >
                Resources
              </Link>

              <Link
                href="/about"
                className="text-[14px] font-medium text-slate-700 transition-colors hover:text-[#A41034]"
              >
                About
              </Link>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-3 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:text-[#A41034]"
            >
              <FiPhone size={15} />
              Talk to an Advisor
            </Link>

            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[#A41034] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
            >
              Apply Now
              <FiArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-800 transition hover:border-[#A41034] hover:text-[#A41034] lg:hidden"
          >
            {mobileMenuOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto px-6 py-5 xl:px-30">
            <div className="space-y-1">
              <Link
                href="/programs"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#A41034]"
              >
                Programs
              </Link>

              <Link
                href="/courses"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#A41034]"
              >
                Courses
              </Link>

              <Link
                href="/study-abroad"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#A41034]"
              >
                Study Abroad
              </Link>

              <Link
                href="/career"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#A41034]"
              >
                Careers
              </Link>

              <Link
                href="/resources"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#A41034]"
              >
                Resources
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#A41034]"
              >
                About
              </Link>
            </div>

            <div className="mt-5 grid gap-3 border-t border-slate-200 pt-5">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 border border-[#A41034] px-5 py-3 text-sm font-semibold text-[#A41034] transition hover:bg-[#A41034]/5"
              >
                <FiPhone size={16} />
                Talk to an Advisor
              </Link>

              <Link
                href="/apply"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8C0D2A]"
              >
                Apply Now
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;