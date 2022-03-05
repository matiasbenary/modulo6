const cards = document.getElementById('cards');

// const renderCards = () =>{
//   fetch('https://rickandmortyapi.com/api/character/')
//   .then((response) => response.json())
//   .then((data) => {
//     const infoCards = data.results;
//     console.log(infoCards);
//     let aux = '';
//     for (const info of infoCards) {
//       aux += `
//     <div class="col">
//       <div class="card">
//         <img src="${info.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${info.name}</h5>
//           <p class="card-text">${info.species}</p>
//           <p class="card-text">${info.created}</p>
//           <p class="card-text">Ubicacion ${info.location.name}</p>
//         </div>
//       </div>
//     </div>`;
//     }
//     cards.innerHTML = aux;
//   });
// }

// const renderCards = async () => {
//   const response = await fetch('https://rickandmortyapi.com/api/character/');
//   const data = await response.json();

//   const infoCards = data.results;
//   console.log(infoCards);
//   let aux = '';
//   for (const info of infoCards) {
//     aux += `
//     <div class="col">
//       <div class="card">
//         <img src="${info.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${info.name}</h5>
//           <p class="card-text">${info.species} - ${info.gender}</p>
//           <p class="card-text">${info.created}</p>
//           <p class="card-text">Ubicacion ${info.location.name}</p>
//         </div>
//       </div>
//     </div>`;
//   }
//   cards.innerHTML = aux;
// };

// renderCards();
console.log("hola");
fetch('http://127.0.0.1:5000/api/user')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
