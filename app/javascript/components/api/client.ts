// Add to axiosInstance.ts
import axios from 'axios';

const csrfToken = document.querySelector("meta[name='csrf-token']")?.getAttribute('content');

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-CSRF-Token': csrfToken || '',
  },
  withCredentials: true, // needed for session-based auth
});

export default axiosInstance;
