const bars = document.querySelector('.menu');
const navUl = document.querySelector('.hd-nav');
// the bars
const firstBar = document.querySelector(".bar1");
const secBar = document.querySelector(".bar2");
const thrdBar = document.querySelector(".bar3");

console.log(bars);

bars.addEventListener("click", () =>{
    navUl.classList.toggle('show')
    firstBar.classList.toggle('right');
  secBar.classList.toggle('move');
  thrdBar.classList.toggle('trnleft');
    // console.log(nav
});
