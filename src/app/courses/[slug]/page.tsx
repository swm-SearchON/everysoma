import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CourseCard from "@/components/CourseCard";
import CourseMetadata from "@/components/CourseMetadata";
import CtaSection from "@/components/CtaSection";
import CurriculumSection from "@/components/CurriculumSection";
import FaqAccordion from "@/components/FaqAccordion";
import GuideCard from "@/components/GuideCard";
import { courses, getCourse } from "@/data/courses";
import { getGuide } from "@/data/guides";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: `${course.shortDescription} ${course.level} level, ${course.durationHours} hours, ${course.lessonCount} lessons, $${course.price}.`,
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const relatedCourses = course.relatedCourseSlugs
    .map((s) => getCourse(s))
    .filter((c) => c !== undefined);
  const relatedGuides = course.relatedGuideSlugs
    .map((s) => getGuide(s))
    .filter((g) => g !== undefined);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Breadcrumb
        items={[{ label: "Courses", href: "/courses" }, { label: course.title }]}
      />

      <article className="mt-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {course.category} · {course.level}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {course.shortDescription}
          </p>
          <div className="mt-6">
            <CourseMetadata course={course} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#curriculum"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              View Curriculum
            </a>
            <a
              href="#related"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Browse Related Courses
            </a>
          </div>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
          <div className="mt-4 space-y-4">
            {course.overview.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">What you&apos;ll learn</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.whatYouWillLearn.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                <span aria-hidden="true" className="mt-0.5 font-semibold text-blue-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="curriculum" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900">Curriculum</h2>
          <p className="mt-2 text-sm text-slate-600">
            {course.curriculum.length} modules · {course.lessonCount} lessons ·{" "}
            {course.durationHours} hours of material
          </p>
          <div className="mt-6">
            <CurriculumSection modules={course.curriculum} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Who this course is for</h2>
          <ul className="mt-4 space-y-2.5">
            {course.whoFor.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Prerequisites</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {course.prerequisite}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Course outcomes</h2>
          <p className="mt-2 text-sm text-slate-600">
            By the end of this course, you will be able to:
          </p>
          <ul className="mt-4 space-y-2.5">
            {course.outcomes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                <span aria-hidden="true" className="mt-0.5 font-semibold text-blue-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion items={course.faq} />
          </div>
        </section>
      </article>

      <section id="related" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-900">Related Courses</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {relatedCourses.map((related) => (
            <CourseCard key={related.slug} course={related} />
          ))}
        </div>
        {relatedGuides.length > 0 && (
          <>
            <h2 className="mt-12 text-2xl font-bold text-slate-900">Related Guides</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </>
        )}
      </section>

      <div className="mt-16">
        <CtaSection
          title="Explore the full course catalog"
          description="Compare levels, durations, and prerequisites across all Every Soma courses."
          primaryHref="/courses"
          primaryLabel="Browse All Courses"
          secondaryHref="/guides"
          secondaryLabel="View Learning Guides"
        />
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Not sure this is the right course?{" "}
        <Link href="/faq" className="font-medium text-blue-600 hover:text-blue-700">
          Read the FAQ
        </Link>{" "}
        or start with a{" "}
        <Link href="/guides" className="font-medium text-blue-600 hover:text-blue-700">
          learning guide
        </Link>
        .
      </p>
    </main>
  );
}
