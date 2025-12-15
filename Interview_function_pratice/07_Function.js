// function greetuser(Name,callback) {
//     console.log("hello")
//     callback(Name);
// }
// function second(name) {
//     console.log(name)
// }



// greetuser("Arpan",second)

// function massage(callback) {
//     let name = "Arpan";
//     callback(name)
// }
// function output(name) {
//     console.log(`welcome ${name}`)
// }

// massage(output)




// function num(a,b,callback) {
//   callback(a,b)
// }

// function sum(a,b) {
//     console.log(a + b)
// }

// num(10,11,sum)



// function filedownload(url,callback) {
//     console.log(`Downloading your file...`)
//     setTimeout(() => {
//         callback(url)
//     }, 2000);
// }

// function second(url) {
//    console.log(`download complete..  ${url}`) 
// }

// filedownload("https://remixicon.com/icon/instagram-line",second)

// function otpgenarate(otp,callback) {
//     console.log('Genarating your otp...')
//     callback(otp)
// }

// function processing(num,callback) {
//     let otp = "";
//     for (let index = 0; index < num; index++) {
//         otp += Math.floor(Math.random() * 10)
        
//     }
//     setTimeout(() => {
//         console.log(`wait few seconds...`)
//         callback(otp)
//     }, 2000);
// }

// function successful(num) {
//     console.log(`Yous ${num.length} - digit opt is ${num}`)
// }


// otpgenarate(6, function (num) {
//   processing(num, successful);
// });


 