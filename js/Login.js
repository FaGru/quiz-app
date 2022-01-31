export default function Login(loginElement) {
  const loginButton = loginElement.querySelector('[data-js="login__button"]');
  const form = loginElement.querySelector('[data-js="login__form"]');
  const submitButton = loginElement.querySelector(
    '[data-js="login__submit-button"]'
  );
  const nameInput = loginElement.querySelector('[data-js="login__name-input"]');
  const passwordInput = loginElement.querySelector(
    '[data-js="login__password-input"]'
  );
  const loggedinUser = loginElement.querySelector(
    '[data-js="login__user-name"]'
  );

  let isUserLoggedIn = false;

  loginButton.addEventListener('click', () => {
    if (!isUserLoggedIn) {
      alert('Welcome pls enter name and password');
      form.classList.remove('hidden');
      submitButton.addEventListener('click', () => {
        form.classList.add('hidden');
        if (nameInput.value == 'fabi' && passwordInput.value == 'pw') {
          alert('Hi Fabi, schön dich zu sehen');
          loginButton.textContent = 'Logout';
          loggedinUser.value = 'logged in: Fabian Gruber';
          isUserLoggedIn = true;
        } else {
          alert('User is unknown or wrong password');
        }
      });
    } else {
      alert('Bye bye');
      loginButton.textContent = 'Login';
      isUserLoggedIn = false;
      loggedinUser.value = '';
    }
  });
}
