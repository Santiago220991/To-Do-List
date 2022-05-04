
export   const domadd=(taskarr,taskcontainer,editincon,deleteicon)=>{
    localStorage.setItem('saved', JSON.stringify(taskarr));
        taskcontainer.innerHTML += `<div class="tasks-item" id="${taskarr[taskarr.length - 1].index}">
    <div class="tasks-item-start"><input type="checkbox" class="checkboxicon">
    <p>${taskarr[taskarr.length - 1].description}</p>
    <input class="edit_text" type="text" placeholder="Edit Task" value="${taskarr[taskarr.length - 1].description}">
    </div>
    <img class="edit_icon" src="${editincon}" alt="edit icon">
    <img class="removeicon" src="${deleteicon}" alt="remove icon">
    </div>`;
    return sessionsaved = JSON.parse(localStorage.getItem('saved'));
    }
    
export   const domremove=(removeicon,index,taskarr)=>{
      localStorage.setItem('saved', JSON.stringify(taskarr));
          removeicon[index].parentElement.remove();
          const tasks = document.querySelectorAll('.tasks-item');
          tasks.forEach((element, index) => { element.id = taskarr[index].index; });
    }
    
export    const domedit=(editcontainer,index,taskarr)=>{
      localStorage.setItem('saved', JSON.stringify(taskarr));
      editcontainer[index].textContent = taskarr[index].description;
      editcontainer[index].classList.remove('active');
    }