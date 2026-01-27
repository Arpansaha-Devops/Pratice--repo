// let arr = [5,1,4,3,0,1]

// function sumofNum(arr) {
//     return arr.filter((item) => item % 2 != 0)
//               .reduce((acc,curr) => acc + curr ,0)
// }

// console.log(sumofNum(arr))


// let arr = [5,3,6,8,10,4]


// function recurSion(arr,n) {
//     if (n === 0) return arr[0]
// return arr[n] + recurSion(arr,n - 1)
// }

// console.log(recurSion([2,3,4,1,7,8],arr.length - 1))


// console.log([] == ![]) // true

// function fn() {
//     return 
//      {
//   name : "arpan"
//     }
// }

// console.log(fn())


// let arr = [10,12,18,6,4]

// let target = 30;

// function twoSum(arr,target) {
//     let map = new Map()

// for (let index = 0; index < arr.length; index++) {
//     let complete = target - arr[index]
// if (map.has(complete)) {
//     return [map.get(complete),index]
// }
//    map.set(arr[index],index) 
// }
// }

// console.log(twoSum(arr,target))


// let arr = [3, 7, 2, 9, 4]

// function largest(arr) {
//     let lar = arr[0]
//     for (let index = 0; index < arr.length; index++) {
       
//         if (lar < arr[index]) {
//          lar = arr[index]
//         }
//     }
//     return lar
// }

// console.log(largest(arr))


// let str = "hello"

// function revStr(str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result;
// };

// console.log(revStr(str))


// let arr =  [1, 2, 3,7, 4, 5,7]

// // function isAvailable(arr) {
// //     let map = new Map()
// //     for (let index = 0; index < arr.length; index++) {

// //         if (map.has(arr[index])) {
// //   return true
// //         }
// //   map.set(arr[index])
// //     }
// //     return false
// // }

// // console.log(isAvailable(arr))


// function isAvailable(arr) {
//     let obj = {}
//     for (const key of arr) {
//         obj[key] = (obj[key] || 0) + 1
//     }
    
//     for (const keys of arr) {
//         if (obj[keys] > 1) {
//             return true
//         }
//     }
//     return false
// }

// console.log(isAvailable(arr))


// let str = "anagram";
// let str2 = "nararam"

// function isAnagram(str,str2) {
//     if (str.length !== str2.length) return false
//     let first = str.split("").sort().join("")
//     let second = str2.split("").sort().join("")

//     return first === second
// }

// console.log(isAnagram(str,str2))


// let str = "javascript";

// function countVowel(str) {
//     let word = str.toLowerCase().split("").filter((item) => "aeiou".includes(item)).length
//     return word;
// };

// console.log(countVowel(str))


// function countVowel(str) {
//     let vowel = "aeiou";
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
       
//         if (vowel.includes(str[index])) {
//             count++
//         }
//     }
//     return  count;
// };

// console.log(countVowel(str))


// let arr = [1, 2, 3, 4]

// function sumOfNum(arr,n) {
//    if (n === 0) return arr[0]
//    return arr[n] + sumOfNum(arr,n - 1)
// }

// console.log(sumOfNum(arr,arr.length - 1))


// let str = "madam";

// // function palStr(str) {
// //     for (let index = 0; index < str.length/2; index++) {
  
// //         if (str[index] !== str[str.length - 1 - index]) {
// //            return false 
// //         }
// //     }
// //     return true
// // }

// // console.log(palStr(str))


// function isPal(str) {
//     let result = str.split("").reverse().join("")
//     return result === str
// }

// console.log(isPal(str))


// let arr =  [1, 1, 2, 2, 3]


// function removeDuplicateArr(arr) {
//     let result = []
//     for (let index = 0; index < arr.length; index++) {

//         if (!result.includes(arr[index])) {
//             result.push(arr[index])
//         }
//     }
//     return result;
// };

// console.log(removeDuplicateArr(arr))


// function removeDuplicateArr(arr) {
//     return arr.filter((item,index,array) => array.indexOf(item) === index)
// }

// console.log(removeDuplicateArr(arr))


// function removeDuplicateArr(arr) {
//    let obj = {}
//    for (const key of arr) {
//     obj[key] = (obj[key] || 0) + 1
//    }   
// let result = []

// for (const key of arr) {
//     if (obj[key] <= 1) {
//         result.push(key)
//     }
// }
// return result;
// };

// console.log(recurSion(arr))


// let num = [1,3,5]
// let num2 = [2,4,6]

// let result = [...num,...num2].sort((a,b) => a - b)

// console.log(result)
