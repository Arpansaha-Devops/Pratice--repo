const arr = [24,57,21,45,32,67];
const target = 45;

function twoSum(arr,target) {
    const map = new Map();
    for (let index = 0; index < arr.length; index++) {
        
        const complete = target - arr[index]
        if (map.has(complete)) {
            return [map.get(complete),index]
        }
        map.set(arr[index],index)
    }
}

console.log(twoSum(arr,target))