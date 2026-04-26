// stale closure example in react ----


function app () {
    let count = 0; 

    return function inner () {
        count++;
        console.log(count)
    }
}


const counter = app();

counter() // 1
counter() // 2
counter() // 3   // this is normal closure example ;



function App() {
  let count = 0;

  const message = `Count is ${count}`;

 return function log() {
    console.log(message);
  }

  count = 5;
}

const fn = App();
fn() // Output: "Count is 0"  // this is stale closure example because it is not updating the value of count in the message variable.
