export default class check{
    checked(taskarr,index){
        taskarr[index-1].completed=true
        console.log(taskarr)
    }
    uncheked(taskarr,index){
        taskarr[index-1].completed=false
        console.log(taskarr)
    }
}   