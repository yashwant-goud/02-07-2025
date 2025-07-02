document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <input type="checkbox">
            <label>${taskText}</label>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        document.getElementById('todo-list').appendChild(li);

        li.querySelector('.delete').addEventListener('click', function() {
            li.remove();
        });

        li.querySelector('.edit').addEventListener('click', function() {
            const label = li.querySelector('label');
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = label.textContent;
            li.insertBefore(inputField, label);
            li.removeChild(label);
            inputField.focus();

            inputField.addEventListener('blur', function() {
                label.textContent = inputField.value;
                li.insertBefore(label, inputField);
                li.removeChild(inputField);
            });
        });

        li.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            if (this.checked) {
                li.querySelector('label').style.textDecoration = 'line-through';
            } else {
                li.querySelector('label').style.textDecoration = 'none';
            }
        });

        input.value = '';
    }
});
