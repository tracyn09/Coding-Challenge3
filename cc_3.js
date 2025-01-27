//Task 1

//Declaring Price Array
let prices = [23,35,46,33,29];

//Adding New Price to Array
prices.push(38);

//Removing First Price from Arrat
prices.shift()

//Updated Price Array
console.log("Updated Prices List:", prices); 

//Task 2

//Declaring Order Array
let orders = [37,56,43,22,67];

//Increasing Third Order Quantity by 5
orders[2] += 5; 

//Total Number of Orders
let totalorders= orders.reduce((sum,order)=> sum + order,0);

//Updated Order Array
console.log("Updated Orders List:", orders)
console.log("Total Order Count:", totalorders);

//Task 3

//Declaring Object Employee
let employee= {
    name: "Joseph Tornincaso",
    role: "Financial Advisor",
    performancescore: 86,
    isActive: true
}

//Update Performance Score
employee.performancescore = 93;

//Adding Promotion Eligible Boolean Value
employee.promotionEligible = true;

//Updated Employee Object
console.log("Employee Name:", employee.name)
console.log("Role:", employee.role)
console.log("Performance Score:", employee.performancescore)
console.log("Eligible for Promotion:", employee.promotionEligible)
console.log("Status:", employee.isActive);

//Task 4

//Declare Feedback Array
let feedback = [
    {   CustomerName: "Samantha Johnson",
        FeedbackText: "Good quality, definitely reccomend!",
        Rating: 4 
    },
    {   CustomerName: "Matthew Perry",
        FeedbackText: "Decent, but nothing special, overpriced.",
        Rating: 3
    },
    {   CustomerName: "Harry Lewis",
        FeedbackText: "Good product, terrible delivery.",
        Rating: 2
    }
];

//Adding New Feedback Object
feedback.push({
    CustomerName: "Clara Evans",
    FeedbackText: "Great service, quick delivery, product works.",
    Rating: 5
}
);

//Updated Feedback Array
console.log("Feedback List:", feedback);

//Task 5

// Declaring Object Inventory
let inventory = {
    itemName: "Toothpaste",
    stockCount: 458,
    price: 4.39,

    
//Adding a Method calculateTotalValue that Returns the Total Value (stockCount * price)
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

//Log Object Inventory and Total Value
console.log("Inventory Details:")
console.log("Item:", inventory.itemName)
console.log("Stock Count:", inventory.stockCount)
console.log("Price / Item:", inventory.price)

let Totalvalue = inventory.calculateTotalValue() 
console.log("Total Value:", Totalvalue);
