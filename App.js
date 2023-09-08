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
     <th id="editt">${inputBox.value}</th> 
     <th id="editDes">${inputBoxDes.value}</th> 
     <th class="yap CLT" style="text-align: center">yapılmadı</th> 
     <th id="saveD">
     <button class="btn CRT nn edit" id="edit-button">Edit</button>
     <button class="btn CLT nn" id="delete-button">delete</button>
     </th> `;

    tableContainer.appendChild(tr);

    // inputBox.value = "";
    // inputBoxDes.value = "";
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

    let editt = tr.querySelector("#editt");
    let editDes = tr.querySelector("#editDes");
    var elit = tr.querySelector(".edit");
    let editButton = tr.querySelector("#edit-button");
    let saved = tr.querySelector("#saveD");
    elit.addEventListener("click", function () {
      editt.innerHTML = '<input type="text" id="edit-input"  />';
      editDes.innerHTML = '<input type="text" id="editDes-input" />';
      saved.innerHTML = `
        <button class="btn CRT nn save" >save</button>
        <button class="btn CLT nn" id="delete-button">delete</button>
         `;
      let save = saved.querySelector(".save");
      let editInput = tr.querySelector("#edit-input");
      let editDesInput = tr.querySelector("#editDes-input");
      save.addEventListener("click", function () {
        editt.innerHTML = `${editInput.value}`;
        editDes.innerHTML = `${editDesInput.value}`;
        saved.innerHTML = `
        <button class="btn CRT nn edit" id="edit-button">Edit</button>
        <button class="btn CLT nn" id="delete-button">delete</button>
         `;
      });
    });

    //  save.addEventListener("click", function () {});
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
  let allRows = document.querySelectorAll("tr");
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
