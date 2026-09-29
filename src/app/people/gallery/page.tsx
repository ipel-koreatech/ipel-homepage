import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SubNav from "@/components/SubNav";

export const metadata: Metadata = { title: "Gallery" };

const peopleNav = [
  { href: "/people", label: "Professor" },
  { href: "/people/members", label: "Members" },
  { href: "/people/gallery", label: "Gallery" },
];

// 사진을 public/images/gallery/ 에 넣고 아래 목록에 추가하세요.
const photos: { src: string; caption: string; date?: string }[] = [
  { src: "/images/campus.jpg", caption: "KOREATECH campus, Cheonan", date: "2026" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="People" title="Gallery" subtitle="연구실 활동 사진">
        <SubNav items={peopleNav} />
      </PageHeader>

      <section className="container-x mt-14">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <li key={p.src} className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-paper-2">
                <Image src={p.src} alt={p.caption} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-4">
                <div className="text-sm font-medium">{p.caption}</div>
                {p.date && <div className="text-xs text-muted">{p.date}</div>}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">More photos coming soon.</p>
      </section>
    </>
  );
}
