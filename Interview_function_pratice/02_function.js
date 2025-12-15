
// function callback(num) {
//   console.log(num * num)
// };

// setTimeout(function() {
//   callback(10);
// }, 5000);


// function Name() {
//     console.log("Arpan")
// };
// setTimeout(Name,2000)



// var b =10;

// function a() {

//     console.log(b)
//     function c() {
//         console.log(b)
//     }
//     c();
// }
// a();


// function first(second) {
//     console.log("x");
//     second();
// }

// function second() {
//     console.log("second");
// }

// first(() => setTimeout(second, 2000));



// function factorial(fact) {
//     return fact.reduce((acc,curr) => acc * curr)
// };
// console.log(factorial(5))


// let str = "arpan";

//     function reverse(str) {
//         let result = "";
//         for (let key of str) {
//          result = key + result
//         };
//         return result ;
//     };

//     console.log(reverse(str))


// let str = "arpan";
// function countch(str,ch) {
//     let count = "";
//     for (let index = 0; index < str.length; index++) {
      
//         if (ch === str[index]) {
//             count += str[index]
//         }
//     }
//     return count ;
// };

// console.log(countch("arpan","a"))