// let str = "arpan is a good boy";

// const newStr = str.split(" ").reverse().join(" ");
// console.log(newStr)

// function reverse(str) {
//     let result = "";
//     for (let index =  str.length - 1; index >= 0; index--) {
      
//        result += str[index]
//     }
//     return result ;
// }

// console.log(reverse(str))

// function reverse(str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result
// }

// console.log(reverse(str))


// let str = "arpan is a good boy";

// function capitalstr(str) {
//     let word = str.split(" ").map((key) => key.charAt(0).toUpperCase() + key.slice(1)).join(" ")
//     return word;
// }

// console.log(capitalstr(str))

// const newStr = str.split(" ").map((key) => key.charAt(0).toUpperCase() + key.slice(1)).join(" ")

// console.log(newStr)


// let str = "arpn";

// function vowel(str) {
//     let vowel = "aeiou";
//     let count = "";
//     for (let index = 0; index < str.length; index++) {
//        if (vowel.includes(str[index])) {
//         count += str[index]
//        }
//     }
//     return count;
// };

// console.log(vowel(str))

// function vowelStr(str) {
//    let word  = str.split("").filter((key) => "aeiou".includes(key) ? key : 0).length
//    return word 
// }

// console.log(vowelStr(str))


// let str = "madam";

// function pallstr(str) {
//     for (let index = 0; index < str.length/2; index++) {
      
//         if (str[index] !== str[str.length - 1 - index]) {
//            return false
//         }
//     }
//     return true;
// };

// console.log(pallstr(str))

// function palStr(str) {
//     let palindrome = str.split("").reverse().join("")
//     return str === palindrome
// }

// console.log(palStr(str))


// let str = "arpan";

// function includestr(str,ch) {
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
        
//         if (str[index] === ch) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(includestr(str,"a"))


// function includes(str,ch) {
//     let word = str.split("").filter((key) => ch === key).length
//     return word;
// };

// console.log(includes(str,"b"))



// let arr = [1,2,3,4,5,5,5,5,6]


// function duplicate(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
//         if (!result.includes(arr[index])) {
//             result.push(arr[index])
//         }
        
//     }
//     return result;
// }

// console.log(duplicate(arr))

// function duplicate(arr) {
//     return arr.filter((key,index,arr) => arr.indexOf(key) !== index)
// }

// console.log(duplicate(arr))

// const neWarr = [...new Set(arr)]

// console.log(neWarr)


// let arr = ["a","b","c","d","e","a"];

// function indexchar(arr) {
//     arr.forEach((element,index) => {
//         if (element === "a") {
//             console.log(index)
//         }
//     });
// }

// indexchar(arr)


// let str = "arpan iss good boy"

// function smallest(str) {
//     let word = str.split(" ");
//     let result = word[0];
//     for (let index = 0; index < word.length; index++) {
//        if (word[index].length < result.length) {
//         result = word[index]
//        } 
        
//     }
//     return  result
// }

// console.log(smallest(str))

// let str = "arpan iss good boy";

// function smallest(str) {
//   let words = str.split(" ");
//   let result = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < result.length) {
//       result = words[i];
//     }
//   }
//   return result;
// }

// console.log(smallest(str)); // "boy"


function fun1(callback) {
    setTimeout(() => {
        console.log(`hello`);
    } , 4000);
}

function fun2() {
    console.log(`arpan`)
}

fun1(fun2)