let addProduct = (id, name, img, price) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    cart = [];
    cart.push({
      id: id,
      nameProduct: name,
      image: img,
      price: price,
      quantity: 1,
    });
  } else {
    let item = cart.find((item) => item.id === id);
    if (item) {
      item.quantity++;
    } else {
      cart.push({
        id: id,
        nameProduct: name,
        image: img,
        price: price,
        quantity: 1,
      });
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
