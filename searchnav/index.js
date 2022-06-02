const search = document.querySelector(".search");
const button = document.getElementById("btn");
const input = document.querySelector(".input");
button.addEventListener("click", () => {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
  } else search.classList.add("active");
  //Or
  //search.classList.toggle("active");
  input.focus();
});
