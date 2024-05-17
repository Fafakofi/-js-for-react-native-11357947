
function processArray(bes) {
    return bes.map(num => num % 2 === 0 ? num * num : num * 3);
}
// example work
// console.log(processArray([5,4,4,2])); 