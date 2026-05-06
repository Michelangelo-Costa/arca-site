export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: { left: SiteLink[]; right: SiteLink[] } = {
  left: [
    { label: 'ARCA', href: '#arca' },
    { label: 'SIAPREPS', href: 'https://siapesq.com/#/siapreps', external: true },
    { label: 'PHYTOBLOOM', href: 'https://siapesq.com/#/phytobloom', external: true },
  ],
  right: [
    { label: 'CONTATO', href: '#contato' },
    { label: 'SOBRE NÓS', href: '#sobre-nos' },
  ],
};

export const resources = [
  {
    icon: 'dashboard',
    title: 'Dashboard inteligente',
    text: 'Acompanhe estatísticas, tendências e dados organizados automaticamente.',
  },
  {
    icon: 'management',
    title: 'Gestão completa',
    text: 'Cadastre, edite e acompanhe registros com dados científicos detalhados.',
  },
  {
    icon: 'export',
    title: 'Exportação de dados',
    text: 'Baixe relatórios em Excel (.xlsx) prontos para análise e pesquisa.',
  },
] as const;

export const footerLinks: Record<string, SiteLink[]> = {
  Produto: [
    { label: 'ARCA', href: '#arca' },
    { label: 'Download', href: '#download' },
    { label: 'Recursos', href: '#recursos' },
  ],
  Ecossistema: [
    { label: 'SIAPREPS', href: 'https://siapesq.com/#/siapreps', external: true },
    { label: 'PHYTOBLOOM', href: 'https://siapesq.com/#/phytobloom', external: true },
    { label: 'SIAPESQ', href: '#sobre-nos' },
    { label: 'Instagram', href: 'https://www.instagram.com/siapesq', external: true },
  ],
};
