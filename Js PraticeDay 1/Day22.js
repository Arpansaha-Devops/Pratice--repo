// Give me some example of clousures ----


// function a() {
//   let count = 0;
//   return function b() {
//     count ++ 
//     console.log(count);
//   }  
// }



// let c = a();
// c()
// c()
// c()

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }


// give me the difference between filter & Find methods ----

// let arr  = [1,2,3,4];

// function filterMethod(arr) {
//     return arr.filter(item => item >= 2 )
// }
// function findMethod(arr) {
//     return arr.find(item => item >= 2 )
// }

// console.log(filterMethod(arr))
// console.log(findMethod(arr))

console.log([1,2] == "1,2"); // true
// console.log([1,2] === "1,2"); // false


// let str = "hello";

// function revStr(str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result;
// }

// console.log(revStr(str))


let str = "racar";

// function isPalstr(str) {
//     for (let index = 0; index < str.length/2; index++) {
       
//         if (str[index] !== str[str.length - 1 - index]) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPalstr(str))


function ispalStr(str) {
    let result = str.split("").reverse().join("")
    return result === str
};

console.log(ispalStr(str))