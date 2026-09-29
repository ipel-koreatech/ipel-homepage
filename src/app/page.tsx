import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { researchAreas } from "@/data/research";
import { news } from "@/data/news";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";

const stats = [
  { label: "SCIE Journal Papers", value: publications.filter((p) => p.type === "journal").length },
  { label: "Research Projects", value: projects.length },
  { label: "Research Areas", value: researchAreas.length },
];

export default function HomePage() {
  return (
    <>
      {/* Recruiting banner */}
      <div className="border-b border-line bg-accent-soft">
        <div className="container-x flex flex-col gap-1 py-2.5 text-sm text-accent-ink sm:flex-row sm:items-center sm:justify-between">
          <span>
            <strong className="font-semibold">Recruiting</strong> · {site.recruiting.ko}{" "}
            <span className="hidden lg:inline">({site.recruiting.en})</span>
          </span>
          <Link href="/contact" className="font-semibold underline-offset-4 hover:underline">
            Contact →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="container-x flex flex-col items-center py-20 text-center md:py-28">
        <div className="fade-up">
          <Image src="/images/emblem.png" alt="IPEL emblem" width={96} height={117} priority />
        </div>
        <h1 className="mt-8 text-5xl font-extrabold tracking-[0.18em] md:text-7xl fade-up-2">
          IPEL
        </h1>
        <p className="mt-4 text-xl font-semibold text-ink-2 md:text-2xl fade-up-2">{site.fullName}</p>
        <p className="mt-1 text-muted fade-up-3">
          {site.koreanName} · {site.universityKo}
        </p>
        <p className="mt-8 max-w-2xl text-balance text-ink-2 md:text-lg fade-up-3">
          We are a research group focusing on the next generation power system including HVDC,
          FACTS and renewable energy.
        </p>
        <p className="mt-2 max-w-2xl text-balance text-sm text-muted fade-up-3">
          우리 연구실은 송전망 해석 및 계획 분야를 주로 연구하며, 미래 전력계통의 핵심 구성요소인
          HVDC, FACTS 및 신재생에너지원이 포함된 계통을 다룹니다.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 fade-up-3">
          <Link
            href="/research"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition hover:bg-ink-2"
          >
            Our Research
          </Link>
          <Link
            href="/people"
            className="rounded-full border border-line px-6 py-2.5 text-sm font-medium transition hover:border-ink"
          >
            People
          </Link>
        </div>
      </section>

      {/* Three cards */}
      <section className="container-x grid gap-5 md:grid-cols-3">
        <Link href="/research" className="card p-6">
          <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <h3 className="mt-5 text-lg font-semibold">Research</h3>
          <p className="mt-2 text-sm text-muted">
            HVDC &amp; FACTS in power systems, renewable &amp; sustainable energy, and power system
            planning &amp; analysis.
          </p>
        </Link>
        <Link href="/people" className="card p-6">
          <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="mt-5 text-lg font-semibold">People</h3>
          <p className="mt-2 text-sm text-muted">
            Meet Prof. Junghun Lee and the members of IPEL. We promise maximum support to every
            member of our group.
          </p>
        </Link>
        <Link href="/#news" className="card p-6">
          <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
            </svg>
          </div>
          <h3 className="mt-5 text-lg font-semibold">News</h3>
          <p className="mt-2 text-sm text-muted">
            Latest updates from IPEL: papers, projects, recruiting and lab activities.
          </p>
        </Link>
      </section>

      {/* Campus band */}
      <section className="relative mt-24 overflow-hidden">
        <Image
          src="/images/campus.jpg"
          alt="KOREATECH campus"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="container-x relative py-24 text-white md:py-32">
          <Image src="/images/logo-white.png" alt="IPEL" width={220} height={64} className="h-auto w-48 md:w-56" />
          <h2 className="mt-8 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            Welcome to IPEL at KOREATECH
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            한국기술교육대학교 차세대 전력계통연구실에 오신 것을 환영합니다.
          </p>
          <p className="mt-6 max-w-2xl text-white/85 md:text-lg">
            We pursue a challenging career based on the power system industry and always want to
            contribute to the future power system including HVDC and renewable energy.
          </p>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-white/60">{s.label}</dt>
                <dd className="mt-1 text-3xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Research areas */}
      <section className="container-x mt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Research</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">What we study</h2>
          </div>
          <Link href="/research" className="text-sm font-medium text-ink-2 hover:text-ink">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {researchAreas.map((r, i) => (
            <Link key={r.slug} href={`/research#${r.slug}`} className="card p-6">
              <div className="text-sm font-semibold text-accent-ink">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{r.title}</h3>
              <p className="mt-1 text-sm text-muted">{r.titleKo}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-2">
                {r.topics.slice(0, 3).map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* News */}
      <section id="news" className="container-x mt-24 scroll-mt-24">
        <div className="eyebrow">News</div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Latest updates</h2>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {news.map((n, i) => (
            <li key={i} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr]">
              <time className="text-sm text-muted">{n.date}</time>
              <div>
                <div className="font-medium">{n.title}</div>
                {n.body && <p className="mt-1 text-sm text-muted">{n.body}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="container-x mt-24">
        <div className="card overflow-hidden p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="eyebrow">Join us</div>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                석사 · 박사과정 연구실원을 모집합니다
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                IPEL currently opens for researchers who majored in electrical engineering with an
                emphasis on power systems, and promises maximum support to the members of our group.
                Post-Doc &amp; Ph.D. applicants from foreign countries are welcome (please attach
                your CV).
              </p>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="accent-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
