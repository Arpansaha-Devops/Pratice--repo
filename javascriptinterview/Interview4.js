// let str = "hello i am arpan"

// function reversestr(str) {
//     let result = ""
//     word = str.split(" ")
//     for (const key of word) {
//         result = key+" "+result;
//     }
//     return result.trim();
// }

// console.log(reversestr(str))


// let str = "Hello i am arpan"


// function reversestr(str) {
//    let result = ""
//    let word = str.split('') 
//   for (let key of word) {
//    result = key + result
//   }
//   return result
// }

// console.log(reversestr(str))


// let str = "javascript"

// function countvowel(str) {
//     let word = str.split("").filter((key) => "aeiou".includes(key)).length
//     return word
// }

// console.log(countvowel(str))


// let arr = [1,22,34,55,2,6,7,8,56]

// function largestarr(arr) {
//     let result = arr[0]
//     for (const key of arr) {
//         if (key > result) {
//            result = key 
//         }
//     }
//     return result
// }

// console.log(largestarr(arr))

// function largestarr(arr) {
//     return arr.reduce((acc,curr) => curr > acc ? curr : acc ,arr[0] )
// }

// console.log(largestarr(arr))


let arr = [1,1,2,2,2,3,4,5,6,7]

// console.log([... new Set(arr)])

// function removedulicate(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
//       if (!result.includes(arr[index])) {
//         result.push(arr[index])
//       }
        
//     }
//     return result;
// }

// console.log(removedulicate(arr))


// let obj1  = {
//     nAme : "arpan",
//     lastName : "saha",
// }
// function greet(age) {
//     console.log(`Hi ${this.nAme + this.lastName} your agr is ${age} `)
// }

// greet.apply(obj1,[21])

