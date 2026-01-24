// let str = "arpan is a good boy"


// function revEachchar(str) {
//     return str.split(" ").map((item) => {
//         let rev = "";
//         for (const key of item) {
//            rev = key + rev
//         }
//         return rev
//     }).join(" ")
// }

// console.log(revEachchar(str))


// question 2 - palstr & palnum


// let str = "malalam";
// let num = 101;

// function isPal(str) {
//     for (let index = 0; index < str.length/2; index++) {

//         if (str[index] !== str[str.length - 1 - index] ) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPal(str))

// function isPal(str) {
//     let result = "";
//     for (const item of str) {
//         result = item + result
//     }
//     return result === str;
// };


// console.log(isPal(str))


// function ispsal(num) {
//     let result = "";
//     let rev = num.toString().split("")
//     for (const key of rev) {
//         result = key + result
//     }
//     return result === rev.join("")
// }

// console.log(ispsal(num))


// question number 3  - anagram or not 


// let str = "listen"
// let str2 = "silent"

// const anagram = (str,str2) => {
//    let first = str.split("").sort().join()
//    let second = str2.split("").sort().join()

//    return first === second
// }

// console.log(anagram(str,str2))


// function isAnagram(str,str2) {
//     if (str.length !== str2.length) return false;
//     let obj = {};
//     for (const key of str) {
//         obj[key] = (obj[key] || 0) + 1
//     }

//     for (const key of str2) {
//         if (!obj[key]) return false
//         obj[key]--
//     }
// return true;
// };

// console.log(isAnagram(str,str2))


//  Question Number 4 -


// Target nunber two sum 


// function twoSum(arr,target) {
//     let set = new Set()

//     for (const num of arr) {
//        let complete = target - num 
//        if (set.has(complete)) {
//         return [complete,num]
//        } 
//        set.add(num)
//     }
//     return []
// }

// console.log(twoSum([1,2,5,8,13],13))