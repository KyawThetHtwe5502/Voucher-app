import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import UserProfileCard from "@/components/UserProfileCard"

const UserProfilePage = () => {
  
  return (
    <div className="space-y-5">
      <BreadcrumbComponent  name={"UserProfile Module"}  />
      <UserProfileCard/>
    </div>
  )
}

export default UserProfilePage