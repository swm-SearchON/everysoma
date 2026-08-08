import Link from "next/link";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">
      <div className={`h-24 bg-gradient-to-br ${course.accent} flex items-end p-4`}>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          <Link href={`/courses/${course.slug}`} className="hover:text-blue-600">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {course.shortDescription}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
          <li>Level: {course.level}</li>
          <li>{course.durationHours} hours</li>
          <li>{course.lessonCount} lessons</li>
          <li>
            {course.projectCount} projects
            {course.exercises ? ` · ${course.exercises}` : ""}
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-base font-bold text-slate-900">${course.price}</span>
          <Link
            href={`/courses/${course.slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Explore Course →
          </Link>
        </div>
      </div>
    </article>
  );
}
