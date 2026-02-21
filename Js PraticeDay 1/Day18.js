const arr  = [1, [2, [3, [4]], 5]]


function flatten(arr) {
  const result = [];

  function helper(input) {
    for (let item of input) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  }

  helper(arr);
  return result;
}


console.log(flatten([1, [2, [3, [4]], 5]]));