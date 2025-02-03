//Task If Statememts

let purchaseAmount = 150; // how much the purchase is
let finalAmount = purchaseAmount; // The amount after discount is applied

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.75; //25% discount
    console.log("Discount Applied")
}

console.log(`Final Amount After Discount is Applied: $${finalAmount}`); // Logging the amount into the console

