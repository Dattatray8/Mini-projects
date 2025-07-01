let todoInput = document.getElementById("todo-input");
let addTodoButton = document.getElementById("add-todo");
let tasksContainer = document.getElementById("tasks");
let clearAllTasks = document.getElementById("clear");
let num = 0;

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (!todoInput.value) {
            alert('Please enter a task');
            num = num;
            return;
        } else {
            num++;
            localStorage.setItem(num, todoInput.value);
            addTask(todoInput.value, num);
        }
        todoInput.value = '';
    }
})

addTodoButton.addEventListener('click', () => {
    if (!todoInput.value) {
        alert('Please enter a task');
        num = num;
        return;
    } else {
        num++;
        localStorage.setItem(num, todoInput.value);
        addTask(todoInput.value, num);
    }
    todoInput.value = '';
})

function addTask(inputVal, taskNum) {
    let task = document.createElement('div');
    task.className = 'flex justify-between items-center gap-2 bg-[#f5f5f5] p-3 rounded-lg shadow-md mb-2 w-full';
    task.innerHTML = `
    <input type="checkbox" id="checkTask" aria-checked="false">
    <p id="taskDes">${inputVal}</p>
    <button class="bg-[#f44336] text-white py-1 px-3 rounded-2xl cursor-pointer hover:bg-[#18171790]" onclick="deleteTask(this.parentElement, ${taskNum})">Delete</button>
    `;

    let checkbox = task.querySelector('#checkTask');
    let taskDescription = task.querySelector('#taskDes');

    checkbox.addEventListener('click', () => {
        toggleCheckbox(checkbox, taskDescription);
    })

    tasksContainer.appendChild(task);
}

function deleteTask(taskElement, taskNum) {
    localStorage.removeItem(taskNum);
    taskElement.remove();
}

function toggleCheckbox(checkbox, taskDescription) {
    checkbox.ariaChecked = checkbox.ariaChecked === "true" ? "false" : "true";
    if (checkbox.ariaChecked === "false") {
        taskDescription.style.color = 'black';
        taskDescription.style.textDecoration = 'none';
    } else {
        taskDescription.style.color = 'green';
        taskDescription.style.textDecoration = 'line-through';
    }
}

clearAllTasks.addEventListener('click', () => {
    localStorage.clear();
    tasksContainer.innerHTML = '';
    num = 0;
})

function loadTasks() {
    let maxNum = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let keyNum = parseInt(key);

        if (!isNaN(keyNum)) {
            let savedTask = localStorage.getItem(key);
            if (savedTask) {
                addTask(savedTask, keyNum);
                maxNum = Math.max(maxNum, keyNum);
            }
        }
    }

    num = maxNum;
}

window.addEventListener('load', loadTasks);