async function fetchData() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let dataPd = "";
    dataPd = `
            <tr>
                <td class="id-pd">${data[i].id}</td>
                <td>${data[i].nameProduct}</td>
                <td><img style="width:70px; height:70px;" src="./img/products/${
                  data[i].image
                }" alt=""></td>
                <td>${new Intl.NumberFormat("en-DE").format(
                  data[i].price
                )} <span class="vnd">đ</span></td>
                <td>${data[i].sale * 100}%</td>
                <td>${data[i].purchase}</td>
                <td>${data[i].brand}</td>
                <td class="btnTd">
                    <div class="btns-admin">
                        <a class="btn--edit" href="formUpdatePd.html?id=${
                          data[i].id
                        }"><i class="fa fa-edit"></i> Sửa</a>
                        <button class="btn--delete" onclick="deletePd(${
                          data[i].id
                        })"><i class="fa fa-times-circle"></i> Xóa</button>
                    </div>
                </td>
            </tr>
          `;
    document.querySelector(".infoCate").insertAdjacentHTML("beforeend", dataPd);
  }
}
fetchData();

let deletePd = (id) => {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
