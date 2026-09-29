export type TimelineItem = {
  period: string;
  heading: string;
  sub?: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="divide-y divide-line">
      {items.map((it, i) => (
        <li key={i} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <div className="text-sm font-medium text-accent-ink">{it.period}</div>
          <div>
            <div className="font-medium">{it.heading}</div>
            {it.sub && <div className="text-sm text-muted">{it.sub}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
