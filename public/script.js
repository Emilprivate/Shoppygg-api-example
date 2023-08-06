const apiUrl = "/api/products";

// Insert this CSS at the top of your script or in a CSS file to apply styles
const styles = `
  .product-container .grids .grid .card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    cursor: pointer;
  }
  .product-container .grids .grid .card:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  .product-container .grids .grid .card .wrapper .image-wrapper img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .product-container .grids .grid .card .content .title {
    font-weight: bold;
    margin: 10px 0;
  }
  .product-container .grids .grid .card .content .desc {
    color: white;
    font-weight: bold;
    margin: 5px 0;
  }
  .product-container .grids .grid .card button {
    padding: 10px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 2%;
    transition: 0.3s;
    width: 96%; /* Fixed width; you may need to adjust this value */
    text-align: center; /* Center the text inside the button */
    display: inline-block; /* Ensures proper rendering */
    overflow: hidden; /* Hides any overflow content */
    white-space: nowrap; /* Prevents text from wrapping */
    text-overflow: ellipsis; /* Shows ellipsis when text overflows */
  }
  .product-container .grids .grid .card button:hover {
    color: red;
  }
  .button-container {
    margin-top: 15px;
  }
  .embed--content{
    background: #232323;
    color: #fff;
    padding: 1rem;
    max-height: calc(100vh - 340px);
    overflow-x: hidden;
    overflow-y: auto;
}
`;

// Append the styles to the head
const styleElem = document.createElement('style');
styleElem.innerHTML = styles;
document.head.appendChild(styleElem);

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector(".product-container .grids");

    const groupedProducts = {};

    // Group products by their names.
    data.forEach(product => {
      const titleParts = product.title.split(' - ');
      const baseTitle = titleParts[0];
      const differentiatingWords = titleParts[1];

      if (!groupedProducts[baseTitle]) {
        groupedProducts[baseTitle] = [];
      }

      groupedProducts[baseTitle].push({
        ...product,
        differentiatingWords
      });
    });

    window.initAllData = function () {
      // Iterate through all products and create buttons.
      data.forEach(product => {
        // Create a button element for each product
        const button = document.createElement('button');
        button.id = `shoppy-button-${product.id}`;
        button.setAttribute('data-shoppy-product', product.id);
        button.className = 'button style3 fit shoppy-button';
        button.type = 'submit';
        button.alt = 'Buy Now';
        button.textContent = 'Buy';
        button.style.display = 'none';

        // Append the button to the appropriate location
        const buttonContainer = document.getElementById('button-container');
        buttonContainer.appendChild(button);
      });
    };

    for (const baseTitle in groupedProducts) {
      const products = groupedProducts[baseTitle];

      const buttonsHtml = products.map(product => {
        return `<button data-shoppy-product="${product.id}" class="button style3 fit" type="button">${product.differentiatingWords} | ${product.price} ${product.currency}</button>`;
      }).join(' ');

      const productElem = document.createElement("div");
      productElem.className = "grid";
      productElem.innerHTML = `
        <a class="card" onclick="showDetails('${baseTitle}')">
          <div class="wrapper">
            <div class="image-wrapper">
              <img src="${products[0].image.url}">
            </div>
          </div>
          <div class="content">
            <span class="title">${baseTitle}</span>
          </div>
          <div class="content">
          <span class="desc">${products[0].description}</span>
          </div>
          <div style="display: block; width: 100%;">
            ${buttonsHtml}
          </div>
        </a>
      `;

      productContainer.appendChild(productElem);
    }

    const script = document.createElement('script');
    script.src = 'https://shoppy.gg/api/embed.js';
    document.body.appendChild(script);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });