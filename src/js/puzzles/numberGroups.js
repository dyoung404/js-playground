/**
 * The purpose of this exercise is to create number groups from an array of mixed data types, using only `null` as the delimiter.
 * Undefined, white space, and non-numeric values should be ignored.
 */

const data = ['1', '2', 3, 4, 5, null, 6, 7, null, null, 8, '9', 10, 11, undefined, 12, null, 13, , 14, '15', 16];

function createNumberGroups(data = []) {
    const output = [];
    let currentGroup = [];

    data.forEach((value, index, array) => {
        const splitFound = value === null;
        const isLastItem = index === array.length - 1;
        const isGroupEmpty = currentGroup.length === 0;
        const addGroupToOutput = (splitFound || isLastItem) && !isGroupEmpty;

        if (typeof value === 'number') {
            currentGroup.push(value);
        }

        if (addGroupToOutput) {
            output.push(currentGroup);
            currentGroup = [];
        }
    });

    return output.map(item => JSON.stringify(item)).join('\n');
}

createNumberGroups(data);