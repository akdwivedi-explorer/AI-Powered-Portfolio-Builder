"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Send } from "lucide-react"

export default function DescriptionPage() {
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'll help you create a portfolio based on your description. Please tell me about your experience, skills, and the type of portfolio you want to create.",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")

    // Simulate AI response
    setIsGenerating(true)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Thanks for sharing! Based on your description, I've created a portfolio draft. You can now customize it or generate a new one with different details.",
        },
      ])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Generate from Description</h2>
        <p className="text-muted-foreground mt-1">
          Describe your experience and skills, and I'll create a portfolio for you
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
        <Button type="submit" size="icon" disabled={!input.trim() || isGenerating}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

