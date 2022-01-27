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

// bookmark
const cardBookmark = document.querySelector('[data-js="card__bookmark"]');

let cardIsBookmarked = false;

cardBookmark?.addEventListener('click', () => {
  // if (!cardIsBookmarked) {
  //   cardBookmark.src = '../../images/bookmark-20x20px.svg';
  //   cardIsBookmarked = true;
  // } else {
  //   cardBookmark.src = '../../images/no-bookmark.svg';
  //   cardIsBookmarked = false;
  // }

  cardBookmark.src = cardIsBookmarked
    ? '../../images/no-bookmark.svg'
    : '../../images/bookmark-20x20px.svg';
  cardIsBookmarked = !cardIsBookmarked;
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
const addAnswerOutput = document.querySelector('[data-js="create__add-anwser-output"]')
addAnswerInput.addEventListener('input', () => {

})