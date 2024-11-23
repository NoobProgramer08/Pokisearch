const searchBtn = document.querySelector("#find");
const parentNode = document.querySelector(".pokemonInfo");
const input = document.querySelector("#pokemonName");

searchBtn.addEventListener("click", fethData);

async function fethData(e) {
  e.preventDefault();
  try {
    const pokemonName = document
      .querySelector("#pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemonName
    );

    if (!response.ok) {
      throw new Error("Could not find the data");
    }
    const data = await response.json();
    const image = data.sprites.front_default;
    const pokeName = document.querySelector("#name");
    const pokeWeight = document.querySelector("#weight");
    const pokeImage = document.querySelector("#pokeImage");
    pokeImage.src = image;
    pokeName.innerHTML = "Name: " + data.name;
    pokeWeight.innerHTML = "Weight: " + data.weight + "KG";
  } catch (error) {
    console.error(error);
  }
  input.value = "";
}
