import React from "react";
import { FiMail, FiPhone, FiGift } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import BannerMessage from "./BannerMessage";

const Banner = () => {
  return (
    <div className="w-full border-b border-white/20 bg-[#A41034] text-white">
      <div className="flex min-h-[44px] items-center justify-between gap-6 px-4 text-[11px] font-medium sm:px-6 lg:px-10 xl:px-14">
        {/* Left Section */}
        <div className="flex items-center gap-5 whitespace-nowrap">
          <a
            href="mailto:info@glearnhub.com"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          >
            <FiMail className="text-[14px]" />
            <span>info@eklavyaed.com</span>
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          >
            <FiPhone className="text-[14px]" />
            <span>+91 7800777099</span>
          </a>
        </div>

        {/* Center Section */}
        <div>
          <BannerMessage />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="hidden sm:block">Follow Us:</span>

          <a
            href="#"
            aria-label="Facebook"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <FaFacebookF className="text-[12px]" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <FaTwitter className="text-[12px]" />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <FaInstagram className="text-[12px]" />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <FaLinkedinIn className="text-[12px]" />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <FaYoutube className="text-[12px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
