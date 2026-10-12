function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }

        seen.set(nums[i], i);
    }

    return [];
}

// Test the function
console.log("Task 08: Two Sum");
console.log("Numbers: [2, 7, 11, 15]");
console.log("Target: 9");
console.log("Output:", twoSum([2, 7, 11, 15], 9));

