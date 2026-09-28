import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import { courses } from "@/components/courses/data/coursesData";

import CourseDetailHero from "@/components/courses/detailPage/CourseDetailHero";
import CourseOverview from "@/components/courses/detailPage/CourseOverview";
import CourseHighlights from "@/components/courses/detailPage/CourseHighlights";
import CourseLearning from "@/components/courses/detailPage/CourseLearning";
import CourseCurriculum from "@/components/courses/detailPage/CourseCurriculum";
import CourseProjects from "@/components/courses/detailPage/CourseProjects";
import CourseCareer from "@/components/courses/detailPage/CourseCareer";
import CoursePrerequisites from "@/components/courses/detailPage/CoursePrerequisites";
import CourseTools from "@/components/courses/detailPage/CourseTools";
import CourseFAQ from "@/components/courses/detailPage/CourseFAQ";
import RelatedCourses from "@/components/courses/detailPage/RelatedCourses";
import CourseCTA from "@/components/courses/detailPage/CourseCTA";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  const course = courses.find(
    (item) =>
      item.slug?.trim().toLowerCase() === normalizedSlug ||
      item.id?.trim().toLowerCase() === normalizedSlug
  );

  if (!course) {
    return {
      title: "Course Not Found | Orviqen",
      description: "The requested course could not be found.",
    };
  }

  const seo = course.seo;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,

    alternates: {
      canonical: seo.canonical,
    },

    openGraph: {
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      type: "website",
      images: [
        {
          url: seo.ogImage || course.image,
          width: 1400,
          height: 900,
          alt: course.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [seo.ogImage || course.image],
    },
  };
}

const CourseDetailPage = async ({
  params,
}: CoursePageProps) => {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  const course = courses.find(
    (item) =>
      item.slug?.trim().toLowerCase() === normalizedSlug ||
      item.id?.trim().toLowerCase() === normalizedSlug
  );

  if (!course) {
    notFound();
  }

  const relatedCourses =
    course.relatedCourses
      ?.map((relatedId) =>
        courses.find((item) => item.id === relatedId)
      )
      .filter(
        (
          relatedCourse
        ): relatedCourse is (typeof courses)[number] =>
          Boolean(relatedCourse)
      ) || [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <CourseDetailHero course={course} />

        <div className="px-6 xl:px-30">
          <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14 lg:py-16">
            <div className="min-w-0 space-y-14">
              <CourseOverview course={course} />

              <CourseHighlights course={course} />

              <CourseLearning course={course} />

              <CourseCurriculum course={course} />

              <CourseProjects course={course} />

              <CourseCareer course={course} />

              <CoursePrerequisites course={course} />

              <CourseTools course={course} />

              <CourseFAQ course={course} />
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="border border-slate-200 bg-white">
                  <div className="border-b border-slate-200 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                      Start Learning
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                      Build skills with{" "}
                      {course.shortTitle || course.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Get started with a structured learning path,
                      practical projects and guided curriculum.
                    </p>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <div className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-slate-500">
                        Level
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {course.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-slate-500">
                        Duration
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-slate-500">
                        Lessons
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {course.lessons || "—"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm text-slate-500">
                        Projects
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {course.projectsCount || "—"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <Link
                      href="/#lead"
                      className="flex w-full items-center justify-center bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
                    >
                      Enquire About This Course
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {relatedCourses.length > 0 && (
          <RelatedCourses courses={relatedCourses} />
        )}

        <CourseCTA course={course} />
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;