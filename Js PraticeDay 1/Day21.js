// 'use strict'

let arr = [1,2,3,4];


// function sumofArr(arr) {
//   let res = 0;
//   for (let index = 0; index < arr.length; index++) {
  
//     res  += arr[index]
//   }  
//   return res;
// };

// console.log(sumofArr(arr))

// function printSum(arr) {
//     return arr.reduce((acc,curr) => acc + curr, 0)
// }

// console.log(printSum(arr))


// let obj = {
//     name : "arpan",
//     age : 22,
//     greet :  () => {
//         console.log(`the age of ${this.name} is ${this.age}`)
//     }
// }

// obj.greet()


// console.log(this)

// function abc() {
//     console.log(this)
// }
// abc()

let obj = {
    name : "arpan",
    greet : function (){
        console.log(this)
    }
}

obj.greet()