import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, NavLink, Link, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Orderlayout from './Components/Order/Orderlayout';
import Meals from './Components/Meals/Meals';
import { mealsloader } from './Components/Meals/Meals';
import MealsDescription, { descriptionloader } from './Components/MealsDescription/MealsDescription';
import Checkout from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import { useState } from 'react';

function App() {

  const [order, setOrder] = useState([]); 
  const [totalValue, setTotalValue] = useState(0); 

  const addToCart = (meal) => { if( order.length < 20) {
    setOrder([...order, meal]) } else {
      alert('Please contact restaurant for larger orders above 20 thanks') 
    }
  };

  const removeFromCart = (mealToRemove) => {
    const indexToRemove = order.findIndex(meal => meal.meal === mealToRemove.meal); 
    if (indexToRemove !== -1){
      setOrder(order.filter((_, index) => index !== indexToRemove))
    }
  };

  const orderValue = (cost) =>{
   setTotalValue(cost)
  }; // gets order total from the checkout component 


  
  
  // To insert a prop into a elemnent you need to create a wrapper and replace the element with the wrapper

  const MealsDescriptionWrapper = props =>{
    return <MealsDescription {...props} addToCart={addToCart}/>
  }

  const CheckoutWrapper = props =>{
    return <Checkout {...props} order={order} removeFromCart={removeFromCart} orderValue={orderValue}/>
  }
  
  const PaymentWrapper = props =>{
    return <Payment {...props} totalValue={totalValue}/>
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='order' element={<Orderlayout/>}>
          <Route index element ={<Meals/>} loader={mealsloader}/>
          <Route path=':id' loader={descriptionloader} element={<MealsDescriptionWrapper/>}/>
        </Route>
        <Route path='checkout' element={<CheckoutWrapper/>}/>
        <Route path='payment' element={<PaymentWrapper/>}/>
      </Route>
    )
  )

  return (
    <div className="rootLayout">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
