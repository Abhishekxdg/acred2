import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-acred flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow mb-6">✦ 404</p>
      <h1 className="font-serif text-display-xl text-bone text-balance">
        This page hasn&apos;t been drawn yet.
      </h1>
      <p className="mt-6 max-w-md text-bone-soft">
        You followed a link into empty space. Go back to the work — there&apos;s more than enough there.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 border-b border-bone/30 pb-2 font-mono text-xs uppercase tracking-widest2 text-bone hover:border-gold hover:text-gold transition-colors"
      >
        Back to studio
      </Link>
    </section>
  );
}
