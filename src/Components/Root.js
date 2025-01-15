import { Link, Outlet, NavLink } from "react-router-dom"

export default function Root() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Chicken-Shop</h1>
                <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to='order' className={({isActive}) => (isActive ? 'active' : '')}>Order</NavLink>
                <NavLink to='checkout' className={({isActive}) => (isActive ? 'active' : '')}>Checkout</NavLink>
                <NavLink to='contact' className={({isActive}) => (isActive ? 'active' : '')}>Contact</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}



