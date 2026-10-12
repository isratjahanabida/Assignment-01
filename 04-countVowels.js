function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Test the function
console.log("Task 04: Count Vowels");
console.log("Input: javascript");
console.log("Output:", countVowels("javascript"));
