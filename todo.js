let todos = [
  { nameTask: "Task1", desc: "Desc", isDone: true },
  { nameTask: "Task2", desc: "Desc", isDone: false },
  { nameTask: "Task3", desc: "Desc", isDone: true },
];

let table = document.querySelector(".table");
let tbody = document.querySelector("tbody");

function addTask() {
  todos.forEach((item) => {
    let tr = document.createElement("tr");
    let nameTask = document.createElement("td");
    let desc = document.createElement("td");
    let isDone = document.createElement("td");
    let inputDone = document.createElement("input");
    inputDone.type = "checkbox";

    nameTask.textContent = item.nameTask;
    desc.textContent = item.desc;
    inputDone.checked = item.isDone;

    isDone.appendChild(inputDone);
    tr.appendChild(nameTask);
    tr.appendChild(desc);
    tr.appendChild(isDone);
    tbody.appendChild(tr);
  });

  // nameTask.textContent = todos[0].nameTask;
  // desc.textContent = todos[0].desc;
  // inputDone.checked = todos[0].isDone;
}

addTask();

// tboby.appendChild(card);
