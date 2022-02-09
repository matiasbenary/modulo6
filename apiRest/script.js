const cards = document.getElementById("cards");

// fetch("https://rickandmortyapi.com/api/character/")
//   .then((response) => {
//     return response.json();
//     // response.json()
//   })
//   .then((data) => {
//     console.log(data.results);
//     const newCards = data.results.reduce((html, newCard) => {
//       return (
//         html +
//         `
//         <div class="card" style="width: 18rem;">
//           <img src="${newCard.image}" class="card-img-top" alt="..." />
//           <div class="card-body">
//             <h5 class="card-title">${newCard.name}</h5>
//             <p class="card-text" >
//               <ul>
//                 <li>Estado: ${newCard.status} </li>
//                 <li>Especie: ${newCard.species}</li>
//                 <li>Genero: ${newCard.gender}</li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       `
//       );
//     }, "");

//     cards.innerHTML = newCards;
//   });
console.log("Hola");

fetch("https://rickandmortyapi.com/api/character/")
.then(response=> response.json())
.then(data=>{
  const infoCards =  data.results;
  let aux = "";
  for (const info of infoCards) {
    aux += `
    <div class="col">
      <div class="card">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${info.name}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>`
  }

  cards.innerHTML=aux;

})

console.log("Chau");