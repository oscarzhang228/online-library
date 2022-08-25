let myLib = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

const newBookButton = document.getElementById("newB");
const isRead = document.getElementById("formRead");
const cancelButton = document.getElementById("cancel");

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
