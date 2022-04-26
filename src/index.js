import './styles.css';
import checkboxicon from './empty_checkbox_img.png';
import editincon from './edit_icon_img.png';
import refreshicon from './refresh_icon_img.png';
import entericon from './enter_icon_img.png';
import {add} from "./list_functions.js";

const refrescontainer = document.querySelector('.title img');
const entercontainer = document.querySelector('.text-input img');
const taskcontainer = document.querySelector('.tasks');
const inputtext=document.querySelector(".text-input input")

const taskarr = [
  
];

const storagedtasks = () => {
  taskarr.sort((a, b) => a.index - b.index);
  taskarr.forEach((element) => {
    taskcontainer.innerHTML += `<div class="tasks-item" id="${element.index}">
<div class="tasks-item-start"><img class="checkboxicon" src="${checkboxicon}" alt="checkbox icon">
<p>${element.description}</p>
<input class="edit_text" type="text" placeholder="Edit Task">
</div>
<img class="editicon" src="${editincon}" alt="edit icon">
<img class="removeicon" src="" alt="remove icon">
</div>`;
  });
};
storagedtasks();



inputtext.addEventListener("keypress", (event)=> {
  if(event.key==="Enter" && inputtext.value!==""){
    add(inputtext.value, taskarr)
    taskcontainer.innerHTML += `<div class="tasks-item" id="${taskarr[taskarr.length-1].index}">
<div class="tasks-item-start"><img class="checkboxicon" src="${checkboxicon}" alt="checkbox icon">
<p>${taskarr[taskarr.length-1].description}</p>
<input class="edit_text" type="text" placeholder="Edit Task">
</div>
<img class="editicon" src="${editincon}" alt="edit icon">
<img class="removeicon" src="" alt="remove icon">
</div>`;
 }
})


refrescontainer.src = refreshicon;
entercontainer.src = entericon;
