// let arr = [1,2,3,4,5,6]

// console.log(arr = [])

// let obj1 = {
//     titile : "saha",
//     age : 21
// }

// let obj2 = {
//     name : "arpan",
//     city : "Kolkata"
// }

// console.log({...obj1,...obj2})


// const newObj = Object.assign({},obj1,obj2)

// console.log(newObj)


// const str = "javascript";

// // function reverseJs(str) {
// //     let result = "";
// //     for (const key of str) {
// //         result = key + result
// //     }
// //     return result ;
// // }

// // console.log(reverseJs(str))

// // const newStr = str.split("").reverse().join("")
// // console.log(newStr)

// for (let index = str.length - 1; index >0 ; index--) {
   
//     console.log(str[index])
// }


// const arr = [1,2,2,3,4,4,5];
// // output: [1,2,3,4,5]

// // function duplicateArr(arr) {
// //     return arr.filter((key,index,array) => array.indexOf(key) === index)
// // }
// // console.log(duplicateArr(arr))

// function dulicate(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
       
//         if (!result.includes(arr[index])) {
//            result.push(arr[index]) 
//         }
//     }
//     return result;
// }

// console.log(dulicate(arr))

// // function ispsal(str) {
// //     for (let index = 0; index < str.length/2; index++) {
        
// //         if (str[index] === str[str.length - 1]) {
// //             return true
// //         }else{return false}
// //     }
// // }

// // console.log(ispsal("messi"))

// // function ispal(str) {
// //     let result = str.split("").reverse().join("")
// //     return result === str
// // }

// // console.log(ispal("arpan"))

// function ispal(str) {
//     let result = "";
//     for (const key of str) {
//        result = key + result
//     }
//     return result === str

// };

// console.log(ispal("madam"))
// console.log(ispal("messi"))



const arr1 = [1,2,3,2,4,5,4];
// function duplicate(arr1) {
//     return arr1.filter((key,index,array) => array.indexOf(key) !== index)
// }

// console.log(duplicate(arr1))
// // output: [2,4]

// function dulicate(arr1) {
//     let result = []
//   for (const key of arr1) {
//      if (arr1.indexOf(key) !== arr1.lastIndexOf(key) && !result.includes(key)) {
//         result.push(key)
//      }
//  }
//  return result
// }

// console.log(dulicate(arr1))




// const arr = [1,[2,[3,4]],5];
// const newArr = arr.flat(Infinity)
// console.log(newArr)

// const arr = [1, 2, 3, 4];

// const sum = arr.reduce((acc, curr) => acc + curr, 0)
//       const result = arr.map(num => sum - num)

// console.log(result)

// console.log(a);
// var a = 10;  // undefined

// console.log(b);
// let b = 20; // Reference error "b" is not accessable before initializing



