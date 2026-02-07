// let str = "hello";

// function revStr(str) {
//     let rev = "";
//     for (const key of str) {
//         rev = key + rev
//     }
//     return rev;
// };

// console.log(revStr(str))

// function revStr(str) {
//     return str.split('').reduce((acc,curr) => curr + acc , "")
// }

// console.log(revStr(str))


// let str = "madam";

// // function palStr(str) {
// //     let result = str.split("").reverse().join("")
// //     return result === str
// // }

// // console.log(palStr(str))

// function palStr(str) {
//     for (let index = 0; index < str.length/2; index++) {
       
//         if (str[index] !== str[str.length - 1 - index]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(palStr(str))




// let arr = [1,2,2,2,2,3,3,4,4]

// // function removeDupli(arr) {
// //     return arr.filter((item,index) => arr.indexOf(item) === index) 
// // }

// // console.log(removeDupli(arr))

// // function removeDupli(arr) {
// //     let result = [];
// //     for (let index = 0; index < arr.length; index++) {
       
// //         if (!result.includes(arr[index])) {
// //             result.push(arr[index])
// //         }
// //     }
// //     return result;
// // };

// // console.log(removeDupli(arr))

// let newStr = [...new Set(arr)]
// console.log(newStr)


// let str = "aabbccaa"

// function countChar(str) {
//     let obj = {};

//     for (const key of str) {
//         obj[key] = (obj[key] || 0) + 1
//     }
//     return obj;
// };

// console.log(countChar(str))
// let str = "hello my name is arpn"

// function firstLetterUpper(str) {
//     return str
//         .split(" ")
//         .filter(word => word !== "")
//         .map(word => word[0].toUpperCase() + word.slice(1))
//         .join(" ");
// }
// console.log(firstLetterUpper(str))


// another approach - 
// let str1 = "HELLO HOW ARE YOU";

// function firstCharup(str1) {
//     let result = "";

//     for (let i = 0; i < str1.length; i++) {
//         let code = str1.charCodeAt(i);

//         // If uppercase letter
//         if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(code + 32);
//         } else {
//             // space or other characters
//             result += str1[i];
//         }
//     }

//     return result;
// }

// console.log(firstCharup(str1));


let arr = [1, 6, 0, 3, 0, 2, 8];

function moveZerosToEnd(a) {
  let write = 0;

  for (let read = 0; read < a.length; read++) {
    if (a[read] !== 0) a[write++] = a[read];
  }
  while (write < a.length) a[write++] = 0;

  return a;
}

console.log(moveZerosToEnd([...arr])); // [1, 6, 3, 2, 8, 0, 0]
