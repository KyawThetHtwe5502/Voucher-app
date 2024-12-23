import useUserStore from "@/store/useUserStore"
import { Card, CardContent, CardHeader } from "./ui/card"

const UserProfileCard = () => {
    const {user:{name,email,profile_image}} = useUserStore()
    
  return (
    <Card>
        <CardHeader>
        <div className="size-20 rounded-full overflow-hidden object-cover border-2">
          {profile_image ? (<img src={profile_image} />) :
            <img src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" alt="user_profile" />
          }
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