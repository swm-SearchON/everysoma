import Link from "next/link";
import { courses } from "@/data/courses";
import { guides } from "@/data/guides";
import { SITE_TAGLINE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-bold text-slate-900">
              Every<span className="text-blue-600"> Soma</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">{SITE_TAGLINE}</p>
          </div>
          <nav aria-label="Courses">
            <p className="text-sm font-semibold text-slate-900">Courses</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="hover:text-blue-600">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Guides">
            <p className="text-sm font-semibold text-slate-900">Learning Guides</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guides/${guide.slug}`} className="hover:text-blue-600">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-sm font-semibold text-slate-900">Every Soma</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-600">About</Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-blue-600">Instructors</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Every Soma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
