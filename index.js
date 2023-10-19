// function myFunction() {
//     alert("You should take everything out of the oven, it's ready!\n Bon appétit :)");
// }

var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
});

splide.mount();




function findRecipe() {

  let favDrink = prompt("Please select the recipe category: \n\n1 -    CUPCAKE \n2 -   BREAKFAST \n3 -   CAKE");
  var number=parseInt(favDrink)
  switch(number) {
    case 1:
      window.location.href = "cupcake.html";
      break;
    case 2:
      window.location.href = "breakfast.html";
      break;
    case 3:
      window.location.href = "cake.html";
      break;
    default:
      text = "I have never heard of that one..";
  }

}

function startTimer(duration) {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = "Timer: " + (duration / 1000);

  setTimeout(function () {
      timerElement.textContent = "Timer: 0 seconds";
      alert('Time is over!!!');
  }, duration);

  const intervalId = setInterval(function () {
      const remaining = duration - 1000;
      if (remaining < 0) {
          clearInterval(intervalId);
      } else {
          timerElement.textContent = "Timer: " + (remaining / 1000) ;
      }
      duration = remaining;
  }, 1000);
}


function startTimer1(duration) {
  const timerElement = document.getElementById("timer1");
  timerElement.textContent = "Timer: " + (duration / 1000);

  setTimeout(function () {
      timerElement.textContent = "Timer: 0 seconds";
      alert('Time is over!!!');
  }, duration);

  const intervalId = setInterval(function () {
      const remaining = duration - 1000;
      if (remaining < 0) {
          clearInterval(intervalId);
      } else {
          timerElement.textContent = "Timer: " + (remaining / 1000) ;
      }
      duration = remaining;
  }, 1000);
}









function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
















