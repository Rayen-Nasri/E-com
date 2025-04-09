import { create } from "zustand"
import axios from "axios"
import { mockAuthService, setMockLoggedIn } from "../services/mockApiService"

// Backend API URL (commented out as we're using mock service)
// const API_URL = import.meta.env.VITE_API_URL + "/auth";
// axios.defaults.withCredentials = true;
export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            // Using mock service instead of actual API call
            const response = await mockAuthService.logout();
            setMockLoggedIn(false);
            set({ user: null, isAuthenticated: false, isLoading: false })

        } catch (error: any) {
            set({ error: error.message || "Error Logout", isLoading: false })
            throw error;
        }
    },
    signup: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null });
        try {
            // Using mock service instead of actual API call
            const response = await mockAuthService.signup(email, password, name);
            set({ user: response.user, isAuthenticated: true, isLoading: false })
        } catch (error: any) {
            set({ error: error.message || "Error sign up", isLoading: false })
            throw error;

        }
    },



    verifyEamil: async (code: any) => {
        set({ isLoading: true, error: null });
        try {
            // Using mock service instead of actual API call
            const response = await mockAuthService.verifyEmail(code);
            set({ user: response.user, isAuthenticated: true, isLoading: false });
            setMockLoggedIn(true);
            return response;
        } catch (error: any) {
            set({ error: error.message || "Error verifying email", isLoading: false });
            throw error;
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null })        
        try {
            // Using mock service instead of actual API call
            const { user, isAuthenticated } = await mockAuthService.checkAuth();
            set({ user, isAuthenticated, isCheckingAuth: false })            
            setMockLoggedIn(isAuthenticated);
            return { user, isAuthenticated };

        } catch (error) {
            set({ user: null, isAuthenticated: false, isCheckingAuth: false })
        }
    },
    
    login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
            // Using mock service instead of actual API call
            const response = await mockAuthService.login(email, password);
            set({ user: response.user, isAuthenticated: true, isLoading: false });
            setMockLoggedIn(true);
            return response;
        } catch (error: any) {
            set({ error: error.message || "Error logging in", isLoading: false });
            throw error;
        }
    },
}))