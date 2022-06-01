const con = document.querySelector(".container");
// function close() {}
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  con.classList.add("active");
  document.querySelector("nav").style.display = "block";
});

close.addEventListener("click", () => {
  con.classList.remove("active");
  document.querySelector("nav").style.display = "none";
});
