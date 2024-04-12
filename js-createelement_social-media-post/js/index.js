console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
const text = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

article.classList.add("post");
text.classList.add("post__content");
text.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
footer.classList.add("post__footer");

span.classList.add("post__username");
span.textContent = "@username";

button.classList.add("post__button");
button.setAttribute("type", "button");
button.textContent = "♥ Like";

document.body.append(article);
article.append(text);
article.append(footer);
footer.append(span);
footer.append(button);

button.addEventListener("click", handleLikeButtonClick);
