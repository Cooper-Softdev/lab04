
const strawberrybutton = document.getElementById("strawberryButton");
strawberrybutton.addEventListener('click', function() {
  alert('oh WOW! Mine too! Now we are friends! Forever');
});

const vanillabutton = document.getElementById("vanillaButton");
vanillabutton.addEventListener('click', function() {
  alert('WRONG WRONG WRONG! Are you trying to make me angry?');
});

const chocolatebutton = document.getElementById("chocolateButton");
chocolatebutton.addEventListener('click', function() {
  alert('If you answer wrong again... its all over.');
});

var usersHour = new Date().getHours();
let message;
if (usersHour < 12) {
  message = "I know it's early, so take your time... and remember... no rush.";
} else if (usersHour < 18) {
  message = "It's almost late, I bet you're hungry, huh? Pick...now.";
} else {
  message = "Last person who woke me up this late and choose wrong, is gone.";
}
const usersTimeElement = document.getElementById("usersTime");
usersTimeElement.innerHTML = message;

function magicWord() {
  const userPlea = document.getElementsById("pleaInput").value;
  console.log("User plea: " + userPlea);
  
}

function magicWordno(){
  magicWordgif.innerHTML = ("<img src='images/magicword.gif' alt='NEUMAN' />");
}

function magicWordyes(){
  magicWordYes.innerHTML = ("<a href='https://en.wikipedia.org/wiki/Existential_crisis'>Get me the hell outta here!</a>");
}

function rateMyPage(){
  let rating = prompt("On a scale from 1-9999 how bad do you want to go home?");

  console.log(rating)
  for (let i = 0; i < rating; i++){
    document.write("<img src='images/magicword.gif' alt='NEUMAN' />");
  }
}






// while loop and for loop that shows picture