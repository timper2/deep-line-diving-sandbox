import { ArrowRight } from 'lucide-react';
import type { NavigateFn } from '@/lib/useRouter';

interface HomeProps {
  navigate: NavigateFn;
}

const specifications = [
  {
    title: '01 // Foundational Doubles & Sidemount',
    text: 'Hydrostatic trim optimization, valve drill isolation mechanics, buoyancy control, and propulsion efficiency on Open Circuit platforms.',
  },
  {
    title: '02 // Technical Cave Instruction',
    text: 'Prerequisites: Technical Decompression Procedures minimum, 100 logged dives (30 deeper than 100fsw or in doubles/sidemount). Hardware: Manifolded doubles/sidemount min 160 cu ft, dual accessible valves, 7ft primary hose on right post, streamline wing (no bungees/pull-dumps). Rigging: Backup gear secured with small manual loops for quick attachment/detachment of double-ended bolt snaps. Skills: Static horizontal hover at ±3 inches for 5 continuous minutes, total propulsion mastery (frog, flutter, helicopter, back-kick) with zero silting, instant Rule of Thirds gas math.',
  },
  {
    title: '03 // Decompression Procedures & Mixed Gas',
    text: 'Accelerated decompression profiles, hyperoxic/hypoxic Trimix gas planning, managing isobaric counter-diffusion, and physiological gas density depth penalties.',
  },
  {
    title: '04 // CCR Integration',
    text: 'Platform: KISS Sidewinder specific. Focus: Dual MAV (Manual Addition Valve) mechanics, side-mount scrubber routing, counterlung profile streamlining, and manual loop gas density monitoring. Rigging: Small manual loops for double-ended bolt snap clipping to prevent cave restriction snags.',
  },
  {
    title: '05 // Long-Term Technical Mentoring',
    text: 'Peer-to-peer team development, customized fitness tracking, and ongoing skill retention audits. Built around an unyielding timeline focused on building true, long-term diving confidence.',
  },
  {
    title: '06 // North Florida Cave Guiding',
    text: 'Logistical management, spring/siphon structural orientation, and safety monitoring through complex cave passages for qualified teams.',
  },
];

const regionalLogistics = [
  ['Ginnie Springs', 'High-flow siphon management, high-consequence run modeling.'],
  ['Peacock Springs', 'Complex navigation matrices, circuit planning, gap/jump spool mechanics.'],
  ['Little River', 'Deep penetration, structural flow management, emergency protocol drilling.'],
  ['Manatee Springs', 'Severe high-flow management, critical failure mitigation parameters.'],
];

export default function Home({ navigate }: HomeProps) {
  return (
    <main className="bg-obsidian text-zinc-100">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-spring-water">
          FORT WHITE, FLORIDA // HIGH-CONSEQUENCE OVERHEAD & MIXED-GAS EDUCATION
        </p>
        <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Built one dive at a time.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          We reject commercial “check-the-box” timelines in favor of peer-to-peer performance engineering: deliberate repetition, honest feedback, and skills that hold under pressure.
        </p>
        <button
          onClick={() => navigate('tryout')}
          className="mt-10 inline-flex items-center gap-3 border border-spring-water px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-spring-water transition-colors hover:bg-spring-water hover:text-obsidian"
        >
          Begin the conversation <ArrowRight className="h-4 w-4" />
        </button>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 sm:px-10 lg:px-16">
        <div className="mb-10 border-b border-zinc-800 pb-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">Operational specifications</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {specifications.map((specification) => (
            <article key={specification.title} className="border border-zinc-800 bg-zinc-900/40 p-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.16em] text-white">{specification.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">{specification.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 sm:px-10 lg:px-16">
        <div className="mb-10 border-b border-zinc-800 pb-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">Regional logistics parameters</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {regionalLogistics.map(([name, text]) => (
            <article key={name} className="border border-zinc-800 p-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.16em] text-white">{name}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
