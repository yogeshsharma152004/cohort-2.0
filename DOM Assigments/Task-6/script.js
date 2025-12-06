let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");
let para = document.querySelector(".para");
var grow = 0;

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";

  let time = 50 + Math.floor(Math.random() * 50);

  var int = setInterval(() => {
    grow++;

    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, time);

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;

    para.innerHTML = `Downloaded in <span> ${time / 10} </span> seconds`;
  }, time * 100);
});
