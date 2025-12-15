

// function secunce(str1,str2) {
//     let result = [];
//       const len = Math.max(str1.length, str2.length); //  finding the maximum length for loop through the two strings ;
//     for (let index = 0; index <len; index++) {
       
//         if (str1[index]) {   //  If condition is use here to check s the charecter available here or not if it is available then push it into result ;

//             result .push(str1[index]) 
//         }
//         if (str2[index]) {   // same logic for str2[index]
//             result.push(str2[index])
//         }
//     }
//     return result ;
// }

// console.log(secunce("arpan","saha"))  // "asrahpaan"



// optimize version -


// function interleave(a, b) {
//   const result = [];
//   const len = Math.max(a.length, b.length);

//   for (let i = 0; i < len; i++) {
//     if (a[i] !== undefined) result.push(a[i]);
//     if (b[i] !== undefined) result.push(b[i]);
//   }

//   // If both are strings → return string
//   // If they are arrays → return array
//   return typeof a === "string" && typeof b === "string"
//     ? result.join('')
//     : result;
// }

// // 👉 Examples
// console.log(interleave("arpan", "saha")); 
// // Output: "asraphaaan"

// console.log(interleave(["a","r","p","a","n"], ["s","a","h","a"])); 
// // Output: ["a","s","r","a","p","h","a","a","n"]



let arr = [1,2,3,4,4,5,6,7,5,7]

// function duplicateArr(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
       
//         if (!result.includes(arr[index])) {
//             result.push(arr[index])
//         }
//     }
//     return result;
// }

// console.log(duplicateArr(arr))

// function dulicateArr(arr) {
//     return arr.filter((key,index,arry) => arry.indexOf(key) === index)
// }

// console.log(dulicateArr(arr))


let str = "arpan"

// function reverseStr(str) {
//     let result = "";
//     for (let index =  str.length - 1; index >= 0; index--) {
      
//         result += str[index] 
//     }
//     return result;
// };

// console.log(reverseStr(str))

// function revStr(str){
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result;
// };

// console.log(revStr(str))






