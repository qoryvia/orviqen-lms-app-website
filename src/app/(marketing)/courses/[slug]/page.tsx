import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import { courses } from "@/components/courses/data/coursesData";

import CourseDetailHero from "@/components/courses/courseDetail/CourseDetailHero";
import CourseOverview from "@/components/courses/courseDetail/CourseOverview";
import CourseHighlights from "@/components/courses/courseDetail/CourseHighlights";
import CourseLearning from "@/components/courses/courseDetail/CourseLearning";
import CourseCurriculum from "@/components/courses/courseDetail/CourseCurriculum";
import CourseProjects from "@/components/courses/courseDetail/CourseProjects";
import CourseCareer from "@/components/courses/courseDetail/CourseCareer";
import CoursePrerequisites from "@/components/courses/courseDetail/CoursePrerequisites";
import CourseTools from "@/components/courses/courseDetail/CourseTools";
import CourseFAQ from "@/components/courses/courseDetail/CourseFAQ";
import CourseCertificate from "@/components/courses/courseDetail/CourseCertificate";
import CourseEnrollmentCard from "@/components/courses/courseDetail/CourseEnrollmentCard";
import RelatedCourses from "@/components/courses/courseDetail/RelatedCourses";
import CourseCTA from "@/components/courses/courseDetail/CourseCTA";

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

const findCourse = (slug: string) => {
  const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();

  return courses.find(
    (item) =>
      item.slug?.trim().toLowerCase() === normalizedSlug ||
      item.id?.trim().toLowerCase() === normalizedSlug,
  );
};

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = findCourse(slug);

  if (!course) {
    return {
      title: "Course Not Found | Eklavya",
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

const CourseDetailPage = async ({ params }: CoursePageProps) => {
  const { slug } = await params;

  const course = findCourse(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses =
    course.relatedCourses
      ?.map((relatedId) =>
        courses.find((item) => item.id === relatedId && item.id !== course.id),
      )
      .filter((relatedCourse): relatedCourse is (typeof courses)[number] =>
        Boolean(relatedCourse),
      ) || [];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription || course.description,
    image: course.image,
    courseMode: course.mode || "Online",
    educationalLevel: course.level,
    inLanguage: course.language?.join(", "),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode || "Online",
      duration: course.duration,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(courseSchema),
          }}
        />

        <CourseDetailHero course={course} />

        <div className="border-b border-slate-200 bg-white">
          <div className="px-6 xl:px-30">
            <div className="grid items-start gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 lg:py-14">
              {/* Main Content */}
              <div className="min-w-0 space-y-14">
                <CourseOverview course={course} />

                <CourseHighlights course={course} />

                <CourseLearning course={course} />

                <CourseCurriculum course={course} />

                <CourseProjects course={course} />

                {course.certification && <CourseCertificate course={course} />}

                <CourseCareer course={course} />

                <CoursePrerequisites course={course} />

                <CourseTools course={course} />

                <CourseFAQ course={course} />
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <CourseEnrollmentCard course={course} />
                </div>
              </aside>
            </div>
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
