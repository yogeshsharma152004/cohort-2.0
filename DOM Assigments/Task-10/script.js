let keys = document.querySelectorAll('.key') //seclet all tha white and black key using class key

 

let audio = [...keys].map((key , index) => {
       return new Audio(`./audio/${28+index}.mp3`) //path of audio file and index of it 
}) //nodelist convert to array and uspe map lagake return kiya to har aek ki ke liye onject banayega


function playSound(index){
    audio[index].currentTime = 0; //audio ko restart karta hai
    audio[index].play(); // jo index aai vo sound play karne ke liye 

    keys[index].classList.add('active'); // scale wala animation perform karne ke liye 

    setTimeout(()=>{
             keys[index].classList.remove('active');
    },200) // sacle wala animation khcuh time baad remove ho jayega 
}


//har key ke upar click event lagake foreach method chala diya or event listner click laga ke playsound funcition ko return kiya jo index number aayega click pe vo sound chalega


keys.forEach((key,index) => {
    key.addEventListener('click' , ()=>{
        playSound(index);
    })
})


//keydown ke liye eventlistner banaya 

document.addEventListener('keydown', (e) =>{
    let keyPress = e.key.toLowerCase(); // jo bhi value e.key me aayegi vo lowwer case me convert ho jaygi

    let pressedKey = [...keys].find((k) => k.dataset.key.toLowerCase() === keyPress); // hamne jo key press ki uski value html attribute se dataset se key ki value layega or usse lowwercase me convert karega agar vo kwypress ke barabar hui to vo key return karega

    if(!pressedKey) return; // check karega agar key match hui to aage ka code chalega varna nahi chalega

    let index = [...keys].indexOf(pressedKey);  //node list ko array me convert karke jo presskey thi uska index niakal or us hisab se audio play karne ke liye playsound function vo index return kardi to presskey ke index ke hisab se sound bajega
    playSound(index); 
});