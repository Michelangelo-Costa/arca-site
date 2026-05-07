# ARCA Site - Vitrine Publica

Site vitrine do ARCA, aplicativo da SIAPESQ para monitoramento inteligente de especies. O objetivo deste repositorio e apresentar o produto, seus recursos principais e o link oficial de download do instalador Windows.

## Links da entrega

| Item | Link |
| --- | --- |
| Repositorio do site | https://github.com/Michelangelo-Costa/arca-site |
| Site publicado | https://arca-site.michelangelocosta.dev/ |
| App frontend | https://github.com/Michelangelo-Costa/desafio-2026-FRONT-END |
| Aplicacao publicada | https://app-arca.michelangelocosta.dev/#/login |
| API Node | https://github.com/Michelangelo-Costa/desafio-2026-API-NODE |

## Visao geral

Este site funciona como a camada publica do ecossistema ARCA. Enquanto o frontend do desafio entrega a aplicacao operacional e a API Node entrega os dados, este repositorio apresenta o produto para usuarios finais e centraliza a chamada para download.

Principais secoes:

- Hero com identidade visual do ARCA e chamada para download.
- Faixa de recursos com dashboard, gestao completa e exportacao de dados.
- Secao de mapa destacando marcadores, camadas e mapa de calor.
- Bloco de download para Windows 10 e 11.
- Links para o ecossistema SIAPESQ, SIAPREPS e PHYTOBLOOM.

## Repositorios relacionados

| Repositorio | Papel no ecossistema |
| --- | --- |
| [arca-site](https://github.com/Michelangelo-Costa/arca-site) | Site publico de apresentacao do ARCA, com chamada para download do instalador. |
| [desafio-2026-FRONT-END](https://github.com/Michelangelo-Costa/desafio-2026-FRONT-END) | App web e base do app desktop ARCA. |
| [desafio-2026-API-NODE](https://github.com/Michelangelo-Costa/desafio-2026-API-NODE) | Backend Express/Prisma responsavel por auth, especies, estatisticas e integracao externa. |

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- lucide-react

## Como executar localmente

Requisitos:

- Node.js 20 ou superior
- npm

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicacao fica disponivel em `http://localhost:5173` ou na porta indicada pelo Vite.

## Scripts

```bash
npm run dev     # desenvolvimento com Vite
npm run build   # build de producao
npm run lint    # analise com ESLint
npm run preview # preview local do build
```

## Build

```bash
npm run build
```

O resultado fica em `dist/`.

## Download do instalador

O link de download e configurado em `src/lib/assets.ts`:

```ts
export const downloadFileName = 'ARCA-Setup-0.1.0.exe';
export const downloadSizeLabel = '106 MB';
export const downloadUrl = `https://github.com/Michelangelo-Costa/arca-site/releases/download/v0.1.0/${downloadFileName}`;
```

A versao atual anuncia suporte para Windows 10 e 11.

## Relacao com o app e a API

- O site e publico e nao exige autenticacao.
- O app operacional esta em [desafio-2026-FRONT-END](https://github.com/Michelangelo-Costa/desafio-2026-FRONT-END).
- O app consome a API do repositorio [desafio-2026-API-NODE](https://github.com/Michelangelo-Costa/desafio-2026-API-NODE).
- O instalador divulgado pelo site representa a versao desktop gerada a partir do frontend ARCA.

## Observacoes para avaliacao

- Este repositorio complementa a entrega principal com uma vitrine publica do produto.
- O site publicado esta em `https://arca-site.michelangelocosta.dev/`.
- Os repositorios do desafio ficam conectados nos READMEs para facilitar navegacao durante a avaliacao.
