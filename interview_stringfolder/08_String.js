// let str = "arpan";

// console.log(str.split("").reverse().join(""))

// function revstr(str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result;
// }

// console.log(revstr(str))


// function revstr(str) {
//     let result = "";
//     for (let index = str.length - 1; index >= 0 ; index--) {
       
//        result += str[index] 
//     }
//     return result ;
// }

// console.log(revstr(str))

// const neWarr = str.split("").reduce((acc,curr) => curr + acc)
// console.log(neWarr)


// 2nd question -

// let str = "messi"

// function palstr(str) {
//     let result = str.split("").reverse().join("");
//     return result === str
// }

// console.log(palstr(str))

// function palstr(str) {
//    for (let index = 0; index < str.length / 2; index++) {
//    if (str[index] !== str[str.length -1 - index]) {
//     return false
//    }
    
//    } 
//    return true
// }

// console.log(palstr(str))


// question 3 -

// let str = "hello world"

// function captilazes(str) {
//     return  str.toLowerCase().split(" ")
//     .map((key) => key.charAt(0).toUpperCase() + key.slice(1)).join(" ")
// }

// console.log(captilazes(str))

// function captilazes(str) {
//     let word = str.split(" ")
//     let result = ""
//     for (let index = 0; index < word.length; index++) {
//    result += word[index].split(" ").map((key) => key.charAt(0).toUpperCase() + key.slice(1)) + " "
//     }

//         return result.trim();
    
// }

// console.log(captilazes(str))



// question number 4 -

// let str = "arpan"
// console.log(str.lastIndexOf("n") + 1)



// question 5 -

// let str = "arpan";

// function countvowel(str) {
//     let word = str.split("")
//     return result = word.filter((key) => "aeiou".includes(key)).length
// }

// console.log(countvowel(str))

// function vowel(str) {
//     let vowel = "aeiou"
//     let count = 0
//     let word = str.toLowerCase()
//     for (let index = 0; index < word.length; index++) {
//        if (vowel.includes(word[index])) {
//         count++
//        }
        
//     }
//     return count;
// }

// console.log(vowel(str))


// question number 6 - 

// let str = "Arpan is a good boy"

// console.log(str.replaceAll(" ","-"))

// console.log(str.split(" ").join("-"))


// question number 7 -

// let str = "arpansaha"

// console.log(str.substring(0,5))
// console.log(str.slice(0,5))




// question number 8 -

// let str = "arpan"
// let str1 = "saha"

// console.log(`${str + str1}`)


// question number 9 -

// let str = "arpan";

// let aRRay = new Set(...str)
//    aRRay = "ARPAN"

//    console.log(aRRay)
//    console.log(str)


// question number 10 -

// let str = "arpan"

// function substr(str,ch) {
//     if (str.split("").filter((key) => key.includes(ch)).length) {
//        return true 
//     } else{
//         return false;
//     }
// }

// console.log(substr(str,"a"))

// function substrinclude(str,ch) {
//     for (let index = 0; index < str.length; index++) {
//         if (str[index] === ch) {
//             return true
//         }
        
//     }
//     return false;
// };

// console.log(substrinclude(str,"p"))