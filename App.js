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
  if (inputBox.value.trimStart() == "" || inputBoxDes.value.trimStart() == "") {
    alert("hata");
  } else {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th style="text-align: center"><input id="checkbox" type="checkbox" /></th>
     <th id="editt">${inputBox.value}</th> 
     <th id="editDes">${inputBoxDes.value}</th> 
     <th class="yap red" style="text-align: center">yapılmadı</th> 
     <th id="saveD">
    
     <button class="btn blue nn edit" id="edit-button">Edit</button> 
     <button class="btn blue nn save"  id="save-button"  style="display: none">Save</button>
     <button class="btn red nn" id="delete-button">delete</button>
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
          checkerd.classList.add("green");
          checkerd.classList.remove("red");
        } else {
          checkbox.checked = false;
          checkerd.innerHTML = "yapılmadı";
          checkerd.classList.add("red");
          checkerd.classList.remove("green");
        }
      } else {
        if (checkbox.checked) {
          checkerd.innerHTML = "yapıldı";
          checkerd.classList.add("green");
          checkerd.classList.remove("red");
        } else {
          checkerd.innerHTML = "yapılmadı";
          checkerd.classList.add("red");
          checkerd.classList.remove("green");
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

    let editBox1 = tr.querySelector("#editt");
    let editBox2 = tr.querySelector("#editDes");
    let edit = tr.querySelector(".edit");
    let editButton = tr.querySelector("#edit-button");
    let saveButton = tr.querySelector("#save-button");

    edit.addEventListener("click", function () {
      editBox1.innerHTML = '<input type="text" id="edit-input"   />';
      editBox2.innerHTML = '<input type="text" id="editDes-input" />';
      editButton.style.display = "none";
      saveButton.style.display = "inline-block";
      let save = tr.querySelector(".save");
      let editInput = tr.querySelector("#edit-input");
      let editDesInput = tr.querySelector("#editDes-input");
      editInput.value = `${inputBoxDes.value}`;
      editDesInput.value = `${inputBoxDes.value}`;
      save.addEventListener("click", function () {
        if (editInput.value.trim() === "" || editDesInput.value.trim() === "") {
          alert("hata");
        } else {
          editBox1.innerHTML = `${editInput.value}`;
          editBox2.innerHTML = `${editDesInput.value}`;
          editButton.style.display = "inline-block";
          saveButton.style.display = "none";
        }
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
