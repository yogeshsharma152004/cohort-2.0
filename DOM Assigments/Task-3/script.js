let teams = [
  {
    primary: "red",
    secondary: "black",
    caption: "Rajat Patidar",
    fullname: "Royal Challengers Bengaluru",
    trophies: 1,
    logo: "./images/rcb-logo.png",
    captionimg: "./images/rajatpatidar.avif",
  },

  {
    primary: "#0173C0",
    secondary: "#A7904E",
    caption: "Hardik Pandya",
    fullname: "Mumbai Indians",
    trophies: 5,
    logo: "./images/mi.webp",
    captionimg: "./images/hardik.avif",
  },

  {
    primary: "#F7F088",
    secondary: "#1565BA",
    caption: "Ruturaj Gaikwad",
    fullname: "Chennai Super Kings",
    trophies: 5,
    logo: "./images/csk-logo.png",
    captionimg: "./images/rutu.avif",
  },
  {
    primary: "#371C5D",
    secondary: "#F2C227",
    caption: "Ajinkya Rahane",
    fullname: "Kolkata Kinght Riders",
    trophies: 3,
    logo: "./images/kkr.webp",
    captionimg: "./images/rahane.webp",
  },
  {
    primary: "#EC478D",
    secondary: "#2D3B82",
    caption: "Sanju Samson",
    fullname: "Rajasthan Royals",
    trophies: 1,
    logo: "./images/rr-logo.jpg",
    captionimg: "./images/sanju.webp",
  },
  {
    primary: "#EE7326",
    secondary: "black",
    caption: "Pat Cummins",
    fullname: "SunRisers Hyderabad",
    trophies: 1,
    logo: "./images/srhh.jpg",
    captionimg: "./images/pat.avif",
  },
  {
    primary: "#254271",
    secondary: "#e33235ff",
    caption: "Rishabh Pant",
    fullname: "Lucknow Super Giants",
    trophies: 0,
    logo: "./images/lsg.jpg",
    captionimg: "./images/rishabh.avif",
  },
  {
    primary: "#E51C1E",
    secondary: "#daae78ff",
    caption: "Shreyas Iyer",
    fullname: "Punjab Kings",
    trophies: 0,
    logo: "./images/pbks.png",
    captionimg: "./images/shery.webp",
  },

  {
    primary: "#0C7CF4",
    secondary: "#FC554D",
    caption: "Axar Patel",
    fullname: "Delhi Capitals",
    trophies: 0,
    logo: "./images/delhi-logo.jpg",
    captionimg: "./images/axar.webp",
  },
  {
    primary: "#1B2133",
    secondary: "#CCAB5F",
    caption: "Shubhman Gill",
    fullname: "Gujarat Titans",
    trophies: 1,
    logo: "./images/gt-logo.png",
    captionimg: "./images/shub.avif",
  },
];

let btn = document.querySelector("button");
let body = document.querySelector("body");
let main = document.querySelector("main");
let caption = document.getElementById("cname");
let teamlogo = document.getElementById("team-logo");
let teamname = document.getElementById("team-name");
let trophy = document.getElementById("total-trophy");
let teamimg = document.getElementById("team-img");
let captionimg = document.getElementById("caption-img");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * teams.length);

  body.style.backgroundColor = teams[num].primary;
  main.style.backgroundColor = teams[num].secondary;

  caption.innerHTML = `Caption Name : ${teams[num].caption}`;
  teamname.innerHTML = `Team Name : ${teams[num].fullname}`;
  trophy.innerHTML = `Total Trophy : ${teams[num].trophies}`;
  teamimg.src = teams[num].logo;
  captionimg.src = teams[num].captionimg;
  captionimg.style.backgroundColor = teams[num].primary;
});
