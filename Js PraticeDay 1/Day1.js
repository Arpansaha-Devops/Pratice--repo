// const str = "hello";

// // const newArr = str.split("").reverse().join("")
// // console.log(newArr)
// // function revStr(str) {
// //     let result = "";
// //     for (const key of str) {
// //         result = key + result;
// //     };
// //     return result;
// // }
// // console.log(revStr(str))


// let num = 121;
// // const newNum = num.toLocaleString().split("").reverse().join("")
// // console.log(newNum ===  String( num))

// // function palnum(num) {
// //     let numStr = String(num);
// //     let result = "";
// //     for (let index = numStr.length - 1; index >= 0 ; index--) {
    
// //        result += numStr[index]
// //     }
       
// //     return  Number(result) === num
  
// // }
// // console.log(palnum(num))

// let arr = [3, 7, 2, 9, 1]
// // function largestElement(arr) {
// //     let largest = arr[0];
// //    for (const key of arr) {
// //     if (key > largest) {
// //         largest = key
// //     }
// //    }
// //    return largest

// // };


// // function largest(arr) {
// //     let largest = arr[0]
// //     for (let index = 0; index < arr.length; index++) {
// //      if (arr[index] > largest) {
// //         largest = arr[index]
// //      }
        
// //     }
// //     return largest ;
// // };

// // console.log(largest(arr))

// // console.log(largestElement(arr))

// // const largest = Math.max(...arr)
// // console.log(largest)


// const arr2 = [1,2,2,3,4,4]

// // function duplicvateArr(arr2) {
// //     let result =[];
// //     for (let index = 0; index < arr2.length; index++) {
       
// //         if (!result.includes(arr2[index])) {
// //             result.push(arr2[index])
// //         }
// //     }
// //     return result
// // }
// // console.log(duplicvateArr(arr2))

// const str1 = "javascript";

// // function vowelstr(str1) {
// //     let vowel = "aeiou"
// //     let result = str1.toLowerCase().split("").filter((item) => vowel.includes(item))
// //     let count = result.length;
// //     return count;
// // }

// // console.log(vowelstr(str1))

// // function vowelStr(str1) {
// //     let vowel = "aeiou"
// //     let count = 0;
// //     for (let index = 0; index < str1.length; index++) {
// //       if (vowel.includes(str1[index])) {
// //         count++
// //       }
        
// //     }
// //     return count;
// // };
// // console.log(vowelStr(str1))



// // Method 1: Sort characters
// // function isAnagram(str1, str2) {
// //     const sorted1 = str1.split("").sort().join("");
// //     const sorted2 = str2.split("").sort().join("");
// //     return sorted1 === sorted2;
// // }
// // console.log(isAnagram("listen", "silent")); // true

// // // Method 2: Character frequency count
// // function isAnagramCount(str1, str2) {
// //     if (str1.length !== str2.length) return false;
// //     const count = {};
// //     for (let char of str1) {
// //         count[char] = (count[char] || 0) + 1;
// //     }
// //     for (let char of str2) {
// //         if (!count[char]) return false;
// //         count[char]--;
// //     }
// //     return true;
// // }
// // console.log(isAnagramCount("listen", "silent")); // true

// // const arr4 = [1,[2,[3,4]],5]
// // console.log(arr4.flat(Infinity))

// let str32 = "aabbbc"
// // function countnum(str32) {
// //     let obj = {};
// //     for (const key of str32) {
// //         obj[key] = (obj[key] || 0) + 1
// //     }
// //     return obj;
// // };

// // console.log(countnum(str32))

// const Arr =  [10, 5, 8, 20]

// // function seCondLargest(Arr) {
// // let largest = -Infinity;
// // let secondlargest = -Infinity;
// // let result = [];
// // for (const key of Arr) {
// //     if (key > largest) {
// //          secondlargest = largest
// //          largest = key
// //     }else if (secondlargest < largest && secondlargest > key) {
// //         secondlargest = key
// //     }
// // }
// // return {secondlargest};
    
// // }
// // console.log(seCondLargest(Arr))

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const fn1 = outer();
// fn1(); // 1
// fn1(); // 2

//  //   because of clousure js remember his lexical parent enviornment even though the parent function finish executing
 

