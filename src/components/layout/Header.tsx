import { useState } from 'react';
import { mainNav } from '../../data/siteContent';
import { asset } from '../../lib/assets';

function NavGroup({
  items,
  align = 'start',
  className = '',
}: {
  items: typeof mainNav.left;
  align?: 'start' | 'end';
  className?: string;
}) {
  return (
    <nav
      aria-label={align === 'start' ? 'Referências do projeto' : 'Navegação institucional'}
      className={`hidden items-center gap-7 text-lg font-black tracking-normal text-white lg:flex xl:gap-10 xl:text-xl 2xl:gap-12 2xl:text-2xl ${
        align === 'end' ? 'justify-end' : ''
      } ${className}`}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          className="rounded-md px-1 py-2 text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition hover:text-siap-teal focus:outline-none focus:ring-2 focus:ring-siap-teal"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileItems = [...mainNav.left, ...mainNav.right];

  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-start gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          <NavGroup items={mainNav.left} className="lg:col-start-1 lg:row-start-1" />

          <a
            href="#arca"
            className="col-start-1 row-start-1 flex flex-col items-start lg:col-start-2 lg:items-center lg:-translate-y-4 xl:-translate-y-5"
            aria-label="Página inicial ARCA"
          >
            <img
              src={asset('SIAPESQ_LOGO.png')}
              alt="SIAPESQ"
              className="h-16 w-16 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.36)] sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-44 lg:w-44 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60"
            />
          </a>

          <div className="col-start-3 row-start-1 flex justify-end lg:hidden">
            <button
              type="button"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="wave-menu-button mt-1"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <NavGroup items={mainNav.right} align="end" className="lg:col-start-3 lg:row-start-1" />
        </div>

        <nav
          aria-label="Navegação principal"
          className={`mt-2 grid w-full gap-1 rounded-xl border border-white/12 bg-siap-midnight/92 p-2 text-center text-sm font-black shadow-soft backdrop-blur-lg transition duration-300 sm:ml-auto sm:max-w-sm sm:gap-1.5 sm:p-3 lg:hidden ${
            isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          {mobileItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-white transition hover:bg-white/10 hover:text-siap-teal focus:outline-none focus:ring-2 focus:ring-siap-teal active:bg-white/14"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
