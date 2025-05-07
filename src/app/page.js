"use client";
import { useState, useEffect } from "react";
import { testConnection } from "./utils/api";
import styles from "./page.module.css";

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState("Testing...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await testConnection();
        setConnectionStatus(response.message || "Connected successfully!");
        setError(null);
      } catch (err) {
        setConnectionStatus("Connection failed");
        setError(err.message);
      }
    };

    checkConnection();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Frontend-Backend Connection Test</h1>
      
      <div className={styles.connectionStatus}>
        <h2>Connection Status:</h2>
        <p>{connectionStatus}</p>
        {error && <p className={styles.error}>Error: {error}</p>}
      </div>
      
      <div className={styles.description}>
        <p>
          This is a simple test page to verify the connection between 
          the Next.js frontend and the Express backend.
        </p>
      </div>
    </main>
  );
}