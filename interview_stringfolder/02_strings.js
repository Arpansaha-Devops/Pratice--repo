// 1st question -

// let str = "arpan";
// console.log(str.split(""));

//  2nd question - 

// let arr = [1,2,3,4,5,6,7,8];

// console.log( arr.join())

// question 3 - 

// let str =  "   arpan  ";

// console.log(str.trim());

// question 4 -

// let str =  "arpan";

// console.log(str.replace("a","g"))

//  question 5 -

// let str = "arpan";

// for (let index =  str.length -1; index >= 0; index--) {

//     console.log(str[index])
// }

// question 6 -


// function stringst(str){
//     let vowel = "aeiou"
//     let count = 0
//  for (let index = 0; index < str.length; index++) {
   
//     if (vowel.includes(str[index])) {
//         count++
//     }
//  }
//  return count
// }

// console.log(stringst("aeeeebgdfs"));


// question 7 - 

// function palstr(str) {

//     str = str.toLowerCase();
//     for (let index = 0; index < str.length/2; index++) {
 
//         if (str[index] === str[str.length - 1- index]) {
//             return true
//         }
//     }
//     return false
// };

// console.log(palstr("malalam"))


// question 7 -

// let number = 123;

// const newsTr = String(number);

// console.log(newsTr)
// console.log( typeof newsTr)


// question 8 -

// function capitalstr(str) {
//  return  str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
   
// }

// console.log(capitalstr("arpan is a good boy"))



// let str = "arpan is good boy"

// let words =  str.split(" ");
// let result = [];

// for (const word of words) {
//     result.push(word.charAt(0).toUpperCase() + word.slice(1))
// }
// console.log(result.join(" "))

// question 9 -

// function findstr(str,ch) {
//     let count =  0;
//     for (let index = 0; index < str.length; index++) {
//        if (str[index].includes(ch)) {
//         count++
//        }
        
//     }
//     return count;
// }

// console.log(findstr("bulggerisga","n"))



// question 10 -


// function count(str) {
//     let revers = "";
//     for (let index = 0; index < str.length; index++) {
//       if (!revers.includes(str[index])) {
//         revers += str[index]
//       }
        
//     }
//     return revers;
// }

// console.log(count("aeeeeeaattttuuuuiiibb"))



// function counting(str,ch) {
//     let count = "";
//     for (let index = 0; index < str.length; index++) {
//      if (str[index].includes(ch)) {
//         count = ch
//      }
        
//     }
//     return count;
// }

// console.log(counting("arpan","a"))


