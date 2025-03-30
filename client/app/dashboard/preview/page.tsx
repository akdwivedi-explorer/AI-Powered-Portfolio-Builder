"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const htmlContent = searchParams.get("html") || "";
  const portfolioId = searchParams.get("portfolioId") || "";

  const handleDeploy = async () => {
    console.log("Deploying with portfolioId:", portfolioId);
    console.log("Deploying with htmlContent:", htmlContent);

    if (typeof portfolioId !== "string" || typeof htmlContent !== "string") {
      console.error("Invalid data types for portfolioId or htmlContent.");
      alert("Invalid portfolio data. Please try again.");
      return;
    }

    if (!portfolioId || !htmlContent) {
      alert("Invalid portfolio data. Please try again.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/create/portfolio/${portfolioId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html: htmlContent }),
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
  };

  return (
    <div className="space-y-6 ">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Preview</h2>
        <p className="text-muted-foreground mt-1">
          Review your portfolio before deployment.
        </p>
      </div>
      <div
        className="border p-4 rounded-md"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <Button onClick={handleDeploy}>Deploy to Local Server</Button>
    </div>
  );
}
