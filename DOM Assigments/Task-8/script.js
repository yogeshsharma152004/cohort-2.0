let cricketrs = [
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIdQDsTM7sD7eRksMP2f98TEsqEEDUXOXhA&s",
    fullName: "Virat Kohli",
    profession: "Indian Cricketer",
    description: "Top-order batsman, known for consistency and chasing skills across formats. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8WIjik04FQ3WK4OcDIah2rLaz-l_nxpSrg&s",
    fullName: "Joe Root",
    profession: "English Cricketer",
    description: "Classic batsman, very consistent in Test and ODI cricket. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIH0i1Lal9WJ3Rt1L4idgBwgxn9mCT9MtGg&s",
    fullName: "Steve Smith",
    profession: "Australian Cricketer",
    description: "Unorthodox batsman, very effective under pressure and in challenging conditions. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLGu22kXFqU_1rS09TsNxxXibKkz2psuxnA&s",
    fullName: "Kane Williamson",
    profession: "New Zealand Cricketer",
    description: "Calm and technically sound batsman, anchors the innings. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3-0Cv-ISo258uvyU7EPbME8BfpDeZEZahQ&s",
    fullName: "AB de Villiers",
    profession: "South African Cricketer",
    description: "Dynamic middle-order batsman, known for aggressive strokeplay and versatility in limited-overs cricket. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEI6NAf-j7NaOlHQSEl6YHHwtfzJIWRH27Q&s",
    fullName: "Rohit Sharma",
    profession: "Indian Cricketer",
    description: "Explosive opening batsman, known for big hundreds especially in white-ball cricket. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYd_d5zsyCj8efkwy7038vfgKwRoltXANVQ&s",
    fullName: "Jos Buttler",
    profession: "English Cricketer",
    description: "Aggressive wicket-keeper batsman, dangerous in limited-overs with aggressive batting. "
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYMi8zBXP0clQJ82pfQDUtCitZmutiZqS2g&s",  
    fullName: "Jasprit Bumrah",
    profession: "Indian Cricketer (Pacer)",
    description: "Premier fast-bowler, among the best active pace bowlers in world cricket. "
  }
];



let main = document.querySelector('main');
let card = document.getElementsByClassName('card');

let sum = '';
cricketrs.forEach(function(val){
   sum = sum + `<div class="card">
        <img id="img" src="${val.photo}" alt="">

        <h3>${val.fullName}</h3>
        <h4>${val.profession}</h4>
        <p>${val.description}</p>
    </div>`
})

main.innerHTML = sum;