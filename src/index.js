document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("reloaded")
  document.addEventListener("submit", submitForm); 
});

const submitButton = document.querySelector("Create New Task");

function submitForm(event){

  let taskList = document.getElementById("tasks");
  let newTaskContents = document.querySelector('input').value;
  let newTask = document.createElement("li");
  
  newTask.textContent = newTaskContents + " ";
  console.log(newTask.textContent);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "DEL"
  deleteButton.addEventListener("click", deleteTask);
  newTask.appendChild(deleteButton);

  taskList.appendChild(newTask);

  // clear the entry field
  document.querySelector('input').value = null;
  
  event.preventDefault();
}

function deleteTask(event){
  console.log(this);
  task = this.parentElement
  console.log(task)
  task.remove();
}