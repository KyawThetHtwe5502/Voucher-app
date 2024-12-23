import useUserStore from "@/store/useUserStore"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Link } from "react-router-dom"
import { HiPencilSquare } from "react-icons/hi2"

const UserProfileCard = () => {
    const {user:{name,email,profile_image}} = useUserStore()
    
  return (
    <Card className="flex flex-col items-center gap-7">
        <CardHeader>
        <div className="size-40 rounded-full overflow-hidden object-cover border-2">
          <img src={profile_image ? profile_image : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"} alt="user-image"  />
            
          
          <Link to={"user-change-image"} className="bg-blue-500 p-5" ><HiPencilSquare size={10}/></Link>
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