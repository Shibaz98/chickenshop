
export default function Checkout({order, removeFromCart}) {

 
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

  

  return (
    <div className="checkout">
        <h1>Order summary</h1>
          <ul>
            {groupedOrder.map((meal, index) =>(
              <li key={index}>
                <p>{meal.meal} x{meal.quantity} £{meal.individualCost ? meal.individualCost : meal.cost}</p>
                <button onClick={() => removeFromCart(meal)}>Remove</button>
              </li>
            ))
            }
          </ul>
    </div>
  )
}


