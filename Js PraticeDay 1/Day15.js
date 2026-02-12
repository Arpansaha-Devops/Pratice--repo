// console.log(abc,xyz)
// var abc = 100;
// let xyz = 200;


// function one() {
//     let count = 0;
//     return function two() {
//         count++
//         return count
//     }
// }

// let final = one();

// console.log(final())
// console.log(final())
// final()
// final()
// final()

// one()

// function first(a,...b) {
//     console.log(b, typeof typeof b)
// }

// first(1,3,4,5)


// let arr = [1,2,3,4,5]
// // console.log(typeof arr)

// function sumOfNum (arr,n) {
//     if (n === 0)  return arr[0]
//     if (arr[n] % 2 == 0) {
//          return arr[n] +  sumOfNum(arr,n- 1)
//     }else{
//         return sumOfNum(arr,n - 1)
//     }
// }

// console.log(sumOfNum(arr,arr.length - 1))


// let num = 6;

// function factTorial(num) {
//     // let val = 1;
//     if (num == 0) {
//         return 1
//     }
//     return num * factTorial(num - 1)
// }

// console.log(factTorial(num))


let num = 5;

function factTorial(num) {
    return Array.from({length: num}, (_, i) => i + 1).reduce((acc,curr) => acc * curr, 1)
}

console.log(factTorial(num))