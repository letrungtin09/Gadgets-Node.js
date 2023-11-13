let queryString = window.location.search;
let getId = new URLSearchParams(queryString);

let idCate = getId.get("id");

fetch(`http://localhost:3000/categories/${idCate}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("idCate").value = data.id;
    document.getElementById("nameCate").value = data.nameCate;
  });

let btnUpdate = document.querySelector("#btnUpdate");
btnUpdate.addEventListener("click", () => {
  let newCate = {
    nameCate: document.querySelector("#nameCate").value,
  };
  fetch(`http://localhost:3000/categories/${idCate}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCate),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = "http://127.0.0.1:5500/adminCate.html";
    });
});
