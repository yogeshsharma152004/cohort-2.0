let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let div = document.createElement("div");

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let r = Math.random() * 360;

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let random = Math.random();

  div.style.height = "100px";
  div.style.width = "100px";
  div.style.borderRadius = "10px";
  div.style.position = "absolute";
  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate = r + "deg";

  main.appendChild(div);

  if (random < 0.5) {
    div.style.background = `rgb(${c1},${c2},${c3})`;
  } else {
    let c4 = Math.floor(Math.random() * 256);
    let c5 = Math.floor(Math.random() * 256);
    let c6 = Math.floor(Math.random() * 256);
    div.style.background = `linear-gradient(90deg,rgb(${c1},${c2},${c3}),rgb(${c4},${c5},${c6})`;
  }
});
