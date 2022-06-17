const questions = document.querySelectorAll(".lxp_cs");
// console.log(questions)

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



// javascript for the toogle view of the password 
const vewit =  document.querySelector(".v-btn");
const eyeOne = document.querySelector(".viewit");
const eyeTwo = document.querySelector(".viewit2");
const inp = document.querySelector(".views");

// console.log(vewit, eyeOne, eyeTwo)

// vewit.addEventListener('click', () => {
//   if(inp.type === 'password'){
//     inp.type = "text"
//   }
//   else{
//       inp.type = "password"
//   }
//   eyeOne.classList.toggle("chng");
//   eyeTwo.classList.toggle("chngs");

// })

const passCase = document.querySelectorAll(".pass-case")
console.log(passCase)

passCase.forEach(function(pass){
  const vewit = pass.querySelector(".v-btn");

  vewit.addEventListener('click', () => {

      if(inp.type === 'password'){
          inp.type = "text"
        }
        else{
            inp.type = "password"
        }
        eyeOne.classList.toggle("chng");
        eyeTwo.classList.toggle("chngs");
      
    })
     
});



// javascript for the navigation bar for the Media view
        
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


