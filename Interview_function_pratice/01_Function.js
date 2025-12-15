// console.log(a)  // Cannot access 'a' before initialization
// let a = 10

// console.log(a);  // Cannot access 'a' before initialization
// const a = 10;


// console.log(a); //  it shopws undefined - so oit is hoisted although its showing undefined not error
// var a  = 10;




/**   Scope starts
|
|-- var x -> hoisted, initialized to undefined
|-- let a -> hoisted, uninitialized (TDZ)
|-- const b -> hoisted, uninitialized (TDZ)
|
Execution moves line by line
    **/  

// function outer() {
//   let outerVar = "I am outer";


//   function inner() {
//     console.log(outerVar); // ✅ Accessible
//   }

 
// }
//  inner();

// let str = "arpan is good boy";

// function capital(str) {
//     let word = str.split(" ");
//     word.forEach((element,index,array) => {
//         array[index] = element.charAt(0).toUpperCase() + element.slice(1)
//     });
//     return word.join(" ");
// };

// console.log(capital(str))\\\


// function fun1() {
//     console.log("arpan hi")
// };
// setTimeout(fun1, 2000);  // it prints hi just for onne time after 2 second


// function fun2() {
//     console.log("i am printed multiple time")
// };

// setInterval(fun2,1000) // in dsetinterval it prints or execute the function multiple times after every 1 sec

// const person = {
//     name: "Arpan",
//     greet: function ()  {
//         console.log(this. name);
//     }
// };

// person.greet(); // Hello, undefined


// const person = {
//     name: "Arpan",
//     hobbies: ["coding", "reading"],
//     showHobbies: function() {
//         this.hobbies.forEach(hobby => {
//             console.log(this.name + " likes " + hobby);
//         });
//     }
// };

// person.showHobbies();


// const user = {
//     Username : "arpan",
//     isLoogedin : true,
//     greet : function (age) {
//        console.log(age , this.Username) 
//     }
// };

// user.greet(24)


// const user1 = {
//     Username : "arpan",
//     isLoogedin : true,
//     greet :  () => {
//        console.log( this) 
//     }
// };

// user1.greet()


// const user = {
//     Username: "arpan",
//     hobbies: ["coding", "reading"],
//     showHobbies: function() {
//         this.hobbies.forEach(hobby => {
//             console.log(this.Username + " likes " + hobby);
//         });
//     }
// };

// user.showHobbies();

// function a(...abc) {
//     console.log(abc)
// };

// a(8,9,10)


// let str = "arpan is a good boy";

// function reverse(str) {
//     let word = str.split("")
//    let result = "";
//    for (let index =  word.length - 1 ; index >= 0; index--) {
//         result += word[index] + "";
    
//    }
//    return result.trim() ;

// };
// console.log(reverse(str))


// if ([] == true) {
//     console.log(`this will; prints true`)
// }else {
//     console.log(` this will not executs `)
// }


// let arr = [1,2,3,4,5,6,7];

// console.log(Math.max(...arr));
// function largest(number) {
//     let result = number[0];
//     for (let index = 0; index < number.length; index++) {
//        if (number[index] > result) {
//         result = number[index]
//        }
        
//     }
//     return result ;
// };

// console.log(largest(arr))


// function isEven(num) {
//     if (num % 2 === 0 && num % 5 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(5))
// console.log(isEven(10))

// let str = "arpan";

// function count(str) {
//     let word =  str.split("").filter((key) => "aeiou".includes(key)).length;
//     return word;
// };

// console.log(count(str))

// let str = "Arpan";
//  function vowel(str) {
//     str = str.toLowerCase().split("")
//     let vowel = "aeiou";
//     let count = "";
//     for (let index = 0; index < str.length; index++) {

//         if (vowel.includes(str[index])) {
//             count += str[index]
//         }
//     }
//     return count ;
//  };

//  console.log(vowel(str))


// let num = 5;
// let result = 1;

// function fact(num) {
//     let result = 1;
//     for (let index = 1; index <= num; index++) {
    
//         result *= index;
//     }
//     return result ;
// };

// console.log(fact(num))

// function palstr(strfind) {
//     for (let index = 0; index < strfind.length/2; index++) {
   
//         if (strfind[index] !== strfind[strfind.length - 1 - index]) {
//           return false;
//         } else {
//             return true;
//         }
//     };
    
// };


// console.log(palstr("madam"))
// console.log(palstr("racear"))

// let arr = [1,2,3,4,5];

// function sumArr(arr) {
//     return arr.reduce((acc,curr) => acc + curr,0)
// }

// console.log(sumArr(arr))


// let str = "arpan is a goodest boy";

// function largest(str) {
//     let word = str.split(" ");
//     let result = "";

//     for (let index = 0; index < word.length; index++) {
//      if (word[index].length > result.length) {
//       result = word[index]
//      }
        
//     }
//     return result ;
// };

// console.log(largest(str))

// let str = "arpan is a good boy"

// function charcap(str) {
//     return str.toLowerCase()
//               .split(" ")
//               .map((key) => key.charAt(0).toUpperCase() + key.slice(1)).join(" ") 
// };

// console.log(charcap(str))

// let a = 10;

// function show() {
//      a = a + 20;
//        console.log(a)
//    return function b () {
//       a = a * 10;
//       console.log(a)
//     }
   
// }
// let inner = show();
// inner();


 

// function a() {
//    let b = 10;
//     console.log(b)
  
//     function c(){
//    console.log(b)
//     };
//       c();
// }
// a();

// console.log(b) // can not get access insidre of function scope -


// let b = 10;
// function a() {
   
//     console.log(b)
  
//     function c(){
//    console.log(b)
//     };
//       c();
// }
// a();

// console.log(b) //  now we get access insidre of function scope -

// let a = 10;  // It is calles illegal shadowing -
// {
//   var a = 100
//   console.log(a)
// };
// console.log(a);

