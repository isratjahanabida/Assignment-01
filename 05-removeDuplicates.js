function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test the function
console.log("Task 05: Remove Duplicates");
console.log("Input: [1, 2, 2, 3, 4, 4]");
console.log(
    "Output:",
    removeDuplicates([1, 2, 2, 3, 4, 4])
);
