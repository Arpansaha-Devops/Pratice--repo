// the difference between find and filter method is both takes a callbqack function but in find method if the function condition is satisfied it returns the first element in the array which satisfies it condition and stop iterating over the array and it dosenot create a new array and if the condition is not satisfied its gives the result undefiined , but in filtrer method if the condition is satisfied it gives the all elements those who satisfied the condition and gives a new array and if condition is not satisfied it gives undefined also.

// The map() method in JavaScript is an array method used to create a new array by applying a provided callback function to each element of an existing array. 


// let str = "arpan";
// console.log(str.split(""))

// let str = "arpan";
// console.log(Array.isArray(str.split("")));

// let srr = [1,2,3,4,5,6,7];
// console.log(srr.sort((a,b)=> b-a))






// let arr = [1,2,3,4,5,6,7];
// console.log(arr.reverse())

// let arr = [1,2,3,4,5,6,7];
// for (let index = arr.length - 1; index >= 0 ; index--) {

//     console.log(arr[index])
// }

// function revarr(arr) {
//     let newarr = [];
//     for (let index = arr.length - 1; index >= 0 ; index--) {
//         newarr.push(arr[index])
//     }
//     return newarr;
// };

// console.log(revarr([1,2,3,4,5,6,7]))


// let arr = [1,2,3,4,5,6];
// let arr2  = [12,34,56,7,890,90]

// console.log(arr.concat(arr2))


// let arr = [1,2,[3,4],5,[6,7,[8],9],10];
// console.log(arr.flat(Infinity))


// let arr = [1,2,3,4,5]

// console.log([...arr])

// function duplicates(arr) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index++) {
//        if (!newArr.includes(arr[index])) {
//         newArr.push(arr[index])
//        }
        
//     }
//     return newArr;
// };

// console.log(duplicates([1,1,1,1,2,2,2,2,2,2,23,3,3,3,4,4,5,5,56,6,67,7,7,78,8,8,8,8]))


// let arr =[1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8]
// console.log([...new Set(arr)])

// let arr = [1,1,1,2,2,2,2,3,3,4,4,4];

// let findarr = arr.filter((item,index) => arr.indexOf(item) !== index );
// console.log(findarr);

// function maxMin(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return { max, min };
// }

// console.log(maxMin([1,2,3,4,5,56,7,8,9,10]));


// let arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))  // ... this spread operator is used to exapnsd the array in indivizual numbers


// let arr =  [ 1,2,3,4,5];

// let [first,second,third,...fourth] = arr;

// console.log(fourth)