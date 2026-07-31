import { MainLayout } from './layouts/main-layout.js';
import { DataService } from './services/data.service.js';
import { HomeView } from './views/home.view.js';
import { ProjectController } from './controllers/project.controller.js';
import { SkillController } from './controllers/skill.controller.js';
import { ContactController } from './controllers/contact.controller.js';
import { StorageService } from './services/storage.service.js';
import { DEFAULTS, STORAGE_KEYS } from './utils/constants.js';
import { initAOS, initTyped, initGLightbox, initHoverEffects, setupScrollEffects, initPreloader } from './utils/animation.js';

function scrollToSection(hash) {
  if (!hash) return;

  const targetId = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(targetId);
  if (!target) return;

  const header = document.getElementById('header');
  const offset = header ? header.offsetHeight + 20 : 80;

  const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });

  document.querySelectorAll('section').forEach((section) => {
    section.classList.toggle('active-section', section.id === targetId);
  });

  document.querySelectorAll('.nav-item, .navmenu a').forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === hash);
  });
}

export function bootstrapApp(lang = StorageService.get(STORAGE_KEYS.LANG, DEFAULTS.LANG)) {
  document.body.innerHTML = MainLayout.getSkeletonHTML();

  const profile = DataService.getProfile();
  const projects = DataService.getProjects();
  const skills = DataService.getSkills();
  const experience = DataService.getExperience();
  const socials = DataService.getSocials();

  HomeView.render({ profile, projects, skills, experience, socials }, lang);

  initPreloader();
  initHoverEffects();
  initAOS();
  initTyped(profile.role);
  initGLightbox();
  setupScrollEffects();

  const projectController = new ProjectController(lang);
  projectController.init();

  const skillController = new SkillController(lang);
  skillController.init();

  const contactController = new ContactController(lang);
  contactController.init();

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = lang === 'vi' ? 'en' : 'vi';
      StorageService.set(STORAGE_KEYS.LANG, nextLang);
      bootstrapApp(nextLang);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      event.preventDefault();
      history.replaceState(null, '', hash);
      scrollToSection(hash);
    });
  });

  window.addEventListener('hashchange', () => {
    scrollToSection(window.location.hash);
  });

  if (window.location.hash) {
    setTimeout(() => scrollToSection(window.location.hash), 120);
  } else {
    setTimeout(() => scrollToSection('#hero'), 120);
  }
}

bootstrapApp();
