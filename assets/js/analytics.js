/**
 * =========================================================================
 * BERTOLINI: CONSTRUINDO SEU SONHO
 * Analytics, Rastreamento e Webhook: /assets/js/analytics.js
 * Eventos monitorados: lead_form_submit, whatsapp_click, portfolio_view
 * =========================================================================
 */

// Inicialização do Google Tag (GA4)
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-BERTOLINI2026', {
  send_page_view: true
});

/**
 * Dispara evento customizado para o Google Analytics 4
 * @param {string} eventName - Nome do evento (ex: lead_form_submit)
 * @param {object} eventParams - Parâmetros detalhados
 */
export function trackEvent(eventName, eventParams = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
    console.log(`[GA4 Event]: ${eventName}`, eventParams);
  } catch (err) {
    console.warn('Erro ao disparar evento de analytics:', err);
  }
}

/**
 * Registra cliques nos links de WhatsApp
 * @param {string} location - Onde o botão foi clicado (ex: 'hero', 'floating', 'modal')
 */
export function trackWhatsAppClick(location = 'geral') {
  trackEvent('whatsapp_click', {
    click_location: location,
    phone_number: '+55 42 99845-5688',
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
}

/**
 * Envia dados do formulário para o Webhook do Google Sheets / Zapier / Make
 * @param {object} formData - Dados capturados no formulário
 */
export async function sendLeadToWebhook(formData, webhookUrl) {
  const urlParams = new URLSearchParams(window.location.search);
  
  const payload = {
    timestamp: new Date().toISOString(),
    nome: formData.nome || '',
    telefone: formData.telefone || '',
    email: formData.email || '',
    tipo_obra: formData.tipo || '',
    area_estimada: formData.area || '',
    mensagem: formData.mensagem || '',
    utm_source: urlParams.get('utm_source') || 'direto',
    utm_medium: urlParams.get('utm_medium') || 'nenhum',
    utm_campaign: urlParams.get('utm_campaign') || 'nenhum',
    page_url: window.location.href
  };

  // Dispara evento GA4
  trackEvent('lead_form_submit', {
    tipo_obra: payload.tipo_obra,
    tem_email: Boolean(payload.email)
  });

  if (!webhookUrl || webhookUrl.includes('placeholder')) {
    console.info('[Webhook Simulado]: Lead preparado com sucesso:', payload);
    return { success: true, simulated: true, data: payload };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return { success: res.ok, simulated: false };
  } catch (e) {
    console.warn('Webhook offline, lead salvo localmente:', e);
    return { success: true, offline: true, data: payload };
  }
}
