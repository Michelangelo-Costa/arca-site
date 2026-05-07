import { footerLinks } from '../../data/siteContent';
import { asset } from '../../lib/assets';
import { Reveal } from '../ui/Reveal';

export function Footer() {
  return (
    <footer id="contato" className="overflow-hidden bg-siap-midnight text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 sm:gap-9 sm:px-6 sm:py-12 lg:grid-cols-[1.35fr_0.75fr_0.85fr_0.9fr] lg:gap-10 lg:px-8">
        <Reveal variant="left" stagger>
          <div id="sobre-nos">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <img src={asset('LOGO_Siapesq.png')} alt="SIAPESQ" className="h-10 w-auto object-contain sm:h-12" />
              <img src={asset('ARCA_LOGO.png')} alt="ARCA" className="h-7 w-auto object-contain sm:h-9" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 sm:mt-5 sm:leading-7">
              Soluções SIAPESQ para ciência aplicada, gestão de dados e monitoramento inteligente
              de espécies.
            </p>
          </div>
        </Reveal>

        {Object.entries(footerLinks).map(([title, links], index) => (
          <Reveal key={title} delay={(index + 1) * 90} stagger>
            <div id={title === 'Ecossistema' ? 'ecossistema' : undefined}>
              <h3 className="text-sm font-black text-white">{title}</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-white/68 sm:mt-4 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      className="transition hover:text-siap-teal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={270} stagger>
          <div>
            <h3 className="text-sm font-black text-white">Contato</h3>
            <a
              href="mailto:siapesq@gmail.com"
              className="mt-3 block text-sm leading-7 text-white/68 transition hover:text-siap-teal sm:mt-4"
            >
              siapesq@gmail.com
            </a>
            <a
              href="https://www.instagram.com/siapesq"
              target="_blank"
              rel="noreferrer"
              className="block text-sm leading-7 text-white/68 transition hover:text-siap-teal"
            >
              Instagram SIAPESQ
            </a>
            <p className="text-sm leading-7 text-white/68">Atendimento institucional</p>
          </div>
        </Reveal>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/58 sm:py-5 sm:text-sm">
        © 2026 SIAPESQ. Todos os direitos reservados.
      </div>
    </footer>
  );
}
