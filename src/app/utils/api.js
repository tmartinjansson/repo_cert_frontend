// frontend/src/app/utils/api.js

// Dynamically determine the API base URL based on environment
const getBaseUrl = () => {
    // When running in the browser
    if (typeof window !== "undefined") {
      // If in production (Vercel)
      if (process.env.NEXT_PUBLIC_API_URL) {
        return process.env.NEXT_PUBLIC_API_URL;
      }
      // If in development (local)
      return "http://localhost:5000/api";
    }
    // When running on the server during SSR
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
  };
  
  // Function to test the connection with backend
  async function testConnection() {
    try {
      const baseUrl = getBaseUrl();
      const response = await fetch(`${baseUrl}/test`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error("Error testing API connection:", error);
      throw error;
    }
  }
  
  // Export functions
  export {
    testConnection,
    // You'll add more functions here later for employees and companies
  };