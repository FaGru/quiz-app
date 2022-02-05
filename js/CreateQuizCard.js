export default function CreateQuizCard() {
  const cardContainer = document.querySelector('[data-js="Card_Container"]');
  const form = document.querySelector('[data-js="create__form"]');

  let cards = [];

  form.addEventListener('submit', event => {
    event.preventDefault();
    const questionElement = document.querySelector(
      '[data-js="create__add-question"]'
    );
    const answerElement = document.querySelector(
      '[data-js="create__add-anwser"]'
    );
    const tagsElement = document.querySelector('[data-js="create__add-tags"]');

    const newCard = {
      question: questionElement.value,
      answer: answerElement.value,
      tags: tagsElement.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length),
    };

    cards = [newCard, ...cards];
    renderCards();
    form.reset();
    questionElement.focus();
  });
  function renderCards() {
    cardContainer.innerHTML = '';

    cards.forEach(card => {
      const finishedCard = document.createElement('article');
      finishedCard.className = 'card';
      finishedCard.innerHTML = `
      <h2>Question</h2>
          <button class="card__bookmark">
            <img
              data-js="card__bookmark"
              src="../../images/no-bookmark.svg"
              alt="bookmark button"
              height="40"
              width="40"
            />
          </button>
          <p>
           ${card.question}
          </p>
          <details>
            <summary data-js="card__show-answer" class="card__show-answer">
              show answer
            </summary>
            <p>${card.answer}</p>
          </details>
          <ul role="list" class="card__tag-list no-list-style classic-wrap">
            ${card.tags
              .map(tag => `<li class="card__tag">${tag}</li>`)
              .join('')}
           
          </ul>`;
      cardContainer.append(finishedCard);
    });
  }
}
