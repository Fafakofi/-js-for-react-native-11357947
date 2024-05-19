
function processArray(bes) {
    return bes.map(num => num % 2 === 0 ? num * num : num * 3);
}
// example work
// console.log(processArray([5,4,4,2])); 

function formatArrayStrings(arrStr, arrnum){
    return arrStr.map((a,b)=>{
        return arrnum[b] % 2 === 0 ? a.toUpperCase() : a.toLowerCase();
    })
};

// console.log(formatArrayStrings(["srbfi","srbrADSD"],[1,2]))

module.exports = {
    processArray,
    formatArrayStrings
};