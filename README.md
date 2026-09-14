# Frattellianos

<p align="center">
  <img src="public/images/logo-frattellianos.svg" alt="Logo Frattellianos" width="520">
</p>

Site institucional da comunidade cristã Frattellianos, criado para apresentar sua história, propósito e mensagem de forma simples, acolhedora e responsiva.

## Sobre o projeto

Frattellianos nasceu de um sonho entre amigos e ganhou novo significado com a missão de aproximar pessoas de Cristo. O site reúne essa trajetória e apresenta missão, visão e valores da comunidade.

Atualmente, experiência institucional está pronta. Login, dashboard, persistência e gerenciamento de usuários permanecem como estruturas preparadas para desenvolvimento futuro.

## Tecnologias

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executando localmente

```bash
git clone git@github.com:iweti-com/Frattellianos.git
cd Frattellianos
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

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
| `/dashboard` | Preparação | Base da área administrativa |
| `/dashboard/users` | Preparação | Base do gerenciamento de usuários |
| `/dashboard/settings` | Preparação | Base das configurações administrativas |
| `/api/users` | Preparação | Endpoint `GET` com fonte de dados ainda não persistida |

## Estrutura

```text
Frattellianos/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   ├── app/          # páginas, layouts e rotas da API
│   ├── components/   # componentes visuais e de layout
│   ├── hooks/        # hooks React
│   ├── lib/          # utilitários e integrações internas
│   ├── services/     # regras de acesso aos dados
│   └── types/        # tipos compartilhados
├── package.json
└── postcss.config.mjs
```

## Estado atual

- Páginas institucionais responsivas implementadas.
- Identidade visual e estilos construídos com Tailwind CSS.
- API de usuários retorna lista vazia enquanto persistência não for definida.
- Login e dashboard não possuem autenticação ou dados reais.
