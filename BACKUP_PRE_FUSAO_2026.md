# 🔐 BACKUP — Estado do projeto antes da fusão (2026-10-06)

## Por que este arquivo existe

Este arquivo registra o estado do seu projeto **ANTES** de fazer merge de todas as mudanças.
Se algo quebrar, você volta aqui e sabe exatamente o que estava funcionando.

---

## Estado atual do repositório

### ✅ O que está vivo e funcionando

- **Repositório:** `johnnyf-dev/construtorabertolini`
- **Branch:** `main`
- **Commit atual:** `593997d80c3f9722855cfb0aa84117534a65f606`
- **Site em produção:** ativo (antes de qualquer mudança neste backup)
- **Build:** `dist/index.html` (arquivo único, singlefile)
- **Hospedagem atual:** GitHub Pages ou Vercel (será migrado para Cloudflare Pages)

### 📁 Arquivos críticos que existem

| Arquivo | Status | Versão |
|---------|--------|--------|
| `index.html` | ✅ Existe | 416 KB (SEO + GA4 + manifest) |
| `manifest.json` | ✅ Existe | PWA básico |
| `robots.txt` | ✅ Existe | SEO configurado |
| `sitemap.xml` | ✅ Existe | Portfólio + páginas estáticas |
| `_headers` | ✅ Existe | Cache + security headers |
| `data/stats.json` | ✅ Existe | Números: 100 obras, 20 anos, etc |
| `src/` | ✅ Existe | React + Tailwind (não auditado neste backup) |
| `public/assets/images/` | ✅ Existe | Fotos obra1-6, padaria1-3 |
| `public/assets/logo/` | ✅ Existe | Logo + símbolo |

### ❌ Arquivos que NÃO existem (serão criados)

| Arquivo | Motivo |
|---------|--------|
| `src/constants/config.ts` | Será criado pronto neste ciclo |
| `apps-script/Code.gs` | Será criado pronto neste ciclo |
| Tutoriais MD | Serão criados neste ciclo |

---

## Checklist — O que fazer se quebrar

Se algo der errado após as mudanças, use esta ordem:

1. **Abrir histórico do Git**
   ```bash
   git log --oneline
   git show 593997d80c3f9722855cfb0aa84117534a65f606
   ```
   Ver exatamente o que mudou desde este ponto.

2. **Reverter um arquivo específico**
   ```bash
   git checkout 593997d80c3f9722855cfb0aa84117534a65f606 -- src/constants/config.ts
   ```

3. **Reverter todo o commit**
   ```bash
   git revert 593997d80c3f9722855cfb0aa84117534a65f606
   ```

4. **Se o build quebrou**
   ```bash
   npm install
   npm run build 2>&1 | head -50
   # Vê os primeiros 50 erros
   ```

5. **Contato de emergência (você)**
   - Se o site caiu: olhe F12 Console (vermelho = erro)
   - Se Apps Script não responde: confira a URL em `config.ts`
   - Se e-mail não chegou: rode `testarEmail()` no Google Apps Script

---

## Dados importantes que você tem guardado

### 📊 Planilha Google
- **Nome:** CRM Bertolini (será criada por `setup()` no Code.gs)
- **Abas:** LEADS, PERFIS, ANALYTICS, ACESSOS, ORIGENS, CLIENTES, RECEITA, INDICACOES
- **Chave:** privada (nunca no repositório)

### 📧 E-mails críticos
- **Seu e-mail:** `johnnyf.dev@gmail.com` (em `config.ts` + `Code.gs`)
- **E-mail do cliente:** deixado em branco (pode ativar em `config.ts`)
- **Telefone:** `5542998455688` (só números, em `config.ts`)

### 🔑 Chaves não-expostas (estão NO Google, não no código)
- GA4 ID: `G-BERTOLINI2026` (está em `index.html` + `config.ts`)
- Apps Script URL: será gerada nova quando reimplantar (não está em versão produção ainda)
- Webhook antigo: `https://webhook.site/...` (fallback legado, não crítico)

---

## Como usar este backup

### Cenário 1: Tudo funcionou ✅
- Apenas documente qual foi a última mudança bem-sucedida
- Delete este arquivo na próxima semana (não precisa manter)

### Cenário 2: Algo quebrou 🚨
- Volte aqui
- Rode um dos comandos de checklist acima
- Veja o que mudou no commit log
- Reverta se necessário

### Cenário 3: Quer fazer outra fusão no futuro 📋
- Crie outro `BACKUP_PRE_FUSAO_YYYY-MM-DD.md` antes de mexer
- Mantenha este como referência
- Padrão: 1 backup por ciclo grande de mudanças

---

## Registros de mudança após este ponto

### Mudança #1: Configuração central + Apps Script
- **Data:** 2026-10-06
- **O que mudou:** `src/constants/config.ts` + `apps-script/Code.gs`
- **Por que:** Fusão de tutoriais e padronização
- **Teste:** build local + teste lead
- **Status:** ⏳ (em progresso)

---

## Próximo passo

Depois de validar tudo (BLOCO 1, 2, 3 completados):
- [ ] Faça um novo commit com mensagem clara
- [ ] Crie uma tag: `v1.0-config-merged` (para referência futura)
- [ ] Delete este arquivo (ou arquive como referência histórica)

---

**Criado por:** Copilot  
**Data:** 2026-10-06  
**Commit de referência:** 593997d80c3f9722855cfb0aa84117534a65f606  
**Leia este arquivo antes de fazer rollback**
