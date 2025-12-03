let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = [
  "It always seems impossible until it’s done.",
  "Stay hungry, stay foolish.",
  "Every moment is a fresh beginning.",
  "I have nothing to lose but something to gain.",
  "Whatever you do, do it well",
  "Never let your emotions overpower your intelligence.",
  "There is no substitute for hard work.",
];

btn.addEventListener("click", function () {
  let h1 = document.createElement("h1");

  let quote = Math.floor(Math.random() * arr.length);

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let r = Math.random() * 360;
  let scle = Math.random() * 3;

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  h1.innerHTML = arr[quote];

  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = r + "deg";
  h1.style.position = "absolute";
  h1.style.color = `rgb(${c1},${c2},${c3})`;
  h1.style.scale = scle;

  main.appendChild(h1);
});
