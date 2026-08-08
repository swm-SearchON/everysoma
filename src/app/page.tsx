import type { Metadata } from "next";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import GuideCard from "@/components/GuideCard";
import FaqAccordion from "@/components/FaqAccordion";
import { getFeaturedCourses } from "@/data/courses";
import { guides } from "@/data/guides";
import { siteFaq } from "@/data/faq";
import { learningPaths, SITE_NAME, SITE_TAGLINE } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Build practical tech skills with focused online courses in Python, SQL, data analytics, React, and modern web development.",
  alternates: { canonical: "/" },
};

const whyItems = [
  {
    title: "Structured learning paths",
    description:
      "Courses are organized into clear paths — Python, SQL, data analytics, and web development — so you always know what to learn next.",
  },
  {
    title: "Practical exercises",
    description:
      "Every course is built around hands-on work: exercises after each concept and projects at the end of each module.",
  },
  {
    title: "Beginner-friendly courses",
    description:
      "Most courses assume no prior experience, and intermediate courses state their prerequisites clearly.",
  },
  {
    title: "Clear course outcomes",
    description:
      "Each course page lists exactly what you will be able to do when you finish — no vague promises.",
  },
];

export default function HomePage() {
  const featured = getFeaturedCourses();

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Build practical tech skills with focused online courses.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Learn Python, SQL, data analytics, React, and modern web development
            through structured, project-focused courses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/courses"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore Courses
            </Link>
            <Link
              href="/guides"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              View Learning Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Featured Courses</h2>
          <Link href="/courses" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View all courses →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Learning Paths</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Follow a structured path from fundamentals to job-ready skills.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningPaths.map((path) => (
              <div key={path.slug} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{path.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{path.description}</p>
                <p className="mt-4">
                  <Link
                    href="/courses"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Browse {path.name} courses →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Every Soma */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Why Every Soma</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {whyItems.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600"
              />
              <div>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Learning Guides</h2>
            <Link href="/guides" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View all guides →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-8">
          <FaqAccordion items={siteFaq.slice(0, 4)} />
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Have more questions?{" "}
          <Link href="/faq" className="font-medium text-blue-600 hover:text-blue-700">
            Read the full FAQ
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
