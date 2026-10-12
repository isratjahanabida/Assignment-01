function isPalindrome(str) {
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return cleaned === cleaned.split("").reverse().join("");
}

// Test the function
console.log("Task 06: Check for Palindrome");
console.log("Input: racecar");
console.log("Output:", isPalindrome("racecar"));
