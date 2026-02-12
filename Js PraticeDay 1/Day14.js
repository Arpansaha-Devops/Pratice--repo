// # Perfect Number Check

// **Question Name:** Perfect Number Validator

// **Is the answer correct?** Yes ✓

// **Explanation:**
// A perfect number is a positive integer that equals the sum of its proper divisors (divisors excluding the number itself).

// For `number(6)`:
// - Divisors of 6: 1, 2, 3
// - Sum: 1 + 2 + 3 = 6
// - 6 === 6 → `true` ✓

// Your code correctly:
// 1. Returns `false` for numbers ≤ 1
// 2. Starts sum at 1 (the smallest proper divisor)
// 3. Checks all divisors up to num/2
// 4. Compares if the number equals the sum of its divisors
function isPerfectNumber(num) {
    if (num <= 1) return false;
    
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    
    return sum === num;
}

// Test cases
console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(10));  // false
console.log(isPerfectNumber(1));   // false