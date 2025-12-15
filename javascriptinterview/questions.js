// function normal() {
//   console.log(this); // depends on caller
// }
// const arrow = () => console.log(this); // takes 'this' from parent


// let str = "arpan";

// let newStr = str.split("").reverse().join()

// console.log(newStr)


// function isPalindrome(str) {
//   str = str.toLowerCase();
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Arpan"));   // false


// function isspal(str){
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length/2; i++) {
//       if (str[i] != str[str.length-1-i]) {
//         return false
//       }
        
//     }
//     return true;
// }
   

// console.log(isspal("racecar"));


// let str = "arpan";
// let vowels = "aeiou";
// let count = 0;

// for (let index = 0; index < str.length; index++) {
    
//     if (vowels.includes(str[index])) {
//         count++
//     }
// }
// console.log(`the number of vowels are : ${count}`)


// let str = [12,34,3,45,6,8];

// let largest = str.reduce((max,crr) => crr > max ? crr : max,str[0])
// let lowest = str.reduce((min,crr) => crr < min ? crr : min,str[0]);

// console.log(`the largest number of the arry is ${largest}`)
// console.log(`the smallest number of the arry is ${lowest}`)

// const arr = [3, 7, 2, 9, 4];

// let larrgest = arr[0];
// let smallest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) largest = arr[i];
//   if (arr[i] < smallest) smallest = arr[i];
// }

// console.log("Largest:", largest);   // 9
// console.log("Smallest:", smallest); // 2


// function outer() {
//     const userName = "arpan";
//     function inner() {
//         const website = "youtube";
//         console.log(userName)
//     };
//     inner()
// }
// outer()

// console.log({} === {}) // false
// console.log({} == {}) // false


// const obj1 = { // conver  and object into string ...
//     Name : "arpan",
//     lastName : "saha",
// }

// console.log( typeof  JSON.stringify(obj1))


// let arr = [1,2,3,4,5];

// const newArr = arr.reduce((acc,curr) => acc + curr ,0)
//  console.log(newArr)



// const arr = [1,2,3,4,5,6]

// const newArrw   = arr.filter(isEven)

// console.log(newArrw)

// function isEven(element) {
//     const newElement = element % 2 === 0;
//   return newElement
// }




// let str = ['a',"b","c","d","b","a"]


// console.log([...new Set(str)])

// function duplicate(str) {
//     let result = [];
//     for (let index = 0; index < str.length; index++) {
    
//         if (!result.includes(str[index])) {
//             result.push(str[index])
//         }
//     }
//     return result;
// };

// console.log(duplicate(str))

// let arr = ["a", "b", "c","d","e","f","a","b"]

// function indexstr(arr) {
//     let element = "a";
//     let indee = [];
//     let result = arr.indexOf(element)

//     while (result !== - 1) {
//         indee.push(result)
//         result = arr.indexOf(element,result + 1)
//     }
//    return indee
// }

// console.log(indexstr(arr))


// function isEven(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
    
//         if (arr[index] % 2 == 0) {
//             result.push(arr[index])
//         }
//     }
//     return result;
// };

// console.log(isEven([1,2,3,4,5,6,7,8]))



// let arr = ["a","b","c","d","a","e"]

// function indexcount(arr) {
//     let indexce = []
//     arr.forEach((element,index,) => {
//         if (element === "a") {
//             indexce.push(element,index)
//         }
//     })
//     return indexce;
// };

// console.log(indexcount(arr))





// let arr = [1,256,3,4,5,67,3,5];

// console.log(Math.max(...arr))
//  function largest(arr) {
//     let largestArr = arr.sort((a,b) => b - a)
//     return  largestArr[0];
//  };

//  console.log(largest(arr))

// function largest(arr) {
//     let largest = arr[0]
//     for (const key of arr) {
//         if (key > largest) {
//             largest = key
//         }
//     }
//     return largest
// }

// console.log(largest(arr))

// function largestnum(arr) {
//     const newArr = arr.reduce((acc,curr) => curr > acc ? curr : acc ,arr[0])
//     return newArr;
// };

// console.log(largestnum(arr))


// function largest(arr) {
//     let largest = arr[0]
//     for (let index = 0; index < arr.length; index++) {
//      if (arr[index] > largest) {
//         largest = arr[index]
//      }
        
//     }
//     return largest ;
// };

// console.log(largest(arr))


 // ++++++++++++++++++++++++++++++++++++++++ secondLargestnumber ++++++++++++++++++++++++++++++++++++++++++++++++++++++ // 


// let arr = [1,2,3,4,545,5,6];

// function secondlargest(arr) {
//     let word = arr.sort((a,b) => b - a)
//     return word[1];
// };

// console.log(secondlargest(arr))

// function secondlargest(arr) {
//     let largest =-Infinity;
//     let second = - Infinity;

//     for (const key of arr) {
//         if (key > largest) {
//           second = largest
//           largest = key
//         }else if (key < largest && key > second) {
//            second = key 
//         }
//     }
//     return {largest,second}
// }

// console.log(secondlargest(arr))


 // ++++++++++++++++++++++++++++++++++++++++ smallestnumber ++++++++++++++++++++++++++++++++++++++++++++++++++++++ // 


// let arr = [8, 12, 10];


//  console.log(Math.min(...arr))

// function smallest(arr) {
//    let smallest = arr[0]
//    for (let index = 0; index < arr.length; index++) {

//     if (arr[index] < smallest) {
//         smallest = arr[index]
//     }
//    }
//    return smallest
// }

// console.log(smallest(arr))


// let arr1 = [8, 12, 10];


// function secondsmallest(arr) {
//     let first = Infinity;
//     let second = Infinity;
//     for (const key of arr) {
//         if (key < first) {
//            second = first
//            first = key 
//         } else if ( key > first && key < second) {
//             second = key
//         }
//     }
//     return {first,second}
// }

// console.log(secondsmallest(arr1))