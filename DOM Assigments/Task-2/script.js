let box = document.getElementById("box");
let bt1 = document.getElementById("bt-1");
let bt2 = document.getElementById("bt-2");

bt1.addEventListener("click", function () {
  let random = Math.random();

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  if (random < 0.5) {
    let normal = `rgb(${c1},${c2},${c3})`
    box.style.background = normal ;
    bt2.innerHTML = normal;
  } else {
    let c4 = Math.floor(Math.random() * 256);
    let c5 = Math.floor(Math.random() * 256);
    let c6 = Math.floor(Math.random() * 256);


    let gradient = `linear-gradient(45deg,rgb(${c1},${c2},${c3}),rgb(${c4},${c5},${c6})`;
    box.style.background = gradient
    bt2.innerHTML = gradient;
  }
});
