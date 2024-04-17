console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  const R2D2 = data.results.find((person) => person.name === "R2-D2");
  console.log(R2D2.eye_color);
}

fetchData();
