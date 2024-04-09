console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const currentTime = new Date();
  if (currentTime.getHours() >= 6 && currentTime.getHours() <= 12) {
    return "Good Morning";
  } else if (currentTime.getHours() > 12 && currentTime.getHours() <= 18) {
    return "Good Afternoon";
  } else if (currentTime.getHours() > 18 && currentTime.getHours() <= 22) {
    return "Good evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const currentDay = new Date();
  if (currentDay.getDate() == "monday") {
    return "darkgray";
  } else if (
    currentDay.getDay() == "saturday" ||
    currentDay.getDay() == "sunday"
  ) {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
