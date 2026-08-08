import Link from "next/link";
import type { Guide } from "@/data/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
        Learning Guide
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">
        <Link href={`/guides/${guide.slug}`} className="hover:text-blue-600">
          {guide.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {guide.description}
      </p>
      <p className="mt-4">
        <Link
          href={`/guides/${guide.slug}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Read Guide →
        </Link>
      </p>
    </article>
  );
}
