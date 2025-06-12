function delayedDouble(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
}

async function asyncMapDouble(arr) {
    return arr.map(num => delayedDouble(num));
}

// Usage example:
async function run() {
    const input = [1, 2, 3, 4];
    const promiseArray = await asyncMapDouble(input);

    const results = await Promise.all(promiseArray);
    console.log(results); // [2, 4, 6, 8]
}

run();
