
//스크롤 다운시 해더 색변경.

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--white');
    } else {
        header.classList.remove('header--white');
    }
});


//비디오 재생,멈춤기능
const video = document.querySelector(".video");
const videoTitle = document.querySelector(".video_title");
const playBtn = document.querySelector(".video_control__play");
const playIco = document.querySelector(".play");
const pauseIco = document.querySelector(".pause");

let playstate = true;

playBtn.addEventListener('click',()=>{
    if(playstate){
        video.play();
        playstate = false;
        videoTitle.innerHTML ="";
        playico.classList.remove("active");
        pauseico.classList.add("active");
       
    }
   else
   {
        video.pause();
        playstate = true ;
        playico.classList.add("active");
        pauseico.classList.remove("active");
        
   }
})

//버튼 클릭시 제일 상단으로 이동
const btnTop = document.querySelector(".btn_top");

btnTop.addEventListener('click',()=>{
    scrollTo(0,0);
})
