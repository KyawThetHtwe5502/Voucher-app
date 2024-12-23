import { Navigate, Outlet } from "react-router-dom"
import Header from "./Header"
import useCookie from "react-use-cookie";
import { useEffect } from "react";
import useUserStore from "@/store/useUserStore";


const Layout = () => {
  const [token] = useCookie("my_token");
  console.log(token)
  const [userCookie] = useCookie("user"); 
  const {user,setUser} = useUserStore() 
  useEffect(() => {
    setUser(JSON.parse(userCookie));
   
  },[])
  if(!token){
   return <Navigate to="/"/>
  }
  return (
    <div className="space-y-4">
        <Header/>
        <div className="container mx-auto">

        <Outlet/>
        </div>
    </div>
  )
}

export default Layout