// function first(callback) {
//     setTimeout(() => {
//         let str = "start"
//         callback(str)
//     }, 2000);
// }

// function second(str) {
//    console.log(` ${str} callback executed`) 
// }

// first(second)

// function addnum(num1,num2,callback) {
//     return callback(num1,num2)
// }

// function second(a,b) {
//     console.log(`${a + b}`)
// }

// addnum(5,5,second)

let arr = [1,2,3,4,5,6,7]

function calculate(arr,callback) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
   result.push(callback(arr[index])) 
    }
    return result;
}

function second(arr) {
   return arr * 2
}

console.log(calculate(arr,second))


// let arr = [5, 4, 3, 2, 1];

// function process(arr, callback) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(callback(arr[i]));
//     }
//     return output;
// }

// function square(num) {
//     return Math.pow(num, 2);
// }

// console.log(process(arr, square));
// // [25, 16, 9, 4, 1]



// let str = "arpan";

// function uppercase(str, callback) {
//     let word = str.charAt(0).toUpperCase() + str.slice(1);
//     return callback(word);
// }

// function second(result) {
//     console.log(result);
// }

// uppercase(str, second);



// function first(callback) {
//     setTimeout(() => {
//         console.log("Hello !")
//        callback()
//     }, 2000);
// }

// function second() {
//     console.log("Arpan")
// }

// first(second)

// const promise1 = new Promise((resolve,reject) => {
//     let data = true
//     setTimeout(() => {
//         if (data) {
//       resolve("sucessfully printed")  
//     }else{
//         reject(`promt dennied`)
//     }
//     }, 2000);
// })

// promise1.then((data) => {
//     console.log(data)
// }).catch((Error) => console.error(Error))