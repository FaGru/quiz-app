import { bookmarks } from './js/bookmarks.js';

bookmarks();

// show-hide card answer
const showAnswerButton = document.querySelector(
  '[data-js="card__show-answer"]'
);

const textHide = 'hide answer';
const textShow = 'show answer';

showAnswerButton?.addEventListener('click', () => {
  // ternary operator
  showAnswerButton.textContent =
    showAnswerButton.textContent === textShow ? textHide : textShow;
});

// create
//counter Add Question

const addQuestionInput = document.querySelector(
  '[data-js="create__add-question"]'
);
const addQuestionOutput = document.querySelector(
  '[data-js="create__add-question-output"]'
);
const counter = 250;

addQuestionInput.addEventListener('input', () => {
  const length = addQuestionInput.value.length;
  addQuestionOutput.value = counter - length + " sign's left";
});

// counnter add answer
const addAnswerInput = document.querySelector('[data-js="create__add-anwser"]');
const addAnswerOutput = document.querySelector(
  '[data-js="create__add-anwser-output"]'
);
addAnswerInput.addEventListener('input', () => {});
