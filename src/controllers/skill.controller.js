export class SkillController {
  constructor(lang) {
    this.lang = lang;
  }

  init() {
    this.setupSkillsAnimation();
  }

  setupSkillsAnimation() {
    const skillsAnimation = document.querySelectorAll('.skills-animation');
    if (skillsAnimation.length > 0 && typeof Waypoint !== 'undefined') {
      skillsAnimation.forEach((item) => {
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function(direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });
    }
  }

  updateLanguage(lang) {
    this.lang = lang;
  }
}
