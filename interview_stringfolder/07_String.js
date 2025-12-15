// let atr = "arpan";
// console.log(atr.split("").reverse().join(""))

// let str = "arpan";
// function start(str) {
//     let result = str.split("").reverse().join("")
//     return result;
// };

// console.log(start(str))



// let str = "arpan";
// function returnstr(str) {
//     let result = "";
//     for (let index = str.length - 1; index >= 0 ; index--) {
    
//         result += str[index]
//     }
//     return result ;
// };
// console.log(returnstr(str))



// let str = "arpan";
// function reverse(str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result ;
// };

// console.log(reverse(str))

// let newStr = "arpan";
// for (let index =  newStr.length - 1; index >= 0; index--) {
//    console.log(newStr[index])
    
// }



// let str = "madam";

// function vowelstr(str) {
//     for (let index = 0; index < str.length/2; index++) {
//        if (str[index] != str[str.length - 1 -index]) {
//         return false;
//        }
        
//     }
//     return true;
// };

// console.log(vowelstr(str))

// let str = "madam";
// function strrev(str) {
//     let result = "";
//     result = str.split("").reverse().join("");
//     return result === str
// };
// console.log(strrev(str));


// let str = "arpan";

// function vowelstr(str) {
//     let vowel = "aeiou";
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
       
//         if (vowel.includes(str[index])) {
//             count++
//         }
//     };
//     return count;
// };

// console.log(vowelstr(str))

// let str = "arpan";
// function vowelstr(str) {
//     return str.split("")
//              .filter((key) => "aeiou".includes(key));
           
          
// };
// console.log(vowelstr(str))



// function charfind(str,ch) {
//     let word = 0;
//     for (let index = 0; index < str.length; index++) {
  
//         if (ch === str[index]) {
//             word++
//         }
//     }
//     return word;
// };

// console.log(charfind("arpan","a"))

// function findvowel(str,ch) {
//    return str.split("").filter((key) => key.includes(ch)).length
// };

// console.log(findvowel("arpan","r"));




