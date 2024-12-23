import { Navigate, Outlet } from "react-router-dom"
import Header from "./Header"
import useCookie from "react-use-cookie";
import { useEffect } from "react";
import useUserStore from "@/store/useUserStore";


const Layout = () => {
  const [token] = useCookie("my_token");
  const [userCookie] = useCookie("user"); 
  const {user,setUser} = useUserStore() 
  useEffect(() => {
    setUser(JSON.parse(userCookie));
  },[])
  if(!token){
    <Navigate to="/"/>
  }
  return (
    <div className="p-5">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout