export const add=(inputtext,taskarr)=>{
    let len=taskarr.length
    taskarr.push({
        description: inputtext,
        completed: false,
        index: len+1,
    })
    
}

export const edit=(editinput,taskarr,id)=>{
    taskarr[id].description=editinput
}

