// const str = "arpan"

// function repeat(str,ch) {
//     let result = "";
//     for (let index = 0; index < str.length; index++) {
//       if (str[index] === ch) {
//         result += str[index]
//       }
        
//     }
//     return result;
// };

// console.log(repeat(str,"a"))

// function repeated(str) {
//     let seen = new Set();
//     for (let ch of str) {
//         if (seen.has(ch)) return ch;  // first repeated char
//         seen.add(ch);
//     }
// }

// console.log(repeated("rarpan")); // "r"


// const arr = ["a","b",18,"d",100,10]

// function separate(arr) {
//     let chararr = [];
//     let numarr = [];
//     for (let index = 0; index < arr.length; index++) {
       
//         if (typeof arr[index] ===  "number") {
//             numarr.push(arr[index])
//         }else{
//             chararr.push(arr[index])
//         }
//     }
//     return {chararr,numarr}
// }

// console.log(separate(arr))

// let arr = ["a","b",100,"c","d"]

// function separate(arr) {
//     let num = arr.filter(key => typeof key === "number")
//     let char = arr.filter(key => typeof key === "string")

//     return {num,char}
// }

// console.log(separate(arr))