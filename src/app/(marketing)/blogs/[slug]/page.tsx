import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import {
  blogs,
} from "@/components/blogs/data/blogsData";

import BlogDetailHero from "@/components/blogs/blogDetail/components/BlogDetailHero";
import BlogAuthorCard from "@/components/blogs/blogDetail/components/BlogAuthorCard";
import BlogTableOfContents from "@/components/blogs/blogDetail/components/BlogTableOfContents";
import BlogKeyTakeaways from "@/components/blogs/blogDetail/components/BlogKeyTakeaways";
import BlogArticle from "@/components/blogs/blogDetail/components/BlogArticle";
import BlogRelatedPosts from "@/components/blogs/blogDetail/components/BlogRelatedPosts";
import BlogDetailCTA from "@/components/blogs/blogDetail/components/BlogDetailCTA";
import Link from "next/link";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  const blog = blogs.find(
    (item) =>
      item.slug.trim().toLowerCase() === normalizedSlug
  );

  if (!blog) {
    return {
      title: "Blog Not Found | Orviqen",
      description:
        "The requested blog article could not be found.",
    };
  }

  const seo = blog.seo;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,

    alternates: {
      canonical: seo.canonical,
    },

    openGraph: {
      title:
        seo.socialTitle ||
        seo.metaTitle ||
        blog.title,
      description:
        seo.socialDescription ||
        seo.metaDescription ||
        blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      modifiedTime: blog.updatedDate || blog.date,
      authors: [blog.author],
      section: blog.category,
      tags: blog.tags,
      images: [
        {
          url:
            seo.socialImage ||
            blog.image,
          width: 1600,
          height: 1000,
          alt:
            blog.imageAlt ||
            blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        seo.socialTitle ||
        seo.metaTitle ||
        blog.title,
      description:
        seo.socialDescription ||
        seo.metaDescription ||
        blog.excerpt,
      images: [
        seo.socialImage ||
        blog.image,
      ],
    },
  };
}

const BlogDetailPage = async ({
  params,
}: BlogDetailPageProps) => {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  const blog = blogs.find(
    (item) =>
      item.slug.trim().toLowerCase() === normalizedSlug
  );

  if (!blog) {
    notFound();
  }

  const relatedPosts =
    blog.relatedPosts
      ?.map((relatedSlug) =>
        blogs.find(
          (item) => item.slug === relatedSlug
        )
      )
      .filter(
        (
          item
        ): item is NonNullable<typeof item> =>
          Boolean(item)
      ) || [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: [
      blog.image,
    ],
    datePublished: blog.date,
    dateModified:
      blog.updatedDate || blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Orviqen",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blogs/${blog.slug}`,
    },
    keywords: blog.tags.join(", "),
    articleSection: blog.category,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <BlogDetailHero blog={blog} />

        <div className="px-6 xl:px-30">
          <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 lg:py-16">
            <article className="min-w-0">
              <BlogAuthorCard blog={blog} />

              <BlogKeyTakeaways blog={blog} />

              <BlogArticle blog={blog} />
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <BlogTableOfContents blog={blog} />

                <div className="border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                    Article Details
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-500">
                        Category
                      </span>

                      <span className="text-right text-sm font-semibold text-slate-900">
                        {blog.category}
                      </span>
                    </div>

                    {blog.difficulty && (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-slate-500">
                          Difficulty
                        </span>

                        <span className="text-sm font-semibold text-slate-900">
                          {blog.difficulty}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-500">
                        Read time
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {blog.readTime}
                      </span>
                    </div>

                    {blog.views !== undefined && (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-slate-500">
                          Views
                        </span>

                        <span className="text-sm font-semibold text-slate-900">
                          {blog.views.toLocaleString()}
                        </span>
                      </div>
                    )}

                    {blog.comments !== undefined && (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-slate-500">
                          Comments
                        </span>

                        <span className="text-sm font-semibold text-slate-900">
                          {blog.comments}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border border-[#A41034]/15 bg-[#A41034]/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                    Keep Learning
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">
                    Explore structured courses related to this topic.
                  </p>

                  <Link
                    href="/courses"
                    className="mt-4 inline-flex text-sm font-semibold text-[#A41034]"
                  >
                    Explore courses →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <BlogRelatedPosts posts={relatedPosts} />
        )}

        <BlogDetailCTA />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Footer />
    </div>
  );
};

export default BlogDetailPage;