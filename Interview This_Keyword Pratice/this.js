"use strict"


console.log(this)   // in browser it will print window object and in node it will give us empty object in any mode.


// let obj = {
//     name : "arpan",
//     age : 22,
//     greet :  () => {
//         console.log(`the age of ${this.name} is ${this.age}`)
//     }
// }

// obj.greet()





function abc() {
    console.log(this)
}
abc()  // undefined in strict mode or global object .. 
// window.abc()  // in node error but in browser it  will print window object.



// let obj = {
//     name : "arpan",
//     greet : function (){
//         console.log(this)
//     }
// }

// obj.greet()


let obj = {
    name : "Arpan",
    greet(){
        console.log(this.name)
    }
}

obj.greet()
const newObj = obj.greet
newObj()  // undefined because this is not refering to the obj but to the global object in non strict mode and in strict mode it will be undefined. 
