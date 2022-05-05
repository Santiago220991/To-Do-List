/*
 * @jest-environment jsdom
 */
import { add, erase } from './list_functions.js';
import { domadd, domremove } from './dom_functions.js';

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
})

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
})