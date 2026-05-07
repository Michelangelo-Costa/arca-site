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
    <section id="mapa" className="relative isolate min-h-[100svh] overflow-hidden bg-siap-midnight text-white">
      <img
        src={asset('MAPA_MOBILE.jpeg')}
        alt="Interface do mapa de espécies do ARCA"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-top lg:hidden"
      />
      <img
        src={asset('MAPA.png')}
        alt="Interface do mapa de espécies do ARCA"
        className="absolute inset-0 -z-30 hidden h-full w-full object-cover object-center lg:block"
      />
      <div className="absolute inset-0 -z-20 bg-siap-midnight/30 lg:bg-siap-midnight/46" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,16,31,0.06)_0%,rgba(3,16,31,0.18)_40%,rgba(3,16,31,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,16,31,0.68)_0%,rgba(3,16,31,0.18)_44%,rgba(3,16,31,0.76)_100%)]" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-10 pt-24 sm:px-6 sm:pb-14 lg:justify-end lg:px-8 lg:pb-20 lg:pt-28">
        <div className="w-full lg:flex lg:justify-end">
          <Reveal variant="right" delay={100}>
            <aside className="map-copy-panel w-full p-4 sm:max-w-md sm:p-6 lg:max-w-lg">
              <p className="text-xs font-black uppercase tracking-widest text-siap-teal sm:text-sm">O que o mapa faz</p>
              <ul className="mt-3 space-y-3 sm:mt-5 sm:space-y-4">
                {mapCapabilities.map(({ text, Icon }) => (
                  <li
                    key={text}
                    className="flex gap-3 text-sm font-semibold leading-relaxed text-white/88 sm:text-base sm:leading-7 lg:text-lg"
                  >
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-siap-cyan/40 bg-white/10 text-siap-teal sm:h-9 sm:w-9">
                      <Icon aria-hidden className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.4} />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
