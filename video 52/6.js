function brewCoffee(coffeeType) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; // 1 to 4 seconds

        setTimeout(() => {
            resolve(`☕ Your ${coffeeType} is ready! (Brewed in ${delay} ms)`);
        }, delay);
    });
}

// Example usage:
async function coffeeShop() {
    console.log("Brewing your coffee...");

    const message = await brewCoffee("Cappuccino");
    console.log(message);
}

coffeeShop();
