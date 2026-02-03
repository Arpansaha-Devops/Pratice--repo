// let str = "hello my name is arpan";
let str = "hello"

// function reverseStr(str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result;
//     }
//     return result;
// }

// console.log(reverseStr(str))

// function revStr(str) {
//     return str.split(" ").map(item => {
//         let result = "";
//         for (const key of item) {
//             result = key + result
//         }
//         return result;
//     }).join(" ")
// }

// console.log(revStr(str))


// let str = "javascript";

// function findVowel(str) {
//     let vowel = "aeiou"
//     return str.toLowerCase().split("").filter((item) => vowel.includes(item) ).length
// }

// console.log(findVowel(str))

// function findVowel(str) {
//     let vowel = "aeiou";
//     let count = 0;
//     let word = str.toLowerCase()
//     for (let index = 0; index < word.length; index++) {
//        if (vowel.includes(word[index])) {
//         count++
//        }
//     }
//     return count ;
// }

// console.log(findVowel(str))

// let str1 = "messi"

// function isPal(str1) {
//     let result = str1.split("").reverse().join("")
//     return result === str1;
// }

// console.log(isPal(str1))

// function isPal(str1) {
//     for (let index = 0; index < str1.length/2; index++) {
      
//         if (str1[index] !== str1[str1.length - 1 - index]) {
//            return false 
//         }
//     }
//     return true
// }


// console.log(isPal(str1))


// let str1 = "silent";
// let str2 = "listen";

// function isAnangram(str1,str2) {
//     if (str1.length !== str2.length) return false
    
//     let first = str1.split("").sort().join("")
//     let second = str2.split("").sort().join("")

//     return first === second
// }

// console.log(isAnangram(str1,str2))


// function isAnnagram(str1,str2) {
//     if (str1.length !== str2.length) return false;
//     let obj = {};
//     for (const key of str1) {
//         obj[key] = (obj[key] || 0) + 1
//     }
    
//     for (const key of str2) {
//         if (!obj[key]) {
//             obj[key]--
//         }
//     }
//     return true;
// };


// console.log(isAnnagram("anagram","nagaram"))


let arr = [1,2,2,2,3,3,4,5,5,6];


// function removeuplicate(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
      
//         if (!result.includes(arr[index])) {
//             result.push(arr[index])
//         }
//     }
//     return result;
// };

// console.log(removeuplicate(arr))


// function removeDupli(arr) {
//     return arr.filter((item,index,array) => array.indexOf(item) === index)
// }

// console.log(removeDupli(arr))


// function removeDuplicate(arr) {
//     let seen = {};
//     let result = [];

//     for (let item of arr) {
//         if (!seen[item]) {
//             seen[item] = true;
//             result.push(item);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicate(arr));
// [1,2,3,4,5,6]
