// show-hide card answer
const showAnswerButton = document.querySelector(
  '[data-js="card__show-answer"]'
);

const textHide = 'hide answer';
const textShow = 'show answer';

showAnswerButton?.addEventListener('click', () => {
  // if (showAnswerButton.textContent === textShow) {
  //   showAnswerButton.textContent = textHide;
  // } else {
  //   showAnswerButton.textContent = textShow;
  // }

  // ternary operator
  showAnswerButton.textContent =
    //                           condition      ? true     : false
    showAnswerButton.textContent === textShow ? textHide : textShow;
});

// bookmark
const cardBookmark = document.querySelector('[data-js="card__bookmark"]');

let cardIsBookmarked = false;

cardBookmark?.addEventListener('click', () => {
  // if (!cardIsBookmarked) {
  //   cardBookmark.src = '../../images/bookmark 20x20px.svg';
  //   cardIsBookmarked = true;
  // } else {
  //   cardBookmark.src = '../../images/no-bookmark.svg';
  //   cardIsBookmarked = false;
  // }

  cardBookmark.src = cardIsBookmarked
    ? '../../images/no-bookmark.svg'
    : '../../images/bookmark 20x20px.svg';
  cardIsBookmarked = !cardIsBookmarked;
});

//counter Add Question

const addQuestionInput = document.querySelector(
  '[data-js="create__add-question"]'
);
const addQuestionOutput = document.querySelector(
  '[data-js="create__question-output"]'
);
const counter = 200;

addQuestionInput.addEventListener('input', () => {
  const length = addQuestionInput.value.length;
  addQuestionOutput.value = counter - length;
});
