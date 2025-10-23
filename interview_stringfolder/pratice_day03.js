// question number 1-

// let arr = "arpan";
// console.log(arr.split(""))


// question 2-

// let arr = ["arpan","stri"]

// console.log(arr.join(""))
// console.log(typeof arr.join(""))
// console.log( typeof arr)


// question Number 3 -

// let str = "  arpan-saha ";

// console.log(str.trim())


// question number 4-

// let str =  "arpan";

// console.log(str.split("").reverse().join(""))

// for (let index = str.length -1; index >= 0 ; index--) {
   
//     console.log(str[index])
// }



// question number 5 -

// function vowelstr(str) {
//     let vowel = "aeiou"
//     let count = "";
//     for (let index = 0; index < str.length; index++) {
     
//         if (vowel.includes(str[index])) {
//             count+=str[index]
//         }
//     }
//     return count ;
// }


// quiestion number 6 -



// let str = "arpan";

// console.log(str.includes("a"))

// question number 7 -

// let str = "arpans";

// console.log(str.replace("s",""))


// question number 8 -



// function palstr(str1) {
//     for (let index = 0; index < str1.length/2; index++) {
//        if (str1[index]!== str1[str1.length-1-index]) {
//         return false
//        }else{
//   return true
//        }
       
//     }
   
// }

// console.log(palstr("madams"))

// question number 9 -

// let str = " arpan ";

// console.log(str.repeat(5))


// question number 10-

// function counting(str,ch) {
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
//       if (str[index]== ch) {
//         count++
//       }
        
//     }
//     return count;
// }

// console.log(counting("arpan","a"))


// function capital(str) {
//      return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
    
// }
// console.log(capital("arpan is a good boy"))


// function capital(str) {
//     let result = []
//     for (const key of str.split(" ")) {
//         if(key){
//             result.push(key[0].toUpperCase() + key.slice(1))
//         }
//     }
//     return result.reverse().join(" ")
// }

// console.log(capital("arpan is a good boy"))


// function longest(str) {
//     str =  str.split(" ")
//     let word = "";
//     for (let index = 0; index < str.length; index++) {
//        if (str[index].length > word.length) {
//         word =  str[index]
//        }
        
//     }
//     return word
// }

// console.log(longest("arpan is good boy"))

