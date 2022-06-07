//1
const title = document.createElement("h2");
document.body.append(title);
const mainDiv = document.querySelector("#main");

let addTitle = (newTitle) => {
  title.textContent = newTitle;
  mainDiv.before(title);
};

addTitle("Работа с DOM");

//2
const link = document.createElement("a");
let addLink = (newLink, newName) => {
  link.href = newLink;
  link.textContent = newName;
  mainDiv.append(link);
};
addLink("https://doka.guide/js/dom/", "DOM");

//3
let changeColor = (newColor) => {
  document.body.style.backgroundColor = newColor;
};

changeColor("lightblue");

//4
let addLi = (text) => {
  const newLi = document.createElement("li");
  const listUl = document.querySelector("#list");
  listUl.append(newLi);
  newLi.textContent = text;
};

addLi("JavaScript");

//5
let removeBlock = () => {
  const copyright = document.getElementById("copyright");
  copyright.remove();
};

removeBlock();
