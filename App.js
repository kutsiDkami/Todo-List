let Add = document.getElementById("addTodo");
let inputBox = document.getElementById("todoText");
let inputBoxDes = document.getElementById("todoTextdis");
let tableContainer = document.getElementById("table-container");
let yapAll = document.getElementById("yap-All");

inputBoxDes.addEventListener("keyup", function (e) {
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
        <th style="text-align: center"><input id="checkbox" type="checkbox" /></th>
     <th>${inputBox.value}</th> 
     <th>${inputBoxDes.value}</th> 
     <th class="yap CLT" style="text-align: center">yapılmadı</th> 
     <th>
     <button class="btn CRT nn">Edit</button>
     <button class="btn CLT nn" id="delete-button">delete</button>
     </th> `;

    tableContainer.appendChild(tr);

    //    inputBox.value = "";
    //  inputBoxDes.value = "";
    let deleteButton = tr.querySelector("#delete-button");

    deleteButton.addEventListener("click", function () {
      tr.remove();
    });
    let complete = document.querySelector("#complete");
    let checkbox = tr.querySelector("#checkbox");
    let checkerd = tr.querySelector(".yap");
    complete.addEventListener("click", function () {
      if (yapAll.checked) {
        if (yapAll.checked) {
          checkbox.checked = true;
          checkerd.innerHTML = "yapıldı";
          checkerd.classList.add("MAC");
          checkerd.classList.remove("CLT");
        } else {
          checkbox.checked = false;
          checkerd.innerHTML = "yapılmadı";
          checkerd.classList.add("CLT");
          checkerd.classList.remove("MAC");
        }
      } else {
        if (checkbox.checked) {
          checkerd.innerHTML = "yapıldı";
          checkerd.classList.add("MAC");
          checkerd.classList.remove("CLT");
        } else {
          checkerd.innerHTML = "yapılmadı";
          checkerd.classList.add("CLT");
          checkerd.classList.remove("MAC");
        }
      }
    });

    yapAll.addEventListener("click", function () {
      if (yapAll.checked) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
  }
}
/*
function allYap() {
  if () {
    checkerd.innerHTML = "yapıldı";
    checkerd.classList.add("MAC");
    checkerd.classList.remove("CLT");
  } else {
    checkerd.innerHTML = "yapılmadı";
    checkerd.classList.add("CLT");
    checkerd.classList.remove("MAC");
  }
}
*/
function clearTasks() {
  let allRows = document.querySelectorAll("tr"); // Tüm satırları al
  const YesOrNo = confirm("emin misin");

  if (YesOrNo == true) {
    allRows.forEach((row, index) => {
      if (index !== 0) {
        row.remove();
      }
    });
  } else {
    alert("işlem başarısız");
  }
}
