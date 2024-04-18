console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log(response);
  const people = await response.json();
  console.log(people);

  const R2D2 = people.results.find((person) => person.name === "R2-D2");
  console.log(R2D2.eye_color);
}

fetchData();
