import axios from 'axios';

// Base URL for your backend API
const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    if (process.env.NEXT_PUBLIC_API_URL) {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    return "http://localhost:5000/api";
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
};

// Function to test the connection with backend
async function testConnection() {
  try {
    const baseUrl = getBaseUrl();
    const response = await axios.get(`${baseUrl}/test`);
    return response.data;
  } catch (error) {
    console.error("Error testing API connection:", error);
    throw error;
  }
}

export {
  testConnection
};
