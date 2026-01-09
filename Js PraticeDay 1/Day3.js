// const arr = [24,57,21,45,32,67];
// const target = 45;

// function twoSum(arr,target) {
//     const map = new Map();
//     for (let index = 0; index < arr.length; index++) {
        
//         const complete = target - arr[index]
//         if (map.has(complete)) {
//             return [map.get(complete),index]
//         }
//         map.set(arr[index],index)
//     }
// }

// console.log(twoSum(arr,target))


// function duplicAtearr (arr){
//    const newArr = arr.filter((item,index,array) => array.indexOf(item) === index )
//    return newArr === arr
// }

// console.log(duplicAtearr([1,2,3,3,4,5,5]))

const arr = [1,2,3,4,5,6]

const newArr = [...new Set(arr)]

console.log(newArr.length !== arr.length)