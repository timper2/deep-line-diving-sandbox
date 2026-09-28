import { useState, type FormEvent } from 'react';

type ServicesProps = {
  navigate: (page: 'contact') => void;
};

const sites = [
  ['Ginnie Springs Network', 'High-flow siphon management, high-consequence run modeling, gas matching parameters, and heavy-flow entry mechanics.'],
  ['Peacock Springs State Park', 'Complex navigation matrices, circuit line planning, gap/jump spool execution, and cognitive orientation management.'],
  ['Little River Marine Unit', 'Deep penetration strategies, structural water flow management, and emergency protocol drilling in variable visibility.'],
  ['Manatee Springs Network', 'Severe high-flow management, critical system failure mitigation parameters, and high-consequence gas planning.'],
];

export default function Services({ navigate }: ServicesProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-slate-950">
      <div className="mx-auto max-w-7xl container-px pb-24 pt-36 sm:pt-40">
        <p className="mb-12 font-mono text-sm uppercase tracking-widest text-slate-400">
          Fort White, Florida // High-Consequence Overhead &amp; Mixed-Gas Education
        </p>

        <p className="mb-24 max-w-3xl text-xl leading-relaxed text-slate-200">
          Based out of the North Florida Spring Matrix, our focus is uncompromising operational proficiency over bare-minimum agency standards. We eliminate commercial marketing fluff to deliver rigorous, performance-driven mentoring for analytical divers who demand results, safety, and absolute environmental conservation.
        </p>

        <section className="mb-24" aria-labelledby="operational-scope">
          <h1 id="operational-scope" className="mb-8 text-2xl font-bold uppercase tracking-wider text-white">
            01 // Operational Scope
          </h1>
          <div className="max-w-4xl space-y-12 font-mono text-sm text-slate-300">
            <div className="border-l-2 border-slate-700 pl-6">
              <h2 className="mb-2 font-bold uppercase text-white">01 // Foundational Doubles &amp; Sidemount Parameters</h2>
              <p>Focus: Hydrostatic trim optimization, valve drill isolation mechanics, buoyancy control, and propulsion efficiency on Open Circuit platforms.</p>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <h2 className="mb-2 font-bold uppercase text-white">02 // Technical Cave Instruction</h2>
              <p className="mb-2"><span className="text-white">Prerequisites:</span> Minimum Technical Decompression Procedures (or agency equivalent). 100 logged dives, with at least 30 utilizing double cylinders or sidemount configurations deeper than 100 fsw.</p>
              <p className="mb-2"><span className="text-white">Hardware Limits:</span> Manifolded doubles or independent sidemount cylinders (minimum 160 cu. ft. total volume). Dual accessible valves, 7-foot primary low-pressure hose on right post, streamlined technical wing with zero automatic failure points (no bungees, no pull-dumps).</p>
              <p className="mb-2"><span className="text-white">Rigging Rules:</span> Backup hardware and secondary lighting must be secured using small, low-profile manual loops to allow immediate attachment and detachment of double-ended bolt snaps without snag hazards.</p>
              <p><span className="text-white">Performance Baseline:</span> Static horizontal hover maintained at +/- 3 inches of depth for 5 continuous minutes without hand or foot corrections. Absolute mastery of modified frog, modified flutter, helicopter turn, and backward propulsion with zero sediment disturbance or silting. Instant Rule of Thirds and Rule of Fourths gas math.</p>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <h2 className="mb-2 font-bold uppercase text-white">03 // Decompression Procedures &amp; Mixed Gas</h2>
              <p>Focus: Accelerated decompression profiles, hyperoxic/hypoxic Trimix gas planning, management of isobaric counter-diffusion, and physiological gas density depth penalties.</p>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <h2 className="mb-2 font-bold uppercase text-white">04 // Closed Circuit Rebreather (CCR) Integration</h2>
              <p className="mb-2"><span className="text-white">Platform:</span> KISS Sidewinder specific. Achieving complete configuration mastery and failure management within overhead environments.</p>
              <p className="mb-2"><span className="text-white">Focus:</span> Dual MAV (Manual Addition Valve) optimization, side-mount scrubber routing mechanics, counterlung streamlining, and passive/manual loop gas density tracking.</p>
              <p><span className="text-white">Rigging Rules:</span> Small equipment loops configured tightly for double-ended bolt snap clipping to eliminate line entrapment points in tight cave restrictions.</p>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <h2 className="mb-2 font-bold uppercase text-white">05 // Long-Term Technical Mentoring</h2>
              <p>Focus: Customized peer-to-peer team development, custom physical fitness metrics, and ongoing skill retention audits. We reject linear, check-the-box timelines to foster true diving confidence through long-term skill progression.</p>
            </div>
            <div className="border-l-2 border-slate-700 pl-6">
              <h2 className="mb-2 font-bold uppercase text-white">06 // North Florida Cave Guiding</h2>
              <p>Focus: Logistical management, spring/siphon structural orientation, and strict underwater safety monitoring through complex cave passages for fully certified, qualified technical teams.</p>
            </div>
          </div>
        </section>

        <section className="mb-24" aria-labelledby="regional-logistics">
          <h2 id="regional-logistics" className="mb-8 text-2xl font-bold uppercase tracking-wider text-white">02 // Regional Site Logistics</h2>
          <div className="grid max-w-4xl grid-cols-1 gap-8 font-mono text-sm text-slate-300 md:grid-cols-2">
            {sites.map(([name, description]) => (
              <article key={name} className="rounded border border-slate-800 bg-slate-900/40 p-4">
                <h3 className="mb-2 font-bold uppercase text-white">{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-xl" aria-labelledby="candidate-vetting">
          <h2 id="candidate-vetting" className="mb-4 text-2xl font-bold uppercase tracking-wider text-white">03 // Candidate Vetting</h2>
          <p className="mb-6 font-mono text-sm text-slate-400">Submit your active logging metrics to request an instructional slot or guiding window.</p>
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
            <label className="block"><span className="mb-1 block text-xs uppercase text-slate-400">Full Name</span><input required type="text" className="w-full border border-slate-800 bg-slate-900 p-2 text-white focus:border-slate-600 focus:outline-none" /></label>
            <label className="block"><span className="mb-1 block text-xs uppercase text-slate-400">Current Certifications &amp; Agency</span><input required type="text" className="w-full border border-slate-800 bg-slate-900 p-2 text-white focus:border-slate-600 focus:outline-none" /></label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block"><span className="mb-1 block text-xs uppercase text-slate-400">Total Logged Dives</span><input required min="0" type="number" className="w-full border border-slate-800 bg-slate-900 p-2 text-white focus:border-slate-600 focus:outline-none" /></label>
              <label className="block"><span className="mb-1 block text-xs uppercase text-slate-400">Primary Configuration</span><select className="w-full border border-slate-800 bg-slate-900 p-2 text-white focus:border-slate-600 focus:outline-none"><option>Open Circuit (Doubles/Sidemount)</option><option>Closed Circuit Rebreather (CCR)</option></select></label>
            </div>
            <label className="block"><span className="mb-1 block text-xs uppercase text-slate-400">Operational Objectives</span><textarea required rows={4} className="w-full border border-slate-800 bg-slate-900 p-2 text-white focus:border-slate-600 focus:outline-none" /></label>
            <button type="submit" className="w-full bg-white p-3 font-bold uppercase text-black transition-colors hover:bg-slate-200">Submit Application File</button>
            {submitted && <p role="status" className="border border-slate-800 bg-slate-900 p-3 text-slate-300">Application file received. We will follow up with next steps.</p>}
          </form>
          <button type="button" onClick={() => navigate('contact')} className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-400 underline underline-offset-4 transition-colors hover:text-white">Prefer direct contact?</button>
        </section>
      </div>
    </div>
  );
}
