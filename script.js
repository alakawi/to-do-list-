document.getElementById('addButton').addEventListener('click', function() {
    var textInput = document.getElementById('taskInput').value;
    var taskList = document.getElementById('taskList');
    
    if (textInput.trim() !== "") {
        var newTask = document.createElement('div');
        newTask.className = 'taskItem';
        newTask.textContent = textInput;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        document.getElementById('taskInput').value = '';
    }
});

document.getElementById('clearAllButton').addEventListener('click', function() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
});
