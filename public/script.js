const apiUrl = "/api/products";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) { 
      throw new Error('Network response was not ok'); 
    }
    return response.json();
  })
  .then(data => {
    const productContainer = document.querySelector(".product-container .grids");

    data.forEach(product => {
      const productElem = document.createElement("div");
      productElem.className = "grid";
      productElem.innerHTML = `
        <a class="card">
          <div class="wrapper">
            <div class="image-wrapper">
              <img src="${product.image.url}">
            </div>
          </div>
          <div class="content">
            <span class="title">${product.title}</span>
            <span class="description">${product.description}</span>
            <div class="card-footer">
              <button data-shoppy-product="${product.id}" class="button style3 fit" type="submit" alt="Buy Now">Buy</button>
              <span class="price">${product.price} <span>EUR</span></span> <!-- Assuming 'price' property holds the price -->
            </div>
          </div>
        </a>
      `;
      productContainer.appendChild(productElem);
    });

    const script = document.createElement('script');
    script.src = 'https://shoppy.gg/api/embed.js';
    document.body.appendChild(script);
  })
  .catch(error => {
    console.error('Error: ', error);
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = '';
    const messageContainer = document.createElement('div');
    //center the msg
    messageContainer.style.textAlign = 'center';
    messageContainer.innerHTML = '<h2>Server is under maintenance.</h2>';
    productContainer.appendChild(messageContainer);
  });
