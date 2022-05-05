import {add,erase} from './list_functions.js'
import {domadd} from './dom_functions.js'
import {localStorage} from 'localstorage-polyfill'

test("Add task to array",()=>{
    let taskarr=[]
    expect ((add("element",taskarr)).length).toBe(1)
    
})

test("Remove task from array",()=>{
    let taskarr=[{description:"task", index:1, completed:false},{description:"task", index:1, completed:false}];
    expect (((erase(taskarr,1))).length).toBe(1);
    
})

test("Remove task from localstorage", ()=>{
    let taskarr=[{description:"task", index:1, completed:false},{description:"task", index:1, completed:false}];
    expect (((erase(taskarr,1))).length).toBe(1);
})

test("Add task to DOM",()=>{
    let taskarr=[]
    expect ((add("element",taskarr)).length).toBe(1);
    
});