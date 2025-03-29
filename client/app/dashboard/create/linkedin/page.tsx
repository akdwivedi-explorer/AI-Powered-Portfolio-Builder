"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, ArrowRight, Loader2 } from "lucide-react"

export default function LinkedInPage() {
  const [url, setUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!url.trim()) {
      setError("Please enter a LinkedIn URL")
      return
    }

    if (!url.includes("linkedin.com")) {
      setError("Please enter a valid LinkedIn URL")
      return
    }

    setError("")
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      // In a real app, you would redirect to the portfolio editor
    }, 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">LinkedIn Import</h2>
        <p className="text-muted-foreground mt-1">
          Connect your LinkedIn profile to create a portfolio based on your experience
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Linkedin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">LinkedIn Profile</h3>
              <p className="text-sm text-muted-foreground">We'll extract your experience, skills, and education</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
              <Input
                id="linkedin-url"
                placeholder="https://www.linkedin.com/in/yourprofile"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={error ? "border-destructive" : ""}
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
            <Button type="submit" className="mt-4 w-full" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Privacy Note</h3>
          <p className="text-sm text-muted-foreground">
            We only access the public information from your LinkedIn profile. Your login credentials are never stored,
            and we don't post anything to your profile.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

