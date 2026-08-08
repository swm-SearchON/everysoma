import type { Course } from "@/data/courses";

export default function CourseMetadata({ course }: { course: Course }) {
  const items: { label: string; value: string }[] = [
    { label: "Price", value: `$${course.price}` },
    { label: "Level", value: course.level },
    { label: "Duration", value: `${course.durationHours} hours` },
    { label: "Lessons", value: `${course.lessonCount} lessons` },
    {
      label: "Projects",
      value: `${course.projectCount} hands-on projects${course.exercises ? ` · ${course.exercises}` : ""}`,
    },
    { label: "Prerequisites", value: course.prerequisite },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm font-medium text-slate-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
