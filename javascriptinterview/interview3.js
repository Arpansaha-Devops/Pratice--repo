// const arr = [1,2,3,1,1,4,5,4,5]

// console.log([...new Set(arr)])


// function dulicate(arr) {
//     return word = arr.filter((key,index,arr) => arr.indexOf(key) !== index)
// }

// console.log(dulicate(arr))

// function dulicate(arr) {
//     let result = []
//     for (let index = 0; index < arr.length; index++) {
//      if (!result.includes(arr[index])) {
//         result.push(arr[index])
//      }
        
//     }
//     return result;
// }

// console.log(dulicate(arr))


let str = "messi"

// function palstr(str) {
//     let result = str.split("").reverse().join("")
//     return str === result;
// }

// console.log(palstr(str))


// function palstr (str) {
//     for (let index = 0; index < str.length/2; index++) {
       
//         if (str[index] !== str[str.length - 1 - index]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(palstr(str))



// let arr1 = ["a","b","c","a","d","a","e"]

// arr1.forEach((element,index) => {
//     if (element === "a") {
//        console.log(`${element} index is ${index}`) 
//     }
// })

// console.log(x)
// console.log(abc)
// var x = 100

// function abc(xyz) {
//     return xyz + xyz
// }

let arr = [10,20,100,10,50,100,40]

// function duplicatearr(arr) {
//     return arr.filter((element,index,arr) => arr.indexOf(element)!== index)
// }

// console.log(duplicatearr(arr))

const unique = [];
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}
console.log(unique);
