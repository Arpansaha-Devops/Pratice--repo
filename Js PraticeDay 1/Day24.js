"use strict"


// let str = "Hello my name is Arpan";

// function foundWord(str) {
//     let count = 0;
   
//     for (const key of str) {
//         if (key === " ") {
//             count ++
//         }
//     }
//     return count + 1;
// }

// console.log(foundWord(str))



// function memoryLeak() {
//   leak = {name : "arpan"}  // error 
// }

// console.log(memoryLeak())





let str = "hello my name is Arpan";

// function largestStr(str) {
//     return str.split(" ").reduce((acc,curr) => acc.length > curr.length ? acc : curr)
// }

// console.log(largestStr(str))



function largestStr(str) {
    let result = "";
    let words = str.split(" "); 

    for (let i = 0; i < words.length; i++) {
        if (result.length < words[i].length) {
            result = words[i];
        }
    }

    return result;
}
console.log(largestStr(str));