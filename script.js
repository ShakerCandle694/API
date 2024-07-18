// Obtener productos de Mercado Libre
fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
  .then(response => response.json())
  .then(data => {
    console.log(data.results); // Aquí se muestran los resultados en la consola
    displayProducts(data.results); // Llamamos a la función para mostrar los productos en la página
  })
  .catch(error => console.error('Error:', error));

// Obtener un Pokémon específico
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Aquí se muestran los datos en la consola
    displayPokemon(data); // Llamamos a la función para mostrar el Pokémon en la página
  })
  .catch(error => console.error('Error:', error));

// Función para mostrar productos en la página
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}" alt="${product.title}">
      <p>Precio: ${product.price}</p>
    `;
    container.appendChild(productDiv);
  });
}

// Función para mostrar un Pokémon en la página
function displayPokemon(pokemon) {
  const container = document.getElementById('pokemon-container');
  container.innerHTML = `
    <h3>${pokemon.name}</h3>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Altura: ${pokemon.height}</p>
    <p>Peso: ${pokemon.weight}</p>
  `;
}
// Insertar un nuevo usuario
fetch('http://localhost:3009/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mail: 'pp@pp.com',
      password: '123',
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Usuario creado:', data);
    })
    .catch(error => console.error('Error:', error));
  
    // Actualizar un usuario existente
fetch('http://localhost:3005/users/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mail: 'nuevo@mail.com',
      password: 'nuevaContraseña',
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Usuario actualizado:', data);
    })
    .catch(error => console.error('Error:', error));

    // Eliminar un usuario existente
fetch('http://localhost:3005/users/2', {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      console.log('Usuario eliminado:', data);
    })
    .catch(error => console.error('Error:', error));
  