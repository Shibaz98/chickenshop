import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, NavLink, Link, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
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
