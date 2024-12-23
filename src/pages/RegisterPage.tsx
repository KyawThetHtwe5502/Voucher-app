import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const {register, handleSubmit, formState:{errors},reset} = useForm()
  
  const navigate = useNavigate()
  const handleRegister = async (data:any) => {
    const res = await fetch('https://voucher-app-auth-api.ygnsh.com/api/v1/register',{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
      if(res.status === 200){
        reset()
        navigate("/")
      }
    
    
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
   
     
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Enter your email and password to create your account</CardDescription>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit(handleRegister)} >
        <div className="mb-3 space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Your Name</label>
          <input type="text" {...register('name')} id="name" className="w-full p-2.5 border border-gray-600 rounded-lg text-sm" required placeholder="eg. John Doe" />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Your Email</label>
          <input type="email" {...register('email')} className="w-full p-2.5 border border-gray-600 rounded-lg text-sm" required placeholder="eg. name@company.com" />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="" className="text-sm font-medium">Password</label>
          <input type="password" {...register('password')}  className="w-full p-2.5 border border-gray-600 rounded-lg text-sm" required placeholder="........" />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="password_confirmation" className="text-sm font-medium">Confirm Password</label>
          <input type="password" {...register('password_confirmation')} id="password_confirmation" className="w-full p-2.5 border border-gray-600 rounded-lg text-sm" placeholder="........" />
        </div>
        <Button className="w-full rounded-lg">Sign up</Button>
      </form>
      </CardContent>
    
      <CardFooter>
        <p className="text-sm">Already have an account? <Link to={'/'} className="underline underline-offset-4">Sign in</Link></p>
      </CardFooter>
      </Card>
   
      </div>
  
  )
}

export default RegisterPage