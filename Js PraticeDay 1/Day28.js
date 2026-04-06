// example of array destructuring ---

const myArray = [1, 2, 3, 4, 5];

const [first, second, ...rest] = myArray;
console.log(first); // Output: 1
console.log(second);


let a =10;
let b = 20;

let c = [a,b] = [b,a]

console.log(a) // 20


let acc = 10;
let bcc = 20 ;

[acc,bcc] = [bcc,acc]
console.log(acc)



function greet(firstName, ...others) {
  console.log("First:", firstName);
  console.log("Others:", others);
}

greet("Arpan", "John", "Doe", "Sam");



// const arr1 = [100,50,10,30,7]


// const result = arr1.reduce((acc,curr) => acc + curr , 0)
// console.log(result)


const myArr = [10, "a" , "c" , 11 , 5]

function separeteArrValue(myArr) {
    let numArr = [];
    let strArr = [];
    for (let i = 0; i < myArr.length; i++) {
        if (typeof myArr[i] === "number") {
            numArr.push(myArr[i])
        } else {
            strArr.push(myArr[i])
        }  
    }
    return {numArr, strArr}
}

console.log(separeteArrValue(myArr))


// example of infinite curring ----

function infinite(a) {
    return function(b) {
      if (b !== undefined) {
        return infinite(a + b);
      } return a;
    }

}

console.log(infinite(5)(10)(15)()) // 30    