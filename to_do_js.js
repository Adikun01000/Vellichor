let totalTasks = 0;
let completedTasks = 0;

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <input type="checkbox" class="taskCheckbox">
            <span>${taskText}</span>
            <button class="removeTaskButton">Remove</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';

        totalTasks++;
        updateProgress();

        // Add event listener to the checkbox
        listItem.querySelector('.taskCheckbox').addEventListener('change', function() {
            if (this.checked) {
                completedTasks++;
                listItem.querySelector('span').classList.add('completed');
            } else {
                completedTasks--;
                listItem.querySelector('span').classList.remove('completed');
            }
            updateProgress();
        });

        // Add event listener to the remove button
        listItem.querySelector('.removeTaskButton').addEventListener('click', function() {
            taskList.removeChild(listItem);
            totalTasks--;
            if (listItem.querySelector('.taskCheckbox').checked) {
                completedTasks--;
            }
            updateProgress();
        });
    }
});

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    progressBar.style.width = percentage + '%';
    progressText.textContent = Math.round(percentage) + '%';
}