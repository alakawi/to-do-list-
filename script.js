        document.addEventListener('DOMContentLoaded', function() {
            loadTasks();
        });

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
                    saveTasks();
                });
                newTask.addEventListener('click', function() {
                    newTask.classList.toggle('completed');
                    saveTasks();
                });

                newTask.appendChild(deleteButton);
                taskList.appendChild(newTask);
                document.getElementById('taskInput').value = '';
                saveTasks();
            }
        });

        document.getElementById('clearAllButton').addEventListener('click', function() {
            var taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            saveTasks();
        });

        function saveTasks() {
            var tasks = [];
            document.querySelectorAll('.taskItem').forEach(function(task) {
                tasks.push({ text: task.textContent.replace('X', '').trim(), completed: task.classList.contains('completed') });
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function loadTasks() {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            if (tasks) {
                tasks.forEach(function(task) {
                    var newTask = document.createElement('div');
                    newTask.className = 'taskItem';
                    newTask.textContent = task.text;

                    if (task.completed) {
                        newTask.classList.add('completed');
                    }

                    var deleteButton = document.createElement('button');
                    deleteButton.textContent = 'X';
                    deleteButton.addEventListener('click', function() {
                        var taskList = document.getElementById('taskList');
                        taskList.removeChild(newTask);
                        saveTasks();
                    });
                    newTask.addEventListener('click', function() {
                        newTask.classList.toggle('completed');
                        saveTasks();
                    });

                    newTask.appendChild(deleteButton);
                    document.getElementById('taskList').appendChild(newTask);
                });
            }
        }
