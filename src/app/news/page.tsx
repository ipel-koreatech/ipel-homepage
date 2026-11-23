import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { news } from "@/data/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="News" title="News" subtitle="연구실 소식. Papers, talks, projects and lab activities." />

      <section className="container-x mt-14">
        <ol className="divide-y divide-line border-y border-line">
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
    </>
  );
}
