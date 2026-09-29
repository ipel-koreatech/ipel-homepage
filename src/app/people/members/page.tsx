import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SubNav from "@/components/SubNav";
import { members, alumni, type Member } from "@/data/members";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Members" };

const peopleNav = [
  { href: "/people", label: "Professor" },
  { href: "/people/members", label: "Members" },
  { href: "/people/gallery", label: "Gallery" },
];

const order: Member["role"][] = ["Post-Doc", "Ph.D. Student", "M.S. Student", "Undergraduate"];

function MemberCard({ m }: { m: Member }) {
  return (
    <li className="card flex gap-4 p-5">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-paper-2">
        {m.photo ? (
          <Image src={m.photo} alt={m.name} width={160} height={160} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-muted">
            {m.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <div className="font-semibold">
          {m.name} {m.nameKo && <span className="font-normal text-muted">({m.nameKo})</span>}
        </div>
        <div className="text-sm text-accent-ink">{m.role}{m.since ? ` · since ${m.since}` : ""}</div>
        {m.email && (
          <a href={`mailto:${m.email}`} className="mt-1 block truncate text-sm text-muted hover:text-ink">
            {m.email}
          </a>
        )}
        {m.interests && m.interests.length > 0 && (
          <p className="mt-1 text-sm text-ink-2">{m.interests.join(" · ")}</p>
        )}
      </div>
    </li>
  );
}

export default function MembersPage() {
  const groups = order.map((role) => ({ role, list: members.filter((m) => m.role === role) })).filter((g) => g.list.length);

  return (
    <>
      <PageHeader eyebrow="People" title="Members" subtitle="구성원">
        <SubNav items={peopleNav} />
      </PageHeader>

      <section className="container-x mt-14 space-y-12">
        {groups.length === 0 && (
          <div className="card p-8 md:p-12">
            <h2 className="text-xl font-semibold">We are building our team.</h2>
            <p className="mt-2 max-w-2xl text-muted">
              IPEL은 2026년에 새로 출범한 연구실입니다. 석사 및 박사과정 연구실원을 모집 중이며,
              연구원에게 최대한의 지원을 약속합니다. Post-Doc &amp; Ph.D. applicants from foreign
              countries are also welcome.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink-2"
              >
                Apply via email
              </a>
              <Link href="/research" className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-ink">
                See research topics
              </Link>
            </div>
          </div>
        )}

        {groups.map((g) => (
          <div key={g.role}>
            <div className="eyebrow">{g.role}s</div>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.list.map((m) => (
                <MemberCard key={m.name} m={m} />
              ))}
            </ul>
          </div>
        ))}

        {alumni.length > 0 && (
          <div>
            <div className="eyebrow">Alumni</div>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {alumni.map((m) => (
                <MemberCard key={m.name} m={m} />
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
