import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import useUserStore from "@/store/useUserStore"
import { useForm } from "react-hook-form"
import useCookie from "react-use-cookie"

const UserProfileChangePasswordPage = () => {
  const {register,handleSubmit,formState: {errors},reset} = useForm()
  const [token,setToken,removeToken] = useCookie("my_token");
  const {user,setUser,resetUser} = useUserStore()
  console.log(user)
  const [userCookie,setUserCookie,removeUserCookie] = useCookie("user");

  const handleChangePassword= async (data:any) => {
    const res = await fetch("https://voucher-app-auth-api.ygnsh.com/api/v1/user-profile/change-name",{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept:'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const json = await res.json();
    console.log(json)
    if(res.status === 200){
      removeUserCookie()
      removeToken()
      resetUser()
      
    }
  }
  return (
<div className="space-y-5">
    <BreadcrumbComponent name={"Username"} links={[{ title: "userProfile", path: "/dashboard/user_profile" }]} />
    <Card className="p-5">
    <CardContent className="w-full">
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <div className="space-y-2 mb-3">
          <label htmlFor="old_password">
              Old Password 
          </label>
          <Input type="password" id="old_password" {...register('old_password')} className="w-full border-slate-700"/>
             
          
        </div>
        <div className="space-y-2 mb-3">
          <label htmlFor="new_password">
              New Password 
          </label>
          <Input type="password" id="new_password" {...register('new_password'
           )} className="w-full border-slate-700"/>
              
        </div>

        <div className="space-y-2 mb-3">
          <label htmlFor="new_password_confirmation">
              Confirm Password
          </label>
          <Input type="password" id="new_password_confirmation" {...register('new_password_confirmation')} className="w-full border-slate-700"/>
       
        </div>
        <div className="flex items-center justify-end">

        <Button type="submit">change</Button>
        </div>
      </form>
    </CardContent>
    </Card>
  </div>
    )
}

export default UserProfileChangePasswordPage