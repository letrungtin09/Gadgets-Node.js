let cart = JSON.parse(localStorage.getItem("cart"));
let sumQuantity = 0;
let sumMoney = 0;
if (cart) {
  cart.forEach((pd, index) => {
    document.querySelector(".cart-list").innerHTML += `
            <div class="item">
                <div class="deleteItem"></div>
                <div class="cart-item">
                    <a class="imgPd" id="imgPd" href="#"><img
                            src="./img/products/${pd.image}" alt=""></a>
                    <div class="info-item">
                        <a class="namePd" id="namePd" href="#">${
                          pd.nameProduct
                        }</a>
                        <div class="amount">
                            <span>Số lượng: </span>
                            <input class="quantityPd" type="number" name="quantity" id="quantity" min="0"
                                max="10" value="${pd.quantity}">
                        </div>
                        <div class="price">
                            <div class="price-new"><span id="cartPrice">${new Intl.NumberFormat(
                              "en-DE"
                            ).format(pd.price)}</span>
                                <span class="vnd">đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    sumMoney += pd.quantity * pd.price;
    sumQuantity += pd.quantity;
  });
  //   let getQuantity = document.querySelectorAll("#quantity");
  //   for (let i = 0; i < getQuantity.length; i++) {
  //     let quantityFirst;
  //     let getId;
  //     getQuantity[i].onfocus = function () {
  //       quantityFirst = getQuantity[i].value;
  //     };
  //     getQuantity[i].onblur = function () {
  //       for (let j = 0; j < cart.length; j++) {
  //         if (quantityFirst == cart[j].quantity) {
  //           cart[j].quantity = getQuantity[i].value;
  //           getId = cart[j].idProduct;
  //         }
  //       }
  //     };
  //   }
  document.querySelector(".number").innerText = sumQuantity;
  window.onload = function () {
    document.querySelector(".totalMoney").innerText = new Intl.NumberFormat(
      "en-DE"
    ).format(sumMoney);
  };
} else {
  document.querySelector(".number").innerText = sumMoney;
}
