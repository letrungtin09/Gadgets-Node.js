let btnAdd = document.querySelector("#btnInsert");
btnAdd.addEventListener("click", () => {
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
  fetch("http://localhost:3000/products", {
    method: "POST",
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
