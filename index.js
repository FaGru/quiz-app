import Card from './js/Card.js';
import Form from './js/Form.js';



const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement)
});




const allFormElements = document.querySelectorAll('[data-js="create__form"]');

allFormElements.forEach((formElement) =>{
  Form(formElement)
});