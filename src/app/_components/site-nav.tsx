"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/achievements", label: "Achievements" },
  { href: "/work", label: "Work history" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/proof", label: "Proof" },
  { href: "/hobby", label: "Hobby" },
  { href: "/downtime", label: "My down time" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (href: string) =>
    `rounded-lg px-3 py-2 text-sm font-semibold hover:text-signal ${
      pathname === href ? "text-signal" : "text-ink"
    }`;

  return (
    <header className="print-hide sticky top-0 z-20 border-b border-line bg-page/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight"
        >
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={30}
            height={30}
            unoptimized
            priority
          />
          Ana Lu
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/hire"
              className="rounded-lg bg-amber px-4 py-2 text-sm font-bold text-on-amber hover:brightness-95"
            >
              Hire me <span aria-hidden="true">😊</span>
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-lg border border-line px-3 py-2 text-sm font-bold lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto grid max-w-5xl gap-1 border-t border-line px-5 pt-2 pb-4 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`block py-3 text-base ${linkClass(l.href)}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/hire"
              className="block rounded-xl bg-amber px-5 py-3.5 text-center text-base font-bold text-on-amber"
            >
              Hire me <span aria-hidden="true">😊</span>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
