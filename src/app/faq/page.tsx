import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";
import { siteFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Every Soma courses: beginner suitability, practical projects, prerequisites, self-paced learning, and what the catalog includes.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        Common questions about Every Soma courses, prerequisites, and how the
        catalog works.
      </p>
      <div className="mt-10">
        <FaqAccordion items={siteFaq} />
      </div>
      <div className="mt-16">
        <CtaSection
          title="Ready to explore?"
          description="Browse the full catalog or start with a learning guide to find your path."
          primaryHref="/courses"
          primaryLabel="Explore Courses"
          secondaryHref="/guides"
          secondaryLabel="View Learning Guides"
        />
      </div>
    </main>
  );
}
