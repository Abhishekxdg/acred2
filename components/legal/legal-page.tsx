import type { ReactNode } from "react";

export function LegalPage({
  label,
  title,
  updated,
  children,
}: {
  label: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="container-acred pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
      <div className="max-w-3xl">
        <p className="section-label mb-5 sm:mb-6">{label}</p>
        <h1 className="text-balance">{title}</h1>
        <p className="mt-4 text-sm text-bone-muted">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-bone-soft [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-bone [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_a]:text-gold [&_a]:underline-offset-4 hover:[&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  );
}
