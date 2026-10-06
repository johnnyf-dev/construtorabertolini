# Tutorial mínimo: publicar no Cloudflare Pages

## Objetivo

Publicar o site em produção usando Cloudflare Pages, com build simples e sem depender de infraestrutura complexa.

## Requisitos

- repositório no GitHub
- Node.js instalado
- acesso ao Cloudflare
- projeto com arquivo `package.json`

## Passo 1 — validar o build local

No terminal:

```bash
npm install
npm run build
```

Se o comando terminar sem erro, o projeto está pronto para deploy.

## Passo 2 — verificar a pasta de saída

O build precisa criar a pasta:

```bash
dist/
```

A configuração de deploy deve apontar para:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Passo 3 — conectar o GitHub

1. Acesse o Cloudflare
2. Vá em **Workers & Pages**
3. Clique em **Create application**
4. Selecione **Pages**
5. Conecte o repositório `construtorabertolini`
6. Escolha a branch principal
7. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`

## Passo 4 — publicar

Depois de salvar a configuração:

- Cloudflare inicia o deploy
- aguarde a finalização
- abra a URL gerada
- teste em aba anônima

## Checklist de validação

- [ ] site abre sem tela branca
- [ ] manifest carrega
- [ ] /assets e /data não dão 404
- [ ] formulário abre corretamente
- [ ] WhatsApp funciona
- [ ] build passou sem erro

## Erros comuns

### 1) Build falha
```bash
npm install
npm run build
```

### 2) Página branca
- conferir console do navegador
- verificar se assets foram gerados
- confirmar se `dist/` existe

### 3) Formulário não envia
- verificar `appsScriptUrl` em `config.ts`
- testar a URL no navegador
- confirmar que o Apps Script está implantado

## Próximo passo

Depois de publicar, siga com o teste de lead ponta a ponta.
