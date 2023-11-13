let queryString = window.location.search;
let getId = new URLSearchParams(queryString);

let idCate = getId.get("idCate");

async function fetchDataAll() {
  const response = await fetch(
    `http://localhost:3000/products?idCate=${idCate}`
  );
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let dataPd = "";
    dataPd = `
          <a class="detailCate__item text-decoration-none" href="detailProduct.html?idProduct=${
            data[i].id
          }&idCate=${data[i].idCate}">
              <div class="card">
                  <img src="./img/products/${
                    data[i].image
                  }" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${data[i].nameProduct}</h5>
                      <div class="card-discount d-flex align-items-end">
                          ${
                            data[i].sale === 0
                              ? `<p class="card-new">${new Intl.NumberFormat(
                                  "en-DE"
                                ).format(
                                  data[i].price
                                )} <span class="vnd">đ</span></p>
                      </div>`
                              : `<p class="card-new">${new Intl.NumberFormat(
                                  "en-DE"
                                ).format(
                                  data[i].price - data[i].price * data[i].sale
                                )} <span class="vnd">đ</span></p>
                      <span class="card-sale">Sale ${data[i].sale * 100}%</span>
                  </div>
                  <p class="card-old">${new Intl.NumberFormat("en-DE").format(
                    data[i].price
                  )} <span class="vnd">đ</span></p>`
                          }
                  </div>
              </div>
          </a>
        `;
    document
      .querySelector(".detailCate__list")
      .insertAdjacentHTML("beforeend", dataPd);
  }
}
fetchDataAll();

async function fetchDataCate() {
  const response2 = await fetch(
    `http://localhost:3000/categories?idCate=${idCate}`
  );
  const data2 = await response2.json();
  for (let i = 0; i < data2.length; i++) {
    if (data2[i].id == idCate) {
      let dataNameCate = `<a href="detailCategory.html?idCate=${data2[i].id}">${data2[i].nameCate}</a>`;
      document
        .querySelector("#cate-name")
        .insertAdjacentHTML("afterbegin", dataNameCate);
      document.querySelector("#name-category").innerHTML = data2[i].nameCate;
      break;
    }
  }
}
fetchDataCate();
