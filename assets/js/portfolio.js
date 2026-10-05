/**
 * =========================================================================
 * BERTOLINI: CONSTRUINDO SEU SONHO
 * Portfólio, Carrossel e Efeitos Parallax: /assets/js/portfolio.js
 * =========================================================================
 */

// Dados descritivos dos 6 projetos principais
export const PORTFOLIO_DATA = [
  {
    id: 1,
    title: 'Casa Alphaville',
    slug: 'portfolio-item-1',
    category: 'Residencial Alto Padrão',
    year: '2025',
    area: '420 m²',
    finish: 'Concreto Protendido & Piscina Hijau',
    location: 'Ponta Grossa - PR',
    image: '/assets/images/obra1.jpg',
    description: 'Residência contemporânea com balanço estrutural em concreto de 6 metros, living integrado e prainha aquecida.'
  },
  {
    id: 2,
    title: 'Mansão das Palmeiras',
    slug: 'portfolio-item-2',
    category: 'Residencial Alto Padrão',
    year: '2024',
    area: '510 m²',
    finish: 'Brises em Cumaru & Mármore Calacatta',
    location: 'Ponta Grossa - PR',
    image: '/assets/images/obra2.jpg',
    description: 'Sobrado de luxo com 4 suítes, brises pivotantes de madeira nobre e automação de iluminação cênica.'
  },
  {
    id: 3,
    title: 'Residência Horizonte',
    slug: 'portfolio-item-3',
    category: 'Residencial Minimalista',
    year: '2024',
    area: '360 m²',
    finish: 'Pedra Moledo & Esquadrias Acústicas',
    location: 'Castro - PR',
    image: '/assets/images/obra3.jpg',
    description: 'Conexão plena com a vista da serra através de panos de vidro duplo e volumetria elegante.'
  },
  {
    id: 4,
    title: 'Villa San Giovanni',
    slug: 'portfolio-item-4',
    category: 'Residencial Neoclássico',
    year: '2023',
    area: '480 m²',
    finish: 'Pé-direito Duplo & Escada Esculpida',
    location: 'Ponta Grossa - PR',
    image: '/assets/images/obra4.jpg',
    description: 'Imponência neoclássica revisitada, pé-direito duplo de 6,5 metros e living para 4 ambientes.'
  },
  {
    id: 5,
    title: 'Casa Vista Verde',
    slug: 'portfolio-item-5',
    category: 'Eco-Eficiente / Alto Padrão',
    year: '2025',
    area: '390 m²',
    finish: 'Concreto Ripada & Painéis Fotovoltaicos',
    location: 'Ponta Grossa - PR',
    image: '/assets/images/obra5.jpg',
    description: 'Construção sustentável certificada, climatização passiva e reaproveitamento integral de águas pluviais.'
  },
  {
    id: 6,
    title: 'Mansão dos Lagos',
    slug: 'portfolio-item-6',
    category: 'Residencial Master',
    year: '2025',
    area: '580 m²',
    finish: 'Adega Subterrânea & Complexo Spa',
    location: 'Ponta Grossa - PR',
    image: '/assets/images/obra6.jpg',
    description: 'Complexo de lazer privativo com spa, sauna panorâmica, adega climatizada para 600 garrafas e parrilla gourmet.'
  }
];

// Inicialização do efeito Parallax suave via IntersectionObserver
export function initParallaxCards() {
  const cards = document.querySelectorAll('.portfolio-card-image');
  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', () => {
          const rect = entry.target.getBoundingClientRect();
          const speed = 0.08;
          const offset = (window.innerHeight - rect.top) * speed;
          entry.target.style.transform = `scale(1.04) translateY(${Math.min(offset, 15)}px)`;
        }, { passive: true });
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}
