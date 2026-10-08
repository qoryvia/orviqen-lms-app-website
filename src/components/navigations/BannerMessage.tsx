"use client"
import React, { useEffect, useState } from "react";
import { FiGift } from "react-icons/fi";

const bannerMessages = [
  "30 Days Money Back Guarantee",
  "Learn Today, Build Your Future",
  "New Courses Added Every Month",
  "Get Certified & Boost Your Career",
  "Flexible Learning. Better Results.",
];

const BannerMessage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const displayTime = 3500;
    const animationTime = 350;

    const timer = setTimeout(() => {
      setIsVisible(false);

      const changeMessage = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerMessages.length);
        setIsVisible(true);
      }, animationTime);

      return () => clearTimeout(changeMessage);
    }, displayTime);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="hidden items-center whitespace-nowrap lg:flex">
      <FiGift className="shrink-0 text-[14px]" />

      <span
        className={`inline-block min-w-[180px] text-start ml-2 transition-all duration-300 ease-out${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0"
        }`}
      >
        {bannerMessages[currentIndex]}
      </span>
    </div>
  );
};

export default BannerMessage;