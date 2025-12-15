// function getData() {
//     return new Promise((resolve,reject) => {
//         let num = Math.random() * 10;
//         setTimeout(() => {
//             if (num > 0.3) {
//                 resolve("Data Fetched Successfully !")
//             } else{
//                 reject("Error While Fetching Data")
//             }
//         }, 2000);
//     })
// }

// getData().then((value) => console.log(`${value}`))
//          .catch((Error) => console.log(Error))





// async function fetchData() {
//     try {
//           const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const response = await data.json()
//     console.log(response)
//     } catch (error) {
//        console.log(`error while fetching DATA`) 
//     }
// }

// fetchData()


// function getuser() {
//     return new Promise((resolve,reject) => {
//         resolve("starting")
//     })
// }

// function getid() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//              resolve({userId : 1234})
//         }, 2000);
       
//     })
// }

// function getpost() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//              resolve({userpost : "junior"})
//         }, 4000);
//     })
// }

// getuser().then(value => {console.log(value); return getid()})
//                   .then(value => {console.log(value); return getpost()})
//                   .then(value => {console.log(value); console.log("All data fetched ✅")})
//                   .catch(error => console.error(error));



// question number 4 -


// const p1 = () => Promise.resolve("First");
// const p2 = () => Promise.resolve("Second");
// const p3 = () => Promise.resolve("Third");

// Promise.allSettled([p1(),p2(),p3()]).then(result => {
//     console.log(result)
// })


// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// test();
// console.log("3");


const url = "https://jsonplaceholder.typicode.com/posts/1"

async function fetchData() {
    try {
         const data = await fetch(url)
    const fetchData = await data.json()
    console.log(fetchData)
    } catch (error) {
      console.log(`error ${error}`)  
    }
   
}

fetchData()




// function fun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`hello !`)
//         }, 2000);
//     })
// }
// function fun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Arpan`)
//         }, 3000);
//     })
// }
// function fun3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`How are you`)
//         }, 1000);
//     })
// }

// fun1().then(value => {console.log(value); return fun2()})
//                    .then(value => {console.log(value); return fun3()})
//                    .then(value => {console.log(value); console.log("All data fetched ✅")})

// async function runAll() {
//   const val1 = await fun1();
//   console.log(val1);

//   const val2 = await fun2();
//   console.log(val2);

//   const val3 = await fun3();
//   console.log(val3);

//   console.log("All data fetched ✅");
// }

// runAll();



// async function fetchWithRetry(url, retries) {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       console.log(`Attempt ${attempt}...`);
//       const response = await fetch(url);

//       if (!response.ok){
// throw new Error(`HTTP Error: ${response.status}`);
//       } 
//       const data = await response.json();
//       console.log("✅ Data fetched successfully:", data);
//       return data; // stop retrying after success
//     } catch (error) {
//       console.log(`❌ Attempt ${attempt} failed. ${attempt < retries ? "Retrying..." : "No more retries."}`);
//       if (attempt === retries) console.error("Final Error:", error.message);
//     }
//   }
// }

// fetchWithRetry("https://jsonplaceholder.typicode.com/posts/123456", 3);




// const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const fetch2 = fetch("https://jsonplaceholder.typicode.com/users/1");

// Promise.race([fetch1, fetch2])
//   .then(async res => {
//     const data = await res.json();
//     console.log("🏁 First data fetched:", data);
//   })
//   .catch(err => console.error("Error fetching data:", err));



// function delay(ms) {
//     return new Promise((resolve,reject) => {
//         if (ms > 3000) {
//             reject("❌ Delay too long! Something went wrong.")
//         }else {
//             setTimeout(resolve,ms)
//         }
//     })
// }

// async function prinbtData() {
//     try {
        
//         console.log(`Fetching user...`)
//     await delay(2000)


//     console.log("Fetching posts...");
//   await delay(2000);

//   console.log("Fetching comments...");
//   await delay(4000);

//   console.log("All data loaded ✅");

//     } catch (error) {
//         console.error("⚠️ Error while loading data:", error);
//     } finally {
//         console.log("📦 Process completed (success or fail)")
//     }
    
// }

// prinbtData()