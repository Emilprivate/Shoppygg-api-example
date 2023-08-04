const apiUrl = "/api/products";

fetch(apiUrl)
  .then(response => response.json())
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
              <span class="price">${product.price} <span>EUR</span></span>
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
    console.error('Error fetching products:', error);
  });
