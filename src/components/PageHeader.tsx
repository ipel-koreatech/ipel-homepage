export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper-2">
      <div className="container-x py-14 md:py-20">
        <div className="eyebrow fade-up">{eyebrow}</div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl fade-up-2">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-muted md:text-lg fade-up-3">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
