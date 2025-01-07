import { useState } from "react";


export default function Checkout({order}) {

  

  console.log(order)

  let totalCost = 0;

  if(order.length === 0) {
    return console.log('No order yet')
  } else {
    
    totalCost = order.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.cost.replace('£', ''))}, 0);
    console.log(totalCost)

  } // total cost of the order using the reduce method, parsloaft changes the string to a number and the replace method removes the £ sign

const summary = order.reduce((accumulator, order) => {
  const food = order.meal;
  accumulator[food] = (accumulator[food] || 0) + 1;
  return accumulator;
}, {});  // this returns an object of the food and the total number of food items

console.log(summary); 


let orderSummary = Object.entries(summary).map(([food, quantity]) => {
  return <li key={quantity}>{food} x {quantity}</li>
}) // Object.entries returns an array of the object, map through the array and return the food and quantity of the food, [food, quantity] is extracting the key value object and then being returned as a list



  
  return (
    <div className="checkout">
        <h1>Order summary</h1>
        
          {orderSummary}
        
        <h3>Order total: £{totalCost.toFixed(2)}</h3>
    </div>
  )
}




