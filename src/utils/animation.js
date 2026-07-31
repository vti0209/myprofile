/**
 * Core animations, scrolls, preloader and library triggers
 */

export function initFloatingIcons() {
  let iconsLayer = document.querySelector('.tech-icons-container');
  if (!iconsLayer) {
    iconsLayer = document.createElement('div');
    iconsLayer.className = 'tech-icons-container';
    document.body.appendChild(iconsLayer);
    
    const gridLayer = document.createElement('div');
    gridLayer.className = 'global-grid';
    document.body.appendChild(gridLayer);
  } else {
    iconsLayer.innerHTML = '';
  }

  const techIcons = [
    'bi-filetype-html', 'bi-filetype-css', 'bi-filetype-js', 
    'bi-filetype-php', 'bi-database-fill', 'bi-bootstrap-fill', 
    'bi-figma', 'bi-kanban', 'bi-cpu', 'bi-terminal', 'bi-braces'
  ];

  const neonClasses = ['neon-cyan', 'neon-purple', 'neon-pink', 'neon-blue'];
  const iconCount = 40;

  for (let i = 0; i < iconCount; i++) {
    const icon = document.createElement('i');
    const iconClass = techIcons[Math.floor(Math.random() * techIcons.length)];
    const neonClass = neonClasses[Math.floor(Math.random() * neonClasses.length)];
    
    icon.className = `bi ${iconClass} floating-icon ${neonClass}`;
    
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = 1.0 + Math.random() * 3.0; 
    const duration = 20 + Math.random() * 40;
    const delay = -Math.random() * 40;

    icon.style.top = `${top}vh`;
    icon.style.left = `${left}vw`;
    icon.style.fontSize = `${size}rem`;
    icon.style.animationDuration = `${duration}s`;
    icon.style.animationDelay = `${delay}s`;
    
    const blur = Math.random() > 0.7 ? Math.random() * 2 : 0;
    icon.style.filter += ` blur(${blur}px)`;
    
    iconsLayer.appendChild(icon);
  }
}

export function initHoverEffects() {
  const elementsToGlow = [
    '.btn-getstarted', '.btn-cv', '.btn-primary', '.btn-secondary', 
    '.service-item', '.portfolio-card', '.social-links a', 
    '.skill-tag', '.cert-item', '.navmenu a'
  ];
  
  elementsToGlow.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('it-glow');
    });
  });
}

export function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}

export function refreshAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

let activeTypedInstance = null;
export function initTyped(roleString) {
  if (activeTypedInstance) {
    activeTypedInstance.destroy();
  }
  const selectTyped = document.querySelector('.typed');
  if (selectTyped && typeof Typed !== 'undefined') {
    const items = roleString.split(',').map(s => s.trim());
    activeTypedInstance = new Typed('.typed', {
      strings: items,
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      smartBackspace: true,
      cursorChar: '|'
    });
  }
}

export function initGLightbox() {
  if (typeof GLightbox !== 'undefined') {
    return GLightbox({
      selector: '.glightbox'
    });
  }
  return null;
}

export function setupScrollEffects() {
  // Scrolled header trigger
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  // Scroll Top behavior
  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', () => {
    toggleScrolled();
    toggleScrollTop();
  });

  toggleScrolled();
  toggleScrollTop();
}

export function initPreloader() {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.remove();
  }
}
