// const str = "Arpan";

// console.log(str.split("")) // convert a string into an array -



// const joinstr = [1,2,3,4,5,6,7,8];

// console.log(joinstr.join("")) // join an array to a string -




// const newStr = "  arpan  "

// console.log(newStr.trim())  // remove the space part of this string -



// const stttr = "Anrpan"

// console.log(stttr.replace("n","")) // replace the charecter into this string -




// const revstR = "Arpan is a good boy"

// console.log(revstR.split("").reverse().join(""))

// for (let index =  revstR.length -1; index >= 0; index--) {  // reverse the string -
//   console.log(revstR[index])
// }  

// let str = "my name is arpan";

// function revStr(str) {


//    return str.split(" ").map((word) => {
//           let result = "";
//         for (const key of word) {
          
//            result = key + result 
//         }
//         return result 
//     }).join(" ")
    
// }

// console.log(revStr(str))


// const voweLstr = "arpan";
// const vowel = "aeiou";
// let count = 0;

// for (let index = 0; index < voweLstr.length; index++) {
// if (vowel.includes(voweLstr[index])) {
//        count++;
// }

// }

// console.log(count) 

// method - 2

// const str1 = "arpan";
// const vowel = "aeiou";

// const vowelstr = str1.split("").filter((char) => vowel.includes(char)); // method for finding vowels in string -
// console.log(vowelstr)



// function palstr(str){
//  str = str.toLowerCase();
//  for (let i = 0; i < str.length/2; i++) {
   
//     if (str[i] != str[str.length-1-i])  {    
//         return false
//     } else {
//         return true
//     }
    
//  }
// }

// console.log(palstr("Arpan"))
// console.log(palstr("Malalam"))

// method 2 


// function isPalindrome(pallls){
// const reversed = pallls.split("").reverse().join("");
// if (pallls == reversed) {
//     return true
// }else {
//     return false 
// }

// }

// console.log(isPalindrome("malalam"))
// console.log(isPalindrome("Arpan"))




// let num = 123;

// const newStr =  String(num); // convert a number to a string -

// console.log(newStr)
// console.log(typeof newStr)



// let stttr =  " Hello ";   // repeat a string multiple times -

// console.log(stttr.repeat(5));


// function findcharsame(str,ch) {
// let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ch) {
//             count++
//         }
   
//     }
//        return count 
// };

// console.log(findcharsame("arpan", "a"))


// function captiallet(str) {
//    return str.split(" ") .map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
// }

// console.log(captiallet("frontend developer arpan"))  // make the first letter capitalize 



// function name(naMe) {
// //    return naMe.split("") //  if we dont give space into the split it only takes charecter give space to take the full word
//    return naMe.split(" ").reverse().join(" ");

// }

//  console.log(name("arpan is a good boy"))



// let spacestr = "arpan is a good boy"

// const joinArr = spacestr.replaceAll(" ","-");
// console.log(joinArr)




// function duplicates(str){
//     let reverse = "";
//     for (let i = 0; i < str.length; i++) { 
       
//         if (!reverse.includes(str[i])) { // remove duplicate charecters -
//            reverse+= str[i] 
//         }
//     }
//     return reverse
// }

// console.log(duplicates("aaaaabbnbbbcccccdddd"))



// function findLargestWord(str) {
//     const words = str.split(" ");
//     let largestWord = "";

//     for (let i = 0; i < words.length; i++) {
//      if (words[i].length > largestWord.length) {
//       largestWord = words[i];
//      }
//     }
//     return largestWord;
// }

// console.log(findLargestWord("arpan is a goodest boy"));

// let str = "arpan"

// console.log(str.charCodeAt(0)) // find the index charecter code


