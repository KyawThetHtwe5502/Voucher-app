import useUserStore from "@/store/useUserStore"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Link } from "react-router-dom"
import { HiPencilSquare } from "react-icons/hi2"

const UserProfileCard = () => {
    const {user:{name,email,profile_image}} = useUserStore()
    
  return (
    <Card className="flex flex-col items-center gap-7">
        <CardHeader>
        <div className="relative">
          <img className="size-40 rounded-full object-cover border-2" src={profile_image ? profile_image : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"} alt="user-image"  />
            
          
          <Link to={"user-change-image"} className=" absolute size-6 top-0 right-0 right rounded-full flex items-center justify-center bg-blue-500 " ><HiPencilSquare size={10} /></Link>
        </div>
        </CardHeader>
        <CardContent>
            <h4>{name}</h4>
            <p>{email}</p>
        </CardContent>
    </Card>
  )
}

export default UserProfileCard