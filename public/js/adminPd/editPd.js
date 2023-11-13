let queryString = window.location.search;
let getId = new URLSearchParams(queryString);

let idPd = getId.get("id");

fetch(`http://localhost:3000/products/${idPd}`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#namePd").value = data.nameProduct;
    document.querySelector("#imgPd").value = data.image;
    document.querySelector("#pricePd").value = data.price;
    document.querySelector("#salePd").value = data.sale;
    document.querySelector("#featuredPd").value = data.featured;
    document.querySelector("#purchasePd").value = data.purchase;
    document.querySelector("#idCate").value = data.idCate;
    document.querySelector("#brandPd").value = data.brand;
  });

let btnUpdate = document.querySelector("#btnUpdate");
btnUpdate.addEventListener("click", () => {
  let newPd = {
    nameProduct: document.querySelector("#namePd").value,
    image: document.querySelector("#imgPd").value,
    price: document.querySelector("#pricePd").value,
    sale: document.querySelector("#salePd").value,
    imagesNav: [],
    iamgesZoom: [],
    featured: document.querySelector("#featuredPd").value,
    purchase: document.querySelector("#purchasePd").value,
    idCate: document.querySelector("#idCate").value,
    brand: document.querySelector("#brandPd").value,
  };
  fetch(`http://localhost:3000/products/${idPd}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPd),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = "http://127.0.0.1:5500/adminProduct.html";
    });
});
