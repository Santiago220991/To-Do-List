export const dragStart = (element) => {
  element.dataTransfer.setData('text', element.target.id);
};

export const dragEnter = (element) => {
  element.preventDefault();
  element.target.classList.add('drag-over');
};

export const dragOver = (element) => {
  element.preventDefault();
  element.target.classList.add('drag-over');
};

export const dragLeave = (element) => {
  element.target.classList.remove('drag-over');
};

export const drop = (element, taskarr) => {
  let dragindex;
  if (element.target.className === 'tasks-item drag-over') {
    element.target.classList.remove('drag-over');
    const clone = element.target.cloneNode(true);
    const data = element.dataTransfer.getData('text');
    const parent = element.target.parentNode;
    if (clone.id !== data) {
      const nodelist = parent.childNodes;
      for (let i = 0; i < nodelist.length; i += 1) {
        if (nodelist[i].id === data) {
          dragindex = i;
        }
      }
      parent.replaceChild(document.getElementById(data), element.target);
      parent.insertBefore(clone, parent.childNodes[dragindex]);
      parent.childNodes.forEach((element, index) => { element.id = index + 1; });
      parent.childNodes.forEach((element) => {
        element.addEventListener('dragstart', dragStart);
      });

      const taskdescription = document.querySelectorAll('.tasks-item-start p');
      const taskschekbox = document.querySelectorAll('.checkboxicon');
      taskarr.forEach((element, index) => {
        element.description = taskdescription[index].textContent;
      });
      taskschekbox.forEach((element, index) => {
        if (element.checked) {
          taskarr[index].completed = true;
        } else {
          taskarr[index].completed = false;
        }
      });
      localStorage.setItem('saved', JSON.stringify(taskarr));
      window.location.reload();
    }
  } else {
    element.target.classList.remove('drag-over');
  }
};