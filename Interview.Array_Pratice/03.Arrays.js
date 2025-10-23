// let arr = [1,2,3,4,5,6]; question 1 -
// let arr1 = "arpan"

// console.log(Array.isArray(arr,arr1))

// let arr = [1,2,3,4,5,6,7]; question 2 -


// console.log(arr.length)  question 3 - 

// let arr = [1,2,3,4,5,6,7];

// console.log(arr.indexOf(2))  question 4 -


// let arr = [1,2,3,4,5,6,7];

// console.log(arr.splice(2,1,64))

// console.log(arr)  question 5 -


// let arr = [1,2,3,4,5];

// console.log(arr.indexOf(7)) questuion number 6 -


// let arr = [1,2,3,4,5,6];
// for (const element of arr) { // question number 7-
//     console.log(element)
// }



// let arr = [1,2,3,4,5,6,7];
// for (let index = arr.length -1; index >= 0 ; index--) { questuion number 8 - 
//   if(arr[index] % 2 === 0){
//     console.log(arr[index])
//     break;
//   }
    
// }
    

// let arr = [1,2,3,4,5,56,6,7,78,8,90,98];

// const newArr = arr.filter((key)=> key > 50);

// console.log(newArr)  question  9 -



// let arr = ["arpan", "messi"] question number 10 -

// console.log(arr.includes("arpan"));


// let arr = [1,2,3,4,5,6];

// const mapArr = arr.map((element) =>{ return Math.pow(element , 2)});
// console.log(mapArr)  question number 11 -


// let arr = "arpan"
// console.log(arr.split(""));
// console.log(  Array.isArray(arr.split("")));  question 12  -



// let arr = [5,4,3,2,1,12,111,64];  question number 13 -

// console.log(arr.sort((a,b) => a - b))
// console.log(arr.sort((a,b) => b - a))



// let arr = [1,2,3,4,5,6]; question number 14 - 

// console.log(arr.reverse())

// for (let i =  arr.length -1; i >= 0; i--) {
//    console.log(arr[i])
    
// }


// function reverse(str) { 
//     let newrevArr = [];
//     for (let index = 0; index < str.length; index++) {
      
//          if (!newrevArr.includes(str.length)) {
//         newrevArr.unshift(str[index])
//     }
//     }
//     return newrevArr
   
    
// }

// console.log(reverse([1,2,3,4,5,6,7]));


// function revstr(str) {
//     let result = []
//     for (const key of str) {
//       result.unshift(key)
//     }
//     return result
// }

// console.log(revstr([1,2,3,4,5,6]))




// function duplicate(str1) { question number 15 -
//     let duplicatArr = [];
//     for (let index = 0; index < str1.length; index++) {
//        if (!duplicatArr.includes(str1[index])) {
//         duplicatArr.unshift(str1[index])
//        }
        
//     }
//     return duplicatArr
// }


// console.log(duplicate([1,2,2,2,3,3,3,4,5]).sort((a,b) => a-b))

// let arr1 = [1,2,2,2,33,4,3,33,4,5,6]
// console.log([... new Set(arr1)])


// let arr = [1,2,3,4,5,6];  // question number 16 -
// let arr2 = [12,34,56,7,890]

// console.log(arr.concat(arr2));

// console.log([...arr,...arr2])



// let arr =[1, [2, 3], [4, [5]]]; // question number 17 -
// console.log(arr.flat(Infinity))

// let ste = "arpan";
// console.log(Array.of(ste))  // question number 18 -

