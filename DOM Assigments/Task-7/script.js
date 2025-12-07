let img = document.querySelector("img");
let love = document.querySelector("#love");
let loves = document.getElementById("loves");
let saved = document.getElementById("saved");

let isLiked = false;

img.addEventListener("dblclick", () => {
  love.style.opacity = 1;
  love.style.transform = "translate(-50% , -50%) scale(1) rotate(0deg)";

  loves.classList.remove("ri-heart-3-line");
  loves.classList.add("ri-heart-3-fill");

  setTimeout(() => {
    love.style.transform = "translate(-50% , -300%) scale(1) rotate(60deg)";
  }, 800);

  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);

  setTimeout(() => {
    love.style.transform = "translate(-50% , -50%) scale(0) rotate(-60deg)";
  }, 1200);
});

loves.addEventListener("click", () => {
  love.style.opacity = 1;
  love.style.transform = "translate(-50% , -50%) scale(1) rotate(0deg)";

  loves.classList.toggle("ri-heart-3-fill");
  loves.classList.toggle("ri-heart-3-line");

  if (loves.classList.contains("ri-heart-3-fill")) {
    setTimeout(() => {
      love.style.transform = "translate(-50% , -300%) scale(1) rotate(60deg)";
    }, 800);

    setTimeout(() => {
      love.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
      love.style.transform = "translate(-50% , -50%) scale(0) rotate(-60deg)";
    }, 1200);
  } else {
    love.style.opacity = 0;
  }
});
