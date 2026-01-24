// print the number even or odd


let num = 10;

// if (num % 2 == 0) {
//     console.log("even")
// }else{
//     console.log("odd")
// }

// if(Math.floor(num/2)*2 == num){
//   console.log("even")
// }else{
//     console.log("odd")
// }

//  Number is prime or not


// function isprime(num) {
//     if (num <= 1) return false
    
//     for (let index = 2; index <= num; index++) {
    
//         if (num % index == 0) {
//           return false
//         }
       
//     }
//     return true
    
// }

// console.log(isprime(num))


// function sumOfNum(num) {
//     let value = 0;
//     for (let index = 0; index <= num; index++) {
       
//         value += index
//     }
//     return value
// }

// console.log(sumOfNum(num))


// let arr = [1,2,2,2,3,3,4,5]

// const newArr = [...new Set(arr)]

// console.log(newArr)

// function removeDupil(arr) {
//     return arr.filter((item,index,array) => array.indexOf(item) !== index)

// }

// console.log(removeDupil(arr))


// function duplicateArr(arr) {
//    let obj = {};
//    for (const key of arr) {
//     obj[key] = (obj[key] || 0) + 1
//    }
//   let result = []
//    for (const item in obj) {
//     if (obj[item] <= 1) {
//      result.push(item)
//     }
//    }
//  return result
// }

// console.log(duplicateArr(arr))

// function duplicateArr(arr) {
//     let map = new Map()
//     let result = [] 
//    for (const key of arr) {
//      if (map.has(key)) {
//         result.push(key)
//      } 
//      map.set(key)
//    }
//    return result
// }

// console.log(duplicateArr(arr))

// let arr = [1, [2, [3, 4], 5], 6]

// console.log(arr.flat(Infinity))


// const obj = { a: 1, b: { c: 2 } };

// const deepCopy = structuredClone({},obj)

// deepCopy.a = 10

// console.log(deepCopy.a)
// console.log(obj.a)


// function first(a) {
//     return function second(b) {
//         return function third(c) {
//          return function fourth(d) {
//             return a + b + c + d
//          }
//         }
//     }
// }

// console.log(first(10)(20)(30)(40))


let str = "arpan";

