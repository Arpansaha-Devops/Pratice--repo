// const arr  = [1, [2, [3, [4]], 5]]


// function flatten(arr) {
//   const result = [];

//   function helper(input) {
//     for (let item of input) {
//       if (Array.isArray(item)) {
//         helper(item);
//       } else {
//         result.push(item);
//       }
//     }
//   }

//   helper(arr);
//   return result;
// }


// console.log(flatten([1, [2, [3, [4]], 5]]));


// let arr = [2,4,5,6,7]
// let target  = 9
// function twoSum(arr) {
//   let map = new Map()
//   for (let index = 0; index < arr.length; index++) {
   
//    let complete = target - arr[index]
//    if (map.has(complete)) {
//     return  [map.get(complete),index]
//    }
//     map.set(arr[index],index)
//   }
 
// }

// console.log(twoSum(arr,target))



// charecter reverse by map -------------------------------------------------------------------  

// let str = "hello how are you"
// function revStr(str) {
//   return str.split(" ").map(item => {
//     let res= "";
//     for (const key of item ) {
//       res = key + res
//     }
//     return res
//   }).join(" ")
// }

// console.log(revStr(str))


let arr1 = [1,1,1,3,3,3,2,2,2,5]

// let newStr = [... new Set(arr)]
// console.log(newStr)


// function removeDuplicate(arr) {
//   let result = [];
//   for (let index = 0; index < arr.length; index++) {
    
//     if (!result.includes(arr[index])) {
//       result.push(arr[index])
//     }
//   }
//   return result;
// };

// console.log(removeDuplicate(arr))


// let arr = [1,2,2,2,2,3,3,3,4,4,4,5,5,5]
const arr = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicate(arr) {
  let obj = {};
  for (const key of arr) {
    obj[key] = (obj[key] || 0) + 1;
  }

  let result = [];
  for (const key of arr) {
    if (obj[key] === 1) {
      result.push(key);
    }
  }

  return result;
}


console.log(removeDuplicate(arr)); // [1, 3, 5]
