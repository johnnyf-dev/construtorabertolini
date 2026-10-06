# Plano atualizado do projeto — Construtora Bertolini

## Objetivo

Manter o projeto estável e melhorar a captação sem mexer em tudo de uma vez. A ideia é seguir em etapas curtas, com backup e validação após cada mudança.

## Regra de ouro

- Fazer alterações pequenas e controladas
- Pedir confirmação antes de mudar uma parte crítica
- Fazer backup antes de qualquer refatoração grande
- Validar sempre com build/teste funcional
- Nunca expor segredos ou e-mails sensíveis no front

## Fase 0 — Estrutura e backup

- [ ] Conferir repo real e identificar arquivos que realmente existem
- [ ] Garantir backup local antes de qualquer edição grande
- [ ] Criar ou ajustar `src/constants/config.ts` e `apps-script/Code.gs` somente se estiverem ausentes
- [ ] Manter README/docs como referência e não como fonte de código obrigatório

## Fase 1 — Configuração central

- [ ] Ajustar `SITE_CONFIG` para WhatsApp, e-mail dono, e-mail do cliente, cidade e GA4
- [ ] Ajustar `appsScriptUrl` e `sheetsName`
- [ ] Manter `emailDono` e `emailCliente` em 2 opções claras e sem expor no front
- [ ] Validar `getWhatsAppLink()` e links do formulário

## Fase 2 — Integração com Google Apps Script

- [ ] Verificar `Code.gs` com `setup()`, `doGet()`, `doPost()`, `salvarLead()` e `testarEmail()`
- [ ] Garantir abas da planilha: LEADS, PERFIS, ANALYTICS, ACESSOS, ORIGENS, CLIENTES, RECEITA
- [ ] Confirmar que o e-mail do dono e e-mail do cliente funcionam no fluxo correto
- [ ] Testar a URL do Apps Script em navegador

## Fase 3 — Formulário e coleta de lead

- [ ] Validar campos mínimos do formulário
- [ ] Confirmar payload com dados de origem, cidade, nível e score
- [ ] Testar fallback de envio quando Apps Script não responde
- [ ] Verificar quão seguro e limpo está o payload enviado

## Fase 4 — Deploy e Cloudflare Pages

- [ ] Rodar build local
- [ ] Validar `dist` e assets
- [ ] Publicar no Cloudflare Pages via Git
- [ ] Testar página em produção com aba anônima
- [ ] Confirmar `manifest.json` e assets carregando com 200 OK

## Fase 5 — Validação final

- [ ] Formulário funcionando em produção
- [ ] E-mail chegando para o dono + cópia para cliente quando ativo
- [ ] GA4 recebendo eventos principais
- [ ] Planilha recebendo os dados corretamente
- [ ] Sem erros de console e sem rolagem lateral

## Ordem recomendada para o próximo ciclo

1. Ajustar `config.ts`
2. Ajustar `Code.gs`
3. Validar build local
4. Publicar no Cloudflare Pages
5. Testar lead real
6. Só então mexer em textos de marketing, carrosel, depoimentos e layout

## Observação

Este plano evita mudanças massivas. O objetivo é reduzir risco e manter o site vivo. Se você quiser, no próximo passo eu posso começar pela configuração principal (`config.ts`) e deixar o restante em standby até sua confirmação.
