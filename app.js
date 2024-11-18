const addTaskBtn = document.getElementById('addTaskBtn');
const addUrgentTaskBtn = document.getElementById('addUrgentTaskBtn');
const taskList = document.getElementById('taskList');

function addTask(isUrgent = false) {
    const taskText = prompt('Digite o nome da tarefa:');
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task');
        
        if (isUrgent) {
            li.classList.add('urgent');
        }


        li.addEventListener('click', function() {
            if (confirm('Deseja remover esta tarefa?')) {
                taskList.removeChild(li);
            }
        });

        taskList.appendChild(li);
    }
}

addTaskBtn.addEventListener('click', () => addTask());
addUrgentTaskBtn.addEventListener('click', () => addTask(true));