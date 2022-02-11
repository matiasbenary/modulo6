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
console.log('Hola');
const cards = document.getElementById('cards');
//Get que sirve para pedir informacion
// Tambien tiene queryParams que se utiliza normalmente  para filtrar o envia informacion al servidor
//https://reqres.in/api/users?page=2
//  queryParams ?page=2
fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => response.json())
  .then((data) => {
    const infoCards = data.results;
    console.log(infoCards);
    let aux = '';
    for (const info of infoCards) {
      aux += `
    <div class="col">
      <div class="card">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${info.name}</h5>
          <p class="card-text">${info.species}</p>
        </div>
      </div>
    </div>`;
    }
    cards.innerHTML = aux;
  });

console.log('Chau');

// const persona = {
//   nombre:"Matias",
//   edad:27
// }

// const personaString = JSON.stringify(persona);
// const personaNew = JSON.parse(personaString);
// console.log(persona);
// console.log(personaString);
// console.log(personaNew);

//Post se utiliza para enviar informacion de forma segura
// Login - Crear un registro
fetch('https://reqres.in/api/users', {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Matias',
    job: 'Programador',
  }), // body data type must match "Content-Type" header
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });


  const persona = {
  nombre:"Matias",
  edad:27
}

// put , updateALl , actualizame todo , pisame los datos,reemplaza todos los datos
// {nombre:"Nicolas"}

//patch, update, actualizame los datos que envio
// {
//   nombre:"Nicolas",
//   edad:27
// }


//DELETE Me permite borrar un registro 
fetch('https://reqres.in/api/users/2', {
  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });