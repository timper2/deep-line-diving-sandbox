import { ArrowRight, Compass, Gauge, LifeBuoy, Waves, Wind } from 'lucide-react';
import { COURSES } from '@/data/courses';
import type { NavigateFn } from '@/lib/useRouter';
import CtaBanner from '@/components/CtaBanner';

interface HomeProps {
  navigate: NavigateFn;
}

const APPROACH = [
  {
    icon: Compass,
    title: 'Procedure first',
    text: 'Every skill is drilled until it is calm and automatic, long before it is ever needed.',
  },
  {
    icon: LifeBuoy,
    title: 'Full redundancy',
    text: 'Gas, lights and team protocols are built so a single failure is never a crisis.',
  },
  {
    icon: Gauge,
    title: 'Small teams',
    text: 'Low student ratios mean real water time and detailed, personal feedback.',
  },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/10519070/pexels-photo-10519070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Diver exploring an underwater cave"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

        <div className="relative mx-auto w-full max-w-7xl container-px pt-28">
          <div className="flex animate-fade-up flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Wind className="h-3.5 w-3.5" />
              KISS Sidewinder CCR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <Wind className="h-3.5 w-3.5" />
              AP Inspiration CCR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <Wind className="h-3.5 w-3.5" />
              Open Circuit
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Cave, CCR & Technical Diving Instruction — Fort White, Florida
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 sm:text-xl">
            Built one dive at a time.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-4">
            <button
              onClick={() => navigate('tryout')}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
            >
              Try a 1-day tech taster
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => navigate('cave')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Explore courses
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl container-px py-12 sm:py-14">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              About Rimstone
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Led by Tim, a PADI Course Director and TDI Instructor in Fort White, Rimstone teaches
              cave, sidemount, and CCR diving from nitrox and trimix through full cave and advanced
              mixed-gas training. Every course is built around deliberate practice, KISS Sidewinder
              expertise, and the belief that skill is built one dive at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 container-px py-10 sm:grid-cols-4">
          {[
            { value: 'KISS · AP · OC', label: 'Three platforms' },
            { value: 'Active', label: 'Still in the water' },
            { value: 'Full Cave', label: 'Certified explorer' },
            { value: '1:2', label: 'Instructor ratio' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/35508959/pexels-photo-35508959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Rebreather diver underwater"
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                  <Waves className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">Silent running</p>
                  <p className="text-xs text-slate-400">Bubble-free on the loop</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              The diver behind the training
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Active diver. Obsessively prepared instructor.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300">
              <p>
                Built the way the cave builds — deposit by deposit, dive by dive.
              </p>
              <p>
                Whether you are starting sidemount, pushing into cave, or stepping across to
                closed-circuit, we build every skill deliberately until it holds up under pressure.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {APPROACH.map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                  <a.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-display text-sm font-semibold text-white">{a.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="classes"
        aria-labelledby="classes-heading"
        className="border-t border-white/10 bg-slate-900/30"
      >
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <p className="mb-10 inline-flex border border-white/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Layout option A: Visual focus
          </p>
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Training paths
              </p>
              <h2
                id="classes-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dive classes in Fort White, Florida
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Four certification pathways, from your first streamlined sidemount dive to
              closed-circuit cave exploration. Each class has its own detailed page.
            </p>
          </header>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.sidemount.heroImage}
                  alt="Sidemount diver in trim with cylinders mounted at the hips"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Sidemount Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: trim, balance and gas redundancy
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Streamlined, balanced diving with independent side-mounted cylinders, from
                    Sidemount Fundamentals through Cave-Ready Sidemount.
                  </p>
                  <a
                    href="/sidemount"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('sidemount');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore sidemount diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.cave.heroImage}
                  alt="Cave diver following a guideline through a flooded passage"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Cave Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: guideline, failure management and conservation
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Disciplined overhead training in North Florida&apos;s springs, progressing from
                    Cavern and Intro to Cave to Full Cave certification.
                  </p>
                  <a
                    href="/cave"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('cave');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore cave diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.technical.heroImage}
                  alt="Technical diver with decompression stage cylinders"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Technical Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: decompression, mixed gas and team discipline
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Decompression procedures, gas management and extended-range planning across
                    Nitrox, Trimix and Extended Range certifications.
                  </p>
                  <a
                    href="/technical"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('technical');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore technical diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.rebreather.heroImage}
                  alt="Closed-circuit rebreather diver underwater"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Rebreather (CCR) Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: loop control, PO2 monitoring and bailout
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Closed-circuit training on the KISS Sidewinder and AP Inspiration, from CCR Air
                    Diluent through CCR Mixed Gas and CCR Cave.
                  </p>
                  <a
                    href="/rebreather"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('rebreather');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore rebreather diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="classes-spec"
        aria-labelledby="classes-spec-heading"
        className="border-t border-white/10 bg-slate-900/30"
      >
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <p className="mb-10 inline-flex border border-white/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Layout option B: Typographic spec matrix
          </p>
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Training paths
              </p>
              <h2
                id="classes-spec-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dive classes in Fort White, Florida
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Four certification pathways, from your first streamlined sidemount dive to
              closed-circuit cave exploration. Each class has its own detailed page.
            </p>
          </header>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Sidemount Diving
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Focus: trim, balance and gas redundancy
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  Streamlined, balanced diving with independent side-mounted cylinders, from
                  Sidemount Fundamentals through Cave-Ready Sidemount.
                </p>
                <div className="mt-3 border border-white/15">
                  <p className="border-b border-white/15 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    [Operational spec matrix]
                  </p>
                  <dl className="divide-y divide-white/10 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">MOD</dt>
                      <dd className="col-span-2 text-slate-200">30 m / 100 ft · air · PO2 1.4</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Gas rules</dt>
                      <dd className="col-span-2 text-slate-200">Rule of thirds · independent cylinders</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Loop type</dt>
                      <dd className="col-span-2 text-slate-200">Open circuit · 2x sidemount</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Syllabus</dt>
                      <dd className="col-span-2 text-slate-200">Trim · valve drills · regulator swaps</dd>
                    </div>
                  </dl>
                </div>
                <a
                  href="/sidemount"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('sidemount');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore sidemount diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Cave Diving
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Focus: guideline, failure management and conservation
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  Disciplined overhead training in North Florida&apos;s springs, progressing from
                  Cavern and Intro to Cave to Full Cave certification.
                </p>
                <div className="mt-3 border border-white/15">
                  <p className="border-b border-white/15 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    [Operational spec matrix]
                  </p>
                  <dl className="divide-y divide-white/10 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">MOD</dt>
                      <dd className="col-span-2 text-slate-200">30 m / 100 ft · EAN32 · PO2 1.4</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Gas rules</dt>
                      <dd className="col-span-2 text-slate-200">Thirds · turn on first diver</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Loop type</dt>
                      <dd className="col-span-2 text-slate-200">Open circuit · backmount or sidemount</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Syllabus</dt>
                      <dd className="col-span-2 text-slate-200">Line laying · lost line · lights out</dd>
                    </div>
                  </dl>
                </div>
                <a
                  href="/cave"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('cave');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore cave diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Technical Diving
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Focus: decompression, mixed gas and team discipline
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  Decompression procedures, gas management and extended-range planning across
                  Nitrox, Trimix and Extended Range certifications.
                </p>
                <div className="mt-3 border border-white/15">
                  <p className="border-b border-white/15 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    [Operational spec matrix]
                  </p>
                  <dl className="divide-y divide-white/10 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">MOD</dt>
                      <dd className="col-span-2 text-slate-200">45–100 m · trimix · PO2 1.4 bottom</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Gas rules</dt>
                      <dd className="col-span-2 text-slate-200">EAN50 / O2 deco · PO2 1.6 max</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Loop type</dt>
                      <dd className="col-span-2 text-slate-200">Open circuit · doubles + stages</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Syllabus</dt>
                      <dd className="col-span-2 text-slate-200">Deco planning · gas switches · ascents</dd>
                    </div>
                  </dl>
                </div>
                <a
                  href="/technical"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('technical');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore technical diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Rebreather (CCR) Diving
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Focus: loop control, PO2 monitoring and bailout
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  Closed-circuit training on the KISS Sidewinder and AP Inspiration, from CCR Air
                  Diluent through CCR Mixed Gas and CCR Cave.
                </p>
                <div className="mt-3 border border-white/15">
                  <p className="border-b border-white/15 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    [Operational spec matrix]
                  </p>
                  <dl className="divide-y divide-white/10 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">MOD</dt>
                      <dd className="col-span-2 text-slate-200">40 m air dil · 100 m trimix dil</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Gas rules</dt>
                      <dd className="col-span-2 text-slate-200">Setpoint 0.7 / 1.3 · OC bailout to surface</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Loop type</dt>
                      <dd className="col-span-2 text-slate-200">KISS Sidewinder mCCR · AP Inspiration eCCR</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4 py-2.5">
                      <dt className="uppercase tracking-widest text-slate-500">Syllabus</dt>
                      <dd className="col-span-2 text-slate-200">Loop checks · PO2 control · bailout drills</dd>
                    </div>
                  </dl>
                </div>
                <a
                  href="/rebreather"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('rebreather');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore rebreather diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Guiding &amp; services
              </p>
              <h2
                id="services-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Cave guiding and technical mentoring
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Already certified? Dive North Florida&apos;s springs with a guide, or sharpen your
              skills with one-on-one mentorship.
            </p>
          </header>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Service"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <Compass className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 itemProp="name" className="mt-2 font-display text-xl font-bold text-white">
                  Cave Guiding
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Sites: Peacock, Ginnie and Cow Springs
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  Guided cave excursions matched to your certification and comfort level, with full
                  logistics coordination, site briefings and gas planning support.
                </p>
                <a
                  href="/services"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('services');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  View cave guiding services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Service"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <LifeBuoy className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 itemProp="name" className="mt-2 font-display text-xl font-bold text-white">
                  Technical Mentoring
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Focus: skill mastery and overhead progression
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  One-on-one mentorship with video review, gear configuration tuning and trim
                  workshops for divers progressing in overhead environments.
                </p>
                <a
                  href="/services"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('services');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  View technical mentoring services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <CtaBanner
        navigate={navigate}
        title="Not sure where to start?"
        text="Book a 1-day technical try-out and get hands-on with sidemount, doubles and closed-circuit configurations before you commit to a full course."
      />
    </div>
  );
}
