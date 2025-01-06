document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-name">${taskName}</span>
            <span class="dustbin" onclick="removeTask(this)">🗑️</span>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', this.checked);
        });
    }
});

function removeTask(element) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(element.parentElement);
}