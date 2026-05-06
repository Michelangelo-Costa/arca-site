import { Download, MonitorCheck } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { asset, downloadFileName, downloadUrl } from '../../lib/assets';

export function HeroSection() {
  return (
    <section id="arca" className="relative isolate min-h-screen overflow-hidden bg-siap-midnight text-white">
      <img
        src={asset('FUNDO_TARTARUGA.png')}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-siap-midnight/26" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,16,31,0.92)_0%,rgba(5,48,94,0.74)_42%,rgba(0,169,224,0.18)_100%)]" />

      <div className="mx-auto flex min-h-screen max-w-[1680px] items-center px-5 pb-16 pt-48 sm:px-7 sm:pt-52 lg:px-12 lg:pt-44 2xl:px-16">
        <div className="max-w-3xl">
          <Reveal variant="scale">
            <img
              src={asset('ARCA_LOGO.png')}
              alt="ARCA"
              className="arca-brand-mark mb-8 w-[min(92vw,840px)] max-w-full"
            />
          </Reveal>

          <Reveal delay={120}>
            <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
              Monitoramento inteligente de espécies
              <span className="block text-siap-blue">em tempo real</span>
            </h1>
          </Reveal>

          <Reveal delay={210}>
            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-white sm:text-lg xl:text-xl xl:leading-8">
              Visualize dados em mapas interativos, acompanhe estatísticas e registre observações
              com precisão científica.
            </p>
          </Reveal>

          <Reveal delay={300} stagger>
            <div className="mt-8 flex flex-col items-start gap-5">
              <a
                href={downloadUrl}
                download={downloadFileName}
                className="interactive-lift inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-black text-siap-blue shadow-soft transition hover:bg-siap-teal hover:text-siap-midnight focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-siap-navy sm:text-xl"
              >
                <Download aria-hidden className="h-6 w-6" strokeWidth={2.6} />
                Baixar gratuitamente
              </a>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-white">
                <span className="inline-flex items-center gap-2">
                  <MonitorCheck aria-hidden className="h-5 w-5 text-siap-blue" strokeWidth={2.4} />
                  Compatível com Windows 10 e 11
                </span>
                <span className="h-4 w-px bg-siap-blue/70" />
                <span>Versão 0.1.0</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
