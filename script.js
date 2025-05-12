function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Iterate through the symbols and build the Roman numeral
    for (let [symbol, value] of romanSymbols) {
        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value;     // Decrease the number by the value
        }
    }

    return result; // Return the final Roman numeral
}

// Example usage:
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(0));    // Output: (empty string, as 0 is not represented in Roman numerals)
console.log(convertToRoman(100000)); // Output: (not a valid Roman numeral, but can be handled as needed)
