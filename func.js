const questions = document.querySelectorAll(".lxp_cs");
console.log(questions)

questions.forEach(function(question) {
  const btn = question.querySelector(".arrow");
  console.log(btn)
  btn.addEventListener("click", () => {
      questions.forEach(function(item) {
          if (item !== question) {
              item.classList.remove("show-text");
          }
      })
      question.classList.toggle("show-text");
      btn.classList.toggle("twist");
  })
})









const bars = document.querySelector('.menu');
const navUl = document.querySelector('.hd-nav');
// the bars
const firstBar = document.querySelector(".bar1");
const secBar = document.querySelector(".bar2");
const thrdBar = document.querySelector(".bar3");

bars.addEventListener("click", () =>{
    navUl.classList.toggle('show')
    firstBar.classList.toggle('right');
  secBar.classList.toggle('move');
  thrdBar.classList.toggle('trnleft');
    // console.log(nav
});
