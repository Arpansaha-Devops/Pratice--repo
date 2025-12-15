// function first(a) {
//      a = 10;
//     return function(b){
//          b = 10
//         console.log(a + b);
//     }
// }

// first()();


// function createCounter() {
//   let count = 0;

//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     }
//   };
// }

// const counterA = createCounter(); 
// counterA.increment();           // counterA.increment()	countA = 1	1	new closure created
// counterA.increment();           // counterA.increment()	countA = 2	2	same closure, count updated
// counterA.decrement();           // counterA.decrement()	countA = 1	1	same closure, count updated
                                   
    
    
// const counterB = createCounter();
// counterB.increment();
    
// counterB.increment()	countB = 1	1	different closure, new variable




// console.log("Start"); // 1

// setTimeout(() => console.log("Callback 1"), 0); // 4

// Promise.resolve().then(() => console.log("Promise")); // 3

// console.log("End"); // 2




// function delaylogger() {
//     for (let i = 0; i < 3; i++) {
//       setTimeout(() => {
//         console.log(i)
//       }, 1000);
        
//     }
// }

// delaylogger();


function add(a) {
    return function (b){
        return function (c){
            return (`${a + b + c}`)
        }
    }
}

 console.log(add(2)(5)(4))

