export default function Card(cardElement) {


    const showAnswerButton = cardElement.querySelector(
      '[data-js="card__show-answer"]'
    );
  
    const textHide = 'hide answer';
    const textShow = 'show answer';
  
    showAnswerButton.addEventListener('click', () => {
      // ternary operator
      showAnswerButton.textContent =
        showAnswerButton.textContent.trim() === textShow ? textHide : textShow;
    });
   
  
  
  const cardBookmark = cardElement.querySelector('[data-js="card__bookmark"]');

  let cardIsBookmarked = false;

  cardBookmark.addEventListener('click', () => {
    if (!cardIsBookmarked) {
      cardBookmark.src = '../../images/bookmark-20x20px.svg';
      cardIsBookmarked = true;
    } 
    else {
      cardBookmark.src = '../../images/no-bookmark.svg';
      cardIsBookmarked = false;
    }
  });
}