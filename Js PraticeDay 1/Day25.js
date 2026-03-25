// Dependecy injection example ---

const first = (function(){
    function firstName(name) {
        console.log(`user ${name} is added in this history ....`)
    }
    return {
        firstName
    }
})()


const second = (function(first){
    function secondName(name) {
        console.log(`user ${name} is added in this history ....`)
    }
    return {
        secondName
    }
})(first)

second.secondName('Bob') // user Bob is added in this history ....
first.firstName('Alice') // user Alice is added in this history ....



class Account {
    constructor() {
        this.balance = [];
        this.accesslog = [];
    }

    logAccess(item) {
        this.accesslog.push(item);
    }

    addBalance(amount) {
        this.balance.push(amount);
        this.logAccess(`Added ${amount} to balance`);
        console.log(`Balance updated: ${this.balance.reduce((a, b) => a + b, 0)}`);
    }

    getBalance(index) {
        this.logAccess(`Checked balance at index ${index}`);
        console.log(`Balance at index ${index}: ${this.balance[index]}`);
    }

    getAccessLog() {
        console.log(`Access Log: ${this.accesslog.join(', ')}`);
    }
}