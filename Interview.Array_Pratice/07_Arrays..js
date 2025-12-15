// let arr = [1,2,3,4,5,6];

// function isEven(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
       
//         if (arr[index] % 2 == 0) {
//            result.push(arr[index]) 
//         }
//     };
//     return result;
// };

// console.log(isEven(arr))

// function iSeven(arr) {
//   const newArr =   arr.filter((element) => element % 2 == 0)
//   return newArr;
// };

// console.log(iSeven(arr))


// let arr = ["apple", "banana", "orange", "apple", "mango"]

// function dupliCatearr(arr) {
//     let result = "";
//     for (let index = 0; index < arr.length; index++) {
//       if (!result.includes(arr[index])) {
//         result += arr[index] + " ";
//       }
        
//     }
//     return result.trim("");
// };

// console.log(dupliCatearr(arr))

// function duplicate(arr) {
//     let word = arr.filter((key,index,arr) => arr.indexOf(key) === index)
//     return word;
// };

// console.log(duplicate(arr))

// console.log([...new Set(arr)])




// let arr = [1,2,3,4,5,6];

// console.log(arr.sort((a,b) => b - a))

// function reverseArr(arr) {
//     let result = [];
//     for (let index =  arr.length - 1; index >= 0; index--) {
       
//       result.push(arr[index])
//     }
//     return result ;
// }



// console.log(reverseArr(arr))

// for (let index = arr.length -1; index >= 0 ; index--) {
  
//     console.log(arr[index])
// }


// function revArr(arr) {
//     let result = [];
//     for (const key of arr) {
//         result.unshift(key)
//     };
//     return result ;
// }

// console.log(revArr(arr))

// let arr = [12,34,7,67,87,6,5,4]

// console.log(arr.sort((a,b) => a - b))


// let arr = [1,2,3,4,5,6,7,8];

// function largestArr(arr) {
//   let word  = arr.reduce((acc,curr) => curr > acc ? curr : acc, arr[0])
//     return word
// };

// console.log(largestArr(arr))

// console.log(Math.max(...arr))

// function maximum(arr) {
//     let max = arr[0]

//     for (let index = 0; index < arr.length; index++) {
  
//         if (arr[index] > max) {
//             max = arr[index]
//         }
//     }
//     return max;
// };

// console.log(maximum(arr))


//  let arr = [1,2,3,4,5,6];
//  let arr2  = [12,23,3,45,66,6]

// // console.log([...new Set(arr,arr2)])

// function mergeUnique(a,b) {
//   return [...new Set([...a, ...b])];
// }

// console.log(mergeUnique(arr,arr2))

// function margeduplicates(arr) {
//     let newArr = arr.concat(arr2)
//     .filter((key,index,array) => array.indexOf(key) === index)
//     return newArr;
// };

// console.log(margeduplicates(arr))



// let arr = [1,2,3,4,5,6,7,7,7,7,7]

// function countnum(arr,num) {
//     let count = 0;

// for (let index = 0; index < arr.length; index++) {
//    if (num === arr[index]) {
//     count++
//    }
    
// }
// return count;
// }

// console.log(countnum(arr,7))




//  let arr = [67,89,78,80]

// const Newarr = arr.reduce((curr,acc) => curr + acc) /arr.length
// console.log(Newarr)





// let arr = [12,34,5,67,898,90];

// function secondlargest(arr) {
//     let largest = arr[0];
//     let secondlargest = arr[0];
//     for (let index = 0; index < arr.length; index++) {
  
//         if (arr[index] > largest) {
         
//           secondlargest = largest;
//         largest = arr[index]
//         }
//     }
//     return {largest,secondlargest}
// };

// console.log(secondlargest(arr))

// let arr = [1,2,34,6,78,90,8]

// function secondlargest(arr) {
//     let first = -Infinity;
//     let second = - Infinity
//     for (let num of arr) {
//         if (num > first) {
//             second = first
//          first = num
//         } else if ( num > second && num < first) {
//             second = num;
//         }
//     }
//     return second;
// };

// console.log(secondlargest(arr))

// function secondlargest(arr) {
//     let secondarr = arr.sort((a,b) => b - a)
//     return secondarr[0]
// }

// console.log(secondlargest(arr))




// let arr = [1,2,3,4,5,6,7,8];
// let arr1 = [11,20,30,40,50,60,70,80];

// const newArr = arr.every((key) => key > 10 )
// console.log(newArr)
// const newArr1 = arr1.every((key) => key > 10 )
// console.log(newArr1)



// let arr = [1,2,3,4,5,6];
// console.log(arr[arr.length-1])


// let arr = [1,2,3,4,5]
//  let arr1 = [1,1,32,46,52]

//  function sortedarr(arr,arr1) {
//     let arr3 = arr.concat(arr1)
//     let arr4 = arr3.sort((a,b) => a - b)
//     return arr4
//  }

//  console.log(sortedarr(arr,arr1))

// let arr4 = arr.concat(arr1);
// console.log([...new Set(arr4.sort((a,b) => a - b))])


// function duplicate(str) {
//     let result = str.filter((key,index,arr) => arr.indexOf(key) !== index)
//     return result;
// }

// console.log(duplicate(str))


// let arr = [1,2,3,4,5,6,7,7,7,7,7];

// function countnum(arr) {
//     let secondlargest = []
//    let newArr = arr.filter((element,index,arr) => arr[index] > element)
//    secondlargest.push(newArr)
//    return secondlargest
// }

// console.log(countnum(arr))