import { BarChart3, ClipboardList, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { resources } from '../../data/siteContent';
import { asset } from '../../lib/assets';
import { Reveal } from '../ui/Reveal';

const featureIcons: Record<(typeof resources)[number]['icon'], LucideIcon> = {
  dashboard: BarChart3,
  management: ClipboardList,
  export: Download,
};

export function FeatureStrip() {
  return (
    <section id="recursos" className="relative isolate min-h-[100svh] overflow-hidden bg-siap-navy text-white lg:min-h-screen">
      <img
        src={asset('FUNDO_AVES.png')}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[54%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-20 bg-siap-navy/42 lg:bg-siap-navy/28" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,16,31,0.86)_0%,rgba(3,16,31,0.34)_44%,rgba(3,16,31,0.82)_100%)] lg:bg-[linear-gradient(180deg,rgba(3,16,31,0.42)_0%,rgba(3,16,31,0.06)_46%,rgba(3,16,31,0.52)_100%)]" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-6 sm:py-24 lg:min-h-screen lg:px-8">
        <Reveal stagger className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-0">
          {resources.map((resource) => {
            const Icon = featureIcons[resource.icon];

            return (
              <article key={resource.title} className="feature-item interactive-lift relative rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-6 backdrop-blur-md sm:px-6 sm:py-7 lg:flex-1 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-8 lg:py-1 lg:backdrop-blur-none xl:px-10">
                <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                  <div className="feature-icon relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-siap-blue bg-siap-midnight/42 text-siap-blue shadow-[0_0_24px_rgba(8,119,216,0.28)] backdrop-blur-sm sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                    <Icon aria-hidden className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <h2 className="text-base font-black uppercase leading-tight text-white sm:text-lg lg:text-2xl lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      {resource.title}
                    </h2>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-white/90 sm:mt-3 sm:text-base sm:leading-7 lg:mt-4 lg:text-xl lg:leading-8 lg:drop-shadow-[0_2px_8px_rgba(0,0,0,0.48)]">
                      {resource.text}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
