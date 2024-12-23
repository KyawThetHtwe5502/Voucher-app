import useUserStore from "@/store/useUserStore"

const Header = () => {
  const { user } = useUserStore();
  const { name, email, profile_image } = user;
  return (
    <header>
      <div className="container mx-auto py-4">
      <div className="flex justify-between items-center ">
      <div>
        <h3 className="text-4xl font-bold">MMSIT</h3>
        <p>voucher app</p>
      </div>
      <div>
        <div className="size-20 rounded-full overflow-hidden object-cover border-2">
          {profile_image ? (<img src={profile_image} />) :
            <img src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" alt="user_profile" />
          }
        </div>
        <div>
          <h5 className="font-medium ">{name}</h5>
          <p className="text-sm ">{email}</p>
        </div>
      </div>
    </div>
      </div>
    </header>
  )
}

export default Header