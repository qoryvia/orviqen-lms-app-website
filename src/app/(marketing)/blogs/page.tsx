import type { Metadata } from "next";
import React from "react";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import BlogsHero from "@/components/blogs/components/BlogsHero";
import FeaturedBlog from "@/components/blogs/components/FeaturedBlog";
import BlogGrid from "@/components/blogs/components/BlogGrid";
import BlogNewsletter from "@/components/blogs/components/BlogNewsletter";
import BlogCTA from "@/components/blogs/components/BlogCTA";

import { featuredBlog } from "@/components/blogs/data/blogsData";

export const metadata: Metadata = {
  title: "Blogs | Technology, Learning, AI, Data & Careers | Eklavya",
  description:
    "Explore Eklavya articles on software development, artificial intelligence, cybersecurity, data, careers, programming and modern learning.",
  keywords: [
    "Eklavya blogs",
    "technology blog",
    "programming blog",
    "software development blog",
    "AI blog",
    "machine learning blog",
    "cybersecurity blog",
    "data science blog",
    "developer career blog",
    "learning blog",
  ],
  openGraph: {
    title: "Eklavya Journal",
    description: "Ideas, insights and practical knowledge for modern learners.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=85",
        width: 2000,
        height: 1200,
        alt: "Eklavya Journal",
      },
    ],
  },
};

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <BlogsHero />

        <FeaturedBlog blog={featuredBlog} />

        <BlogGrid />

        <BlogNewsletter />

        <BlogCTA />
      </main>

      <Footer />
    </div>
  );
};

export default BlogsPage;
