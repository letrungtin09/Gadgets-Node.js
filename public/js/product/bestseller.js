async function fetchDataBestseller() {
  const response = await fetch(
    "http://localhost:3000/products?_sort=purchase&_order=desc"
  );
  const data = await response.json();
  for (let i = 0; i < 10; i++) {
    let dataList = "";
    dataList = `
                  <div class="selling-item">
                      <a class="bestseller__card" href="">
                          <div class="card">
                              <img src="./img/products/${
                                data[i].image
                              }" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">${
                                    data[i].nameProduct
                                  }</h5>
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
                                      `
                                      }
                              </div>
                          </div>
                      </a>
                  </div>
              `;
    document
      .querySelector(".bestseller__selling")
      .insertAdjacentHTML("beforeend", dataList);
  }
}
fetchDataBestseller();
