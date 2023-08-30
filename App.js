let Add = document.getElementById("addTodo");
let inputBox = document.getElementById("todoText");
let inputBoxDes = document.getElementById("todoTextdis");
let tableContainer = document.getElementById("table-container");

inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    addTask();
  }
});
function addTask() {
  if (inputBox.value === "" || inputBoxDes.value === "") {
    alert("hata");
  } else {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th style="text-align: center"><input type="checkbox" /></th>
     <th>${inputBox.value}</th> 
     <th>${inputBoxDes.value}</th> 
     <th style="text-align: center">dene</th> 
     <th>
     <button class="btn CRT nn">Edit</button>
     <button class="btn CLT nn" id="delete-button">delete</button>
     </th> `;

    tableContainer.appendChild(tr);

    //    inputBox.value = "";
    //  inputBoxDes.value = "";
    let deleteButton = tr.querySelector("#delete-button");

    deleteButton.addEventListener("click", function () {
      // Delete işlevi burada eklenebilir
      tr.remove();
    });
  }
}

function clearTasks() {
  let allRows = document.querySelectorAll("tr"); // Tüm satırları al
  allRows.forEach((row, index) => {
    if (index !== 0) {
      // İlk satır başlık olduğu için atla
      row.remove();
    }
  });
}
