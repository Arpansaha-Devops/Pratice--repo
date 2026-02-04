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