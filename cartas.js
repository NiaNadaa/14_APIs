fetch("https://api.magicthegathering.io/v1/sets")
  .then(function recibirSet(set1) {
    console.log(set1);
    return set1.json();
  })
  .then(function mostrarSet(set2) {
    console.log(set2);
    for (let i = 0; i < set2.sets.length; i++) {
      document.getElementById("set").innerHTML += `<option value="${[i]}">${
        set2.sets[i].name
      }</option>`;
    }
  });

fetch("https://api.magicthegathering.io/v1/sets")
  .then(function recibirSet(set1) {
    return set1.json();
  })
  .then(function mostrarSet(set2) {
    for (let i = 0; i < set2.sets.length; i++) {
      document.getElementById("set").innerHTML += `<option value="${[i]}">${
        set2.sets[i].name
      }</option>`;
    }
  });

function mostrarCartas(e) {
  fetch("https://api.magicthegathering.io/v1/sets")
    .then(function recibirSet2(set3) {
      return set3.json();
    })
    .then(function mostrarSet2(set4) {
      fetch(
        `https://api.magicthegathering.io/v1/sets/${
          set4.sets[e.target.value].code
        }/booster`
      )
        .then(function recibirCartas(carta1) {
          return carta1.json();
        })
        .then(function mostrarCartas(carta2) {
          for (let i = 0; i < carta2.cards.length; i++) {
            document.getElementById("padre").innerHTML += `
                        <div id="cartas">
                        <img src="${carta2.cards[i].imageUrl}" alt="Imagen" style="width:100%">
                        <div class="container">
                            <h4><b>${carta2.cards[i].name}</b></h4> 
                            <p>${carta2.cards[i].text}</p> 
                        </div>
                        </div>
                        `;
          }
        });
    });
}
