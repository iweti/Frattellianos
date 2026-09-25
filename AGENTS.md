<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Tailwind CSS

- Este projeto usa Tailwind CSS v4. Antes de escrever ou alterar classes, confira a sintaxe compatível com a versão instalada.
- Prefira a sintaxe canônica sugerida pelo Tailwind CSS IntelliSense: use utilitários nomeados ou frações quando forem equivalentes e deixe valores arbitrários apenas quando não houver alternativa exata.
- Na sintaxe v4, coloque o modificador `!important` no final do utilitário, por exemplo `text-sm!` e `hover:bg-red-500!`.
- Antes de concluir uma alteração visual, formate os arquivos modificados com o Prettier e elimine avisos de sintaxe recomendada sem mudar o resultado visual solicitado.

## Conteúdo bíblico (NAA)

- Organize as citações em `src/content/daily-verses/references/<livro>/<capitulo>-<versiculo>.ts`, agrupadas por livro, e reúna-as em `src/content/daily-verses.ts`. Confira a redação e a referência na fonte da SBB antes de acrescentar textos da NAA.
- `src/lib/daily-verse-rotation.ts` seleciona sete entradas por acesso no servidor. A coleção inteira não é enviada ao navegador de uma vez, mas as entradas podem aparecer publicamente ao longo da rotação.
- O [aviso de citação reproduzido em uma edição da NAA](https://www.mundocristao.com.br/wp-content/uploads/2023/08/Biblia-365-NAA.pdf) prevê até 500 versículos sem autorização escrita, desde que as citações não constituam um livro bíblico inteiro e ocupem menos de 25% do texto da obra em que aparecem. Os 25% se referem à obra que contém as citações, não ao texto total da Bíblia. O aviso não resolve como delimitar essa obra em um site com conteúdo rotativo; não presuma que mostrar sete entradas por acesso satisfaça essa condição.
- Conte versículos individuais, inclusive cada versículo de um intervalo, e inclua citações fora da coleção diária, como Isaías 32:1 em `src/app/missao/page.tsx`. Quantidade de arquivos ou entradas não equivale necessariamente à quantidade de versículos. Refaça a contagem após alterações. Para avaliar os 25%, considere o texto efetivamente publicado e a definição aplicável de obra; a contagem de palavras do código-fonte não mede essa proporção.
- Preserve a atribuição à Sociedade Bíblica do Brasil no rodapé (`src/components/layout/site-footer.tsx`). Antes de ampliações grandes ou de assumir uma margem numérica sob a regra dos 25%, esclareça a aplicação ao site com a titular dos direitos.
