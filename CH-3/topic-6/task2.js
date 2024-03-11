const numberToWord = (number) => {
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    if (typeof number !== 'number' || isNaN(number)) {
        return "Invalid input. Please enter a number";
    }
    return words[number - 1];
};

console.log(numberToWord(5));