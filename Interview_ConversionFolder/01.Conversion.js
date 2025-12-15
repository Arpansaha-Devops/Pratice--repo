// 1. What is Type Conversion and Type Coercion in JavaScript?


// Type conversion: when we manually convert one data type to another (String(123) → "123")

// Type coercion: when JavaScript automatically converts one type to another ("5" * 2 → 10)



// question 2 -

// console.log(5 == "5");  // true  (type coercion)
// console.log(5 === "5"); // false (strict equality)


// question 3 -

// let ste = "123";
// let num = Number(ste);
// console.log(typeof num)
// console.log( num)

// let num = 123;
// const str = String(num);
// const newStr =123 +""
// console.log( typeof newStr)
// console.log( typeof str)

// console.log("5" - 2);  // 3
// console.log("5" + 2);  // "52"
// console.log(true + true);  // 2
// console.log(false + 5); // 5
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN

// [] + []      // ""
// [] + {}      // "[object Object]"
// {} + []      // 0 (depends on parsing)
// {} + {}      // NaN or "[object Object][object Object]"


// console.log("arpan"-100); // NaN because it is not a number -

