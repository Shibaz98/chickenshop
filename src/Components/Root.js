import { Link, Outlet, NavLink } from "react-router-dom"

export default function Root() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Chicken-Shop</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/order'>Order</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}



