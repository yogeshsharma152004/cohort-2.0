const reels = [
  {
    username: "john_doe",
    likeCount: 120,
    isLiked: false,
    commentCount: 14,
    shareCount: 3,
    isFollowed: true,
    caption: "Enjoying the sunshine!",
    video: "https://www.pexels.com/download/video/34918687/",
    userProfile: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    username: "sara_smith",
    likeCount: 450,
    isLiked: true,
    commentCount: 45,
    shareCount: 10,
    isFollowed: false,
    caption: "New adventures ahead ✨",
    video: "https://www.pexels.com/download/video/35031932/",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    username: "mike_lee",
    likeCount: 85,
    isLiked: false,
    commentCount: 9,
    shareCount: 1,
    isFollowed: true,
    caption: "Workout time!",
    video: "https://www.pexels.com/download/video/34801826/",
    userProfile: "https://images.unsplash.com/photo-1533488069324-f9265c15d37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    username: "emily_rose",
    likeCount: 920,
    isLiked: true,
    commentCount: 112,
    shareCount: 25,
    isFollowed: true,
    caption: "Travel vibes 🌍",
    video: "https://www.pexels.com/download/video/30549329/",
    userProfile: "https://images.unsplash.com/photo-1617647386140-3ad7d21102d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    username: "alex_turner",
    likeCount: 300,
    isLiked: false,
    commentCount: 33,
    shareCount: 7,
    isFollowed: false,
    caption: "Coding all night!",
    video: "https://www.pexels.com/download/video/8720756/",
    userProfile: "https://images.unsplash.com/photo-1543764477-646365e11da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    username: "chloe_kim",
    likeCount: 1500,
    isLiked: true,
    commentCount: 205,
    shareCount: 60,
    isFollowed: true,
    caption: "Happy moments 💕",
    video: "https://www.pexels.com/download/video/34916318/",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    username: "david_park",
    likeCount: 270,
    isLiked: false,
    commentCount: 21,
    shareCount: 5,
    isFollowed: false,
    caption: "Chill weekend.",
    video: "https://www.pexels.com/download/video/30754925/",
    userProfile: "https://images.unsplash.com/photo-1624223237138-21a37e61dec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    username: "lily_chan",
    likeCount: 780,
    isLiked: true,
    commentCount: 87,
    shareCount: 18,
    isFollowed: true,
    caption: "Foodie life 🍣",
    video: "https://www.pexels.com/download/video/6421082/",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    username: "robert_miles",
    likeCount: 65,
    isLiked: false,
    commentCount: 4,
    shareCount: 0,
    isFollowed: false,
    caption: "Fresh start.",
    video: "https://www.pexels.com/download/video/33670184/",
    userProfile: "https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    username: "nina_wells",
    likeCount: 1020,
    isLiked: true,
    commentCount: 132,
    shareCount: 40,
    isFollowed: true,
    caption: "Tennis Mode On 🎾",
    video: "https://www.pexels.com/download/video/32041192/",
    userProfile: "https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww"
  }
];

let sum = ''

reels.forEach((val) => {
    
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${val.video}"></video>

                    <div class="bottom">
                         <div class="user">
                               <img src="${val.userProfile}" alt="">

                               <h4>${val.username}</h4>

                               <button>${val.isFollowed? 'Unfollow':'Follow'}</button>
                         </div>
                         <h3>${val.caption} </h3>
                    </div>

                    <div class="right">
                           <div class="like">
                            <h4 class="like-icon  icons">${val.isLiked?'<i  class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${val.likeCount}</h6>
                           </div>

                           <div class="comment">
                            <h4 class="comment-icon icons"><i class="ri-chat-1-line"></i></i></h4>
                            <h6>${val.commentCount}</h6>
                           </div>

                             <div class="share">
                            <h4 class="share-icon icons"><i class="ri-telegram-2-line"></i></h4>
                            <h6>${val.shareCount}</h6>
                           </div>

                            <div class="dots">
                            <h4 class="dots-icon icons"> <i class="ri-more-2-fill"></i></h4>
                            
                           </div>

                          
                    </div>
                </div>`
    
    
})

let allReels = document.querySelector('.all-reels');

allReels.innerHTML = sum