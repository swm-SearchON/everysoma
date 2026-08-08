import Link from "next/link";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/instructors", label: "Instructors" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Every<span className="text-blue-600"> Soma</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 text-sm font-medium text-slate-600 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-blue-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
