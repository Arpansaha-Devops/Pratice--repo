// let arr = ["vedant",10, "500", "lite", "c", "300"];

// function separateElements(arr) {
//     let str = [];
//     let num = [];
//     let char = [];
//    arr.forEach(item => {
//      if(typeof item === "number") num.push(item)
//         else if (typeof item === "string" && item.length >  1) {
//            str.push(item) 
//         }else {
//             char.push(item)
//         }
//    });
//    return {str,num,char}
// }


// console.log(separateElements(arr))


// let arr = ["vedant", "dent"]

// function charInclude(arr) {
//     const [first, second] = arr;
//     return [...second].every(char => first.includes(char));
// }

// console.log(charInclude(arr)); 

// console.log("vedant" + 100) // vedant100

// function first() {
//     let count = 0
//     return  function second(){
//     count ++
//     console.log(count)
//     }
// }

// let ans  = first ()

// ans ()
// ans ()
// ans ()
// ans () // 4


let prices = [1,2,5,8,3,2,8]


function maxProfitBruteForce(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    console.log(`\nBuying Day ${i} (Price = ${prices[i]})`);

    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];

      console.log(
        `  Selling Day ${j} (Price = ${prices[j]}) → Profit = ${profit}`
      );

      if (profit > maxProfit) {
        maxProfit = profit;
        console.log(`  ✅ New Max Profit Updated: ${maxProfit}`);
      }
    }
  }

  console.log(`\nFinal Maximum Profit = ${maxProfit}`);
  return maxProfit;
}

maxProfitBruteForce(prices);
