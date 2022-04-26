import './styles.css';
import checkboxicon from './empty_checkbox_img.png';
import editincon from './edit_icon_img.png';
import refreshicon from './refresh_icon_img.png';
import entericon from './enter_icon_img.png';
import * as fun from "./list_functions.js";
import deleteicon from "./erase_icon_img.png";


const refrescontainer = document.querySelector('.title img');
const entercontainer = document.querySelector('.text-input img');
const taskcontainer = document.querySelector('.tasks');
const inputtext=document.querySelector(".text-input input")


const taskarr = [
  
];

const storagedtasks = () => {
 
  taskarr.forEach((element) => {
    taskcontainer.innerHTML += `<div class="tasks-item" id="${element.index}">
<div class="tasks-item-start"><img class="checkboxicon" src="${checkboxicon}" alt="checkbox icon">
<p>${element.description}</p>
<input class="edit_text" type="text" placeholder="Edit Task">
</div>

<img class="editicon" src="${editincon}" alt="edit icon">
<img class="removeicon" src="${deleteicon}" alt="remove icon">
</div>`;
  });
};
storagedtasks();



inputtext.addEventListener("keypress", (event)=> {
  if(event.key==="Enter" && inputtext.value!==""){
    fun.add(inputtext.value, taskarr)
    taskcontainer.innerHTML += `<div class="tasks-item" id="${taskarr[taskarr.length-1].index}">
<div class="tasks-item-start"><img class="checkboxicon" src="${checkboxicon}" alt="checkbox icon">
<p>${taskarr[taskarr.length-1].description}</p>
<input class="edit_text" type="text" placeholder="Edit Task">
</div>
<img class="edit_icon" src="${editincon}" alt="edit icon">
<img class="removeicon" src="${deleteicon}" alt="remove icon">
</div>`;

const editcontainer=document.querySelectorAll(".tasks-item-start p")
const editbutton=document.querySelectorAll(".edit_icon")
const remove_icon=document.querySelectorAll(".removeicon")
const editinput=document.querySelectorAll(".edit_text")
editbutton.forEach((element,index)=>{element.addEventListener("click", ()=>{
  remove_icon[index].classList.add("active")
  editcontainer[index].classList.add("active")
  editbutton[index].classList.add("active")
  editinput[index].classList.add("active")
  editinput[index].addEventListener("keypress",(event)=>{
    if(event.key==="Enter"&& editinput[index].value!==""){
      fun.edit(editinput[index].value, taskarr, index)
      editcontainer[index].textContent=taskarr[index].description
      editcontainer[index].classList.remove("active")
      editinput[index].classList.remove("active")
      editbutton[index].classList.remove("active")
      remove_icon[index].classList.remove("active")
    }}
  )}
)} 
)
remove_icon.forEach((element,index)=>{element.addEventListener("click",()=>{
  fun.erase(taskarr,remove_icon[index].parentElement.id)
  remove_icon[index].parentElement.remove()
  const tasks=document.querySelectorAll(".tasks-item")
  tasks.forEach((element,index)=>{element.id=taskarr[index].index})
  })
})
}
  })
 




refrescontainer.src = refreshicon;
entercontainer.src = entericon;
