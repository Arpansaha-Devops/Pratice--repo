// function genarateotp(callback,num) {
//     let otp = "";
//     for (let index = 1; index <= num; index++) {
//        otp += Math.floor(Math.random() * 10 + 1)
        
//     }
//     setTimeout(() => {
//         console.log(`Verifing your documents...`)
//         callback(otp)
//     }, 2000);
// }

// function displayfunction(otp) {
//     setTimeout(() => {
// console.log(`your ${otp.length} - digit otp is ${otp}`) 
//     }, 4000);
// };

// genarateotp(displayfunction,6)


// function massage(name,callback) {
//     console.log(`Hello! ${name}`)
//     console.log(`preparing your messagae....`)
//     setTimeout(() => {
//         console.log(`It takes less than a minute.....`)
//         callback();
//     }, 2000);
// }

// function showmass(){
//     setTimeout(() => {
//         console.log(`The special message for you is.... `)
//     }, 4000);
//     setTimeout(() => {
//         console.log(`happy birthday Arpan❤️ 🤗`)
//     }, 5000);
// }

// massage("Arpan",showmass)

// function first(callback) {
//     let a = 4
//     console.log(4 + 5);
//     callback(a)
// }

// function second(sum) {
//     setTimeout(() => {
//         console.log(sum)
//     }, 2000);
// }

// first(second)


// some synchronous callback examples - 


// function first(Name,callback) {
//     console.log("hello! ",Name)
//     callback()
// }

// function second() {
//     console.log(`How are you`)
// }

// first("Arpan",second)
