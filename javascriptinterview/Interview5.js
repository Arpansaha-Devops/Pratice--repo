// let x = {},
// y = {nAme : "arpan"},
// z = {nAme : "tanmoy"}

// x[y] = {nAme : "messi"},
// x[z] = {nAme : "Ronaldo"}

// console.log(x[y]) // "ronaldo"

// let obj1 = {
//     name : "arpan",
//     age : 21,
//     city : "kolkata"
// }

// let b = {...obj1, name : "tanmoy"}   //  here b overwrites the name : "Arpan => tanmoy" and take rest of the object;
// const {name,...xyz} = obj1   //  name gets thge value = "arpan" from first object, & xyz recevies rest of values like city;
// console.log(xyz,b)   //  answer is = age : 21, city : "kolkata" for xyz & for b it just overwrites the bname and give hole obj1


// conmsole.log(pqr)
// const pqr = 100;

// const name  = "arpan"
// console.log(`My name is ${name}`)

// function outer() {
//   return function inner() {
//     console.log("Hello!");
//   }
// }

// const output = outer()
// output()


// function firstclassfun(a,b) {
//     return a+b
// }

// console.log(firstclassfun(5,10))


// function fun1(callback) {
//    let greet = "Hi !"
//    console.log(greet)
//     callback(greet)
// }

// function fun2(value) {
//     setTimeout(() => {
//          console.log(` ${value} arpan`)
//     }, 2000);
// }

// fun1(fun2)


// let obj1 = {
//     nAme : "arpan",
//     age : 21,
//     city : "Kolkata"
// }

// function greet(state) {
//     console.log(`${this.nAme} and i live at ${this.city} & also in ${state}.`)
//     console.log(this)
// }

// let output = greet.bind(obj1,["Delhi"])

// output()


// let arr = [1,2,3,4,5]

// const newArr = arr.every((element) => element => 1)

// console.log(newArr)

// const grandParent = {
//     country: "India"
// };

// const parent = {
//     city: "Kolkata",
//     __proto__: grandParent
// };

// const child = {
//     name: "Arpan",
//     __proto__: parent
// };

// console.log(child.name);    // from child
// console.log(child.city);    // from parent
// console.log(child.country); // from grandParent

// class user {
//     constructor(model,company,year) {
//         this.model = model,
//         this.company = company,
//         this.year = year
//     }
//     greet() {
//         console.log(this.year)
//     }
// }

// const output = new user("Lamborgini","Lamborgini",2025)
// output.greet()