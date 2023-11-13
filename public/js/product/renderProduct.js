async function fetchDataAll() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let dataList = "";
    dataList = `
        <div class="all-item" id="${i + 1}">
            <a class="bestseller__card" href="detailProduct.html?idProduct=${
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
                                ? `
                            <p class="card-new">${new Intl.NumberFormat(
                              "en-DE"
                            ).format(
                              data[i].price
                            )} <span class="vnd">đ</span></p>                           
                        </div>
                            `
                                : `
                            <p class="card-new">${new Intl.NumberFormat(
                              "en-DE"
                            ).format(
                              data[i].price - data[i].price * data[i].sale
                            )} <span class="vnd">đ</span></p>
                            <span class="card-sale">Sale ${
                              data[i].sale * 100
                            }%</span>
                        </div>
                        <p class="card-old">${new Intl.NumberFormat(
                          "en-DE"
                        ).format(data[i].price)} <span class="vnd">đ</span></p>
                            `
                            }
                    </div>
                </div>
            </a>
        </div>
    `;
    document
      .querySelector(".bestseller__all")
      .insertAdjacentHTML("beforeend", dataList);
    if (data[i].sale > 0) {
      let dataListSale = "";
      dataListSale = `
                  <div class="promotion-item">
                      <a class="bestseller__card" href="detailProduct.html?idProduct=${
                        data[i].id
                      }&idCate=${data[i].idCate}">
                          <div class="card">
                              <img src="./img/products/${
                                data[i].image
                              }" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">${
                                    data[i].nameProduct
                                  }</h5>
                                  <div class="card-discount d-flex align-items-end">
                                      <p class="card-new">${new Intl.NumberFormat(
                                        "en-DE"
                                      ).format(
                                        data[i].price -
                                          data[i].price * data[i].sale
                                      )} <span class="vnd">đ</span></p>
                                      <span class="card-sale">Sale ${
                                        data[i].sale * 100
                                      }%</span>
                                  </div>
                                  <p class="card-old">${new Intl.NumberFormat(
                                    "en-DE"
                                  ).format(
                                    data[i].price
                                  )} <span class="vnd">đ</span></p>
                              </div>
                          </div>
                      </a>
                  </div>
              `;
      document
        .querySelector(".bestseller__promotion")
        .insertAdjacentHTML("beforeend", dataListSale);
    }
    if (data[i].featured == 1) {
      let dataFeatured = "";
      dataFeatured = `
        <a class="featured__item text-decoration-none" href="detailProduct.html?idProduct=${
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
        .querySelector(".featured__list")
        .insertAdjacentHTML("beforeend", dataFeatured);
    }
  }
}
fetchDataAll();
