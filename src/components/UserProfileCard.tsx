import useUserStore from "@/store/useUserStore"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Link, useNavigate } from "react-router-dom"
import { HiLockClosed, HiLockOpen, HiPencilSquare } from "react-icons/hi2"
import { Button } from "./ui/button"

const UserProfileCard = () => {
    const {user:{name,email,profile_image}} = useUserStore()
    const navigate = useNavigate();
    const handleChangePassword = () => {
      navigate("user-change-password")
    }
    
  return (
    <Card className="flex flex-col items-center gap-7">
        <CardHeader>
        <div className="relative">
          <img className="size-40 rounded-full object-cover border-2" src={profile_image ? profile_image : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"} alt="user-image"  />
            
          
          <Link to={"user-change-image"} className=" absolute size-6 top-0 right-0 right rounded-full flex items-center justify-center bg-blue-500 " ><HiPencilSquare size={10} /></Link>
        </div>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <span className="mb-2">Your Name</span>
            <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold">{name}</h2>
            <Link to={"user-change-name"} className=" size-6 top-0 right-0 right rounded-full flex items-center justify-center bg-blue-500 " ><HiPencilSquare size={10} /></Link>

            </div>

          </div>
          <dl className="mb-2">
            <dt className="font-semibold text-gray-900 dark:text-white">Email Address</dt>
            
              
            <dd className="text-gray-500">{email}</dd>

           
          </dl>
          <Button onClick={handleChangePassword} className="w-full group transition-all">

            <HiLockOpen className="hidden group-hover:inline-block duration-200 transition-all" /> <HiLockClosed className="inline-block group-hover:hidden duration-200 transition-all"/>  Change Password
          </Button>
        </CardContent>
    </Card>
  )
}

export default UserProfileCard