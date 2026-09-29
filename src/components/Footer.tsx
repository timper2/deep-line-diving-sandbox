import { Clock3, Mail, MapPin, Phone, Waves } from 'lucide-react';
import { ROUTES, type RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';

interface FooterProps {
  navigate: NavigateFn;
}

export default function Footer({ navigate }: FooterProps) {
  const courseLinks: RouteId[] = ['sidemount', 'cave', 'technical', 'rebreather', 'tryout'];

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl container-px py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 ring-1 ring-accent/40">
                <Waves className="h-5 w-5 text-accent" strokeWidth={2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Rimstone Technical Diving</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A technical diving company. Cave, tec, and rebreather. Fort White, Florida.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Courses
            </h4>
            <ul className="mt-4 space-y-2.5">
              {ROUTES.filter((r) => courseLinks.includes(r.id)).map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => navigate(r.id)}
                    className="text-sm text-slate-300 transition-colors hover:text-accent"
                  >
                    {r.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Hours
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>
                  <span className="block">Mon - Fri: 9:00 AM - 5:00 PM</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>
                  <span className="block">Sat - Sun</span>
                  <span className="text-slate-400">Closed</span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:dive@deeplinediving.com" className="hover:text-accent">
                  dive@deeplinediving.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                <span>+1 (555) 018-2277</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                <span>High Springs, Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Rimstone Technical Diving. All rights reserved.</p>
          <p>Train deliberately. Dive safely.</p>
        </div>
      </div>
    </footer>
  );
}
