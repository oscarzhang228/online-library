const newBookButton = document.getElementById("newB");
const isRead = document.getElementById("formRead");
const cancelButton = document.getElementById("cancel");
const addCard = document.getElementById("add");
const grid = document.querySelector(".bookCardGrid");

newBookButton.addEventListener("click", () => {
  document.querySelector(".addBookForm").classList.toggle("display");
});

isRead.addEventListener("click", () => {
  if (isRead.classList.contains("notRead")) {
    isRead.classList.remove("notRead");
    isRead.classList.add("read");
  } else {
    isRead.classList.remove("read");
    isRead.classList.add("notRead");
  }
});

cancelButton.addEventListener("click", () => {
  document.querySelector(".addBookForm").classList.toggle("display");
});

addCard.addEventListener("click", (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const cardTitle = document.createElement("h1");
  cardTitle.innerHTML = title;

  const cardAuthor = document.createElement("h1");
  cardAuthor.innerHTML = author;

  const cardPages = document.createElement("h1");
  cardPages.innerHTML = pages;

  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(cardTitle);
  grid.appendChild(card);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);

  const readButton = document.createElement("button");
  if (isRead.classList.contains("notRead")) readButton.classList.add("notRead");
  else readButton.classList.add("read");
  readButton.addEventListener("click", () => {
    if (readButton.classList.contains("notRead")) {
      readButton.classList.remove("notRead");
      readButton.classList.add("read");
    } else {
      readButton.classList.remove("read");
      readButton.classList.add("notRead");
    }
  });
  card.appendChild(readButton);

  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    grid.removeChild(card);
  });
  card.appendChild(deleteButton);

  document.querySelector(".addBookForm").classList.toggle("display");
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  if (isRead.classList.contains("read")) {
    isRead.classList.remove("read");
    isRead.classList.add("notRead");
  }
  e.preventDefault();
});
