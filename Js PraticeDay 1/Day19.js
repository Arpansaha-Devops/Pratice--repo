// const str = "harsit";
// const str2 = "singh"

// function mergeStr(str,str2) {
//   let res = "";
//   let max = Math.max(str.length , str2.length)

//   for (let index = 0; index < max; index++) {
 
//     if (index < str.length ) res += str[index];
//     if (index < str2.length) res  += str2[index] 
//   }
//   return res
// };

// console.log(mergeStr(str,str2))

// let str = "arpan";
// let num = 12345;

// function mergeChar(str,num) {
//     let res = "";
//     let a  = String(str)
//     let b  = String(num)
//     let max = Math.max(a.length, b.length)
//     for (let index = 0; index < max; index++) {
      
//         if (index < a.length) res += a[index]
//         if (index < b.length) res += b[index]
//     }
//     return res;
// };

// console.log(mergeChar(str,num))


// let str = "hello my name is arpan";


// function revStr(str) {
//     return str.split(" ").map((item) => {
//         let res = "";
//         for (const key of item) {
//             res = key + res
//         }
//         return res
//     }).join(" ")

// }

// console.log(revStr(str))

let num = 10;
let num2  = 32;

// [num,num2] = [num2,num]
// console.log(num)
// console.log(num2)

//     let temp = num;

// num = num2;
// num2 = temp;
// console.log(num)
// console.log(num2)

// num = num + num2;
// num2  = num - num2;
// num =  num - num2;

// console.log(num, num2)

// num = num ^ num2;
// num2  = num ^ num2;
// num = num ^ num2;

// console.log(num,num2)

// let obj = [
//     {  name : "arpan",marks : 90}, {  name : "tanmoy",marks : 80}, {  name : "akash",marks : 70},]

//     function marksGreater(obj) {
//         let result = obj.filter((item) => item.marks > 80).map((item) => item.name)
//         return result
//     };

//     console.log(marksGreater(obj))

// function abc(a,...b) {
//     console.log(a,b)
// }

// abc(9,10,11,40)



// console.log(typeof NaN)  // number

// console.log(isNaN("Arpan1111"))