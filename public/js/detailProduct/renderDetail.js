let queryString = window.location.search;
let getId = new URLSearchParams(queryString);

let idProduct = getId.get("idProduct");
let idCate = getId.get("idCate");

async function fetchData() {
  const response = await fetch(
    `http://localhost:3000/products?id=${idProduct}`
  );
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let dataSale = "";
    if (data[i].sale == 0) {
      dataSale = `<div class="productIntro__promotion d-none"></div>`;
      document
        .querySelector(".productIntro__slick")
        .insertAdjacentHTML("afterbegin", dataSale);
    } else {
      dataSale = `<div class="productIntro__promotion">Sale ${
        data[i].sale * 100
      }%</div>`;
      document
        .querySelector(".productIntro__slick")
        .insertAdjacentHTML("afterbegin", dataSale);
    }
    for (let img of data[i].imagesNav) {
      let dataNav = "";
      dataNav = `
            <div class="nav--item">
                <div class="item--img">
                    <img src="./img/products/${img}" alt="">
                </div>
            </div>
        `;
      document
        .querySelector(".productIntro__nav")
        .insertAdjacentHTML("beforeend", dataNav);
    }
    for (let img of data[i].imagesZoom) {
      let dataZoom = "";
      dataZoom = `
            <div class="slide--item">
                <a href="./img/products/${img}" data-fancybox="gallery">
                    <img src="./img/products/${img}" alt="">
                </a>
            </div>
        `;
      document
        .querySelector(".productIntro__slide")
        .insertAdjacentHTML("beforeend", dataZoom);
    }
    if (data[i].id == idProduct) {
      let dataNamePd = `<a href="detailProduct.html?idProduct=${data[i].id}&idCate=${data[i].idCate}">${data[i].nameProduct}</a>`;
      document
        .querySelector("#name-product")
        .insertAdjacentHTML("afterbegin", dataNamePd);
      let dataInfo = "";
      dataInfo = `
        <div class="productIntro__top">
            <h1>${data[i].nameProduct}</h1>
            <div class="productIntro__below">
                <div class="productIntro__brand">
                    <span>Thương hiệu: </span>
                    <a href="#">${data[i].brand}</a>
                </div>
                <div class="productIntro__id">
                    <span>Mã Sản phẩm: </span>
                    <span class="productIntro__code">27GR95QE-B.ATV</span>
                </div>
            </div>
        </div>
      `;
      document
        .querySelector(".productIntro__detail")
        .insertAdjacentHTML("afterbegin", dataInfo);
      let dataPrice = "";
      dataPrice = `
          <div class="col-7">
              <div class="productIntro__price">
                ${
                  data[i].sale == 0
                    ? `
                  <div class="price-new">${new Intl.NumberFormat(
                    "en-DE"
                  ).format(data[i].price)} <span class="vnd">đ</span></div>
                `
                    : `
                  <div class="price-new">${new Intl.NumberFormat(
                    "en-DE"
                  ).format(
                    data[i].price - data[i].price * data[i].sale
                  )} <span class="vnd">đ</span></div>
                  <div class="price-old">${new Intl.NumberFormat(
                    "en-DE"
                  ).format(data[i].price)} <span class="vnd">đ</span></div>
                `
                }
                  <div class="price-des">(Đã bao gồm VAT)</div>
              </div>
              <div class="productIntro__guarantee">
                  <span>Bảo hành: 12 tháng. </span><a href="#">(Quy định bảo hành)</a>
              </div>
              <div class="productIntro__option"></div>
              <div class="productIntro__btn">
                  <a href="detailProduct.html?idProduct=${data[i].id}&idCate=${
        data[i].idCate
      }" class="btn--addCart" id="addCart" onclick="addProduct(${data[i].id},'${
        data[i].nameProduct
      }','${data[i].image}',${data[i].price})">Thêm vào giỏ hàng</a>
                  <a class="btn--installment1" href="#">Trả góp tiền mặt <div class="btn-des">Chỉ
                          từ
                          3.441.000 ₫/tháng</div></a>
                  <a class="btn--installment2" href="#">Trả góp 0% qua thẻ <div class="btn-des">
                          Visa,
                          Master, JCB</div></a>
              </div>
          </div>
      `;
      document
        .querySelector(".productIntro__detailPrice")
        .insertAdjacentHTML("afterbegin", dataPrice);
    }
  }
}
fetchData();
async function fetchDataCate() {
  const response2 = await fetch(
    `http://localhost:3000/categories?idCate=${idCate}`
  );
  const data2 = await response2.json();
  for (let i = 0; i < data2.length; i++) {
    if (data2[i].id == idCate) {
      let dataNameCate = `<a href="detailCategory.html?idCate=${data2[i].id}">${data2[i].nameCate}</a>`;
      document
        .querySelector("#cate-product")
        .insertAdjacentHTML("afterbegin", dataNameCate);
    }
  }
}
fetchDataCate();
