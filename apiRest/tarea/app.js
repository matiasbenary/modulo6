{
  /* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */
}
const $ = (element) => document.querySelector(element);
const table = $('#tableUsers');

const URL = 'https://6205a7c1161670001741bca8.mockapi.io/';
fetch(`${URL}/users`)
  // Convierte la respuesta json a un objeto, en este caso se llama data
  .then((response) => response.json())
  .then((users) => {
    const htmlData = users.reduce((acc, user) => {
      return `${acc}
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
      <td><button class="btn btn-primary">Editar</button></td>
    </tr>
    `;
    }, '');

    table.innerHTML = htmlData;
    console.log(users,"hola");
  });
