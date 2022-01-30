export default function Navigation(navElement) {
  const buttonHome = navElement.querySelector('[data-js="nav__home-button"]');
  const buttonBookmark = navElement.querySelector(
    '[data-js="nav__bookmark-button"]'
  );
  const buttonCreate = navElement.querySelector(
    '[data-js="nav__create-button"]'
  );
  const buttonProfil = navElement.querySelector(
    '[data-js="nav__profil-button"]'
  );
  const pageHome = document.querySelector('[data-js="home"]');
  const pageBookmark = document.querySelector('[data-js="bookmark"]');
  const pageCreate = document.querySelector('[data-js="create"]');
  const pageProfil = document.querySelector('[data-js="profil"]');

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfil.classList.add('hidden');
    buttonHome.classList.add('nav__button--active');
    buttonBookmark.classList.remove('nav__button--active');
    buttonCreate.classList.remove('nav__button--active');
    buttonProfil.classList.remove('nav__button--active');
  });

  buttonBookmark.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmark.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfil.classList.add('hidden');
    buttonHome.classList.remove('nav__button--active');
    buttonBookmark.classList.add('nav__button--active');
    buttonCreate.classList.remove('nav__button--active');
    buttonProfil.classList.remove('nav__button--active');
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfil.classList.add('hidden');
    buttonHome.classList.remove('nav__button--active');
    buttonBookmark.classList.remove('nav__button--active');
    buttonCreate.classList.add('nav__button--active');
    buttonProfil.classList.remove('nav__button--active');
  });

  buttonProfil.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfil.classList.remove('hidden');
    buttonHome.classList.remove('nav__button--active');
    buttonBookmark.classList.remove('nav__button--active');
    buttonCreate.classList.remove('nav__button--active');
    buttonProfil.classList.add('nav__button--active');
  });
}
