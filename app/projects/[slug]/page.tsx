import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, projectBySlug } from "@/lib/projects";
import { MotionReveal } from "@/components/motion-reveal";
import { siteUrl } from "@/lib/seo";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = projectBySlug(params.slug);
  if (!p)
    return {
      title: "Project",
      robots: { index: false, follow: false },
    };
  const url = `${siteUrl}/projects/${p.slug}`;
  return {
    title: `${p.title} · ACRED`,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.title} · ACRED`,
      description: p.summary,
      type: "article",
      url,
      siteName: "ACRED",
      locale: "en_IN",
      images: [
        {
          url: p.heroImage,
          width: 1600,
          height: 900,
          alt: p.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} · ACRED`,
      description: p.summary,
      images: [p.heroImage],
    },
  };
}

export default function ProjectDetail({ params }: Params) {
  const project = projectBySlug(params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[70svh] min-h-[440px] w-full overflow-hidden sm:h-[90vh] sm:min-h-[560px]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/10" />

        <div className="container-acred absolute inset-x-0 bottom-0 pb-12 sm:pb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-white/60 hover:text-white transition-colors cursor-hover"
          >
            <ArrowLeft className="h-3 w-3" /> All work
          </Link>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-white/55 sm:mt-8">
            {project.category} · {project.location} · {project.year}
          </p>
          <h1 className="mt-4 text-balance">
            <span className="block font-sans font-bold text-display-xl leading-[0.95] tracking-tight text-white">{project.title}</span>
          </h1>
        </div>
      </section>

      {/* Summary + facts */}
      <section className="container-acred py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionReveal className="lg:col-span-7">
            <p className="font-serif text-display-md text-bone text-balance">
              {project.summary}
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-bone-soft sm:mt-10 sm:space-y-6">
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal className="lg:col-span-5" delay={0.1}>
            <div className="border-t border-ink-line">
              {project.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between gap-6 border-b border-ink-line py-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {f.label}
                  </span>
                  <span className="text-right font-serif text-lg text-bone">{f.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-6 border-b border-ink-line py-4">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  Role
                </span>
                <span className="text-right text-sm text-bone">{project.role}</span>
              </div>
              <div className="flex items-center justify-between gap-6 border-b border-ink-line py-4">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  Area
                </span>
                <span className="text-sm text-bone">{project.area}</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="container-acred pb-14 sm:pb-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <MotionReveal key={src} delay={i * 0.08}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-ink-muted">
                  <Image
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="border-t border-ink-line">
        <Link
          href={`/projects/${next.slug}`}
          className="group block py-14 pb-16 transition-colors hover:bg-ink-muted cursor-hover sm:py-20 sm:pb-24 md:pb-32"
        >
          <div className="container-acred flex items-center justify-between gap-5">
            <div className="min-w-0">
              <p className="eyebrow mb-4">Next project</p>
              <h2 className="break-words font-serif text-display-md text-bone transition-colors group-hover:text-gold sm:text-display-lg">
                {next.title}
              </h2>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                {next.location} · {next.category}
              </p>
            </div>
            <ArrowUpRight className="h-7 w-7 shrink-0 text-bone transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold sm:h-10 sm:w-10" />
          </div>
        </Link>
      </section>
    </>
  );
}
