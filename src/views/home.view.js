import { NavbarComponent } from '../components/navbar/navbar.component.js';
import { HeroComponent } from '../components/hero/hero.component.js';
import { AboutComponent } from '../components/about/about.component.js';
import { ServicesComponent } from '../components/services/services.component.js';
import { ProjectsComponent } from '../components/projects/projects.component.js';
import { ExperienceComponent } from '../components/experience/experience.component.js';
import { SkillsComponent } from '../components/skills/skills.component.js';
import { ContactComponent } from '../components/contact/contact.component.js';
import { FooterComponent } from '../components/footer/footer.component.js';

export class HomeView {
  static render(data, lang) {
    const { profile, projects, skills, experience, socials } = data;

    // 1. Render header/navbar
    const headerEl = document.getElementById('header');
    if (headerEl) {
      headerEl.innerHTML = NavbarComponent(profile, socials, lang);
    }

    // 2. Render Hero
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.innerHTML = HeroComponent(profile, socials, lang);
    }

    // 3. Render About
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.innerHTML = AboutComponent(profile, lang);
    }

    // 4. Render Services
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.innerHTML = ServicesComponent(profile, lang);
    }

    // 5. Render Portfolio/Projects
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.innerHTML = ProjectsComponent(projects, lang);
    }

    // 6. Render Resume (Experience + Skills columns)
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      const isVi = lang === 'vi';
      const resumeTitle = isVi ? "Hành trình" : "Journey";
      const resumeDesc = isVi 
        ? "Tóm tắt quá trình học tập và kỹ năng chuyên môn." 
        : "A summary of my educational background and technical skills.";

      resumeEl.innerHTML = `
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="subtitle" data-vi="Hành trình" data-en="Journey">${resumeTitle}</span>
          <p data-vi="Tóm tắt quá trình học tập và kỹ năng chuyên môn." data-en="A summary of my educational background and technical skills.">${resumeDesc}</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-5">
            <!-- Education/Experience Column -->
            <div id="education-col" class="col-lg-6"></div>
            <!-- Skills Column -->
            <div id="skills-col" class="col-lg-6"></div>
          </div>
        </div>
      `;

      const educationCol = document.getElementById('education-col');
      if (educationCol) {
        educationCol.innerHTML = ExperienceComponent(experience, lang);
      }

      const skillsCol = document.getElementById('skills-col');
      if (skillsCol) {
        skillsCol.innerHTML = SkillsComponent(skills, lang);
      }
    }

    // 7. Render Contact
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.innerHTML = ContactComponent(profile, lang);
    }

    // 8. Render Footer
    const footerEl = document.getElementById('footer');
    if (footerEl) {
      footerEl.innerHTML = FooterComponent(profile, socials, lang);
    }
  }
}
