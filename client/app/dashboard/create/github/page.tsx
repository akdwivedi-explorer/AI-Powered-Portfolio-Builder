'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function GitHubUserPage() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!username.trim()) {
      setMessage("Please enter a valid GitHub username.");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:5001/api/uploads/github", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message || "An error occurred. Please try again.");
        return;
      }

      setMessage("Username submitted successfully!");
      const data = await response.json();
      
      const portfolioResponse = await fetch("http://localhost:5001/api/uploads/generatePortfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "success", extractedData: data }),
      });

      if (!portfolioResponse.ok) {
        setMessage("Failed to generate portfolio.");
        return;
      }

      const portfolioJson = await portfolioResponse.json();
      const portfolioID = portfolioJson.portfolioId;
      const html = portfolioJson.html;

      router.push(`/dashboard/preview?html=${encodeURIComponent(html)}&portfolioId=${portfolioID}`);
    } catch (error) {
      setMessage("Failed to connect to the server. Please check your network.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile Viewer</h1>
      <div className="flex gap-2">
        <Input 
          type="text" 
          placeholder="Enter GitHub username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
}