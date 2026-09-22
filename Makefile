.PHONY: install dev build start format format-check typecheck lint

# Dependências

# Instala versões exatas registradas no package-lock.json.
install:
	npm ci

# Desenvolvimento

# Inicia servidor de desenvolvimento com hot reload.
dev:
	npm run dev

# Qualidade de código

# Formata código e arquivos de configuração com Prettier.
format:
	./node_modules/.bin/prettier --write src README.md package.json postcss.config.mjs

# Verifica formatação sem alterar arquivos.
format-check:
	./node_modules/.bin/prettier --check src README.md package.json postcss.config.mjs

# Verifica tipos TypeScript sem gerar arquivos.
typecheck:
	./node_modules/.bin/tsc --noEmit

# Executa todas as verificações de qualidade disponíveis.
lint: format-check typecheck

# Produção

# Gera build otimizado de produção.
build:
	npm run build

# Gera build e inicia servidor de produção.
start: build
	npm run start
