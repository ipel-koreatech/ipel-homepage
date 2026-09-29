"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNav({ items }: { items: { href: string; label: string }[] }) {
  const pathname = usePathname();
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink-2 hover:border-ink"
            }`}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}
