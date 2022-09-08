const questionForm = document.querySelector('[data-js="question-form"]');
const main = document.querySelector('[data-js="main"]');
questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Hallo");
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const ulCardList = document.createElement("ul");
  ulCardList.classList.add("card-list");
  main.append(ulCardList);

  const li = document.createElement("li");
  li.classList.add("card-list__item");
  ulCardList.append(li);

  const article = document.createElement("article");
  article.classList.add("card");
  li.append(article);

  const h2 = document.createElement("h2");
  h2.classList.add("card__question");
  h2.textContent = data.question;
  article.append(h2);

  const questionButton = document.createElement("button");
  questionButton.setAttribute("class", "card__button-answer");
  questionButton.setAttribute("type", "button");
  questionButton.setAttribute("data-js", "answerButton");
  questionButton.textContent = "Show answer";
  article.append(questionButton);

  const p = document.createElement("p");
  p.setAttribute("class", "card__answer card__answer--active");
  p.setAttribute("data-js", "answer");
  p.textContent = data.answer;
  article.append(p);

  ul = document.createElement("ul");
  ul.classList.add("card__tag-list");
  article.append(ul);

  liTag = document.createElement("li");
  liTag.classList.add("card__tag-list-item");
  liTag.textContent = `#${data.tag}`;
  ul.append(liTag);

  const div = document.createElement("div");
  div.setAttribute("class", "card__button-bookmark");
  article.append(div);

  const bookmarkButton = document.createElement("button");
  bookmarkButton.setAttribute("class", "bookmark");
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.setAttribute("type", "button");
  bookmarkButton.setAttribute("data-js", "bookmark-button");
  div.append(bookmarkButton);

  const svg = document.createElement("svg");
  svg.setAttribute("class", "bookmark__icon");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("height", "24px");
  svg.setAttribute("viewbox", "0 0 24 24");
  svg.setAttribute("width", "24px");
  svg.setAttribute("fill", "#000000");
  bookmarkButton.append(svg);

  const path1 = document.createElement("path");
  path1.setAttribute("d", "M0 0h24v24H0V0z");
  path1.setAttribute("fill", "none");
  svg.append(path1);

  const path2 = document.createElement("path");
  path2.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  svg.append(path2);
});
