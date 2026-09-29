import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { researchAreas } from "@/data/research";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="What is Innovative Power & Energy Laboratory?"
        subtitle="We pursue a challenging career based on the power system industry and always want to make a contribution to the future power system including HVDC and renewable energy."
      />

      <section className="container-x mt-14 grid gap-4 sm:grid-cols-3">
        {["HVDC & FACTS in power system", "Renewable & Sustainable energy", "Power System Planning & Analysis"].map((k) => (
          <div key={k} className="rounded-2xl bg-paper-2 px-5 py-4 text-sm font-medium text-ink-2">
            {k}
          </div>
        ))}
      </section>

      <section className="container-x mt-16 space-y-8">
        {researchAreas.map((r, i) => (
          <article key={r.slug} id={r.slug} className="card scroll-mt-24 p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="text-sm font-semibold text-accent-ink">Research Item 0{i + 1}</div>
                <h2 className="mt-2 text-2xl font-bold leading-snug">{r.title}</h2>
                <p className="mt-1 text-muted">{r.titleKo}</p>
                <p className="mt-5 text-ink-2">{r.summary}</p>
                <p className="mt-2 text-sm text-muted">{r.summaryKo}</p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-6">
                <div className="eyebrow">Topics</div>
                <ul className="mt-3 space-y-2 text-sm text-ink-2">
                  {r.topics.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x mt-16">
        <div className="rounded-2xl border border-line bg-paper-2 p-7 md:p-10">
          <div className="eyebrow">About IPEL</div>
          <p className="mt-3 max-w-3xl text-ink-2">
            IPEL is a research group in KOREATECH. Our research focuses on power system analysis with
            regard to efficiency and stability, large-scale integration of renewable energy including
            HVDC &amp; FACTS, and we are also interested in wind farm modeling &amp; control.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink-2">
              Research projects
            </Link>
            <Link href="/publications" className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium hover:border-ink">
              Publications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
