import axios from 'axios';

// 1. Create instance with baseline production configs
const axiosInstance = axios.create({
  baseURL: "https://linkedin-clone-backend-qapn.onrender.com",
  timeout: 15000, // 15 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 2. Request Interceptor: Inject dynamic data like Auth Tokens
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the freshest token from storage
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Response Interceptor: Centralized error and response parsing
axiosInstance.interceptors.response.use(
  (response) => {
    // Unwraps data layer automatically so components get clean data
    return response.data;
  },
  (error) => {
    const fallbackError = {
      message: 'An unexpected error occurred. Please try again.',
      status: error.response?.status || 500,
    };

    if (error.response) {
      // Handle known HTTP status codes globally
      switch (error.response.status) {
        case 401:
          // Token expired or unauthorized -> clear storage & redirect
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          fallbackError.message = 'Session expired. Please log in again.';
          break;
        case 403:
          fallbackError.message = 'You do not have permission to perform this action.';
          break;
        case 404:
          fallbackError.message = 'The requested resource was not found.';
          break;
        case 500:
          fallbackError.message = 'Internal server error. Please try again later.';
          break;
        default:
          fallbackError.message = error.response.data?.message || fallbackError.message;
      }
    } else if (error.request) {
      // The request was made but no response was received (Network error/Timeout)
      fallbackError.message = 'Network error. Please check your internet connection.';
    }

    // Always reject with a consistent error structure for your UI to catch
    return Promise.reject(fallbackError);
  }
);

export default axiosInstance;