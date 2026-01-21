// // const arr = [4,9,5,6,7]

// // // const newArr = Math.max(...arr);

// // // console.log(newArr)

// // const newArr = arr.sort((a,b) => b - a)
// // console.log(newArr[0])

// // const arr = [1,1,1,2,2,2,3,3,4,4,5]

// // const newArr = arr.filter((item,index,array) => array.indexOf(item) === index)
// // console.log(newArr)

// // function removeDuplicateArr(arr) {
// //     let result = [];
// //     for (const key of arr) {
// //         if (!result.includes(key)) {
// //             result.push(key)
// //         }
// //     }
// //     return result;
// // };
// // console.log(removeDuplicateArr(arr))

// // const newArr = [...new Set(arr)]
// // console.log(newArr)

// // const newArr = arr.filter((item) => arr.indexOf(item) !== arr.lastIndexOf(item))
// // console.log(newArr)


// // const str = "javascript";
// // // function countVowel(str) {
// // //     let count = 0;
// // //     let word = str.split("").filter((item) => "aeiou".includes(item))
// // //     return  count = word.length
// // // }

// // // console.log(countVowel(str))

// // // function countVowel() {
// // //     let vowel = "aeiou";
// // //     return str.split("").filter((item) => vowel.includes(item)).length
// // // }

// // // console.log(countVowel(str))

// // function countVowwel(str) {
// //     let vowel = "aeiou"
// //     str = str.toLowerCase()
// //     let count = 0;
// //     for (let index = 0; index < str.length; index++) {
// //       if (vowel.includes(str[index])) {
// //         count++
// //       }
        
// //     }
// //     return count;
// // };

// // console.log(countVowwel(str))

// // const str = "madam";

// // // function palstr(str) {
// // //     let result = "";
// // //     for (const key of str) {
// // //         result = key + result

// // //     }
// // //     return result === str
// // // }

// // // console.log(palstr(str))

// // // let result = str.split("").reverse().join("")
// // // console.log(result === str)

// // function palStr(str) {

// //     for (let index = 0; index < str.length/2; index++) {
// //       if (str[index] !== str[str.length - 1 -index]) {
// //         return false
// //       }
        
// //     }
// //     return true
  
// // }

// // console.log(palStr(str))


// // const arr = [0, 1, 0, 5, 6, 0, 7, 0];
// // let index = 0;

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] !== 0) {
// //     arr[index++] = arr[i];
// //   }
// // }

// // while (index < arr.length) {
// //   arr[index++] = 0;
// // }

// // console.log(arr);


// // const arr = [1,2,3,5]

// // const n = 5;
// // const total = n*(n + 1)/2;
// // const sum = arr.reduce((acc,curr) => acc + curr , 0)
// // console.log(total - sum)


// const str = "aaabbcdd"

// // function nonrepeatChar(str) {
// //     let result = str.split("").filter(item => str.indexOf(item) === str.lastIndexOf(item))
// //     return String(result);
// // };

// // console.log(nonrepeatChar(str))

// function nonReapeat(str) {
//     let obj = {};
//     let result = []
//     for (const char of str) {
//         obj[char] = (obj[char] || 0) + 1
//     }
//     for (const key of str) {
//         if(obj[key] === 1){
//         result.push(key)
//         }
//     }
//     return  result
 
// };

// console.log(nonReapeat(str))

