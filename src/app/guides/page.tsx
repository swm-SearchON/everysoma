import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Learning Guides",
  description:
    "Free learning guides from Every Soma: how to learn Python, how to learn SQL, Python vs SQL, and the complete data analyst roadmap.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumb items={[{ label: "Guides" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Learning Guides
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
        Practical, opinionated guides on what to learn and in what order —
        written to answer the questions beginners actually ask.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
      <div className="mt-16">
        <CtaSection
          title="Ready to start learning?"
          description="Every guide pairs with structured courses that put the advice into practice."
          primaryHref="/courses"
          primaryLabel="Explore Courses"
        />
      </div>
    </main>
  );
}
