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

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Journal Publications (SCIE)"
        subtitle="Peer-reviewed journal papers on HVDC control, renewable energy integration and power system analysis."
      />

      {underReview.length > 0 && (
        <section className="container-x mt-14">
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

      <section className="container-x mt-14">
        <PublicationList items={journals} />
      </section>

      {conferences.length > 0 && (
        <section className="container-x mt-20">
          <h2 className="text-2xl font-bold">Conference Papers</h2>
          <div className="mt-8">
            <PublicationList items={conferences} />
          </div>
        </section>
      )}
    </>
  );
}
