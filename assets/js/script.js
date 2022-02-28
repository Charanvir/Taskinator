var buttonEl = document.querySelector("#save-task");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    var newItem = prompt("What item would you like to add");
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.innerHTML = newItem;
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);


