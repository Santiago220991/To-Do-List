import './styles.css';

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

taskarr.forEach(element=>{taskcontainer.innerHTML+=`<div id="${element.index}"><img src="./empty_checkbox_img" alt="checkbox icon">${element.description}</div>`})