const buscador = document.querySelector("#buscador");

buscador.addEventListener("keydown",(e)=>{
  fetchCards(e.target.value);
})

const fetchCards = async(query) => {
  try {
    const response = await fetch(`https://pixabay.com/api/?key=25759506-574e704714bcbe856d2875496&q=${query}&image_type=photo`);
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json()
    renderCards(data);
  } catch (error) {
    console.error(error)
  }

}

// fetchCards()

const renderCards = (data) => {
  const cards = document.querySelector('#cards');

  let aux = '';
  for (const card of data.hits) {
    aux += `
    <div class="col">
      <div class="card">
        <img src="${card.webformatURL}" class="card-img-top" alt="..." />
        <div class="card-body">
          <ul>
            <li>Descargas:${card.downloads}</li>
            <li>Vistas:${card.views}</li>
            <li>Me gusta: ${card.likes}</li>
            <li>Colecciones: ${card.collections}</li>
          </ul>
          <a href="${card.largeImageURL}" target="_blank" class="btn btn-primary text-center">Descargar</a>
        </div>
      </div>
    </div>
    `;
  }

  cards.innerHTML = aux;
};

// console.log("hola");

// test()

// console.log("chau");
// throw new Error("Esto es un error")
// console.log("hola");
// try{
//   throw new Error("Esto es un error")
// }catch(error){
//   console.error(error);
// }finally{
//   console.log("termine")
// }

// console.log("chau");


// fetch('paises')
//   .then((response) => response.json())
//   .then((data) => {
//     fetch(`provincia/${data}`)
//     .then((response) => response.json())
//     .then((data1) => {
//       fetch(`localidad/${data1}`)
//       .then((response) => response.json())
//       .then((data2) => {
//         console.log(data2)
//       }
//     }
//     }
//   })

//   const paises = async() =>{
//     const paisesF =  await fetch('paises');
//     const data = await paisesF.json()
//     const provincia = await fetch(`provincia/${data}`)
//     const data1 = await provincia.json()
//     const data = await paisesF.json()
//     const data = await paisesF.json()
//   }