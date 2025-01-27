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