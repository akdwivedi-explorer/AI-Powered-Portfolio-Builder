"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, File, Loader2 } from "lucide-react";

export default function ResumePage() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    setFile(file);
    setIsProcessing(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      // Upload resume
      const response = await fetch("http://localhost:5001/api/uploads/resume", {
        method: "POST",
        body: formData,
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

      // Redirect to editor page with external flag and portfolioID
      router.push(`/dashboard/templates/${portfolioID}/edit?external=true`);
    } catch (error) {
      console.error("Error processing file:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Upload Resume</h2>
        <p className="text-muted-foreground mt-1">
          Upload your resume and we'll generate your portfolio
        </p>
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
              <h3 className="text-lg font-medium mb-2">
                Drag and drop your resume
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Supports PDF, DOCX, and TXT files
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById("resume-upload")?.click()
                }
              >
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
              <p className="text-sm text-muted-foreground mb-4">
                {(file.size / 1024).toFixed(0)} KB
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    document.getElementById("resume-upload")?.click()
                  }
                >
                  Change File
                </Button>
                <Button
                  onClick={() => handleFile(file)}
                  disabled={isProcessing}
                >
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
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
