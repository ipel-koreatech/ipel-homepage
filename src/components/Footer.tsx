import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper-2">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/emblem.png" alt="" width={26} height={32} />
            <div className="leading-tight">
              <div className="font-bold tracking-[0.12em]">IPEL</div>
              <div className="text-xs text-muted">{site.fullName}</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            {site.koreanName} · {site.universityKo}
            <br />
            {site.department}
          </p>
        </div>

        <div>
          <div className="eyebrow">Menu</div>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-2 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>{site.tel}</li>
            <li className="text-muted">{site.addressKo}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-1 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.fullName}, {site.university}.
          </span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
