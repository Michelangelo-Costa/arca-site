import { Layers, MapPin, Satellite } from 'lucide-react';
import { asset } from '../../lib/assets';
import { Reveal } from '../ui/Reveal';

const mapCapabilities = [
  { text: 'Organiza registros por categoria de espécie e ponto geográfico.', Icon: MapPin },
  { text: 'Alterna camadas de satélite, cor real e leitura espacial.', Icon: Satellite },
  { text: 'Destaca áreas de concentração com visualização por mapa de calor.', Icon: Layers },
];

export function MapSection() {
  return (
    <section id="mapa" className="relative isolate overflow-hidden bg-siap-midnight text-white lg:min-h-screen">
      <div className="bg-white px-4 py-8 text-siap-navy lg:hidden">
        <Reveal variant="scale">
          <div className="interactive-lift mx-auto max-w-md overflow-hidden rounded-lg bg-siap-navy shadow-soft">
            <img
              src={asset('MAPA.png')}
              alt="Interface do mapa de espécies do ARCA"
              className="w-full object-contain"
            />
            <div className="px-5 py-6 text-white">
              <p className="text-sm font-black uppercase text-siap-teal">O que o mapa faz</p>
              <ul className="mt-4 space-y-3">
                {mapCapabilities.map(({ text, Icon }, index) => (
                  <li
                    key={text}
                    className="flex gap-3 text-sm font-semibold leading-6 text-white/90"
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-siap-cyan/40 bg-white/10 text-siap-teal">
                      <Icon aria-hidden className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hidden lg:block">
        <img
          src={asset('MAPA.png')}
          alt=""
          className="absolute inset-0 -z-30 h-full w-full object-fill"
        />
        <div className="absolute inset-0 -z-20 bg-siap-midnight/46" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,16,31,0.68)_0%,rgba(3,16,31,0.18)_44%,rgba(3,16,31,0.76)_100%)]" />

        <div className="mx-auto flex min-h-screen max-w-7xl items-end justify-end px-5 pb-16 pt-28 sm:px-7 sm:pb-20 lg:px-8">
          <div className="flex w-full justify-end">
            <Reveal variant="right" delay={100}>
              <aside className="map-copy-panel max-w-md p-5 sm:p-6 lg:max-w-lg lg:translate-x-10 xl:translate-x-20">
                <p className="text-sm font-black uppercase text-siap-teal">O que o mapa faz</p>
                <ul className="mt-5 space-y-4">
                  {mapCapabilities.map(({ text, Icon }) => (
                    <li key={text} className="flex gap-3 text-base font-semibold leading-7 text-white/88 sm:text-lg">
                      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-siap-cyan/40 bg-white/10 text-siap-teal">
                        <Icon aria-hidden className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
