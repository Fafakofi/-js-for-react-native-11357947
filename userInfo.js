// const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(originalNames, arrStr) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            arrStr:arrStr[index]
        };
    });
}

console.log(createUserProfiles(["cicc","uwnd"],["iwxxw","SUsxXX"]))

module.exports = {
    createUserProfiles
};
