let taskCounter = 1;

function saveTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");

  var task = taskInput.value;
  var date = dateInput.value;

  if (task.trim() === "" || date.trim() === "") {
    alert("Please enter a task and date.");
    return;
  }

  var taskContainer = document.createElement("div");
  taskContainer.className = "task-container";

  var taskNumber = document.createElement("span");
  taskNumber.className = "task-number";
  taskNumber.textContent = taskCounter + ". ";

  var taskElement = document.createElement("span");
  taskElement.textContent = task + " - " + date;

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-button";
  editButton.onclick = function() {
    editTask(taskElement);
  };

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function() {
    deleteTask(taskContainer);
  };

  taskContainer.appendChild(taskNumber);
  taskContainer.appendChild(taskElement);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  document.getElementById("tasksContainer").appendChild(taskContainer);

  taskInput.value = "";
  dateInput.value = "";

  taskCounter++;
}

function editTask(taskElement) {
  var newTask = prompt("Edit task:", taskElement.textContent.split(" - ")[0]);
  if (newTask !== null) {
    taskElement.textContent = newTask + " - " + taskElement.textContent.split(" - ")[1];
  }
}

function deleteTask(taskContainer) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskContainer.remove();
    updateTaskNumbers();
  }
}

function updateTaskNumbers() {
  var taskContainers = document.querySelectorAll(".task-container");
  taskCounter = 1;
  taskContainers.forEach(function(taskContainer) {
    var taskNumber = taskContainer.querySelector(".task-number");
    taskNumber.textContent = taskCounter + ". ";
    taskCounter++;
  });
}
