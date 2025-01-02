

export default function Checkout({order}) {

  console.log(order)
  


  return (
    <div className="checkout">
        <h1>Order summary</h1>
        <ul>
          {order.map((meal, index) => {
            return <li>
              <h2>{meal.meal}</h2>
              <p>{meal.cost}</p>
              <p>Spice level: {meal.spice}</p>
              <p>{meal.description}</p>
            </li>
          })

          }
        </ul>
    </div>
  )
}
