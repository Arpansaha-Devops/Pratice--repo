// let arr = [1,2,0,7,6,0,3]

// function moveZero(arr) {
//     let lastindex = 0
//     for (let index = 0; index < arr.length; index++) {

//         if (arr[index]  !== 0) {
//            arr[lastindex] = arr[index]
//            lastindex++
//         }
//     }

//     for (let index = lastindex; index < arr.length; index++) {
//        arr[index] = 0
        
//     }
//     return arr;
// };

// console.log(moveZero(arr))


let arr = [1,2,3,4,5]

function sumOfNum (arr,n) {
    if (n === 0)  return arr[0]
  return arr[n] +  sumOfNum(arr,n- 1)
}

console.log(sumOfNum(arr,arr.length - 1))