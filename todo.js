let todos = [
  { nameTask: "Task1", desc: "Desc", isDone: true },
  { nameTask: "Task2", desc: "Desc", isDone: false },
  { nameTask: "Task3", desc: "Desc", isDone: true },
];

let table = document.querySelector(".table");
let tbody = document.querySelector("tbody");

const addTask = (item) => {
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
};

function addTasks() {
  todos.forEach((item) => {
    addTask(item);
  });
}

addTasks();

let button = document.querySelector("#button");
button.addEventListener("click", () => {
  let inputName = document.querySelector(".inputName");
  let inputDesc = document.querySelector(".textarea");
  let inputIsDone = document.querySelector(".inputIsDode");

  todos.unshift({
    nameTask: inputName.value,
    desc: inputDesc.value,
    isDone: inputIsDone.checked,
  });
  addTask(todos[0]);
  inputName.value = "";
  inputDesc.value = "";
  inputIsDone.checked = false;
});
