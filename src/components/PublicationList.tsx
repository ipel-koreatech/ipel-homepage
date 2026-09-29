import { highlightAuthors, type Publication } from "@/data/publications";

function Authors({ authors }: { authors: string[] }) {
  return (
    <span>
      {authors.map((a, i) => (
        <span key={i}>
          {highlightAuthors.includes(a) ? <strong className="font-semibold text-ink">{a}</strong> : a}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </span>
  );
}

export default function PublicationList({ items }: { items: Publication[] }) {
  const years = Array.from(new Set(items.map((p) => p.year))).sort((a, b) => b - a);
  let n = items.length;

  return (
    <div className="space-y-12">
      {years.map((year) => {
        const list = items.filter((p) => p.year === year);
        return (
          <section key={year} className="grid gap-4 md:grid-cols-[6rem_1fr]">
            <h2 className="text-2xl font-bold text-ink md:sticky md:top-24 md:self-start">{year}</h2>
            <ol className="divide-y divide-line">
              {list.map((p, i) => {
                const idx = n--;
                return (
                  <li key={i} className="flex gap-4 py-4">
                    <span className="w-8 shrink-0 pt-0.5 text-sm tabular-nums text-muted">[{idx}]</span>
                    <div>
                      <div className="font-medium leading-snug">
                        {p.doi ? (
                          <a
                            href={`https://doi.org/${p.doi}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent-ink hover:underline"
                          >
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </div>
                      <div className="mt-1 text-sm text-muted">
                        <Authors authors={p.authors} />
                      </div>
                      <div className="mt-1 text-sm">
                        <em className="text-ink-2">{p.venue}</em>
                        <span className="text-muted">, {p.year}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
