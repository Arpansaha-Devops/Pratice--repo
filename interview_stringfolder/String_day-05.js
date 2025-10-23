// let str = "arpan";

// console.log(str.length)

// let str = "arpan";
// console.log(str.charAt(0).toUpperCase());

// let str = "arpan";

// console.log(str.at(0))

// let str = "arpan";

// console.log(str.indexOf("r"))

// let str  = "arpan";
// console.log(str.indexOf("b"))  /** it returns -1 if index ch notfound - */ 

// let str = "arpan";
// console.log(str.includes("a"))


// let str = "arpan";

// console.log(str.startsWith("a"),str.endsWith("n"))


/** intermediate level quetsions - */

// let str = "arpan";
// console.log(str.split(""))

// let str = ["arpan","riya"];
// console.log(str.join(""))
// console.log(typeof str.join(""))
// console.log(str)

// let str = "  arpan  "

// console.log(str.trimStart());


// let str = "arpan";

// console.log(str.replace("a","n"))


// let str = "arpan"


// console.log(str.split("").reverse().join(""))

// for (let index = str.length -1; index >= 0 ; index--) {
//    console.log(str[index])
// // }


// let str = "arpan";

// let result = "";
// for (const key of str) {
// result = key + result;
// }
// console.log(result)



// function vowelcount(str) {
//     let vowel = "aeiou"
//     let count  = 0;
//     for (let index = 0; index < str.length; index++) {
     
//         if (vowel.includes(str[index])) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(vowelcount("arpan"))

// function vowel(str) {
//     return str
//     .toLowerCase()
//     .split("")
//     .filter(ch => "aeiou".includes(ch)).length;
// };
// console.log(vowel("arpan"))

// function palstr(str) {
//     let resul = "";
//     resul = str.split("").reverse().join("");
//  return str === resul
// };
// console.log(palstr("jooj"))

// function palstr(str) {
//     for (let index = 0; index < str.length/2; index++) {
    
//         if (str[index]!== str[str.length -1-index]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(palstr("malalam"))


// let str = 1234;

// const newStr = String(str);
// console.log(newStr);
// console.log( typeof newStr);
// console.log(typeof str)
// console.log( str)

// let str = "arpan";
// console.log(str.repeat(5))


// let str = "Arpan123is45good";
// let numbers = str.match(/\d+/g);
// console.log(numbers);


// \d → matches digits

// + → matches one or more digits together

// g → global search

// function appearch(str,ch) {
//     str = str.split("")
//     let result = 0;
//     for (let index = 0; index < str.length; index++) {
//        if (ch === str[index]) {
//         result++
//        }
        
//     }
//     return result;
// }

// console.log(appearch("arpan","r"))


// function capital(str) {
    
//      return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")   
    
// };
// console.log(capital("arpan is a good boy"))


