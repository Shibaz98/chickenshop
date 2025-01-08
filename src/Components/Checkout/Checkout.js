import { useState} from "react";


export default function Checkout({order}) {

  const initialSummary = order.reduce((accumulator, order) => {
    const food = order.meal;
    accumulator[food] = (accumulator[food] || 0) + 1;
    return accumulator;
  }, {});  // this returns an object of the food and the total number of food items
  
  console.log(initialSummary); 
  
  const [summary, setSummary] = useState(initialSummary); // set the initial state of the summary to the initialSummary
  

  console.log(order)

  

  let totalCost = 0;

  if(order.length === 0) {
    return console.log('No order yet')
  } else {
    
    totalCost = order.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.cost.replace('£', ''))}, 0);
    console.log(totalCost)

  } // total cost of the order using the reduce method, parsloaft changes the string to a number and the replace method removes the £ sign


const handleRemove = (food) => {
  setSummary((prevsummary) =>{
    const updatedSummary = {...prevsummary};
    if (updatedSummary[food] > 1) {
      updatedSummary[food] -= 1;
    } else {
      delete updatedSummary[food];
    }
    return updatedSummary;
  })
}



let orderSummary = Object.entries(summary).map(([food, quantity]) => {
  return <li key={food}>
            {food} x {quantity} 
            <button onClick={() => handleRemove(food)}>Remove</button> 
          </li>
  
  
}) // Object.entries returns an array of the object, map through the array and return the food and quantity of the food, [food, quantity] is extracting the key value object and then being returned as a list



  
  return (
    <div className="checkout">
        <h1>Order summary</h1>
          {orderSummary}  
        <h3>Order total: £{totalCost.toFixed(2)}</h3>
    </div>
  )
}




