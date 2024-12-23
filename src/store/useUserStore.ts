import { create } from "zustand";

type User = {
    user: any,
    setUser:(user:{name: string; email: string; profile_image: string}) => void;
    resetUser: () => void
}

const useUserStore = create<User>((set) => ({
    user : {},
    setUser:(user) => set({user}),
    resetUser: () => set({user: {}})
}))

export default useUserStore;