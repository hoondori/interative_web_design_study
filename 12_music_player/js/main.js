const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");
const deg = 45;
const len = lists.length-1;
let active = 0;

// 지정한 패널만 on되게 
function activation(index, lists) {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

//모든 오디오 요소를 반복하면서 정지시키고 .pic 요소의 모션을 중지해서 초기화하는 함수
function initMusic(){
  for( let el of audio ){
      el.pause();
      el.load();
      el.closest("article").querySelector(".pic").classList.remove("on");
  }
}

let i = 0;
for (let el of lists) {
  // article 패널을 회전시켜서 겹친 것을 펼치기  
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;

  // picture 그리기 
  let pic = el.querySelector(".pic");
  pic.style.backgroundImage = `url(./img/member${i+1}.jpg)`;

  // 재생,정지,처음부터재생 버튼 제어
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  // play 버튼 클릭시.
  play.addEventListener("click", e=> {
    let isActive = e.currentTarget.closest('article').classList.contains("on");
    if (isActive) { // 활성화된 것만 작동
      // pic.on 이면 disk image 회전 
      e.currentTarget.closest('article').querySelector(".pic").classList.add("on");
      // 음악 재생 
      e.currentTarget.closest('article').querySelector("audio").play();
    }
  })

  // pause 버튼 클릭시 
  pause.addEventListener("click", e=> {
    let isActive = e.currentTarget.closest('article').classList.contains("on");
    if (isActive) { // 활성화된 것만 작동
      // pic.on  제거하여 회전 중지 
      e.currentTarget.closest('article').querySelector(".pic").classList.remove("on");
      // 음악 정지 
      e.currentTarget.closest('article').querySelector("audio").pause();
    }
  })

  // load 버튼 클릭시 
  load.addEventListener("click", e => {
    let isActive = e.currentTarget.closest('article').classList.contains("on");
    if (isActive) { // 활성화된 것만 작동
    // pic.on 이면 disk image 회전 
      e.currentTarget.closest('article').querySelector(".pic").classList.add("on");    
      // 음악 처음으로 감기
      e.currentTarget.closest('article').querySelector("audio").load();
      // 음악 재생 
      e.currentTarget.closest('article').querySelector("audio").play();    
    }
  })
  i++;
}

/////// 패널 회전

//prev 버튼 클릭 시
let num = 0; 
prev.addEventListener("click", ()=>{
  //음악 초기화 함수 실행
  initMusic();

  //num값을 증가시키며 frame 45도 만큼 증가시키며 시계 방향으로 계속 회전
  num++;  
  frame.style.transform = `rotate(${deg* num}deg)`;    

  (active == 0 ) ? active = len : active--;
  activation(active, lists);    
});

//next 버튼 클릭시
next.addEventListener("click", ()=>{
  //음악 초기화 함수 실행
  initMusic();

  //num값을 감소시키며 frame을 45도 만큼 감소시키며 반시계 방향으로 회전
  num--;   
  frame.style.transform = `rotate(${deg* num}deg)`;   

  (active == len ) ? active = 0 : active++; 
  activation(active, lists);
});

