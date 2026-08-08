import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Every Soma is a practical education catalog for programming, data, and web development, with structured courses and free learning guides.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumb items={[{ label: "About" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        About Every Soma
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
        <p>
          Every Soma is a practical education catalog focused on three areas:
          programming, data, and web development. The catalog documents
          structured, project-focused curricula for learning Python, SQL, data
          analytics, React, and Next.js.
        </p>
        <p>
          Our approach is simple: every course is broken into modules with
          concrete lessons, every concept is followed by exercises or projects,
          and every course page states its level, duration, prerequisites, and
          outcomes up front. Learners should always know exactly what a course
          covers and what they will be able to do afterwards.
        </p>
        <p>
          Alongside the course catalog, Every Soma publishes free learning
          guides that answer the questions beginners actually ask: how to learn
          Python from zero, whether to learn Python or SQL first, and what the
          full path to becoming a data analyst looks like.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">What we focus on</h2>
        <ul className="mt-4 space-y-3">
          {[
            "Programming — Python fundamentals through practical projects",
            "Data — SQL, Pandas, NumPy, analytics workflows, and basic statistics",
            "Web development — React and Next.js for building modern applications",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-base leading-relaxed text-slate-600">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16">
        <CtaSection
          title="Explore the catalog"
          description="Six structured courses and four in-depth learning guides across programming, data, and web development."
          primaryHref="/courses"
          primaryLabel="Explore Courses"
          secondaryHref="/guides"
          secondaryLabel="View Learning Guides"
        />
      </div>
    </main>
  );
}
