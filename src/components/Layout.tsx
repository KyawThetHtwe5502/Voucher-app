import { Outlet } from "react-router-dom"
import Header from "./Header"


const Layout = () => {
  return (
    <div className="p-5">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout