import { create } from "zustand";
import { mockProfileService } from "../services/mockApiService";

// Profile store using mock services instead of actual backend calls
export const useProfileStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  
  // Change username functionality
  changeUsername: async (newName: string) => {
    set({ isLoading: true, error: null });
    try {
      // Using mock service instead of actual API call
      const response = await mockProfileService.changeUsername(newName);
      set({ user: response.user, isLoading: false });
      return response;
    } catch (error: any) {
      set({ error: error.message || "Error changing username", isLoading: false });
      throw error;
    }
  },
  
  // Change password functionality
  changePassword: async (oldPassword: string, newPassword: string) => {
    set({ isLoading: true, error: null });
    try {
      // Using mock service instead of actual API call
      const response = await mockProfileService.changePassword(oldPassword, newPassword);
      set({ isLoading: false });
      return response;
    } catch (error: any) {
      set({ error: error.message || "Error changing password", isLoading: false });
      throw error;
    }
  },
  
  // Change phone number functionality
  changeTel: async (newTel: string) => {
    set({ isLoading: true, error: null });
    try {
      // Using mock service instead of actual API call
      const response = await mockProfileService.changeTel(newTel);
      set({ isLoading: false });
      return response;
    } catch (error: any) {
      set({ error: error.message || "Error changing phone number", isLoading: false });
      throw error;
    }
  }
}));

// Original implementation with backend calls (commented out for reference)
/*
export const useProfileStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  
  changeUsername: async (newName) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset_userName`, { newName });
      set({ user: response.data.user, isLoading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response.data.message || "Error changing username", isLoading: false });
      throw error;
    }
  },
  
  changePassword: async (oldPassword, newPassword) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset_userPassword`, { oldPassword, newPassword });
      set({ isLoading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response.data.message || "Error changing password", isLoading: false });
      throw error;
    }
  },
  
  changeTel: async (newTel) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/resetTel`, { newTel });
      set({ isLoading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response.data.message || "Error changing phone number", isLoading: false });
      throw error;
    }
  }
}));
*/