import { renderRichDetails, renderDefaultDetails } from '../components/common/modal.component.js';

export class ProjectView {
  static renderModalContent(modalEl, project, lang) {
    if (!modalEl) return;
    
    const modalBody = modalEl.querySelector('.modal-body');
    const modalHeader = modalEl.querySelector('.modal-header');
    const modalContent = modalEl.querySelector('.modal-content');
    const modalDialog = modalEl.querySelector('.modal-dialog');
    
    if (!project) {
      modalBody.innerHTML = `<p class="text-danger text-center">Project details not found.</p>`;
      return;
    }

    if (project.hasRichDetails) {
      // Rich Content Mode
      modalBody.innerHTML = renderRichDetails(project, lang);
      modalHeader.classList.add('d-none');
      modalContent.classList.add('p-0');
      modalDialog.classList.remove('modal-lg');
      modalDialog.classList.add('modal-xl');
    } else {
      // Default Mode
      modalHeader.classList.remove('d-none');
      modalContent.classList.remove('p-0');
      modalDialog.classList.remove('modal-xl');
      modalDialog.classList.add('modal-lg');
      modalBody.innerHTML = renderDefaultDetails(project, lang);
    }
  }
}
