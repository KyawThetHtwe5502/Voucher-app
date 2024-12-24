import useUserStore from "@/store/useUserStore"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useRef } from "react"
import { HiCamera } from "react-icons/hi2"
import useCookie from "react-use-cookie"
import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"

const UserProfileChangeImagePage = () => {
  const { user: { profile_image }, setUser } = useUserStore()
  const inputRef = useRef(null);
  const [userToken, setUserToken] = useCookie("user");
  const [token] = useCookie("my_token")
  const handleChangeImage = async (event) => {
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("profile_image", event?.target.files[0])

    const res = await fetch("https://voucher-app-auth-api.ygnsh.com/api/v1/user-profile/change-profile-image", {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const json = await res.json();
    console.log(json);
    if (res.status === 200) {
      setUserToken(JSON.stringify(json.user))
      setUser(json.user)
    }
  }

  const handleImageUploader = () => {
    console.log(inputRef.current.value);
    inputRef?.current?.click();
  }
  return (
    <div className="space-y-5">
      <BreadcrumbComponent name={"UserProfile Image"} links={[{ title: "userProfile", path: "/dashboard/user_profile" }]} />
      <Card className="flex flex-col items-center gap-7">
        <CardHeader>
          <div className="relative">
            <img className="size-40 rounded-full object-cover border-2" src={profile_image ? profile_image : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"} alt="user-image" />
            <button
              onClick={handleImageUploader}
              className=" absolute  bottom-0 right-0 translate-x-1/2 -translate-y-1/2 size-6 flex justify-center items-center rounded-full bg-blue-600 text-white hover:bg-blue-200"
            >
              <HiCamera />
            </button>

          </div>
        </CardHeader>
        <CardContent>
          <form>
            <input type="file" id="profile_image" className="hidden" ref={inputRef} onChange={handleChangeImage} />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserProfileChangeImagePage