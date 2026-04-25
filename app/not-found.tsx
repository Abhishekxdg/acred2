import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-acred flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="section-label mb-6">404</p>
      <h1 className="text-balance">
        <span className="block font-sans font-bold text-display-xl leading-[0.95] tracking-tight text-bone">This page hasn&apos;t</span>
        <span className="block font-serif italic text-display-xl leading-[1.05] text-bone/85">been drawn yet.</span>
      </h1>
      <p className="mt-6 max-w-md text-bone-soft">
        You followed a link into empty space. Go back to the work — there&apos;s more than enough there.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
      >
        Back to studio
      </Link>
    </section>
  );
}
