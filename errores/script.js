// const cards = document.getElementById('cards');

// const renderCards = async () => {
//   try{
//     const response = await fetch('https://rickandmortyapi.com/api/character/');
//     const data = await response.json();
  
//     const infoCards = data.results;
//     console.log(infoCards);
//     let aux = '';
//     for (const info of infoCards) {
//       aux += `
//       <div class="col">
//         <div class="card">
//           <img src="${info.image}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${info.name}</h5>
//             <p class="card-text">${info.species} - ${info.gender}</p>
//             <p class="card-text">${info.created}</p>
//             <p class="card-text">Ubicacion ${info.location.name}</p>
//           </div>
//         </div>
//       </div>`;
//     }
//     cards.innerHTML = aux;
//   }catch(error){
//     alert(error)
//   }

// };

// renderCards();

// const numero = 3;
// try{
//   console.log("hola");
//   if(numero%2){
//     throw new Error("Solo aceptamos numeros pares");
//   }else{
//     console.log("El numero elegido es",numero)
//   }
 
// }catch(error){
//   alert("Tenemos un problema")
//   console.error("El error es :",error);
// }finally{
//   console.log("Estoy ultimo");
// }
// console.log("estoy despues del trycatch");

// 1. donde esta mal la url de la api -> ingresa directamente catch
// 2. Cuando un codigo del 400 o 500 ->
const getData = async() =>{
  try{
    const response = await fetch("https://reqres.in/api/unknown/23");
    console.log(response);
    if(!response.ok){
      throw response;
    }
    const data = await response.json();
    console.log(data)
  }catch(error){
    console.log(error)
    if(error.status == 404){
      alert("Error 404")
    }else{
      alert("Ocurrio un problema")
    }
  }
}


// const getData = () => {
//   fetch("https://reqres.in/api/unknown/23")
//   .then((res) =>{
//     if(!res.ok){
//       console.log(res.status);
//       throw new Error(res.status);
//     }
//    return res.json()
//   } )
//   .then((data) =>console.log(data))
//   .catch((error) => console.log(error))
  
// }
getData();