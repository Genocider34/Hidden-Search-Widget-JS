const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  input.value = "";
  search.classList.toggle("active");
  input.focus(); // when click, it automatically selects the textbox search
});
