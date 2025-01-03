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
}, {});  // this returns an object of the food and the total number of food items, figure out a way to get it to be stored and extracted? not sure yet 

console.log(summary); 



  
  return (
    <div className="checkout">
        <h1>Order summary</h1>
        <ul>
          {order.map((meal, index) => {
            return <li key={index}>
              <h2>{meal.meal}</h2>
              <p>{meal.cost}</p>
              <p>Spice level: {meal.spice}</p>
              <p>{meal.description}</p>
            </li>
          })
          }
        </ul>
        <p>{totalCost}</p>
    </div>
  )
}
