// let arr = [1,2,3,4,5,6,7,8]
// console.log(arr)


// let arr = [1,2,3,4,5,6,7,8]

// console.log(Array.isArray(arr)); 

// let arr = [1,2,3,4,5,6,7,8]

// console.log(arr.length)

// let arr = [1,2,3,4,5,6,7,8]

// console.log(arr[0])
// console.log(arr[arr.length -1])

// let arr = [1,2,3,4,5,6,7,8];

// arr.pop(8);
// console.log(arr);

// arr.push(94);
// console.log(arr)

// arr.unshift(98);
// console.log(arr);

// arr.shift(98);
// console.log(arr);



// let arr  =  [1,2,3,4,5,6,7,8];

// arr.splice(0)
// console.log(arr)


// let arr = [1,2,3,4,5,6,7,8];
// arr.length = 0;
// console.log(arr)


// let arr = [1,2,3,4,54,5,6,7,8];

// for (let[key,index] of arr.entries()) {
//     console.log(`${key}: ${index * 2}`)
// }


// let arr = [1,2,3,4,5,6,7,8];
// for (let i = 0; i < arr.length; i++) {
//    console.log(` ${arr[i] * 2}`) 
    
// }



// let arr =  [1,2,3,4,5,6,7,8];
// const  newArr = arr.filter((key) => key == 3);
// console.log(newArr)


// let arr = [1,2,3,45,6,7,8,9,10]

// console.log(arr.includes(8))




// const arr =  [1,2,3,4,5,6,7];

// let newArr = arr.find((key)=> key == 2 )

// console.log(newArr)


// let numbers = [10,20,30,40,50];

// let evenIndexElements = numbers.filter((element, index,arr) => index % 2 === 0);
// console.log(evenIndexElements); // [10,30,50]


// let transform = "arpas"

// console.log(transform.split(''))
// console.log( Array.isArray(transform.split('')) )


// const sortm  = [5,4,3,2,1];
// console.log(sortm.sort((a, b) => a - b));


// let arr =  [1,2,3,4,5,6,7,8]

// console.log(arr.reverse())

/** 2nd method  - */
 
// for (let index = arr.length -1; index >= 0 ; index--) {
 
//     console.log(arr[index])
// }

// let arr =  [1,2,3,4,5];
// const red = arr.reduce((acc,crr) => acc * crr)
// console.log(red)



// function Duplicate(arr) {
// let reduce = "";

// for (let index = 0; index < arr.length; index++) {
//     if(!reduce.includes(arr[index])){
//   reduce+= arr[index]
//     }
    
// }
// return reduce ;
// }

// console.log(Duplicate([1,2,2,2,2,3,3,3,4,4,4,5,5,5]))

/** second method - */

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates([1,2,2,2,2,3,3,3,4,4,4,5,5,5]));
// // Output: [1, 2, 3, 4, 5]


// let arr = [1,2,3,4,5]
// let arr1 = [11,23,45,6,789,90]


// console.log(arr.concat(arr1))

// console.log([...arr,...arr1])

// function Duplicate(arr) {
//     let unique = [];
// for (let i = 0; i < arr.length; i++) {
  
//     if (unique.indexOf(arr[i]) === -1) {
//         unique.push(arr[i])
//     }
    
// }
// return unique
// }

// console.log(Duplicate([1,2,2,2,12,3,3,4,4,5]))


// function removeDuplicates(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// console.log(removeDuplicates([1,2,2,2,12,3,3,4,4,5]));
// // Output: [1, 2, 12, 3, 4, 5]



