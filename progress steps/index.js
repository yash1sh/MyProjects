let value = 1;
let lineWidth = 0;
const pro = document.getElementById("progress");
const next = document.getElementById("next");
const pre = document.getElementById("pre");
const circles = document.querySelectorAll(".circle");

function clickn() {
  value++;
  pro.style.width = ((value - 1) / (circles.length - 1)) * 100 + "%";
  circles.forEach((circle, ind) => {
    if (ind == value - 1) {
      circle.classList.add("active");
    }
  });
  if (value === 4) {
    next.disabled = true;
  } else if (value === 1) pre.disabled = true;
  else {
    next.disabled = false;
    pre.disabled = false;
  }
}

function clickp() {
  value--;
  pro.style.width = ((value - 1) / (circles.length - 1)) * 100 + "%";
  circles.forEach((circle, ind) => {
    if (ind == value) {
      circle.classList.remove("active");
    }
  });
  if (value === 4) {
    next.disabled = true;
  } else if (value === 1) pre.disabled = true;
  else {
    next.disabled = false;
    pre.disabled = false;
  }
}
