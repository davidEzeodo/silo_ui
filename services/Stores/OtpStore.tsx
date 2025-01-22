import { create } from "zustand";

interface OtpState{
    otp: string | null,
    emailForOtp: string | null,
    setStoreOtp: (newOtp: string) => void;
    setStoreEmail:(userEmail: string) => void;
}

const useOtpStore = create<OtpState>((set) => ({
    otp: null,
    emailForOtp: null,
    setStoreOtp: (newOtp: any) => set({ otp: newOtp}),
    setStoreEmail: (userEmail: string) => set({ emailForOtp: userEmail })
}));
export default useOtpStore;