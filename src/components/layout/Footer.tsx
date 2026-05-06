import { footerLinks } from '../../data/siteContent';
import { asset } from '../../lib/assets';
import { Reveal } from '../ui/Reveal';

export function Footer() {
  return (
    <footer id="contato" className="bg-siap-midnight text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-7 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <Reveal variant="left" stagger>
          <div id="sobre-nos">
            <div className="flex items-center gap-4">
              <img src={asset('LOGO_Siapesq.png')} alt="SIAPESQ" className="h-12 w-auto object-contain" />
              <img src={asset('ARCA_LOGO.png')} alt="ARCA" className="h-9 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Soluções SIAPESQ para ciência aplicada, gestão de dados e monitoramento inteligente
              de espécies.
            </p>
          </div>
        </Reveal>

        {Object.entries(footerLinks).map(([title, links], index) => (
          <Reveal key={title} delay={(index + 1) * 90} stagger>
            <div id={title === 'Ecossistema' ? 'ecossistema' : undefined}>
              <h3 className="text-sm font-black text-white">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/68">
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

        <Reveal delay={270} variant="right" stagger>
          <div>
            <h3 className="text-sm font-black text-white">Contato</h3>
            <a
              href="mailto:siapesq@gmail.com"
              className="mt-4 block text-sm leading-7 text-white/68 transition hover:text-siap-teal"
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
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/58">
        © 2026 SIAPESQ. Todos os direitos reservados.
      </div>
    </footer>
  );
}
