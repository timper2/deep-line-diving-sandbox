import { MapPin, Waves } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in">
      <section className="mx-auto max-w-4xl container-px pb-20 pt-36 sm:pb-24 sm:pt-44">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          About Rimstone
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Built one dive at a time.
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 text-accent">
            <Waves className="h-6 w-6" />
            <div>
              <p className="font-display text-sm font-semibold text-white">Tim</p>
              <p className="text-xs text-slate-400">PADI Course Director · TDI Instructor</p>
            </div>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              Rimstone Technical Diving is led by Tim, a PADI Course Director and TDI Instructor
              based in Fort White, Florida — in the heart of Florida&apos;s cave country.
            </p>
            <p>
              Tim teaches the full range of technical and cave diving disciplines: cave, sidemount,
              and closed-circuit rebreather (CCR) certification, with a particular focus on the KISS
              Sidewinder platform. Instruction covers everything from nitrox and trimix through full
              cave and advanced mixed-gas training.
            </p>
            <p>
              An on-site O2 fill station supports every course. Whatever the discipline, the approach
              stays the same: skill is built one dive at a time.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-2 text-sm text-slate-400">
          <MapPin className="h-4 w-4 text-accent" />
          Fort White, Florida
        </div>
      </section>
    </div>
  );
}
