
const strawberrybutton = document.getElementById("strawberryButton");
strawberrybutton.addEventListener('click', function () {
  alert('oh WOW! Mine too! Now we are friends! Forever');
});

const vanillabutton = document.getElementById("vanillaButton");
vanillabutton.addEventListener('click', function () {
  alert('WRONG WRONG WRONG! Are you trying to make me angry?');
});

const chocolatebutton = document.getElementById("chocolateButton");
chocolatebutton.addEventListener('click', function () {
  alert('If you answer wrong again... its all over.');
});

var usersHour = new Date().getHours();
let message;
if (usersHour < 12) {
  message = "I know it's early, so take your time...you've got nothing but.";
} else if (usersHour < 18) {
  message = "It's almost late, I bet you're hungry, huh? Pick...now.";
} else {
  message = "Last person who woke me up this late and choose wrong, is gone.";
}
const usersTimeElement = document.getElementById("usersTime");
usersTimeElement.innerHTML = message;

function magicWordno() {
  magicWordgif.innerHTML = ("<img src='images/magicword.gif' alt='NEUMAN' />");
}

function magicWordyes() {
  magicWordYes.innerHTML = ("<a href='https://en.wikipedia.org/wiki/Existential_crisis'>Get me the hell outta here!</a>");
}

function rateMyPage() {
  let rating = prompt("On a scale from 1-999 how badly do you want to go home?");
  while (rating < 1 || rating > 1000 || isNaN(rating)) {
    rating = prompt("Please enter a number from 1 to 999.");
  }
  for (let i = 0; i < rating; i++) {
    document.write("<img src='images/shangtsung.gif' alt='Shang Tsung stealing your soul' />");
    console.log(rating)
  }
}






// while loop and for loop that shows picture