//Task Customer Discounts

let purchaseAmount = 150; // how much the purchase is
let finalAmount = purchaseAmount; // The amount after discount is applied

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.75; //25% discount
    console.log("Discount Applied")
}

console.log(`Final amount after discount: $${finalAmount}`); // Logging the amount into the console

//Task 2 Sales report

let sales = [120, 85, 200, 150, 90]; // array of sales
let totalSales = 0;

for (let i = 0; i < sales.length; i++){
    totalSales += sales[i]
} // Using a for loop to calculate total sales

console.log(`Total Sales: $${totalSales}`); // logging total sales into the console

// Task 3 Inventory Depletion

let stock = 10; //Stock currently

while (stock > 0){
    console.log(`Stock remaining: ${stock}`);
    stock--; //subtracts by 1
} // a system that counts down from ten to 0

console.log("Stock is Gone") //Putting the system into the console

//Task 4 Customer Survey

let responses = 0; 
do{
    console.log(`Collect responses: ${responses}`);
    responses++;
}
while (responses < 3)
    //customer survey form that limits at 3 responses using the do while format

// Task 5 Employee Information

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
} ;// employees information

for (let key in employee){
    console.log(`${key}: ${employee[key]}`);
} //All the properties of the employee object and logs each key value pair to the console.

// Task 6 Product Listings

let products = ["Laptop", "Mouse", "Keyboard"]; // the list of products
for (let product of products){
    console.log(`Product: ${product}`); //logs the products into the console
}

//Task 7 Order processing

let orders = [101, 102, 103]; //array of orders
orders.forEach(order => {
    console.log(`order ID: ${order}`)
}) //logging orders of ids into the console

//Task 8 Tax Calculation
function calculateTax(amount, taxRate){
    return amount * taxRate;

}
let tax = calculateTax(1000, .06);
console.log(`Tax: $${tax}`) // function that find the returned tax rate

// Task 9 Discount Application

const applyDiscount = function(price, discountPercentage){
    return price -(price *(discountPercentage / 100));

};
let discountPrice = applyDiscount (100,10)

console.log(`Discounted Price: $${discountPrice}`); // logging the discounted price after using the discount function


//Task 10 Loyalty Points

const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);

};
let points = calculatePoints(100);

console.log(`Loyalty points: ${points}`); //logging a function that calculate the loyalty points into the console
