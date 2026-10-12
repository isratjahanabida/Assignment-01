async function fetchWithTimeout(url, timeout = 2000) {
    const controller = new AbortController();

    const timer = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(
                "Request failed: HTTP " + response.status
            );
        }

        return await response.json();

    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Request Timed Out");
        }

        throw error;

    } finally {
        clearTimeout(timer);
    }
}

// Test the function
async function testFetch() {
    console.log("Task 10: Fetch Timeout");

    try {
        const data = await fetchWithTimeout(
            "https://jsonplaceholder.typicode.com/todos/1",
            3000
        );

        console.log("Fetch successful!");
        console.log("Response:", data);

    } catch (error) {
        console.log("Fetch Error:", error.message);
    }
}

testFetch();

