let country = [
  {
    photo:
      "https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg",
    countryName: "India",
    details: "1,321 Hotels . 73 packages",
  },
  {
    photo:
      "https://i.pinimg.com/1200x/46/7d/ec/467dec9752c9efdc0652b5464295a7c1.jpg",
    countryName: "Turkey",
    details: "1,991 Hotels . 42 packages",
  },
  {
    photo:
      "https://i.pinimg.com/1200x/89/a6/67/89a667a1665a0d85b726bcfb67346eaa.jpg",
    countryName: "Indonesia",
    details: "1,335 Hotels . 28 packages",
  },
  {
    photo:
      "https://i.pinimg.com/1200x/c5/8b/8c/c58b8c199ea3479c226546d9be11dc17.jpg",
    countryName: "Dubai",
    details: "1,774 Hotels . 38 packages",
  },
  {
    photo:
      "https://i.pinimg.com/1200x/8b/9a/36/8b9a367cbf6e304478013b1459bf9795.jpg",
    countryName: "Vietnam",
    details: "1,448 Hotels . 30 packages",
  },
  {
    photo:
      "https://i.pinimg.com/736x/72/5e/91/725e9191e2a99e2bd728305c49601ea4.jpg",
    countryName: "China",
    details: "1,114 Hotels . 52 packages",
  },
  {
    photo:
      "https://i.pinimg.com/736x/5d/6c/68/5d6c6825857afb2ba97f4ba518a068a7.jpg",
    countryName: "South-Korea",
    details: "1,8744 Hotels . 63 packages",
  },

  {
    photo:
      "https://i.pinimg.com/1200x/55/aa/23/55aa23a2a15ff7ac9ce51bd90fc6cb5b.jpg ",
    countryName: "New-Zealand",
    details: "1,654 Hotels . 38 packages",
  },
];

let main = document.querySelector("main");
let card = document.getElementsByClassName("card");

let sum = "";
country.forEach(function (val) {
  sum = sum + `   <div class="card">
        <img id="img" src="${val.photo}" alt="">

        <div class="bottom">
        <h3> ${val.countryName} </h3>

       <h4>${val.details}</h4>
       
         <p>Explore Now  <i class="ri-arrow-right-s-line"></i></p>

        </div>
        
     </div>`;
});

main.innerHTML = sum;
