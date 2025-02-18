
// 페이지 로드시 IsoTope 적용 
window.addEventListener("load", () => {
  const grid = new Isotope(
    "section", // 배치할 요소를 감싸는 부모 
    {
      itemSelector: "article",  // 배치 요소명 
      columnWidth: "article",   // 너비값을 구할 요소
      transitionDuration: "0.5"  // 배치 애니메이션 속도
    }
  );

  const btns = document.querySelectorAll("main ul li");


  // 1. 필터 적용
  // 2. Turn On 시각화 적용
  for (let el of btns) {
    el.addEventListener("click", e => {
      e.preventDefault();

      // 클릭한 버튼에서 filter 조건 확보
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      
      // // grid에 filter 조건 적용 
      grid.arrange({
        filter : sort
      });

      // 모든 버튼의 클래스명을 제거해서 비활성화
      for(let el of btns) {
        el.classList.remove("on");
      }

      // 클릭한 버튼만 on 추가해서 활성화
      e.currentTarget.classList.add("on");

    })
  }
});

