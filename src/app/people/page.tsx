import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SubNav from "@/components/SubNav";
import Timeline from "@/components/Timeline";
import { professor } from "@/data/professor";

export const metadata: Metadata = { title: "People" };

const peopleNav = [
  { href: "/people", label: "Professor" },
  { href: "/people/members", label: "Members" },
  { href: "/people/gallery", label: "Gallery" },
];

export default function ProfessorPage() {
  return (
    <>
      <PageHeader eyebrow="People · PI" title="Professor" subtitle="지도교수">
        <SubNav items={peopleNav} />
      </PageHeader>

      <section className="container-x mt-14 grid gap-10 md:grid-cols-[14rem_1fr] md:gap-14">
        <div className="mx-auto w-52 md:mx-0 md:w-full">
          <div className="overflow-hidden rounded-2xl border border-line bg-paper-2">
            <Image
              src={professor.photo}
              alt={professor.name}
              width={800}
              height={1030}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {professor.name} <span className="font-medium text-muted">({professor.nameKo})</span>
          </h2>
          <p className="mt-2 text-lg text-ink-2">{professor.title}</p>
          <p className="text-muted">
            {professor.department}
            <br />
            {professor.university}
          </p>

          <dl className="mt-6 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-[5rem_1fr]">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${professor.email}`} className="hover:text-accent-ink hover:underline">
                {professor.email}
              </a>
              <span className="ml-2 text-xs text-muted">(Please contact via this email address)</span>
            </dd>
            <dt className="text-muted">Tel</dt>
            <dd>{professor.tel}</dd>
          </dl>

          {professor.links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {professor.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium transition hover:border-ink"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}

          <div className="mt-8">
            <div className="eyebrow">Research Interests</div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {professor.interests.map((it) => (
                <li key={it} className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm text-accent-ink">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x mt-16 grid gap-12">
        <div>
          <div className="eyebrow">Education</div>
          <div className="mt-3">
            <Timeline items={professor.education.map((e) => ({ period: e.period, heading: e.degree, sub: e.org }))} />
          </div>
        </div>
        <div>
          <div className="eyebrow">Professional Experience</div>
          <div className="mt-3">
            <Timeline items={professor.experience.map((e) => ({ period: e.period, heading: e.role, sub: e.org }))} />
          </div>
        </div>
      </section>
    </>
  );
}
