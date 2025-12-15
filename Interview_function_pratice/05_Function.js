// let arr = [1,2,3,4,5];

//  arr.forEach(square)
//  arr.forEach(display)

// function square(element,index,arr){
//   arr[index] = element * 2
// }

// function display(element) {
//     console.log(element)
// }

// function square(arr) {
//     let word = arr.map((key) => key ** 2)
//     return word;
// }
// console.log(square(arr))

//  let num  = [12,34,64,128]

// function largest(num) {
//     return num.reduce((key,curr) => curr > key ? curr : key,num[0])
// }

// console.log(largest(num))

// function largest(num) {
//     let result = Math.max(...num)
//     return result;
// }

// console.log(largest(num))

// let str = "arpan"

// const reverse = function (str) {
//     let result = "";
//     for (const key of str) {
//         result = key + result
//     }
//     return result;
// }

// console.log(reverse(str))

// let arr =[1,2,3,4,5,6,7];
// function isOdd(arr) {
//     let oddnum = [];
//     for (let index = 0; index < arr.length; index++) {
//       if (arr[index] % 2 !== 0) {
//         oddnum.push(arr[index])
//       }

//     }
//     return oddnum ;
// }

// console.log(isOdd(arr))

//  let arr = [1,2,3,4,5];

// function sumofArr(arr) {
//     let result = 0;
//    for (const key of arr) {
//     result += key
//    }
//    return result;
// };

// console.log(sumofArr(arr))

/** Using Reduce Method - */

// const Sumarr = arr.reduce((acc,curr) => acc + curr,0)
// console.log(Sumarr)

// let arr = [1,2,3,4,5,6,7];

// function isOdd(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {

//        if (arr[index] % 2 != 0) {
//         result.push(arr[index])
//        }
//     }
//     return result ;
// }

// console.log(isOdd(arr))

// function isOdd(arr) {
//     return arr.filter((element) => element % 2 != 0)
// }

// console.log(isOdd(arr))

// const Newarr1 = arr.forEach(isOdd)

// function isOdd(key) {
//    if (key % 2 != 0) {
//     console.log(key)
//    }
// }

// function display(arr) {
//       console.log(arr)
//     }

// function isPrime(arr) {
//     if (arr <= 1) {
//         return `not prime`
//     }
//     for (let index = 2; index < arr.length; index++) {

//         if (arr[index] % 2 === 0) {
//             return false
//         }else{
//             return true
//         }
//     }
// }

// console.log(`is prime number ${isPrime(7)}`)
// console.log(`is not prime number ${isPrime(1)}`)

// let str = "arpan";

// function vowelstr(str) {
//     let count = 0;
//     let vowel = "aeiou"
//     for (let index = 0; index < str.length; index++) {

//         if (vowel.includes(str[index])) {
//             count++
//         }
//     }
//     return count ;
// };

// console.log(vowelstr(str))

// function vowel(str) {
//     return str.split("").filter((key) => "aeiou".includes(key)).length
// }
// console.log(vowel(str))

// function higherorder(callback) {
//     for (let i = 0; i < 3; i++) {

//       callback();
//     }
// }

// function print() {
//     console.log(`hello arpan`)
// }

// higherorder(print)

// function Name(name) {
//     console.log(`hello ${name}`)

// }
// Name("arpan")

// let num = 5;

// function fact(num) {
//     let result = 1;
//     for (let index = 1; index <= num; index++) {

//        result *= index
//     }
//     return result ;
// }

// console.log(fact(num))

// function fact(num) {
//     return num.reduce((acc,curr) => acc * curr)
// }

// console.log(fact(num))
