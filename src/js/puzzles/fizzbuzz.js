/**
 * The purpose of this exercise is to print the numbers from 1 to 100.
 * But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 */

const Multiples = Object.freeze({
    FIZZ: 3,
    BUZZ: 5
});

const TextMap = Object.freeze({
    [Multiples.FIZZ]: "Fizz",
    [Multiples.BUZZ]: "Buzz"
});

function fizzbuzz(max = 100) {
    if (typeof max !== 'number' || max < 1) {
        throw new Error("Invalid input. Please provide a number greater than 0.");
    }

    let output = [];

    for (let i = 1; i <= max; i++) {
        let entry = "";

        if (i % Multiples.FIZZ === 0) {
            entry += TextMap[Multiples.FIZZ];
        }

        if (i % Multiples.BUZZ === 0) {
            entry += TextMap[Multiples.BUZZ];
        }

        if (entry === "") {
            entry += i.toString();
        }

        output.push(entry);
    }

    return output.join('\n');
}

fizzbuzz();