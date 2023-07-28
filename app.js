function toggleTextDecoration(event) {
    const h3Element = event.target; // Получаем элемент, на котором произошел клик (h3)
    h3Element.classList.toggle('strikethrough');
}

function createTodo() {
    const input = document.getElementById('input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Пустоту нельзя добавлять! Введите текст задачи.');
        return;
    }

    const todoList = document.getElementById('todo_list');
    const div = document.createElement('div');
    const text = document.createElement('h3');

    text.textContent = taskText;

    text.addEventListener('click', toggleTextDecoration);

    div.setAttribute('class', 'block_text');
    div.appendChild(text);

    todoList.prepend(div);

    input.value = '';
}