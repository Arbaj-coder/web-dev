function placeOrder(orderId) {
    return new Promise((resolve) => {
        // Random delay between 1 and 5 seconds
        const delay = Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {
            resolve(`✅ Order ${orderId} confirmed! (Processed in ${delay} ms)`);
        }, delay);
    });
}

// Example usage:
async function runShopperSimulation() {
    console.log("Placing order...");

    const confirmation = await placeOrder(12345);
    console.log(confirmation);
}

runShopperSimulation();
