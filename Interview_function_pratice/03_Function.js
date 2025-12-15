// let str = "madam";
// function palstr(str) {
//     let result = str.split("").reverse().join("");
//     return str === result
// };
// console.log(palstr(str))

let str = "";
function palstr(str) {
    for (let index = 0; index < str.length; index++) {
        if (str[index] !== str[str.length - 1- index]) {
            return false
        }
        
    }
    return true
}

console.log(palstr(str))