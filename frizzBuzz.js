function fizzBuzz(N) {
    // Validate input
    if (typeof N !== 'number' || N < 1) {
        throw new Error('Input must be a positive integer');
    }

    // Initialize an array to store the results
    const result = [];

    // Loop through numbers from 1 to N
    for (let i = 1; i <= N; i++) {
        // Check divisibility by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }

    // Return the result array
    return result;
}

// Example usage
const N = 10;
console.log(fizzBuzz(N));
