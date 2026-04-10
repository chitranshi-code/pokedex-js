async function searchPokemon() {
    let name = document.getElementById("searchbox").value.toLowerCase();

    if (name === "") return;

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data = await response.json();

        let image = data.sprites.other['official-artwork'].front_default;
        let pokemonName = data.name;
        let type = data.types[0].type.name;

        document.getElementById("pokemonImage").src = image;
        document.getElementById("pokemonName").innerText = pokemonName;
        document.getElementById("pokemonType").innerText = "Type: " + type;

    } catch (error) {
        document.getElementById("pokemonName").innerText = "Not Found ❌";
        document.getElementById("pokemonImage").src = "";
        document.getElementById("pokemonType").innerText = "";
    }
}
