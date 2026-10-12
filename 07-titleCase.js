function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => {
            if (word.length === 0) {
                return word;
            }

            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
}

// Test the function
console.log("Task 07: Title Case");
console.log("Input: i love coding");
console.log("Output:", titleCase("i love coding"));
