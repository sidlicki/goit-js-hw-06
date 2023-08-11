const list = document.querySelector("#categories");
console.dir(`Number of categories: ${list.children.length}`);

[...list.children].forEach((item) => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.children.length}`);
});
