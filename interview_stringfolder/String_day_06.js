// let str = "arpan";

// console.log(str.includes('a'))

// let str ="arpan";
// console.log(str.at(3))

// let str = "arpan";
// console.log(str.startsWith("a"),str.endsWith("s"))

// let str = "  arpan  ";
// console.log(str.trim())


// let str = [1,2,3,4,5,6];
// console.log(str.join(''))



// let str = "arpan";

// console.log(str.split("").reverse().join(""))

// for (let i = str.length - 1; i >= 0 ; i--) {

//     console.log(str[i])
// }


// let str = "arpan";
// let reverse = ""
// for (const key of str) {
//     reverse = key + reverse;
// }
// console.log(reverse)




// let str = "arpan is a good boy";

 // console.log(str.split(" ").reverse().join(" ")) 

// let word = str.split(" ");

// for (let index = word.length -1; index >= 0; index--) {
  
//     console.log(word[index])
// }

// function reverse(str) {
//     let word = str.split("")
//     let result = "";
//     for (let index = word.length - 1; index >= 0 ; index--) {
//        result += word[index] + "";
        
//     }
//     return result.trim();
// }

// console.log(reverse("arpan is a good boy"))



// function name(str) {
//     str = str.toLowerCase()
//     let vowel = "aeiou"
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowel.includes(str[i])) {
//         result ++
//       }else{
//         return false
//       }
       
//     }
//      return result ;
// };

// console.log(name("gjfh"))


// function vowel(str) {
//     return str.split("")
//               .filter((key) => "aeiou".includes(key)).length   
// };
// console.log(vowel("arpanei"))





// function palstr(str) {
//     let result = "";
//     result = str.split("").reverse().join("")
//     return str === result
// }

// console.log(palstr("arpan"))
// console.log(palstr("madam"))



// function palstr(str) {
//     for (let index = 0; index < str.length/2; index++) {
//     if (str[index] !== str[str.length - 1 -index]) {
//         return false
//     }
        
//     }
//     return true 
// };

// console.log(palstr("racar"))
// console.log(palstr("arpan"))


// let str = "madam";
// let result = str.split("").reverse().join("")

// if (str === result ) {
//     console.log("palindrome")
// } else{
//     console.log(`palindrome not found`)
// }



// function findstr(str,ch) {
//     let word =  "";
//     for (let i = 0; i < str.length; i++) {
    
//         if (str[i] === ch) {
//             word += ch
//         }
//     }
//     return word;
// };

// console.log(findstr("arpan","a"))

// function strfind(str,ch) {
//   return  str.split("").filter((key) => key.includes(ch)).length
// }

// console.log(strfind("arpan","a"))


// let str = "123abc";
// const extract = parseInt(str);
// console.log(` numbers are : ${extract}`)



// function capital(str) {
//     return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }

// console.log(capital("arpan is a good boy"))

// const str = "arpan is a good boy";
// let word = str.split(" ").map((key) => key.charAt(0).toUpperCase() + key.slice(1)).join(" ")


// console.log(word)


// function largest(str) {
//     str = str.split(" ")
//     let word = "";
//     for (let i = 0; i < str.length; i++) {
      
//         if (str[i].length > word.length) {
//             word = str[i]
//         }
//     }
//     return word;
// };

// console.log(largest("arpan is a goodest boyeeses"))


// function duplicates(str) {
//     let result = "";
//     for (let index = 0; index < str.length; index++) {
       
//        if (!result.includes(str[index])) {
//         result += str[index]
//        } 
//     }
//     return result;
// };

// console.log(duplicates("aaaaaaaeeeeeeeiiiiiopooooouuuuu"))

// let str = "aeeeeeiiiiiiooooooooouuu";
// console.log([...new Set(str)].join(''))



// function largest(str) {
// let word = str.split(' ');
// let resultr =  word[0]
// let resultr1 = word[0]
// for (let index = 0; index < word.length; index++) {
//    if (word[index].length > resultr.length) {
//     resultr = word[index]; 
//    }
//    if (word[index].length < resultr.length) {
//     resultr1 = word[index]; 
//    }
    
// }    
// return  {resultr,resultr1}
// };

// console.log(largest("arpan is the good boyes"))


// function largestmin(strfind) {
//     let word = strfind.split(" ");
//     let largest = word[0]
//     let minimum = word[0]
//     for (let index = 0; index < word.length; index++) {
//      if (word[index].length > largest.length) {
//         largest = word[index]
//      }
//      if (word[index].length < minimum.length) {
//         minimum = word[index]
//      }
        
//     }
//     return  {largest,minimum};
// };

// console.log(largestmin("arpan is a good boy"))




// function largest(str) {
//     let word = str = str.split(" ");
//     let result = "";
//     for (let index = 0; index < word.length; index++) {
//        if (word[index].length > result.length) {
//          result = word[index]
//        }
        
//     }
//     return result ;
// };

// console.log(largest("arpan is a goodest boy"))

function genarate(str) {
    let otp = "";
    for (let index = 0; index < str; index++) {
      otp += Math.floor(Math.random() * 10) 
        
    }
    return otp;
}

console.log(genarate(6))