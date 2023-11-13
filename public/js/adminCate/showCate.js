async function fetchData() {
  const response = await fetch("http://localhost:3000/categories");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let dataCate = "";
    dataCate = `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].nameCate}</td>
                <td>
                    <div class="btns-admin">
                        <a class="btn--edit" href="formUpdateCate.html?id=${data[i].id}"><i class="fa fa-edit"></i> Sửa</a>
                        <button class="btn--delete" onclick="deleteCate(${data[i].id})"><i class="fa fa-times-circle"></i> Xóa</button>
                    </div>
                </td>
            </tr>
        `;
    document
      .querySelector(".infoCate")
      .insertAdjacentHTML("beforeend", dataCate);
  }
}
fetchData();

let deleteCate = (id) => {
  fetch(`http://localhost:3000/categories/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
