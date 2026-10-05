/**
 * =========================================================================
 * BERTOLINI: CONSTRUINDO SEU SONHO
 * Arquivo de Configurações e Scripts Principais: /assets/js/main.js
 * Todos os comentários em português para fácil edição.
 * =========================================================================
 */

// ==========================================
// 1. CONFIGURAÇÕES GERAIS (EDITE AQUI)
// ==========================================
export const CONFIG = {
  // Número oficial de WhatsApp (formato internacional sem espaços ou hífens)
  whatsappNumber: '5542998455688',
  
  // Mensagem padrão ao clicar no botão flutuante de WhatsApp
  whatsappDefaultMsg: 'Olá Bertolini Construções! Gostaria de mais informações sobre projetos de alto padrão.',
  
  // Google Analytics 4 Measurement ID (Substitua pelo seu ID G-XXXXXXXXXX)
  gaMeasurementId: 'G-BERTOLINI2026',
  
  // Webhook do Google Sheets / Zapier / Make para recebimento de leads
  webhookUrl: 'https://webhook.site/bertolini-leads-placeholder'
};

// ==========================================
// 2. ALTERNADOR DAY / DARK MODE COM LOCALSTORAGE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtns = document.querySelectorAll('#themeToggleBtn, .theme-toggle');
  const savedTheme = localStorage.getItem('bertolini-theme') || 'light';

  // Aplica o tema salvo no carregamento
  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('bertolini-theme', newTheme);
    });
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark', 'theme-dark');
      document.body.classList.remove('theme-light');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark', 'theme-dark');
      document.body.classList.add('theme-light');
      document.documentElement.classList.remove('dark');
    }
  }

  // ==========================================
  // 3. CARREGAMENTO DE INDICADORES (STATS.JSON)
  // ==========================================
  fetchStatsData();
});

async function fetchStatsData() {
  try {
    const res = await fetch('/data/stats.json');
    if (!res.ok) return;
    const data = await res.json();
    
    // Atualiza contadores caso existam na página
    const elObras = document.getElementById('statObras');
    const elSatisfacao = document.getElementById('statSatisfacao');
    const elAnos = document.getElementById('statAnos');
    const elMetros = document.getElementById('statMetros');

    if (elObras && data.obras_entregues) elObras.textContent = `${data.obras_entregues}+`;
    if (elSatisfacao && data.satisfacao) elSatisfacao.textContent = `${data.satisfacao}%`;
    if (elAnos && data.anos_experiencia) elAnos.textContent = `${data.anos_experiencia}+`;
    if (elMetros && data.metros_quadrados) elMetros.textContent = `${data.metros_quadrados.toLocaleString('pt-BR')}m²`;
  } catch (err) {
    console.warn('Carregando indicadores padrão offline:', err);
  }
}
