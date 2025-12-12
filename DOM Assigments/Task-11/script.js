let allDetailes = document.querySelectorAll('.details');
let btn = document.querySelectorAll('button')

btn.forEach((val) => {
   val.addEventListener('click',()=>{
      if(val.innerHTML == 'Follow'){
        val.innerHTML = 'Following'
      }
      else{
        val.innerHTML = 'Follow'
      }
      
   })
})

