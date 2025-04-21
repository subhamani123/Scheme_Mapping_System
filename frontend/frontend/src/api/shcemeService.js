import axiosInstance from './axiosInstance';

// Send form data to backend and get eligible schemes
export const checkEligibility = async (formData) => {
  try {
    const response = await axiosInstance.post('/schemes/check-eligibility', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
