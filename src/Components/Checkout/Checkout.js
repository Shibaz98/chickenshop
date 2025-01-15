import { Link } from "react-router-dom";

export default function Checkout({order, removeFromCart, orderValue, addToCart}) {

 
  const groupedOrder = order.reduce((acc, meal) => {
    const found = acc.find(item => item.meal === meal.meal);
    if (found) {
      found.quantity += 1;
      found.individualCost = found.quantity * meal.cost; 
    } else {
      acc.push({ ...meal, quantity: 1 , individualCost: meal.cost});

    }
    return acc;
  }, []);

  // hooray everything works 

  const totalCost = groupedOrder.reduce((acc, meal) =>{
    const wholeNumber = parseFloat(meal.individualCost); // converts strings to number 
    return acc + wholeNumber; // adds the total cost of the order
  }, 0) // 0 is the starting point of the total cost

  console.log(totalCost);

  if (totalCost > 0){
    orderValue(totalCost);
  } ; // passes the order total to the app component and saves it in a state 

  

  return (
    <div className="checkout">
        <h1>Order summary</h1>
          <ul>
            {groupedOrder.map((meal, index) =>(
              <li key={index}>
                <p>{meal.meal} x{meal.quantity} £{meal.individualCost ? meal.individualCost : meal.cost}</p>
                <button className="removeButton" onClick={() => removeFromCart(meal)}>Remove</button>
              </li>
            ))
            }
          </ul>
          <p>Order total: £{totalCost}</p>
          <Link to='/payment' className="checkout-link">Checkout</Link>

    </div>
  )
}


