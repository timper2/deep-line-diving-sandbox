import { ArrowRight, Compass, Gauge, LifeBuoy, Waves } from 'lucide-react';
import type { RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';
import CtaBanner from '@/components/CtaBanner';

interface HomeProps {
  navigate: NavigateFn;
}

const COURSE_LINKS: { id: RouteId; label: string; summary: string }[] = [
  { id: 'sidemount', label: 'Sidemount', summary: 'Streamlined, balanced diving with independent side-mounted cylinders.' },
  { id: 'cave', label: 'Cave Diving', summary: 'Disciplined training for the flooded passages beyond the light.' },
  { id: 'technical', label: 'Technical Diving', summary: 'Decompression, mixed gases and extended-range dive planning.' },
  { id: 'rebreather', label: 'Rebreather', summary: 'Closed-circuit training on the KISS Sidewinder and AP Inspiration.' },
];

const SITES = [
  { name: 'Ginnie Springs Network', flow: 'High-flow sections', risk: 'Line navigation · restrictions', gas: 'Stage discipline · turn pressures' },
  { name: 'Peacock Springs State Park', flow: 'Low to moderate flow', risk: 'Complex navigation · distance', gas: 'Rule of thirds · bailout planning' },
  { name: 'Little River Marine Unit', flow: 'Variable seasonal flow', risk: 'Silt · tight passage transitions', gas: 'Team gas matching · reserves' },
  { name: 'Manatee Springs Network', flow: 'Moderate flow', risk: 'Layered navigation · restrictions', gas: 'Gas switching · contingency depth' },
];

const APPROACH = [
  { icon: Compass, title: 'Procedure first', text: 'Every skill is drilled until it is calm and automatic, long before it is ever needed.' },
  { icon: LifeBuoy, title: 'Full redundancy', text: 'Gas, lights and team protocols are built so a single failure is never a crisis.' },
  { icon: Gauge, title: 'Small teams', text: 'Low student ratios mean real water time and detailed, personal feedback.' },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="animate-fade-in bg-slate-950">
      <section className="relative flex min-h-[86vh] items-end overflow-hidden border-b border-white/10">
        <img src="https://images.pexels.com/photos/10519070/pexels-photo-10519070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Diver exploring an underwater cave" className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        <div className="relative mx-auto w-full max-w-7xl container-px pb-16 pt-32 lg:pb-24">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent"><span className="h-px w-10 bg-accent" /> Fort White, Florida · Technical Diving</div>
          <h1 className="mt-7 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">Built one dive<br />at a time.</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">Cave, CCR and technical diving instruction for divers who want their performance to hold up under pressure.</p>
          <div className="mt-9 flex flex-wrap gap-4"><button onClick={() => navigate('tryout')} className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft">Start with a tech taster <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button><button onClick={() => navigate('cave')} className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent">Explore training</button></div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 container-px py-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">01 / The work</p><h2 className="mt-5 max-w-sm font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">Training for the dive after the course.</h2></div>
          <div><p className="max-w-3xl text-xl leading-relaxed text-slate-300">Rimstone is a technical diving company led by Tim, a PADI Course Director and TDI Instructor. We build cave, sidemount and CCR divers through deliberate practice, honest feedback and a standard that does not stop at certification.</p><div className="mt-10 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">{APPROACH.map((a) => <div key={a.title}><a.icon className="h-5 w-5 text-accent" /><h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wider text-white">{a.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{a.text}</p></div>)}</div></div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/30"><div className="mx-auto max-w-7xl container-px py-16 sm:py-20"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">02 / Training paths</p><h2 className="mt-4 font-display text-3xl font-bold uppercase text-white sm:text-4xl">Choose your next descent.</h2></div><p className="max-w-md text-sm leading-relaxed text-slate-400">From your first streamlined sidemount dive to closed-circuit exploration, each path is built to move you forward safely.</p></div><div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">{COURSE_LINKS.map((course, index) => <button key={course.id} onClick={() => navigate(course.id)} className="group bg-slate-950 p-7 text-left transition-colors hover:bg-slate-900"><div className="flex items-start justify-between"><span className="font-mono text-xs text-accent">0{index + 1}</span><ArrowRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-accent" /></div><h3 className="mt-10 font-display text-xl font-bold uppercase text-white">{course.label}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">{course.summary}</p></button>)}</div></div></section>

      <section className="border-b border-white/10"><div className="mx-auto max-w-7xl container-px py-16 sm:py-20"><div className="border border-white/10 bg-slate-900/30 p-8 sm:p-10"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">03 / Mentoring</p><h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-5xl">No check-the-box timelines.</h2><p className="mt-6 text-lg leading-relaxed text-slate-300">Technical diving is not a syllabus you rush through. It is performance engineering built through honest repetition, peer-to-peer coaching and a clear-eyed understanding of what happens when conditions change.</p></div><div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2"><div><p className="font-display text-sm font-semibold uppercase tracking-widest text-white">The philosophy</p><p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">We work toward long-term diving confidence: the kind that comes from understanding your equipment, your team and your decisions in the water.</p></div><div><p className="font-display text-sm font-semibold uppercase tracking-widest text-white">The practice</p><p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">One-on-one skill review, configuration refinement, video feedback and deliberate progression across overhead environments.</p></div></div></div></div></section>

      <section className="border-b border-white/10 bg-slate-900/30"><div className="mx-auto max-w-7xl container-px py-16 sm:py-20"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">04 / Local site matrix</p><h2 className="mt-4 font-display text-3xl font-bold uppercase text-white sm:text-4xl">North Florida, read clearly.</h2></div><div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">{SITES.map((site) => <article key={site.name} className="border border-white/10 bg-slate-950 p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-lg font-bold uppercase leading-tight text-white">{site.name}</h3><Waves className="h-5 w-5 flex-shrink-0 text-accent" /></div><dl className="mt-8 grid gap-5 text-sm sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3"><div><dt className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Flow</dt><dd className="mt-1 text-slate-300">{site.flow}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Navigation risks</dt><dd className="mt-1 text-slate-300">{site.risk}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Gas planning</dt><dd className="mt-1 text-slate-300">{site.gas}</dd></div></dl></article>)}</div></div></section>

      <CtaBanner navigate={navigate} title="Make the next dive count." text="Book a 1-day technical try-out and get hands-on with sidemount, doubles and closed-circuit configurations before you commit to a full course." />
    </div>
  );
}
