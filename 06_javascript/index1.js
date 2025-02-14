const box1 = document.querySelector("#box1");

box1.addEventListener("mouseenter", ()=> {
    box1.style.backgroundColor = "hotpink";
});

box1.addEventListener("mouseleave", ()=> {
    box1.style.backgroundColor = "aqua";
});

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let counter = 0;

btnPlus.addEventListener("click", e=> {
    e.preventDefault();
    counter++;
    console.log(counter);
});
btnMinus.addEventListener("click", e=> {
    e.preventDefault();
    counter--;
    console.log(counter);    
});

const box2 = document.querySelector("#box2");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const deg = 30;
let num = 0;
console.log(num * deg)

btnLeft.addEventListener("click", e=> {
    e.preventDefault();
    num++;
    console.log(num* deg);
    box2.style.transform = `rotate(${num*deg}deg)`;
});
btnRight.addEventListener("click", e=> {
    e.preventDefault();
    num--;
    console.log(num* deg);
    box2.style.transform = `rotate(${num*deg}deg)`;   
});

const wrap = document.querySelector("#wrap");
const article = wrap.querySelector("article");

// class 추가/삭제를 통해 styple 변경
wrap.addEventListener("click", () => {
    let isOn = wrap.classList.contains("on");
    (isOn) ? wrap.classList.remove("on") : wrap.classList.add("on")
})