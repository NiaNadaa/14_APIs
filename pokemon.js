fetch('https://pokeapi.co/api/v2/type/')
    .then(
        function recibirDatos(recibido) {
            return recibido.json();
        }
    ).then (
        function mostrarDatos(datos) {
            console.log(datos);
        }
    )


fetch('https://pokeapi.co/api/v2/type/')
    .then (
        function recibirDatos(recibido) {
        return recibido.json();
        }
    ).then (
        function mostrarDatos(datos) {
            console.log(datos.results);
            for (let i = 0 ; i < datos.results.length ; i++) {
            let nombrePokemon = datos.results[i].name;
            document.getElementById("select").innerHTML +=
            `
            <option value="${[i]}">${nombrePokemon}</option>
            `
            }
        }
    )

function seleccionPokemon(e) {
    console.log(e.target.value);
    const seleccion = e.target.value;
} 


fetch("https://pokeapi.co/api/v2/type/")
  .then(function recibirDatos(recibido) {
    return recibido.json();
  })
  .then(function mostrarDatos(datos) {
    for (let i = 0; i < datos.results.length; i++) {
      let nombrePokemon = datos.results[i].name;
      document.getElementById("select").innerHTML += `
            <option value="${[i]}">${nombrePokemon}</option>
            `;
    }
  });

function seleccionPokemon(e) {
  const seleccion = e.target.value;
  document.getElementById("pokemon").innerHTML = ``;

  fetch(`https://pokeapi.co/api/v2/type/${seleccion}`)
    .then(function recibirDatos(recibido) {
      return recibido.json();
    })
    .then(function mostrarDatos(datos) {
      for (let i = 0; i < 3; i++) {
        let numeroPokemons = Math.floor(Math.random() * (19 - 0)) + 0;
        let nombrePokemon = datos.pokemon[numeroPokemons].pokemon.name;
        document.getElementById("pokemon").innerHTML += `
                <p>${nombrePokemon}</option>
                `;
      }
    });
}
