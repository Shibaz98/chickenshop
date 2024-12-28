import { Outlet } from "react-router-dom"

export default function Orderlayout() {
  return (
    <div className="order-layout">
        <h1>Choose a preset meal!</h1>
        <Outlet/>
    </div>

  )
}
