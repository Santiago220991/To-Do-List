import './styles.css';
import editincon from './edit_icon_img.png';
import refreshicon from './refresh_icon_img.png';
import entericon from './enter_icon_img.png';
import * as fun from './list_functions.js';
import deleteicon from './erase_icon_img.png';

const refrescontainer = document.querySelector('.title img');
const entercontainer = document.querySelector('.text-input img');
const taskcontainer = document.querySelector('.tasks');
const inputtext = document.querySelector('.text-input input');
const sessionsaved = JSON.parse(localStorage.getItem('session'));

let taskarr = [];

const activebuttons = () => {
  const editcontainer = document.querySelectorAll('.tasks-item-start p');
  const editbutton = document.querySelectorAll('.edit_icon');
  const removeicon = document.querySelectorAll('.removeicon');
  const editinput = document.querySelectorAll('.edit_text');
  editbutton.forEach((element, index) => {
    element.addEventListener('click', () => {
      removeicon[index].classList.add('active');
      editcontainer[index].classList.add('active');
      editbutton[index].classList.add('active');
      editinput[index].classList.add('active');
      editinput[index].addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && editinput[index].value !== '') {
          fun.edit(editinput[index].value, taskarr, index);
          localStorage.setItem('session', JSON.stringify(taskarr));
          editcontainer[index].textContent = taskarr[index].description;
          editcontainer[index].classList.remove('active');
          editinput[index].classList.remove('active');
          editbutton[index].classList.remove('active');
          removeicon[index].classList.remove('active');
        }
      });
    });
  });
  removeicon.forEach((element, index) => {
    element.addEventListener('click', () => {
      fun.erase(taskarr, removeicon[index].parentElement.id);
      localStorage.setItem('session', JSON.stringify(taskarr));
      removeicon[index].parentElement.remove();
      const tasks = document.querySelectorAll('.tasks-item');
      tasks.forEach((element, index) => { element.id = taskarr[index].index; });
    });
  });
};

const storagedtasks = () => {
  taskarr.forEach((element) => {
    taskcontainer.innerHTML += `<div class="tasks-item" id="${element.index}">
<div class="tasks-item-start"><input type="checkbox" class="checkboxicon">
<p>${element.description}</p>
<input class="edit_text" type="text" placeholder="Edit Task">
</div>
<img class="edit_icon" src="${editincon}" alt="edit icon">
<img class="removeicon" src="${deleteicon}" alt="remove icon">
</div>`;
  });
};

if (sessionsaved !== null) {
  taskarr = sessionsaved;
  storagedtasks();
  activebuttons();
}

inputtext.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputtext.value !== '') {
    fun.add(inputtext.value, taskarr);
    localStorage.setItem('session', JSON.stringify(taskarr));
    taskcontainer.innerHTML += `<div class="tasks-item" id="${taskarr[taskarr.length - 1].index}">
<div class="tasks-item-start"><input type="checkbox" class="checkboxicon">
<p>${taskarr[taskarr.length - 1].description}</p>
<input class="edit_text" type="text" placeholder="Edit Task">
</div>
<img class="edit_icon" src="${editincon}" alt="edit icon">
<img class="removeicon" src="${deleteicon}" alt="remove icon">
</div>`;
    activebuttons();
  }
});

refrescontainer.src = refreshicon;
entercontainer.src = entericon;
