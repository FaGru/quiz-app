import Navigation from './js/Navigation.js';
import Card from './js/Card.js';
import Form from './js/Form.js';
import Login from './js/Login.js';
import { createCard } from './js/createCard.js';

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

createCard();
// const allCreateCardElements = document.querySelectorAll('[data-js="create-cards"]');

// allCreateCardElements.forEach(createCardElement => {
//   CreateCard(createCardElement);
// });
