// satisfy the condition ---

// let a = {
//     i: 1,
//     toString: function() {
//         return this.i++;
//     }
// }


// if (a == 1 && a == 2 && a == 3) {
//     console.log('Condition satisfied!');
// }


// let arr = [1,2,[2,3,4],5,6]

// function faltternArray(arr) {
//  let result = [];
//  for (let i = 0; i < arr.length; i++) { 
//     if (Array.isArray(arr[i])) {
//         result.push(...faltternArray(arr[i]));
//     } else {
//         result.push(arr[i]);    
//     }
//  }
//  return result
// };

// console.log(faltternArray(arr));     // Time complexcity O(n) because we are visiting each element once, where n is the total number of elements in the array including nested arrays.



// console.log(arr.flat(Infinity));   // Time complexcity O(n) because we are visiting each element once, where n is the total number of elements in the array including nested arrays.




// console.log("1")

// setTimeout(() => {
//     console.log("2")
// }, 0)

// Promise.resolve().then(() => console.log("5"));

// (() => console.log("4"))()

// console.log("6")




// const abc = {
//     x : 1

// }

// const xyz = abc  // its sharing same memory refference 

// xyz.x = 4

// console.log(abc.x)


// function first(a) {
//     return function second(b) {
//         return function third(c) {
//            console.log(a + b + c) 
//         }
//     }
// }

// const answer = first(1)(2)(3)

// first(1)(2)(3)

// console.log(answer)


let name = "JavaScript";

if (name == "java" ||"python") {
    console.log("printed")
} else {
    console.log("not printed")
}
