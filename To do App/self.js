const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

function addTask() {

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = input.value;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    completeBtn.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.append(span, completeBtn, deleteBtn);
    taskList.appendChild(li);

    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

searchInput.addEventListener("keyup", function () {

    const searchText = searchInput.value.toLowerCase();

    const tasks = taskList.getElementsByTagName("li");

    for (let task of tasks) {

        const taskName = task.querySelector("span").textContent.toLowerCase();

        if (taskName.includes(searchText)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    }

});