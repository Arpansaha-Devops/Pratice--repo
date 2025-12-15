// let str = "arpan";
// console.log(str.length)

// let str = "arpan";
// console.log(str.toUpperCase())

// let str = "arpan";
// console.log(str.charAt(0))

// let str = "arpan";
// console.log(str.charAt(0))

// let str = "arpan";

// console.log(str.includes("a"))


// let str = "arpan";
// console.log(str.startsWith("a"))
// console.log(str.endsWith("a"))


// intermediate level -

// let str =  "arpan";

// console.log(str.split(""))

// const arr = [1,2,3,4,5,6,7,8]

// console.log(arr.join(""))

// let str = " arpan  "

// console.log(str.trim())

// let str = "arpan";

// console.log(str.replace("a",""))


// let str = "arpan is a good boy";
// let revcerse = "";

// const Newstr = str.split(" ").reverse().join(" ");
// console.log(Newstr)

// for (let index = str.length -1; index >= 0 ; index--) {
   
//     console.log(str[index])
// }

// const words = str.split(" ");
// const reversedArr = [];

// for (const word of words) {
//     reversedArr.unshift(word);
// }

// const reversedWords = reversedArr.join(" ");
// console.log(reversedWords); // "boy good a is arpan"


// function vowelstr(str) {
//     let vowel = "aeiou";
//     let word = "";
//     for (let index = 0; index < str.length; index++) {
//      if (vowel.includes(str[index])) {
//         word += str[index]
//      }
        
//     }
//     return word
// }

// console.log(vowelstr("arpan"))



// function palstr(str) {
//     for (let index = 0; index < str.length/2; index++) {
//       if (str[index] !== str[str.length -1 -index]) {
//         return false
//       }
        
//     }
//    return true 
// }

// console.log(palstr("malalam"))

// function pailstr(str) {
    
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// console.log(pailstr("level")); // true
// console.log(pailstr("racer")); // false

// let numStr = "123"

// const newstr = Number(numStr)

// console.log(newstr)
// console.log( typeof newstr)

// let str = "arpan "

// console.log(str.repeat(5))

// let str = "123 apples";

// const extrct = parseInt(str);
// console.log(`number is : ${extrct}`)


// function appearch(str,ch) {
//     let result = 0;
//     for (let index = 0; index < str.length; index++) {
//       if (str[index] === ch) {
//         result++
//       }
//     }
//     return result
// }

// console.log(appearch("arpan","p")) // 1;



// function retursnstr(str) {
//     return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }



// console.log(retursnstr("arpan is a good boy"))

// let str  = "arpan is a good boy";

// let result = "";
// let word = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

// result = word
// console.log(result)

// let str  = "arpan is good boy";

// for (let index = str.length -1; index >= 0; index--) {
    
//     console.log(str[index])
    
// }

// function dupil(str) {
//     let revese = "";
//     for (let index = 0; index < str.length; index++) {
//   if (!revese.includes(str[index]) ) {
//         revese += str[index]
//     }
        
//     }
//     return revese
   
// };

// console.log(dupil("aaaaaaaeeeeeeeeiiiiiiiiiooooooouuuuu"));




// function largest(str) {
//     let word = str.split(" ");
//     let result = "";
//     for (let index = 0; index < word.length; index++) {
//       if (word[index].length > result.length) {
//         result = word[index]
//       }
        
//     }
//     return result
// };

// console.log(largest("arpan is a good boy and a good school student"))

