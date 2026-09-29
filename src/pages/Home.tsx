import { ArrowRight } from 'lucide-react';
import type { NavigateFn } from '@/lib/useRouter';

interface HomeProps {
  navigate: NavigateFn;
}

export default function Home({ navigate }: HomeProps) {
  return (
    <main className="animate-fade-in bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl container-px pb-24 pt-32 sm:pb-32 sm:pt-44">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
          FORT WHITE, FLORIDA // HIGH-CONSEQUENCE OVERHEAD &amp; MIXED-GAS EDUCATION
        </p>
        <h1 className="mt-8 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Built one dive at a time.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Cave, CCR, sidemount, and technical instruction for divers who want the details to hold under pressure.
        </p>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-24 sm:pb-32" aria-labelledby="courses-heading">
        <div className="border-t border-zinc-800 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">01 / Courses</p>
          <h2 id="courses-heading" className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Six ways into the work.
          </h2>
        </div>
        <div className="mt-12 flex flex-col gap-12">
          <article className="border-t border-zinc-800 pt-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">01 // Foundational Doubles &amp; Sidemount</h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-400">Hydrostatic trim optimization, valve drill isolation mechanics, buoyancy control, and propulsion efficiency on Open Circuit platforms.</p>
          </article>
          <article className="border-t border-zinc-800 pt-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">02 // Technical Cave Instruction</h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-400">Prerequisites: Technical Decompression Procedures minimum, 100 logged dives (30 deeper than 100fsw or in doubles/sidemount). Hardware: Manifolded doubles/sidemount min 160 cu ft, dual accessible valves, 7ft primary hose on right post, streamline wing (no bungees/pull-dumps). Rigging: Backup gear secured with small manual loops for quick attachment/detachment of double-ended bolt snaps. Skills: Static horizontal hover at ±3 inches for 5 continuous minutes, total propulsion mastery (frog, flutter, helicopter, back-kick) with zero silting, instant Rule of Thirds gas math.</p>
          </article>
          <article className="border-t border-zinc-800 pt-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">03 // Decompression Procedures &amp; Mixed Gas</h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-400">Accelerated decompression profiles, hyperoxic/hypoxic Trimix gas planning, managing isobaric counter-diffusion, and physiological gas density depth penalties.</p>
          </article>
          <article className="border-t border-zinc-800 pt-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">04 // CCR Integration</h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-400">Platform: KISS Sidewinder specific. Focus: Dual MAV (Manual Addition Valve) mechanics, side-mount scrubber routing, counterlung profile streamlining, and manual loop gas density monitoring. Rigging: Small manual loops for double-ended bolt snap clipping to prevent cave restriction snags.</p>
          </article>
          <article className="border-t border-zinc-800 pt-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">05 // Long-Term Technical Mentoring</h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-400">Peer-to-peer team development, customized fitness tracking, and ongoing skill retention audits. Rejecting corporate &quot;check-the-box&quot; timelines to build true diving confidence through long-term skill progression.</p>
          </article>
          <article className="border-t border-zinc-800 pt-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">06 // North Florida Cave Guiding</h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-400">Logistical management, spring/siphon structural orientation, and safety monitoring through complex cave passages (Ginnie, Peacock, Little River, Manatee) for qualified teams.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-24 sm:pb-32" aria-labelledby="logistics-heading">
        <div className="border-t border-zinc-800 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">02 / Regional logistics</p>
          <h2 id="logistics-heading" className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">North Florida site notes.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="border border-zinc-800 p-6"><h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">Ginnie Springs</h3><p className="mt-4 text-base leading-relaxed text-slate-400">High-flow siphon management, high-consequence run modeling.</p></article>
          <article className="border border-zinc-800 p-6"><h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">Peacock Springs</h3><p className="mt-4 text-base leading-relaxed text-slate-400">Complex navigation matrices, circuit planning, gap/jump spool mechanics.</p></article>
          <article className="border border-zinc-800 p-6"><h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">Little River</h3><p className="mt-4 text-base leading-relaxed text-slate-400">Deep penetration, structural flow management, emergency protocol drilling.</p></article>
          <article className="border border-zinc-800 p-6"><h3 className="font-mono text-sm uppercase tracking-[0.18em] text-white">Manatee Springs</h3><p className="mt-4 text-base leading-relaxed text-slate-400">Severe high-flow management, critical failure mitigation parameters.</p></article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-24 sm:pb-32" aria-label="Contact">
        <div className="border-t border-zinc-800 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">03 / Begin the work</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to make the next dive count?</h2>
          <button onClick={() => navigate('tryout')} className="group mt-8 inline-flex items-center gap-2 border border-sky-500/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-sky-500 hover:text-sky-400">
            Try a 1-day tech taster <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>
    </main>
  );
}
