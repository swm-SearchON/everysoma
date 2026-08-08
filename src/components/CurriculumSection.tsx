import type { CurriculumModule } from "@/data/courses";

export default function CurriculumSection({ modules }: { modules: CurriculumModule[] }) {
  return (
    <ol className="space-y-4">
      {modules.map((module) => (
        <li key={module.title} className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-slate-900">{module.title}</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
            {module.lessons.map((lesson) => (
              <li key={lesson} className="flex gap-2">
                <span aria-hidden="true" className="text-slate-300">—</span>
                {lesson}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
