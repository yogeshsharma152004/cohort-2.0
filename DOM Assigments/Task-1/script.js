let h1 = document.querySelector("h1");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let sec = document.querySelector("section");
let counter = 0;

inc.addEventListener("click", function () {
  counter++;
  h1.innerHTML = counter;
});

dec.addEventListener("click", function () {
  counter--;
  h1.innerHTML = counter;
});
