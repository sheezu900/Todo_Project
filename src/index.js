import './style.css';

const tasks = [
  {
    description: 'task 1',
    complete: true,
    index: 1,
  },
  {
    description: 'task 2',
    complete: true,
    index: 2,
  },
  {
    description: 'task 3',
    complete: true,
    index: 4,
  },
  {
    description: 'task 4',
    complete: true,
    index: 3,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('todo_list_section');

  const input = document.createElement('input');
  input.classList.add('input');
  input.placeholder = 'Add to your list';
  taskList.appendChild(input);

  function displayTaskList() {
    // Sort tasks based on index value
    tasks.sort((a, b) => a.index - b.index);

    const list = document.createElement('ul');
    list.classList.add('list');

    tasks.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list_item');

      const checkBox = document.createElement('span');
      checkBox.classList.add('material-symbols-outlined');
      checkBox.textContent = 'check_box_outline_blank';

      const description = document.createElement('p');
      description.textContent = task.description;

      const moreVert = document.createElement('span');
      moreVert.classList.add('material-symbols-outlined');
      moreVert.textContent = 'more_vert';

      listItem.appendChild(checkBox);
      listItem.appendChild(description);
      listItem.appendChild(moreVert);

      list.appendChild(listItem);

      taskList.appendChild(list);
    });

    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Clear all complete';
    taskList.appendChild(button);
  }

  displayTaskList();
});
