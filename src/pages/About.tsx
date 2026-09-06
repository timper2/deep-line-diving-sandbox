import { ArrowRight, LifeBuoy, Waves } from 'lucide-react';
import type { NavigateFn } from '@/lib/useRouter';

interface AboutProps {
  navigate: NavigateFn;
}

export default function About({ navigate }: AboutProps) {
  return (
    <div className="animate-fade-in">
      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl container-px pb-20 pt-36 sm:pb-24 sm:pt-44">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            About Shoal
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            There&apos;s always a way up. We teach you to find it.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Technical diving instruction built around calm, deliberate skill development in Fort White,
            Florida — the heart of Florida&apos;s cave country.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              Rimstone Technical Diving is led by Tim, a PADI Course Director and TDI Instructor based
              in Fort White, Florida — in the heart of Florida&apos;s cave country.
            </p>
            <p>
              Tim teaches the full range of technical and cave diving disciplines: cave, sidemount, and
              closed-circuit rebreather (CCR) certification, with a particular focus on the KISS
              Sidewinder platform. Instruction covers everything from nitrox and trimix through full
              cave and advanced mixed-gas training.
            </p>
            <p>
              An on-site O2 fill station supports every course. Whatever the discipline, the approach
              stays the same: skill is built one dive at a time.
            </p>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                <Waves className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p className="font-display font-semibold text-white">Shoal</p>
                <p className="text-sm text-slate-400">Technical diving instruction</p>
              </div>
            </div>
            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-slate-300">
                  Cave, sidemount, CCR, nitrox, trimix, and advanced mixed-gas training with small teams
                  and an on-site O2 fill station.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 container-px py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">Ready to build the next skill?</p>
            <p className="mt-1 text-sm text-slate-400">Start with a focused day in the water.</p>
          </div>
          <button
            onClick={() => navigate('tryout')}
            className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft sm:self-auto"
          >
            Try a 1-day tech taster
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
