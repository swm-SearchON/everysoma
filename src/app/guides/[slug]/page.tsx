import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CourseCard from "@/components/CourseCard";
import CtaSection from "@/components/CtaSection";
import { getCourse } from "@/data/courses";
import { getGuide, guides } from "@/data/guides";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedCourses = guide.relatedCourseSlugs
    .map((s) => getCourse(s))
    .filter((c) => c !== undefined);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumb
        items={[{ label: "Guides", href: "/guides" }, { label: guide.title }]}
      />

      <article className="mt-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Learning Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {guide.title}
          </h1>
        </header>

        <div className="mt-6 space-y-4">
          {guide.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>

        {guide.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.list && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2.5 text-base leading-relaxed text-slate-600">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Recommended Courses</h2>
        <p className="mt-2 text-sm text-slate-600">
          These Every Soma courses cover the skills discussed in this guide.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {relatedCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <div className="mt-16">
        <CtaSection
          title="More learning guides"
          description="Explore the rest of our guides on learning Python, SQL, and data analysis."
          primaryHref="/guides"
          primaryLabel="View All Guides"
          secondaryHref="/courses"
          secondaryLabel="Explore Courses"
        />
      </div>
    </main>
  );
}
