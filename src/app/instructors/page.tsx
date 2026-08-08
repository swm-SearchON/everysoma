import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Instructors",
  description:
    "Every Soma courses are designed and maintained by curriculum teams: the Data Curriculum team and the Web Curriculum team.",
  alternates: { canonical: "/instructors" },
};

const teams = [
  {
    name: "Every Soma Curriculum Team",
    role: "Curriculum standards and learning design",
    description:
      "Defines the structure shared by every Every Soma course: module-based curricula, exercises after each concept, projects at the end of each stage, and clearly stated outcomes and prerequisites. The team reviews all courses for consistency and beginner-friendliness.",
    courseSlugs: [] as string[],
  },
  {
    name: "Every Soma Data Curriculum",
    role: "Python, SQL, and data analytics courses",
    description:
      "Designs and maintains the data-focused catalog: Python for Beginners, SQL for Data Analysis, the Data Analytics Bootcamp, and Pandas and NumPy for Data Analysis. The team's focus is on realistic datasets and the day-to-day workflow of working analysts.",
    courseSlugs: [
      "python-for-beginners",
      "sql-for-data-analysis",
      "data-analytics-bootcamp",
      "pandas-and-numpy",
    ],
  },
  {
    name: "Every Soma Web Curriculum",
    role: "React and Next.js courses",
    description:
      "Designs and maintains the web development catalog: React Fundamentals and Next.js for Developers. The team keeps course material aligned with current framework practices, from the component model through the App Router and deployment.",
    courseSlugs: ["react-fundamentals", "nextjs-for-developers"],
  },
];

export default function InstructorsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumb items={[{ label: "Instructors" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Instructors
      </h1>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        Every Soma courses are created and maintained by curriculum teams rather
        than individual instructors. Each team owns a part of the catalog and is
        responsible for keeping its courses accurate, current, and consistent.
      </p>

      <div className="mt-10 space-y-6">
        {teams.map((team) => (
          <section key={team.name} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{team.name}</h2>
            <p className="mt-1 text-sm font-medium text-blue-600">{team.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{team.description}</p>
            {team.courseSlugs.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {team.courseSlugs.map((slug) => {
                  const course = courses.find((c) => c.slug === slug);
                  if (!course) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/courses/${slug}`}
                        className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600"
                      >
                        {course.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-16">
        <CtaSection
          title="See the courses in action"
          description="Every course page lists its full module-by-module curriculum."
          primaryHref="/courses"
          primaryLabel="Explore Courses"
        />
      </div>
    </main>
  );
}
