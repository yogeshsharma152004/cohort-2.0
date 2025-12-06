let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (val) => {
  let div = document.createElement("div");

  let x = val.clientX;
  let y = val.clientY;
 

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  main.appendChild(div);

  let random = Math.random() * 30;

  div.style.borderRadius = "50%";
  div.style.padding = random + "px";
//   div.style.background = `rgb(${c1},${c2},${c3})`;

  div.style.border = `2px solid rgb(${c1},${c2},${c3})`;

  div.style.boxShadow = `0 0 10px  rgb(${c1},${c2},${c3})`;

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";

  cursor.style.left = val.x + "px";
  cursor.style.top = val.y + "px";
});
