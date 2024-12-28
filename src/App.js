import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, NavLink, Link, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Orderlayout from './Components/Order/Orderlayout';
import Meals from './Components/Meals/Meals';
import { mealsloader } from './Components/Meals/Meals';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='order' element={<Orderlayout/>}>
          <Route index element ={<Meals/>} loader={mealsloader}/>
        </Route>
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
