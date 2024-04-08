console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword == SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;

if (numberOfHotdogs < 5) {
  console.log("2 euro / hotdog");
} else if (numberOfHotdogs < 100) {
  console.log("1.50 euro / hotdog");
} else if (numberOfHotdogs < 1000000) {
  console.log("1 euro / hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("10 cents / hotdog");
}

// Part 4: Daytime
const currentHour = 18;
const statement = currentHour < 17 ? "Still need to learn" : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Tim";
const greeting =
  "Hello " + (userName == "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);
