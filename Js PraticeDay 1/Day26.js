let arr = [1,2,3,4];

let newArr = arr.map((num) => {
    if (num % 2 === 0) return;
    return num * 2;
})

console.log(newArr) // [2, undefined, 6, undefined] because we are not returning anything for even numbers and for odd numbers we are returning the multiplied value.

let newArr2 = arr.map((num) => {
    if (num % 2 === 0) return num;
    return num * 2;
})  

console.log(newArr2) // [1, 2, 3, 4] because we are returning the original value for even numbers and for odd numbers we are returning the multiplied value.


const input = [1, [2, [3, 4], 5]];

console.log(input.flat(Infinity)) // [1, 2, 3, 4, 5] because we are flattening the array to any depth using Infinity as the argument for flat method.

function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }   
    }
    return result;
}

console.log(flattenArray(input)) // [1, 2, 3, 4, 5] because we are flattening the array using recursion.



// function debounce(fn, delay) {
//   let timer ;
//   return function(...args) {    
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   }
// }

// // Example usage:
// const handleResize = debounce(() => {
//   console.log('Window resized!');
// }, 500);


let arr1 = [1,2,3,4,5];

console.log(Array.isArray(arr1)) // true because arr1 is an array.

console.log(Array.from(arr1)) // [1, 2, 3, 4, 5] because we are creating a new array from arr1 using Array.from method.

console.log(Array.from('hello')) // ['h', 'e', 'l', 'l', 'o'] because we are creating a new array from a string using Array.from method.