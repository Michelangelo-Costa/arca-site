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
  const revealVariants = ['left', 'up', 'right'] as const;

  return (
    <section id="recursos" className="relative isolate min-h-screen overflow-hidden bg-siap-navy py-20 text-white sm:py-24">
      <img
        src={asset('FUNDO_AVES.png')}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-siap-navy/28" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,16,31,0.42)_0%,rgba(3,16,31,0.06)_46%,rgba(3,16,31,0.52)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center px-5 sm:min-h-[calc(100vh-12rem)] sm:px-7 lg:px-8">
        <div className="grid w-full gap-10 md:grid-cols-3 md:gap-0">
          {resources.map((resource, index) => {
            const Icon = featureIcons[resource.icon];

            return (
              <Reveal key={resource.title} delay={index * 140} variant={revealVariants[index]}>
                <article className="feature-item interactive-lift md:px-8 lg:px-10">
                  <div className="flex gap-6">
                    <div className="feature-icon grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-siap-blue text-siap-blue shadow-[0_0_24px_rgba(8,119,216,0.22)] sm:h-20 sm:w-20">
                      <Icon aria-hidden className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h2 className="text-xl font-black uppercase leading-tight text-white drop-shadow-sm lg:text-2xl">
                        {resource.title}
                      </h2>
                      <p className="mt-4 max-w-[22rem] text-lg font-bold leading-8 text-white/90 drop-shadow-sm lg:text-xl">
                        {resource.text}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
