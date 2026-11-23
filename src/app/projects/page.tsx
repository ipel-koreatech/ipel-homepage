import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { projects, type Project } from "@/data/projects";
import { consulting } from "@/data/consulting";

export const metadata: Metadata = { title: "Projects" };

function ProjectGroup({ title, note, list }: { title: string; note: string; list: Project[] }) {
  if (list.length === 0) return null;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-sm text-muted">{note}</span>
      </div>
      <ol className="mt-6 divide-y divide-line border-y border-line">
        {list.map((p, i) => (
          <li key={i} className="grid gap-2 py-5 md:grid-cols-[11rem_1fr_auto] md:gap-6">
            <div className="text-sm text-muted">{p.period}</div>
            <div>
              <div className="font-medium leading-snug">{p.title}</div>
              {p.titleKo && <div className="mt-1 text-sm text-muted">{p.titleKo}</div>}
              {p.partner && <div className="mt-1 text-sm text-ink-2">Joint research with {p.partner}</div>}
            </div>
            <div className="text-sm text-ink-2 md:text-right">
              <span className="rounded-full bg-paper-2 px-3 py-1">{p.sponsor}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Research Projects"
        subtitle="산학 및 정부 과제 수행 이력과 기술 자문. Sponsored research and advisory work on HVDC, renewable integration and future power system planning."
      />

      <section className="container-x mt-14 space-y-16">
        {/* 현재 연구실(KOREATECH) 과제 */}
        <ProjectGroup
          title="Projects in KOREATECH"
          note="2026 – present"
          list={projects.filter((p) => p.affiliation === "KOREATECH")}
        />

        {/* 자문 */}
        {consulting.length > 0 && (
          <div id="consulting" className="scroll-mt-24">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-bold">Consulting &amp; Advisory</h2>
              <span className="text-sm text-muted">기술 자문</span>
            </div>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {consulting.map((c, i) => (
                <li key={i} className="grid gap-2 py-5 md:grid-cols-[11rem_1fr_auto] md:gap-6">
                  <div className="text-sm text-muted">{c.period}</div>
                  <div>
                    <div className="font-medium leading-snug">{c.title}</div>
                    {c.titleKo && <div className="mt-1 text-sm text-muted">{c.titleKo}</div>}
                    {c.clientKo && <div className="mt-1 text-sm text-ink-2">{c.clientKo}</div>}
                    {c.role && <div className="mt-1 text-sm text-muted">{c.role}</div>}
                  </div>
                  <div className="text-sm text-ink-2 md:text-right">
                    <span className="rounded-full bg-paper-2 px-3 py-1">{c.client}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* 이전 소속(고려대) 과제 */}
        <ProjectGroup
          title="Previous Projects in Korea University"
          note="2017 – 2023"
          list={projects.filter((p) => p.affiliation === "Korea University")}
        />
      </section>
    </>
  );
}
