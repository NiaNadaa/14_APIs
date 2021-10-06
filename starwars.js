/*Mostrar en un select un listado de planetas proporcionado por la API. */

fetch("http://swapi.dev/api/planets/")
  .then(function rescibirPlanetas(recibo){
    console.log(recibo);
    return recibo.json();
  }).then(function mostrarDatos(planetas){
    console.log(planetas.results);
    for (let i = 0 ; i < planetas.results.length ; i++){
      document.getElementById("select").innerHTML+=
      `
      <option>${planetas.results[i].name}</option>
      `
    };
  })

/*Cuándo el usuario elige un planeta, mostrar en un alert el nombre del planeta*/

  fetch("http://swapi.dev/api/planets/")
  .then(function rescibirPlanetas(recibo){
    console.log(recibo);
    return recibo.json();
  }).then(function mostrarDatos(planetas){
    console.log(planetas.results);
    for (let i = 0 ; i < planetas.results.length ; i++){
      document.getElementById("select").innerHTML+=
      `
      <option value=${[i]}>${planetas.results[i].name}</option>
      `
    };
  })

  function mostrarPlaneta(e) {
    const planeta = e.srcElement[5].label;
    console.log(e);
    window.alert(planeta);
    ;
  };

/*Mostrar los residentes del planeta seleccionado en tarjetas*/

fetch("http://swapi.dev/api/planets/")
  .then(function rescibirPlanetas(recibo) {
    console.log(recibo);
    return recibo.json();
  })
  .then(function mostrarDatos(planetas) {
    console.log(planetas.results);
    for (let i = 0; i < planetas.results.length; i++) {
      document.getElementById("select").innerHTML += `
       <option value=${[i]}>${planetas.results[i].name}</option>
       `;
    }
  });

function mostrarPlaneta(e) {
  const planeta = e.target.value;

  fetch(`http://swapi.dev/api/planets/${planeta}`)
    .then(function recibirDatos1(recibido1) {
      return recibido1.json();
    })
    .then(function mostrarDatos2(datos2) {
      document.getElementById("residentes").innerHTML = "";
      for (let i = 0; i < datos2.residents.length; i++) {
        fetch(datos2.residents[i])
          .then(function recibirResidente(residente) {
            return residente.json();
          })
          .then(function mostrarResidente(residente2) {
            console.log(residente2.name);
            document.getElementById(
              "residentes"
            ).innerHTML += `<h4>Nombre de residente ${[i]}:</h4><p> ${
              residente2.name
            }</p>`;
          });
      }
    });
}
