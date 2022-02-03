export default function Navigation(navElement) {
  const allButtons = navElement.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allButtons.forEach(button => {
        button.classList.remove('nav__button--active');
      });
      allPages.forEach(page => {
        page.classList.add('hidden');
      });
      const currentButton = event.currentTarget.getAttribute('data-nav');
      console.log(currentButton);
      const currentPage = document.querySelector(
        `[data-page="${currentButton}"]`
      );

      const currentButtonActive = document.querySelector(
        `[data-nav="${currentButton}"]`
      );
      currentPage.classList.remove('hidden');
      currentButtonActive.classList.add('nav__button--active');
    });
  });
}
