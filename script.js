// External JS for Portfolio site
// - Avoids inline handlers
// - Uses DOMContentLoaded to safely bind events after DOM is ready
// - Adds basic accessibility for keyboard users on project cards

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll to Projects section
  const viewProjectsBtn = document.getElementById('view-projects');
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', () => {
      const projects = document.querySelector('#projects');
      if (projects) {
        projects.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Project cards: open URL in new tab (from data-url)
  document.querySelectorAll('.project-card').forEach((card) => {
    const url = card.getAttribute('data-url');
    if (!url) return;

    // Mouse click
    card.addEventListener('click', () => {
      window.open(url, '_blank');
    });

    // Accessibility: keyboard support
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `Open ${url}`);

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(url, '_blank');
      }
    });
  });
});
