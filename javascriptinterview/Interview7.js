// let arr = [1,2,3,4,4,5]


// function doubleArr(arr) {
//     let result = [];
//     for (let index = 0; index < arr.length; index++) {
//      if (arr[index] === arr[index + 1]) {
//         result.push(arr[index] * 2)
//      }else if (arr[index] === arr[index - 1] ) {
//         result.push(arr[index])
//      }else{
//         result.push(arr[index] * 2)
//      }
        
//     }
//     return result ;
// };

// console.log(doubleArr(arr))


// let arr = [1,2,3,4,3,5,7,8,5]

// function doblearr(arr) {
//     let seen = new Set()
//     let result = []
//     for (let index = 0; index < arr.length; index++) {
//       if (!seen.has(arr[index])) {
//         result.push(arr[index] * 2)
//         seen.add(arr[index])
//       }else {
//         result.push(arr[index])
//       }
        
//     }
//     return result;
// };

// console.log(doblearr(arr))


// let str = "arpan";

// function mirrorstr(str) {
//     let result = "";
//    for (let index = str.length - 1; index >= 0 ; index--) {

//     result += str[index]
//    }
//    return result  +  str
// };

// console.log(mirrorstr(str))


// function generatePassword(length) {
//     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lower = "abcdefghijklmnopqrstuvwxyz";
//     const digits = "0123456789";
//     const all = upper + lower + digits;

//     let password = "";

//     for (let i = 0; i < length; i++) {
//         let randomIndex = Math.floor(Math.random() * all.length);
//         password += all[randomIndex];
//     }

//     return password;
// }

// console.log(generatePassword(8));


// let arr = [1,2,3,-10,4,5,-5]

// function addarr(arr) {
//     let result = arr.filter((element) => element > 0 ) 
//                     .reduce((acc,curr) => acc + curr,0)
//                     return result;
// };

// console.log(addarr(arr))

// function addarr(arr) {
//     let result = [];
//     for (const key of arr) {
//         if (key > 0) {
//            result.push(key) 
//         }
//     }
//     return result.reduce((acc,curr) => acc + curr ,0)
// }

// console.log(addarr(arr))


// let str = "arpan";

// function vowelstr(str) {
//     let count = 0
//     let vowel = "aeiou"
//     let vowel1 = "AEIOU"
//   for (let index = 0; index < str.length; index++) {

//     if (vowel.includes(str[index]) || vowel1.includes(str[index])) {
//         count++
//     }
//   }
//   return count;
// };

// console.log(vowelstr(str))

// for (var i = 1; i <= 3; i++) {
//    ( function (x) {
//          setTimeout(() => console.log(x), 100); 
//     }) (i);
// }


// function first(x) {
//     return function(y){
//         return function(z){
//        console.log(x + y + z)
//         }
//     }
// }

// first(2)(3)(4)


// function test(a, b = a) {
//   console.log(a, b);
// }
// test(5,7);


// function first() {
//     let count = 0;
//     return function (){
//       count++
//       console.log(count)
//     }
// }

// let count = first()
// count()
// count()
// count()
// count()

// var x = 10;
// function outer() {
//   var x = 20;
// return function inner() {
//     console.log(x);
//   }
  
// }
// outer()();


// const arr = [1, [2, 3], [4, [5]]];

// function flatten(array) {
//   return array.reduce((acc, curr) => {
//     return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
//   }, []);
// }

// console.log(flatten(arr));  // [1, 2, 3, 4, 5]

// const arr = [1, 2, 2, 3, 4, 4, 4, 5];

// function duplicatearr(arr) {
//     let word =  arr.filter((element,index,array) => array.indexOf(element) !== index)
//     return word;
// };

// console.log([... new Set(duplicatearr(arr))])

// const obj = { a: 1, b: { c: 2 }};
//  const obj2 = structuredClone(obj)
//  obj2.a = 10

//  console.log(obj.a)

// const user = {
//   name: "Arpan",
// };
// function getName() {
//     return this.name;
//   }
// const get = getName.bind(user)
// console.log(get())

// let obj = {
//   a: 1,
//   b: 2
// };

// Object.freeze(obj);

// obj.a = 100;
// delete obj.b;
// console.log(obj);


let arr = [1,2,3,4,5,6,7]

function s4econdlargest(arr) {
   
    let largest = -Infinity;
    let second = -Infinity
  for (const key of arr) {
       if (key > largest) {
           second = largest
          largest = key
         }else if (key < largest && key > second) {
           second = key        }
  }
  return {second,largest}
}

console.log(s4econdlargest(arr))