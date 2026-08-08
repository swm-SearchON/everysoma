import Link from "next/link";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CtaSection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaSectionProps) {
  return (
    <section className="rounded-2xl bg-slate-900 px-6 py-12 text-center sm:px-12">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href={primaryHref}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
