import {add,erase} from './list_functions.js'
import {domadd} from './dom_functions.js'
import {localStorage} from 'localstorage-polyfill'

test("Add task to array",()=>{
    let taskarr=[]
    expect ((add("element",taskarr)).length).toBe(1)
    
})

test("Remove task from array",()=>{
    let taskarr=[{description:"task", index:1, completed:false},{description:"task", index:1, completed:false}]
    expect (((erase(taskarr,1))).length).toBe(1)
    
})

test("Add task to localstorage",()=>{
    let taskarr=[]
    const container=document.createElement("div")
    add("string",taskarr)
    let storage=domadd(taskarr,container,null,null)
    expect(storage.length===taskarr.length).toBe("true")
    
    
})

/*test("Remove task from localstorage",()=>{
    let taskarr=[{description:"task", index:1, completed:false},{description:"task", index:1, completed:false}]
    expect (((erase(taskarr,1))).length).toBe(1)
    
})

test("Add task to DOM",()=>{
    let taskarr=[]
    expect ((add("element",taskarr)).length).toBe(1)
    
})

test("Remove task from DOM",()=>{
    let taskarr=[{description:"task", index:1, completed:false},{description:"task", index:1, completed:false}]
    expect (((erase(taskarr,1))).length).toBe(1)
    
})*/