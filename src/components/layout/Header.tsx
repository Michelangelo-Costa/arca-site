import { useState } from 'react';
import { mainNav } from '../../data/siteContent';
import { asset } from '../../lib/assets';

function NavGroup({ items, align = 'start' }: { items: typeof mainNav.left; align?: 'start' | 'end' }) {
  return (
    <nav
      aria-label={align === 'start' ? 'Produtos SIAPESQ' : 'Institucional'}
      className={`hidden items-center gap-10 text-xl font-black tracking-normal text-white lg:flex xl:gap-12 xl:text-2xl ${
        align === 'end' ? 'justify-end' : ''
      }`}
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
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-7 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4">
          <NavGroup items={mainNav.left} />

          <a
            href="#arca"
            className="flex -translate-y-2 translate-x-3 flex-col items-center sm:-translate-y-3 lg:-translate-y-5 lg:translate-x-8 xl:-translate-y-6 xl:translate-x-12"
            aria-label="Página inicial ARCA"
          >
            <img
              src={asset('SIAPESQ_LOGO.png')}
              alt="SIAPESQ"
              className="h-32 w-32 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.36)] sm:h-36 sm:w-36 lg:h-52 lg:w-52 xl:h-60 xl:w-60"
            />
          </a>

          <div className="flex justify-end lg:hidden">
            <button
              type="button"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="wave-menu-button mt-2"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <NavGroup items={mainNav.right} align="end" />
        </div>

        <nav
          aria-label="Navegação principal"
          className={`mx-auto mt-3 grid max-w-sm gap-2 rounded-lg border border-white/12 bg-siap-midnight/80 p-3 text-center text-sm font-black shadow-soft backdrop-blur-md transition duration-300 lg:hidden ${
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
              className="rounded-md px-4 py-3 text-white transition hover:bg-white/10 hover:text-siap-teal focus:outline-none focus:ring-2 focus:ring-siap-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
