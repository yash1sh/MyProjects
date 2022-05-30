const pic = document.querySelectorAll(".pic");

pic.forEach((picc) => {
  picc.addEventListener("click", () => {
    let v1 = document.querySelector(".active");
    v1.classList.remove("active");
    picc.classList.add("active");
  });
});
