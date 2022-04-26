import "./styles.css";

let container = document.getElementById("container");

async function data() {
  await fetch("https://6267342a01dab900f1bc2542.mockapi.io/products", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      loadProducts(products);
    });
}
const loadProducts = (products) => {
  for (let i: number = 0; i < products.length; i++) {
    let newProduct = document.createElement("div");
    let img = document.createElement("img");
    img.src =
      "https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png";
    let titleAndPrice = document.createElement("div");
    let title = document.createElement("h5");
    title.innerHTML = products[i].name;
    let price = document.createElement("p");
    price.innerHTML = "$" + products[i].price;
    let btn = document.createElement("button");
    btn.innerHTML = "AÑADIR AL CARRITO";
    newProduct.classList.add("product");
    titleAndPrice.appendChild(title);
    titleAndPrice.appendChild(price);
    newProduct.appendChild(img);
    newProduct.appendChild(titleAndPrice);
    newProduct.appendChild(btn);
    container.appendChild(newProduct);
  }
};
data();
