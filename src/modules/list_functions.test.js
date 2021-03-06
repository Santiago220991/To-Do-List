/*
 * @jest-environment jsdom
 */
import {
  add, erase, edit, clear,
} from './list_functions.js';
import {
  domadd, domremove, domedit, domClear,
} from './dom_functions.js';
import Check from './check.js';

const myhtml = `<div class="to-do-container">
<div class="title">Today's To Do <img src="#" alt="refresh icon"></div>
<div class="text-input"><input type="text" placeholder="Add to your list..."><img src="#" alt="edit icon"></div>
<div class="tasks"></div>
<div class="clearbutton"><a>Clear all completed</a></div>`;

describe('Add and Remove a task from the array', () => {
  test('Add task to array', () => {
    const taskarr = [];
    expect((add('element', taskarr)).length).toBe(1);
  });

  test('Remove task from array', () => {
    const taskarr = [{ description: 'task', index: 1, completed: false }, { description: 'task', index: 1, completed: false }];
    expect(((erase(taskarr, 1))).length).toBe(1);
  });
});

describe('Add and Remove a task from the DOM', () => {
  test('Add a new element to the DOM', () => {
    const taskarr = [];
    document.body.innerHTML = myhtml;
    const taskcontainer = document.querySelector('.tasks');
    const old = taskcontainer.children.length;
    add('element', taskarr);
    domadd(taskarr, taskcontainer, 'url', 'url');
    let current = document.querySelector('.tasks');
    current = current.children.length;
    expect(current === (old + 1)).toBe(true);
  });

  test('Remove an element from the DOM', () => {
    const taskarr = [];
    document.body.innerHTML = myhtml;
    add('element', taskarr);
    add('element', taskarr);
    const taskcontainer = document.querySelector('.tasks');
    domadd(taskarr, taskcontainer, 'url', 'url');
    domadd(taskarr, taskcontainer, 'url', 'url');
    const old = taskcontainer.children.length;
    const removeicon = document.querySelectorAll('.removeicon');
    domremove(removeicon, 1);
    let current = document.querySelector('.tasks');
    current = current.children.length;
    expect((current + 1) === (old)).toBe(true);
  });
});

describe('Add and Remove a task from the local storage', () => {
  test('Add new item to local storage', () => {
    let taskarr = [];
    localStorage.setItem('saved', JSON.stringify(taskarr));
    const old = JSON.parse(localStorage.getItem('saved'));
    taskarr = [{ description: 'task', index: 1, completed: false }];
    localStorage.setItem('saved', JSON.stringify(taskarr));
    const current = JSON.parse(localStorage.getItem('saved'));
    expect(old).toHaveLength(current.length - 1);
  });

  test('Remove an item from local storage', () => {
    const taskarr = [{ description: 'task', index: 1, completed: false }, { description: 'task', index: 1, completed: false }];
    localStorage.setItem('saved', JSON.stringify(taskarr));
    const old = JSON.parse(localStorage.getItem('saved'));
    erase(taskarr, 1);
    localStorage.setItem('saved', JSON.stringify(taskarr));
    const current = JSON.parse(localStorage.getItem('saved'));
    expect(old).toHaveLength(current.length + 1);
  });
});

describe('Edit a task', () => {
  test('Edit array description', () => {
    const taskarr = [{ description: 'task', index: 0, completed: false }, { description: 'task', index: 1, completed: false }];
    document.body.innerHTML = myhtml;
    const taskcontainer = document.querySelector('.tasks');
    domadd(taskarr, taskcontainer, 'url', 'url');
    const editinput = document.querySelectorAll('.edit_text');
    editinput[0].value = 'new';
    edit(editinput[0].value, taskarr, 0);
    expect(taskarr[0].description === 'new').toStrictEqual(true);
  });

  test('Edit Dom task description', () => {
    const taskarr = [{ description: 'task', index: 0, completed: false }, { description: 'task', index: 1, completed: false }];
    document.body.innerHTML = myhtml;
    const taskcontainer = document.querySelector('.tasks');
    domadd(taskarr, taskcontainer, 'url', 'url');
    let editcontainer = document.querySelectorAll('.tasks-item-start p');
    const editinput = document.querySelectorAll('.edit_text');
    editinput[0].value = 'new';
    edit(editinput[0].value, taskarr, 0);
    domedit(editcontainer, 0, taskarr);
    editcontainer = document.querySelectorAll('.tasks-item-start p');
    expect(editcontainer[0].textContent === taskarr[0].description).toStrictEqual(true);
  });
});

describe('Change chekek status', () => {
  test('Change checked status in the array to true', () => {
    const checkclass = new Check();
    const taskarr = [{ description: 'task', index: 0, completed: false }];
    checkclass.checked(taskarr, 1);
    expect(taskarr[0].completed === true).toBe(true);
  });

  test('Change checked status in the array to false', () => {
    const checkclass = new Check();
    const taskarr = [{ description: 'task', index: 0, completed: true }];
    checkclass.uncheked(taskarr, 1);
    expect(taskarr[0].completed === false).toBe(true);
  });
});

describe('Delete all completed', () => {
  test('Delete all items marked true', () => {
    let taskarr = [{ description: 'task', index: 1, completed: true }, { description: 'task', index: 2, completed: false },
      { description: 'task', index: 3, completed: true }];
    taskarr = clear(taskarr);
    expect(taskarr).toHaveLength(1);
  });
  test('Delete all items marked complete from the DOM', () => {
    const tasksHtml = `<div class="tasks"><div class="tasks-item" id="1">
      <div class="tasks-item-start"><input type="checkbox" class="checkboxicon">
      <p>task 1</p>
      <input class="edit_text" type="text" placeholder="Edit Task" value="task 1">
      </div>
      <img class="edit_icon">
      <img class="removeicon">
      </div><div class="tasks-item" id="2">
      <div class="tasks-item-start"><input type="checkbox" class="checkboxicon" checked>
      <p>task 2</p>
      <input class="edit_text" type="text" placeholder="Edit Task" value="task 4">
      </div>
      <img class="edit_icon">
      <img class="removeicon">
      </div>
      <div class="tasks-item" id="2">
      <div class="tasks-item-start"><input type="checkbox" class="checkboxicon" checked>
      <p>task 3</p>
      <input class="edit_text" type="text" placeholder="Edit Task" value="task 4">
      </div>
      <img class="edit_icon">
      <img class="removeicon">
      </div>
      </div>`;
    document.body.innerHTML = tasksHtml;
    let taskschekbox = document.querySelectorAll('.checkboxicon');
    domClear(taskschekbox);
    taskschekbox = document.querySelectorAll('.checkboxicon');
    expect(taskschekbox).toHaveLength(1);
  });
});