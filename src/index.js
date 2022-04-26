import './styles.css';
import checkboxicon from "./empty_checkbox_img.png"
import editincon from "./edit_icon_img.png"
import refreshicon from "./refresh_icon_img.png"
import entericon from "./enter_icon_img.png"


const refrescontainer=document.querySelector(".title img")
const entercontainer=document.querySelector(".text-input img")
const taskcontainer=document.querySelector(".tasks")

let taskarr=[
    {
    description: "Wash dishes",
    completed: 0,
    index: 0,
    },
    {
    description: "Complete To Do list Project",
    completed: 0,
    index: 1,
    }
]

refrescontainer.src=refreshicon
entercontainer.src=entericon
let storagedtasks=()=>{
taskarr.forEach(element=>{taskcontainer.innerHTML+=`<div class="tasks-item" id="${element.index}">
<div class="tasks-item-start"><img class="checkboxicon" src="${checkboxicon}" alt="checkbox icon">
<p>${element.description}</p>
</div>
<img class="editicon" src="${editincon}" alt="edit icon">
</div>`})
}
storagedtasks()