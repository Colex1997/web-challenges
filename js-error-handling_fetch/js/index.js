console.clear();

const userElement = document.querySelector(".user");
const errorMessage = document.querySelector("p");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("response nich ok");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(response.status);
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    errorMessage.innerText = "";
    if (!user) {
      console.log("User not found");
      userElement.innerHTML = "";
      errorMessage.innerText = "User not found!";
      return;
    }
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);
