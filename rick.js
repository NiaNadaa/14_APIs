fetch("https://rickandmortyapi.com/api/character/")

    .then(
        function recogerDatos(recogido) {
            console.log(recogido);
            return recogido.json();
        }
    ).then(
        function mostrarDatos(datos) {
            for (let i = 0 ; i < datos.results.length ; i++) {
            document.getElementById("div1").innerHTML +=
            `
            <img src="${datos.results[i].image}"/>
            <p>Nombre: ${datos.results[i].name}</p>
            `;
            };
        }
    )