import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CourseCard from "@/components/CourseCard";
import CtaSection from "@/components/CtaSection";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Browse all Every Soma courses: Python, SQL, data analytics, Pandas and NumPy, React, and Next.js. Each course lists its level, duration, lessons, projects, and price.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumb items={[{ label: "Courses" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">All Courses</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
        Six focused, project-based courses across Python, SQL, data analytics, and
        web development. Every course lists its level, duration, lesson count,
        projects, price, and prerequisites up front.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
      <div className="mt-16">
        <CtaSection
          title="Not sure where to start?"
          description="Our learning guides explain which skills to learn first and in what order — from complete beginner to job-ready."
          primaryHref="/guides"
          primaryLabel="View Learning Guides"
          secondaryHref="/faq"
          secondaryLabel="Read the FAQ"
        />
      </div>
    </main>
  );
}
