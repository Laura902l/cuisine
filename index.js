
var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
});

splide.mount();




function findRecipe() {

  let favDrink = prompt("Please select the recipe category: \n\n1 -    CUPCAKE \n2 -   BREAKFAST \n3 -   CAKE");
  var number = parseInt(favDrink)
  switch (number) {
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

// function startTimer(duration) {
//   const timerElement = document.getElementById("timer");
//   timerElement.textContent = "Timer: " + (duration / 1000);

//   setTimeout(function () {
//       timerElement.textContent = "Timer: 0 seconds";
//       alert('Time is over!!!');
//   }, duration);

//   const intervalId = setInterval(function () {
//       const remaining = duration - 1000;
//       if (remaining < 0) {
//           clearInterval(intervalId);
//       } else {
//           timerElement.textContent = "Timer: " + (remaining / 1000) ;
//       }
//       duration = remaining;
//   }, 1000);
// }
function startTimerPrompt() {
  const timeOption = prompt("Choose an option:\n1 - Seconds\n2 - Minutes");

  if (timeOption === "1") {
    const userSeconds = prompt("Enter the number of seconds:");

    if (userSeconds !== null) {
      const totalSeconds = parseInt(userSeconds);

      if (!isNaN(totalSeconds) && totalSeconds > 0) {
        const intervals = 2;

        for (let i = 0; i < intervals; i++) {
          setTimeout(function () {
            alert(`Left: ${totalSeconds - i * (totalSeconds / intervals)} seconds`);
          }, i * (totalSeconds / intervals) * 1000);
        }

        setTimeout(function () {
          alert('Time is over!');
        }, totalSeconds * 1000);
      } else {
        alert('The entered number of seconds is invalid.');
      }
    }
  } else if (timeOption === "2") {
    const userMinutes = prompt("Enter the number of minutes:");

    if (userMinutes !== null) {
      const totalMinutes = parseInt(userMinutes);

      if (!isNaN(totalMinutes) && totalMinutes > 0) {
        const totalSeconds = totalMinutes * 60;
        const intervals = 2;

        for (let i = 0; i < intervals; i++) {
          setTimeout(function () {
            alert(`Left: ${totalSeconds - i * (totalSeconds / intervals)} seconds`);
          }, i * (totalSeconds / intervals) * 1000);
        }

        setTimeout(function () {
          alert('Time is over!');
        }, totalSeconds * 1000);
      } else {
        alert('The entered number of minutes is invalid.');
      }
    }
  } else {
    alert('Invalid option. Please choose 1 for seconds or 2 for minutes.');
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
















