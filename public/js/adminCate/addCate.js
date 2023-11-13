let btnAdd = document.querySelector("#btnInsert");
btnAdd.addEventListener("click", () => {
  let newCate = {
    nameCate: document.querySelector("#nameCate").value,
  };
  fetch("http://localhost:3000/categories", {
    method: "POST",
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
