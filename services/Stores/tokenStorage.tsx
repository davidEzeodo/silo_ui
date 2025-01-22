import { create } from "zustand";

interface TokenStore{
    token: string | null,
    setToken: (newOtp: string) => void;
}

const useTokenStore = create<TokenStore>((set) => ({
    token: null,
    setToken: (newToken: any) => set({ token: newToken}),
}));
export default useTokenStore;