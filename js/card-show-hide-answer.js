export function showHideAnswer() {
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
}
