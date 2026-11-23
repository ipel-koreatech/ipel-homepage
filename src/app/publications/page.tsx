import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PublicationList, { AuthorList } from "@/components/PublicationList";
import { publications } from "@/data/publications";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const underReview = publications.filter((p) => p.status === "under review");
  const published = publications.filter((p) => !p.status);
  const journals = published.filter((p) => p.type === "journal");
  const conferences = published.filter((p) => p.type === "conference");

  const sections = [
    { href: "#journal", label: "Journal Papers (SCIE)", count: journals.length },
    { href: "#conference", label: "Conference Papers", count: conferences.length },
    { href: "#under-review", label: "Under Review", count: underReview.length },
  ].filter((s) => s.count > 0);

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications"
        subtitle="Journal and conference papers on HVDC control, renewable energy integration and power system analysis."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink-2 transition hover:border-ink"
            >
              {s.label} <span className="ml-1 font-semibold text-accent-ink">{s.count}</span>
            </a>
          ))}
        </div>
      </PageHeader>

      {underReview.length > 0 && (
        <section id="under-review" className="container-x mt-14 scroll-mt-24">
          <div className="rounded-2xl border border-line bg-paper-2 p-6 md:p-8">
            <div className="eyebrow">Under Review</div>
            <ol className="mt-3 divide-y divide-line">
              {underReview.map((p, i) => (
                <li key={i} className="py-4 first:pt-1 last:pb-0">
                  <div className="font-medium leading-snug">{p.title}</div>
                  <div className="mt-1 text-sm text-muted">
                    <AuthorList authors={p.authors} />
                  </div>
                  <div className="mt-1 text-sm">
                    <em className="text-ink-2">{p.venue}</em>
                    <span className="text-muted">
                      , under review{p.submitted ? ` (submitted ${p.submitted})` : ""}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {journals.length > 0 && (
        <section id="journal" className="container-x mt-16 scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
            <h2 className="text-2xl font-bold">Journal Papers (SCIE)</h2>
            <span className="text-sm text-muted">{journals.length} papers</span>
          </div>
          <div className="mt-8">
            <PublicationList items={journals} />
          </div>
        </section>
      )}

      {conferences.length > 0 && (
        <section id="conference" className="container-x mt-20 scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
            <h2 className="text-2xl font-bold">Conference Papers</h2>
            <span className="text-sm text-muted">
              학술대회 논문 · {conferences.length} {conferences.length === 1 ? "paper" : "papers"}
            </span>
          </div>
          <div className="mt-8">
            <PublicationList items={conferences} />
          </div>
        </section>
      )}
    </>
  );
}
