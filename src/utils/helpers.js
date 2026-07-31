/**
 * Shared helper functions
 */

export function sanitizeHTML(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

export function handleHashChange(sections, switchSectionCallback) {
  window.addEventListener('hashchange', () => {
    switchSectionCallback(window.location.hash);
  });
  
  window.addEventListener('load', () => {
    switchSectionCallback(window.location.hash);
  });
}
