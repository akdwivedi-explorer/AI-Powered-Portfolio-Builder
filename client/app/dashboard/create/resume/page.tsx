"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, File, Loader2 } from "lucide-react"

export default function ResumePage() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      handleFile(droppedFile)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setFile(file)
    // In a real app, you would process the file here
  }

  const processResume = () => {
    if (!file) return

    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      // In a real app, you would redirect to the portfolio editor
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Upload Resume</h2>
        <p className="text-muted-foreground mt-1">Upload your resume and we'll automatically generate a portfolio</p>
      </div>

      <Card
        className={`border-2 border-dashed ${
          isDragging ? "border-primary" : "border-muted"
        } hover:border-primary transition-colors`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center py-12">
          {!file ? (
            <>
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">Drag and drop your resume</h3>
              <p className="text-sm text-muted-foreground mb-4">Supports PDF, DOCX, and TXT files</p>
              <Button variant="outline" onClick={() => document.getElementById("resume-upload")?.click()}>
                Select File
              </Button>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <>
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <File className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">{file.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{(file.size / 1024).toFixed(0)} KB</p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => document.getElementById("resume-upload")?.click()}>
                  Change File
                </Button>
                <Button onClick={processResume} disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Process Resume"
                  )}
                </Button>
              </div>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
          )}
        </CardContent>
      </Card>

      {file && !isProcessing && (
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">What happens next?</h3>
            <p className="text-sm text-muted-foreground">
              After processing your resume, we'll extract your experience, skills, and education to create a
              personalized portfolio. You'll be able to edit and customize all sections before publishing.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

