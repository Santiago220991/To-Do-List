import './styles.css';
import checkboxicon from './empty_checkbox_img.png';
import editincon from './edit_icon_img.png';
import refreshicon from './refresh_icon_img.png';
import entericon from './enter_icon_img.png';

const refrescontainer = document.querySelector('.title img');
const entercontainer = document.querySelector('.text-input img');
const taskcontainer = document.querySelector('.tasks');

const taskarr = [
  {
    description: 'Fourt Task',
    completed: False,
    index: 3,
  },
  {
    description: 'Second Task',
    completed: False,
    index: 1,
  },
  {
    description: 'Third Task',
    completed: False,
    index: 2,
  },
  {
    description: 'First Task',
    completed: False,
    index: 0,
  },

];

refrescontainer.src = refreshicon;
entercontainer.src = entericon;

const storagedtasks = () => {
  taskarr.sort((a, b) => a.index - b.index);
  taskarr.forEach((element) => {
    taskcontainer.innerHTML += `<div class="tasks-item" id="${element.index}">
<div class="tasks-item-start"><img class="checkboxicon" src="${checkboxicon}" alt="checkbox icon">
<p>${element.description}</p>
</div>
<img class="editicon" src="${editincon}" alt="edit icon">
</div>`;
  });
};
storagedtasks();