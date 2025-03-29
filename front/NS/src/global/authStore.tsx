import { create } from "zustand"
import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL + "/auth";
axios.defaults.withCredentials = true;
export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/logout`)
            set({ user: response.data.user, isAuthenticated: false, isLoading: false })

        } catch (error: any) {
            set({ error: error.response.data.message || "Error Lougout", isLoading: false })
            throw error;
        }
    },
    signup: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/signup`, { email, password, name })
            set({ user: response.data.user, isAuthenticated: true, isLoading: false })
        } catch (error: any) {
            set({ error: error.response.data.message || "Error sign up", isLoading: false })
            throw error;

        }
    },



    verifyEamil: async (code: any) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/verify_email`, { code });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
            return response.data
        } catch (error: any) {
            set({ error: error.response.data.message || "Error sign up", isLoading: false });
            throw error;
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null })
        try {
            const response = await axios.get(`${API_URL}/check_auth`);
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error: any) {
            set({ 
                error: error.response?.data?.message || "Authentication check failed", 
                isCheckingAuth: false, 
                isAuthenticated: false,
                user: null
            })
        }
    },

    login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            set({ 
                user: response.data.user, 
                isAuthenticated: true, 
                isLoading: false,
                isCheckingAuth: false,
                error: null
            });
            return response.data;
        } catch (error: any) {
            set({ 
                error: error.response?.data?.message || "Login failed",
                isLoading: false,
                isAuthenticated: false,
                isCheckingAuth: false,
                user: null
            });
            throw error;
        }
    },

    forgotPassword: async (email: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/forgot_password`, { email });
            set({ 
                isLoading: false,
                error: null,
                message: response.data.message
            });
            return response.data;
        } catch (error: any) {
            set({ 
                error: error.response?.data?.message || "Failed to process password reset",
                isLoading: false
            });
            throw error;
        }
    },

    setNewPassword: async (newPassword: string, token: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/reset_password/${token}`, { newPassword });
            set({ message: response.data.message, isLoading: false });
        } catch (error: any) {
            set({ error: error.response.data.message || "Error setting new password", isLoading: false });
            throw error;
        }
    }



}))




