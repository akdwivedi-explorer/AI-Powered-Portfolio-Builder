<<<<<<< HEAD
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
=======
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Send, Github } from "lucide-react"

export default function GithubPortfolioPage() {
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'll help you create a portfolio from your GitHub data. Please provide your GitHub username to fetch your repositories and projects.",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    setIsGenerating(true)

    // Simulate fetching GitHub data
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate from GitHub</h2>
        <p className="text-muted-foreground mt-1">
          Enter your GitHub username, and I'll fetch your projects to include in your portfolio.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 rounded-lg border bg-background">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <Card className={`max-w-[80%] ${message.role === "user" ? "bg-primary text-primary-foreground" : ""}`}>
              <CardContent className="p-3">{message.content}</CardContent>
            </Card>
          </div>
        ))}
        {isGenerating && (
          <div className="flex justify-start">
            <Card>
              <CardContent className="p-3 flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Fetching data...
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Enter your GitHub username..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 min-h-[60px] resize-none"
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isGenerating}>
          <Github className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
>>>>>>> 4da54a300c2f78eb0b68c5740ad6bab75bc1220d
}