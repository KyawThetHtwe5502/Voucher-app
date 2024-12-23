import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import UserProfileCard from "@/components/UserProfileCard"

const UserProfilePage = () => {
  
  return (
    <div>
      <BreadcrumbComponent  name={"UserProfile Module"}  />
      <UserProfileCard/>
    </div>
  )
}

export default UserProfilePage