
const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);

const strings = ["Hello", "World", "JavaScript", "Is", "Awesome"];
const modifiedNames = formatArrayStrings(strings, processedNumbers);

const userProfiles = createUserProfiles(strings, modifiedNames);
console.log(userProfiles);


module.exports = {
    createUserProfiles
};
