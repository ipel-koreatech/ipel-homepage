import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { professor } from "@/data/professor";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" subtitle="연구실 지원 및 협업 문의는 이메일로 연락해 주세요." />

      <section className="container-x mt-14 grid gap-10 md:grid-cols-2">
        <div className="space-y-8">
          <div className="card p-7">
            <div className="eyebrow">Recruiting</div>
            <h2 className="mt-2 text-xl font-semibold">석사 · 박사과정 연구실원 모집</h2>
            <p className="mt-2 text-sm text-muted">
              {site.recruiting.ko} {site.recruiting.en}
            </p>
            <a
              href={`mailto:${site.email}?subject=[IPEL] Application`}
              className="accent-gradient mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Send application
            </a>
          </div>

          <dl className="grid gap-x-6 gap-y-4 text-sm sm:grid-cols-[6rem_1fr]">
            <dt className="text-muted">Professor</dt>
            <dd>
              {professor.name} ({professor.nameKo}), {professor.title}
            </dd>
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="hover:text-accent-ink hover:underline">
                {site.email}
              </a>
            </dd>
            <dt className="text-muted">Tel</dt>
            <dd>{site.tel}</dd>
            <dt className="text-muted">Department</dt>
            <dd>{site.department}</dd>
            <dt className="text-muted">Address</dt>
            <dd>
              {site.universityFull}
              <br />
              {site.address}
              <br />
              <span className="text-muted">{site.addressKo}</span>
            </dd>
          </dl>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-paper-2">
          <iframe
            title="KOREATECH map"
            src="https://www.google.com/maps?q=Korea+University+of+Technology+and+Education&output=embed"
            className="h-full min-h-[22rem] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
