function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);

 
  document.getElementById("taskList").appendChild(li);


  input.value = "";
}