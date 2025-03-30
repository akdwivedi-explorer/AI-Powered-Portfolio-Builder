"use client";
import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";
import { useRouter } from "next/navigation";


export default function DescriptionPage() {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "assistant",
        content:
          "Hi there! I'll help you create a portfolio based on your description. Please tell me about your experience, skills, and the type of portfolio you want to create.",
      },
    ]
  );
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
  
    // Send request to backend
    setIsGenerating(true);
    try {
      const response = await fetch("http://localhost:5001/api/uploads/description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "text": input }),
      });
      console.log(input)
  
      if (!response.ok) {
        throw new Error("Failed to process request");
      }
  
      const data = await response.json();
      console.log(data);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data?.json || "Your response has been generated",
        },
      ]);
  
      const portfolioResponse = await fetch(
        "http://localhost:5001/api/uploads/generatePortfolio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "success", "extractedData" : data }),
        }
      );
  
      if (!portfolioResponse.ok) {
        throw new Error("Failed to generate portfolio");
      }
  
      const portfolioJson = await portfolioResponse.json();
      console.log(portfolioJson);
      const portfolioID = portfolioJson.portfolioId;
      console.log("Portfolio ID:", portfolioID);
      const html = portfolioJson.html;
      router.push(`/dashboard/preview?html=${encodeURIComponent(html)}&portfolioId=${portfolioID}`);
      alert("Portfolio generated successfully!");
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Failed to process your request. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  

  const handleDeploy = async () => {
    try {
      // Upload resume
      const response = await fetch("http://localhost:5001/api/uploads/resume", {
        method: "POST",
        body: new FormData(),
      });

      if (!response.ok) {
        throw new Error("Failed to process resume");
      }

      const data = await response.json();
      const extractedData = data.extractedData;
      console.log("Extracted Data:", extractedData);

      // Generate portfolio
      const portfolioResponse = await fetch(
        "http://localhost:5001/api/uploads/generatePortfolio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "success", extractedData }),
        }
      );

      if (!portfolioResponse.ok) {
        throw new Error("Failed to generate portfolio");
      }

      const portfolioJson = await portfolioResponse.json();
      const portfolioID = portfolioJson.portfolioId;
      console.log("Portfolio ID:", portfolioID);
      const html = portfolioJson.html;

      if (typeof portfolioID !== "string" || typeof html !== "string") {
        console.error("Invalid data types for portfolioId or htmlContent.");
        alert("Invalid portfolio data. Please try again.");
        return;
      }
  
      if (!portfolioID || !html) {
        alert("Invalid portfolio data. Please try again.");
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:5001/api/create/portfolio/${portfolioID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ html }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to deploy");
        }
        const url = await response.json();
        console.log("Portfolio deployed at:", url);
        router.push(`http://localhost:5001${url.url}`);
        alert("Deployment successful!");
      } catch (error) {
        console.error("Error during deployment:", error);
        alert("Deployment failed.");
      }
    } catch (error) {
      console.error("Error processing file:", error);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Generate from Description
          </h2>
          <p className="text-muted-foreground mt-1">
            Describe your experience and skills, and I'll create a portfolio for
            you
          </p>
        </div>
        <Button onClick={handleDeploy}>Deploy Now</Button>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 rounded-lg border bg-background">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Card
              className={`max-w-[80%] ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              <CardContent className="p-3">{message.content}</CardContent>
            </Card>
          </div>
        ))}
        {isGenerating && (
          <div className="flex justify-start">
            <Card>
              <CardContent className="p-3 flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Generating...
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Describe your experience, skills, and the type of portfolio you want..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 min-h-[60px] resize-none"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isGenerating}
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
