import { BadgeCheck, MonitorDown, XCircle } from 'lucide-react';
import { asset, downloadSizeLabel, downloadUrl } from '../../lib/assets';
import { Reveal } from '../ui/Reveal';

const downloadHighlights = [
  { label: 'Windows 10 e 11', Icon: MonitorDown },
  { label: 'Versão 0.1.0', Icon: BadgeCheck },
  { label: `Instalador ${downloadSizeLabel}`, Icon: BadgeCheck },
];

const unavailablePlatforms = ['Linux', 'macOS', 'mobile'];

export function DownloadSection() {
  return (
    <section id="download" className="relative isolate overflow-hidden bg-siap-midnight text-white lg:min-h-screen">
      <img
        src={asset('FUNDO_FOOTER.png')}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-siap-midnight/68 lg:bg-siap-midnight/58" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,16,31,0.96)_0%,rgba(6,27,53,0.78)_48%,rgba(3,16,31,0.62)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,16,31,0.94)_0%,rgba(6,27,53,0.74)_42%,rgba(3,16,31,0.38)_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 sm:px-8 sm:py-24 lg:min-h-screen lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-8">
        <Reveal className="max-w-3xl" variant="left" stagger>
          <p className="text-sm font-black uppercase text-siap-teal">Download do projeto</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Baixe o ARCA para Windows
          </h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
            Instale a versão demonstrativa criada para o desafio técnico, com experiência desktop
            para monitoramento e visualização de dados.
          </p>

          <div className="mt-7 grid gap-3 text-xs font-black uppercase text-white sm:grid-cols-3 sm:text-sm">
            {downloadHighlights.map(({ label, Icon }) => (
              <span
                key={label}
                className="interactive-lift inline-flex min-h-12 items-center gap-2 rounded-md border border-siap-cyan/30 bg-white/8 px-4 py-3 backdrop-blur-sm"
              >
                <Icon aria-hidden className="h-4 w-4 shrink-0 text-siap-teal" strokeWidth={2.4} />
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} variant="right">
          <div className="download-panel interactive-lift w-full max-w-xl p-5 sm:p-8 lg:ml-auto">
            <img src={asset('ARCA_LOGO.png')} alt="ARCA" className="w-44 max-w-full sm:w-56" />
            <p className="mt-5 text-base font-semibold leading-7 text-white/78">
              Instalador gratuito para avaliação do projeto, com rotinas de monitoramento,
              consulta e exportação de dados.
            </p>

            <a
              href={downloadUrl}
              className="interactive-lift mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-white px-5 py-4 text-center text-base font-black text-siap-navy transition hover:bg-siap-teal focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-siap-navy"
            >
              <MonitorDown aria-hidden className="h-6 w-6" strokeWidth={2.4} />
              Download para Windows
            </a>

            <div className="mt-6">
              <p className="text-xs font-black uppercase text-white/54">Ainda não disponível para</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {unavailablePlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="inline-flex items-center gap-2 rounded-md border border-white/14 px-3 py-2 text-sm font-bold text-white/70"
                  >
                    <XCircle aria-hidden className="h-4 w-4 text-white/46" strokeWidth={2.2} />
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
