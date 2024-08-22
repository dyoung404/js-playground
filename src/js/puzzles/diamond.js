/**
 * The purpose of this exercise is to create a diamond shape using the alphabet,
 * where the letter provided is the widest point of the diamond.
 * The size of the diamond can be modified by changing the width parameter.
 * The default width is a multiplier of 2.
 */

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function makeDiamond(letter = 'e', width = 2) {
    const index = alphabet.indexOf(letter.toUpperCase());
    const chars = alphabet.splice(0, index + 1);
    const output = [""];

    const getOffsets = (index) => {
        const offset = chars.length;
        const spaces = ((offset - index) * width);
        const spacesBetween = index > 0 ? (index * (width * 2)) : 0;
        return [spaces, spacesBetween];
    };

    for (let i = 0; i < chars.length; i++) {
        const part = chars[i];
        const [spaces, spacesBetween] = getOffsets(i);
        const line = part.padStart(spaces) + (i > 0 ? part.padStart(spacesBetween) : "");
        output.push(line);
    }

    for (let i = chars.length - 2; i >= 0; i--) {
        const part = chars[i];
        const [spaces, spacesBetween] = getOffsets(i);
        const line = part.padStart(spaces) + (i > 0 ? part.padStart(spacesBetween) : "");
        output.push(line);
    }

    output.push("");

    if (output.length === 2) {
        return "Bruh. Pick a letter between A & Z."
    }

    if (output.length === 3) {
        return "It's kinda hard to make a diamond when you pick the first letter."
    }

    return output.join('\r\n');
}

makeDiamond('L', 2);