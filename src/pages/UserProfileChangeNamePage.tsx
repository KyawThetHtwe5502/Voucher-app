import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import useUserStore from "@/store/useUserStore"
import { useForm } from "react-hook-form"
import useCookie from "react-use-cookie"

const UserProfileChangeNamePage = () => {
  const {register,handleSubmit,formState: {errors},reset} = useForm()
  const [token] = useCookie("my_token");
  const {user,setUser} = useUserStore()
  console.log(user)
  const [userCookie,setUserCookie] = useCookie("user");

  const handleUpdateName= async (data:any) => {
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
      setUserCookie(JSON.stringify(json.user))
      setUser(json.user)
    }
  }
  return (
    <div className="space-y-5">
    <BreadcrumbComponent name={"Username"} links={[{ title: "userProfile", path: "/dashboard/user_profile" }]} />
    <Card className="p-5">
    <CardContent className="w-full">
      <form onSubmit={handleSubmit(handleUpdateName)}>
        <div className="space-y-2 mb-3">
          <label htmlFor="name">
              Update Your Name
          </label>
          <Input type="text" id="name" {...register('name',{
            required: true,
            minLength: 3,
            maxLength:30
          })} className="w-full border-slate-700"/>
                 {errors.name?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.name?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
        </div>
        <div className="flex items-center justify-end">

        <Button type="submit">update</Button>
        </div>
      </form>
    </CardContent>
    </Card>
  </div>
  )
}

export default UserProfileChangeNamePage