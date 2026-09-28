import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex min-h-[calc(100vh-160px)] items-center">
        <div className="w-full px-6 py-20 xl:px-30 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* 404 */}
            <div className="relative">
              <span className="select-none text-[9rem] font-bold leading-none tracking-[-0.08em] text-slate-100 sm:text-[12rem] lg:text-[16rem]">
                404
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 border border-[#A41034]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#A41034] shadow-sm">
                  <FiSearch size={13} />
                  Page not found
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mx-auto -mt-4 max-w-2xl sm:-mt-8">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                We couldnt find that page.
              </h1>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The page you are looking for may have been moved, deleted, or
                the URL may be incorrect. Let us help you get back on track.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-[#A41034] bg-[#A41034] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
                >
                  <FiHome size={16} />
                  Go to Homepage
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
                >
                  Explore Courses
                  <FiArrowLeft className="rotate-180" size={16} />
                </Link>
              </div>
            </div>

            {/* Helpful Links */}
            <div className="mt-14 border-t border-slate-200 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                You may want to visit
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
                <Link
                  href="/"
                  className="text-slate-600 transition-colors hover:text-[#A41034]"
                >
                  Home
                </Link>

                <Link
                  href="/courses"
                  className="text-slate-600 transition-colors hover:text-[#A41034]"
                >
                  Courses
                </Link>

                <Link
                  href="/about"
                  className="text-slate-600 transition-colors hover:text-[#A41034]"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="text-slate-600 transition-colors hover:text-[#A41034]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;