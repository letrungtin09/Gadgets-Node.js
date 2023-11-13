let queryStringS = window.location.search;
let getIdS = new URLSearchParams(queryStringS);
let resultS = getIdS.get("search");

async function fetchDataAll() {
  const response = await fetch(`http://localhost:3000/products?q=${resultS}`);
  const data = await response.json();
  document.getElementById(
    "result-search"
  ).innerHTML = `Kết quả tìm kiếm của "${resultS}"`;
  for (let i = 0; i < data.length; i++) {
    let dataPd = "";
    dataPd = `
            <a class="searchPd__item text-decoration-none" href="detailProduct.html?idProduct=${
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
                        <span class="card-sale">Sale ${
                          data[i].sale * 100
                        }%</span>
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
      .querySelector(".searchPd__list")
      .insertAdjacentHTML("beforeend", dataPd);
  }
}
fetchDataAll();
