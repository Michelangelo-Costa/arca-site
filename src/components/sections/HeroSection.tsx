import { Download, MonitorCheck } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { asset, downloadSizeLabel, downloadUrl } from '../../lib/assets';

export function HeroSection() {
  return (
    <section id="arca" className="relative isolate min-h-[100svh] overflow-hidden bg-siap-midnight text-white">
      <img
        src={asset('FUNDO_TARTARUGA.png')}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-siap-midnight/26" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,16,31,0.92)_0%,rgba(5,48,94,0.74)_42%,rgba(0,169,224,0.18)_100%)]" />

      <div className="mx-auto flex min-h-[100svh] max-w-[1680px] items-center px-5 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-44 lg:px-12 lg:pt-44 2xl:px-16">
        <div className="w-full max-w-3xl">
          <Reveal variant="scale">
            <img
              src={asset('ARCA_LOGO.png')}
              alt="ARCA"
              className="arca-brand-mark -ml-5 mb-5 w-52 max-w-[80vw] sm:-ml-4 sm:mb-7 sm:w-[28rem] lg:mb-8 lg:ml-0 lg:w-[44rem] xl:w-[52rem]"
            />
          </Reveal>

          <Reveal delay={120}>
            <h1 className="max-w-3xl text-2xl font-black leading-snug text-white sm:text-3xl md:text-4xl md:leading-tight lg:text-[3.45rem] xl:text-[4rem]">
              Monitoramento inteligente de espécies
              <span className="block text-siap-blue">em tempo real</span>
            </h1>
          </Reveal>

          <Reveal delay={210}>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/90 sm:mt-6 sm:text-base md:text-lg xl:text-xl xl:leading-8">
              Visualize dados em mapas interativos, acompanhe estatísticas e registre observações
              com precisão científica.
            </p>
          </Reveal>

          <Reveal delay={300} stagger>
            <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:gap-5">
              <a
                href={downloadUrl}
                className="interactive-lift inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-white px-5 py-3.5 text-sm font-black text-siap-blue shadow-soft transition hover:bg-siap-teal hover:text-siap-midnight focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-siap-navy sm:min-h-14 sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-xl"
              >
                <Download aria-hidden className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.6} />
                Baixar gratuitamente
              </a>

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[0.7rem] font-semibold text-white/80 sm:text-sm">
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <MonitorCheck aria-hidden className="h-4 w-4 text-siap-blue sm:h-5 sm:w-5" strokeWidth={2.4} />
                  Windows 10 e 11
                </span>
                <span className="h-3 w-px bg-siap-blue/70 sm:h-4" />
                <span>Versão 0.1.0</span>
                <span className="h-3 w-px bg-siap-blue/70 sm:h-4" />
                <span>{downloadSizeLabel}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
