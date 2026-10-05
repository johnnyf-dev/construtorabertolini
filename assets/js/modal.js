/**
 * =========================================================================
 * BERTOLINI: CONSTRUINDO SEU SONHO
 * Gerenciamento de Modais e Validações: /assets/js/modal.js
 * =========================================================================
 */

import { sendLeadToWebhook, trackWhatsAppClick } from './analytics.js';
import { CONFIG } from './main.js';

/**
 * Aplica máscara de telefone brasileiro: (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX
 */
export function formatBRPhone(value) {
  if (!value) return '';
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
  }
  return numbers.slice(0, 11).replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
}

/**
 * Inicializa os ouvintes de abertura e fechamento de modal
 */
export function initBudgetModal() {
  const modal = document.getElementById('budgetModal');
  const openBtns = document.querySelectorAll('.open-budget-modal, .btn-cta');
  const closeBtns = document.querySelectorAll('.close-modal, .modal-backdrop');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}
