/**
 * Tech Effects for Craftivo Portfolio
 * Handles floating icons and dynamic effects globally.
 */

document.addEventListener('DOMContentLoaded', () => {
    initFloatingIcons();
    initHoverEffects();
});

/**
 * Generates floating tech icons in the background across the entire page
 */
function initFloatingIcons() {
    let iconsLayer = document.querySelector('.tech-icons-container');
    if (!iconsLayer) {
        iconsLayer = document.createElement('div');
        iconsLayer.className = 'tech-icons-container';
        document.body.appendChild(iconsLayer);
        
        const gridLayer = document.createElement('div');
        gridLayer.className = 'global-grid';
        document.body.appendChild(gridLayer);
    }

    const techIcons = [
        'bi-filetype-html', 'bi-filetype-css', 'bi-filetype-js', 
        'bi-filetype-php', 'bi-database-fill', 'bi-bootstrap-fill', 
        'bi-figma', 'bi-kanban', 'bi-cpu', 'bi-terminal', 'bi-braces'
    ];

    const neonClasses = ['neon-cyan', 'neon-purple', 'neon-pink', 'neon-blue'];

    const iconCount = 40; // More icons for better richness

    for (let i = 0; i < iconCount; i++) {
        const icon = document.createElement('i');
        const iconClass = techIcons[Math.floor(Math.random() * techIcons.length)];
        const neonClass = neonClasses[Math.floor(Math.random() * neonClasses.length)];
        
        icon.className = `bi ${iconClass} floating-icon ${neonClass}`;
        
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 1.0 + Math.random() * 3.0; 
        const duration = 20 + Math.random() * 40; // Slower, more elegant movement
        const delay = -Math.random() * 40;

        icon.style.top = `${top}vh`;
        icon.style.left = `${left}vw`;
        icon.style.fontSize = `${size}rem`;
        icon.style.animationDuration = `${duration}s`;
        icon.style.animationDelay = `${delay}s`;
        
        // Vary the blur slightly for depth perception
        const blur = Math.random() > 0.7 ? Math.random() * 2 : 0;
        icon.style.filter += ` blur(${blur}px)`;
        
        iconsLayer.appendChild(icon);
    }
}

/**
 * Adds IT glow classes and enhanced hover interactions
 */
function initHoverEffects() {
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
