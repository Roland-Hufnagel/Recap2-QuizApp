// Aufgabe 1.1: Bookmark toggle
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});

// Aufgabe 1.2: Show/Hide Answer toggle
const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", (event) => {
  answer.classList.toggle("card__answer--active");
  answerButton.textContent === 'Show answer' ? answerButton.textContent = 'Hide answer' : answerButton.textContent = 'Show answer';
});

// Aufgabe 2: 