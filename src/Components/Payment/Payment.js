
export default function Payment({totalValue}) {
  return (
    <div className="payment-layout">
      <h1>Payment</h1>
      <h3>Your total is: £{totalValue} </h3>
      <p>Thank you for your order, please enter your details.</p>
      <form>
      <label htmlFor="streetName">Street name</label>
        <input type="text" placeholder='Street name' />
        <label htmlFor="postCode">Post code</label>
        <input type="text" placeholder='Post code' />
        <label htmlFor="doorNumber">Door number</label>
        <input type="text" placeholder='Door number' />
        <label htmlFor="phoneNumber">Contact number</label>
        <input type="text" placeholder='Contact number' />
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" placeholder="1234 1234 1234 1234" required></input>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" required></input>
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" placeholder="123" required></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
