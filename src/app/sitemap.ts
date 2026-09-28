import type { MetadataRoute } from "next";

import { courses } from "@/components/courses/data/coursesData";
import { blogs } from "@/components/blogs/data/blogsData";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const courseRoutes = courses.map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: course.featured ? 0.9 : 0.7,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedDate
      ? new Date(blog.updatedDate)
      : new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: blog.featured
      ? 0.9
      : blog.popular
        ? 0.8
        : 0.7,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...blogRoutes,
  ];
}