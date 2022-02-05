import CreateQuizCard from './js/CreateQuizCard.js';
import Navigation from './js/Navigation.js';
import Card from './js/Card.js';
import Form from './js/Form.js';
import Login from './js/Login.js';
console.clear();

// const allCreateCardElements = document.querySelectorAll(
//   '[data-js="Card_Container"]'
// );

// allCreateCardElements.forEach(createCardElement => {
//   CreateCard(createCardElement);
// });
const allCreateQuizCardElements = document.querySelectorAll(
  '[data-js="Card_Container"]'
);

allCreateQuizCardElements.forEach(() => {
  CreateQuizCard();
});

const allNavElements = document.querySelectorAll('[data-js="nav"]');

allNavElements.forEach(navElement => {
  Navigation(navElement);
});

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

const allFormElements = document.querySelectorAll('[data-js="create__form"]');

allFormElements.forEach(formElement => {
  Form(formElement);
});

const allLoginElements = document.querySelectorAll('[data-js="login"]');

allLoginElements.forEach(loginElement => {
  Login(loginElement);
});

// const allCreateCardElements = document.querySelectorAll('[data-js="create-cards"]');

// allCreateCardElements.forEach(createCardElement => {
//   CreateCard(createCardElement);
// });
