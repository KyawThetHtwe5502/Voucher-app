import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import useCookie from "react-use-cookie"

const LoginPage = () => {
  const {register, handleSubmit, formState:{errors},reset} = useForm()
  const [token,setToken] = useCookie("my_token")
  const [userToken,setUserToken] = useCookie('user');
  const navigate = useNavigate()

  const handleLogin = async (data: any) => {
    const res = await fetch("https://voucher-app-auth-api.ygnsh.com/api/v1/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept : 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(res)
    const json = await res.json();
    if(res.status === 200){
      setToken(json.token)
      setUserToken(JSON.stringify(json.user))
      navigate("/dashboard")
      reset()
    }
    
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
   
     
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit(handleLogin)} >
        <div className="mb-3 space-y-2">
          <label htmlFor="" className="text-sm font-medium">Your Email</label>
          <input type="email" {...register('email')} className="w-full p-2.5 border border-gray-600 rounded-lg text-sm" placeholder="name@company.com" />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="" className="text-sm font-medium">Password</label>
          <input type="password" {...register('password')} className="w-full p-2.5 border border-gray-600 rounded-lg text-sm" placeholder="........" />
        </div>
        <Button type="submit" className="w-full rounded-lg">Sign in</Button>
      </form>
      </CardContent>
    
      <CardFooter>
        <p className="text-sm">Don't have an account? <Link to={'/register'} className="underline underline-offset-4">Sign up</Link></p>
      </CardFooter>
      </Card>
   
      </div>
  
  )
}

export default LoginPage