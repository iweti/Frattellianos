# Frattellianos

<p align="center">
  <img src="public/images/logo-frattellianos.svg" alt="Logo Frattellianos" width="520">
</p>

Site institucional da comunidade cristã Frattellianos, criado para apresentar sua história, propósito e mensagem de forma simples, acolhedora e responsiva.

## Sobre o projeto

Frattellianos nasceu de um sonho entre amigos e ganhou novo significado com a missão de aproximar pessoas de Cristo. O site reúne essa trajetória e apresenta missão, visão e valores da comunidade.

Atualmente, a experiência institucional está pronta. O login permanece como preparação para autenticação futura; as pastas de API e dashboard estão reservadas, mas ainda não possuem implementação.

## Tecnologias

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Requisitos

Antes de começar, instale:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) 20.9 ou superior — npm já acompanha instalação

Confirme instalações:

```bash
git --version
node --version
npm --version
```

## Executando localmente

```bash
git clone https://github.com/iweti-com/Frattellianos.git
cd Frattellianos
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

Clone por HTTPS não exige chave SSH para repositório público. Caso repositório seja privado, conta usada precisa ter acesso autorizado no GitHub.

Para gerar e executar versão de produção:

```bash
npm run build
npm run start
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia ambiente de desenvolvimento |
| `npm run build` | Gera build otimizado de produção |
| `npm run start` | Inicia servidor com build de produção |

## Rotas

| Rota | Estado | Descrição |
| --- | --- | --- |
| `/` | Disponível | História e apresentação do Frattellianos |
| `/mensagem` | Disponível | Missão, visão e valores da comunidade |
| `/login` | Preparação | Entrada reservada para autenticação futura |

## Estrutura

```text
Frattellianos/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   ├── app/          # páginas e pastas reservadas para API e dashboard
│   ├── components/   # componentes visuais e de layout
│   └── lib/          # utilitários internos
├── package.json
└── postcss.config.mjs
```

## Estado atual

- Páginas institucionais responsivas implementadas.
- Identidade visual e estilos construídos com Tailwind CSS.
- Login ainda não possui autenticação.
- Backend e dashboard ainda não estão implementados.
