async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  const result = products
    .map(function (product) {
      return `
        
        <div class="products"> 
        <div class = "product">
            <img src= "${product.thumbnail}"/>
            <h1>${product.title}</h1>
            <span>${product.price} $</span>
        </div>
        </div>
     

        `;
    })
    .join("");

  document.querySelector(".products").innerHTML = result;
}

getProducts();
