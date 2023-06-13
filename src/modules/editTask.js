import Task from './Task.js';
import saveIcon from '../img/save-icon.svg';

const editTask = (event) => {
  if (event.target.classList.contains('menu-icon')) {
    const taskIndex = event.target.parentNode.parentNode.className.split(' ')[1];
    const menuIcon = event.target;
    const taskInput = event.target.parentNode.parentNode.firstChild.nextSibling.childNodes[3];

    taskInput.removeAttribute('readonly');
    taskInput.focus();

    const spanSaveIcon = createSaveIcon();

    menuIcon.parentNode.insertAdjacentElement('afterbegin', spanSaveIcon);
    menuIcon.classList.add('hidden');

    spanSaveIcon.addEventListener('click', () => {
      const task = Task.tasks.find((t) => t.index === parseInt(taskIndex, 10));

      if (task) {
        task.description = taskInput.value;
      }

      Task.storageManagement(Task.tasks);
      taskInput.setAttribute('readonly', 'readonly');
      menuIcon.classList.remove('hidden');
      spanSaveIcon.classList.add('hidden');
    });
  }
};

const createSaveIcon = () => {
  const spanSaveIcon = document.createElement('span');
  const img = document.createElement('img');

  img.setAttribute('src', saveIcon);
  img.setAttribute('alt', 'Save Icon');
  img.classList.add('save-icon');

  spanSaveIcon.appendChild(img);
  return spanSaveIcon;
}

export default editTask;