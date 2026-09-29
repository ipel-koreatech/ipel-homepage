import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PublicationList from "@/components/PublicationList";
import { publications } from "@/data/publications";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const journals = publications.filter((p) => p.type === "journal");
  const conferences = publications.filter((p) => p.type === "conference");

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Journal Publications (SCIE)"
        subtitle="Peer-reviewed journal papers on HVDC control, renewable energy integration and power system analysis."
      />

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
