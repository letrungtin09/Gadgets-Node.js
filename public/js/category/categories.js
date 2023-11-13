async function fetchData() {
  const response = await fetch("http://localhost:3000/categories");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let dataNav = "";
    dataNav = `
          <li class="menu-item">
              <a class="menu-link" href="detailCategory.html?idCate=${data[i].id}"><span>${data[i].nameCate}</span></a>
          </li>
      `;
    document
      .querySelector(".menu-list")
      .insertAdjacentHTML("beforeend", dataNav);
  }
}
fetchData();
