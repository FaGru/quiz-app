export function bookmarks() {
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
}
