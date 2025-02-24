import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { signup } from "../../../backend/src/controllers/auth.controller";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLogingIng: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,


    checkAuth: async () => {
        try{
            const res = await axiosInstance.get("/auth/check");

            set({authUser: res.data})
        }
        catch(error){
            console.log("Error in")
            set({ authUser: null})
        }finally{
            set({ isCheckingAuth: false});
        }
    },

   
}));