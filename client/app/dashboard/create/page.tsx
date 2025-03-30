import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Upload, Layout, Github, ArrowRight } from "lucide-react"

export default function CreatePage() {
  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Create Portfolio</h2>
        <p className="text-muted-foreground mt-2">Choose a method to create your new portfolio</p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        <CreateMethodCard
          title="Generate from Description"
          description="Describe your experience and skills, and let AI create a portfolio for you"
          icon={<FileText className="h-8 w-8" />}
          href="/dashboard/create/description"
        />
        <CreateMethodCard
          title="Upload Resume"
          description="Upload your resume and we'll automatically generate a portfolio"
          icon={<Upload className="h-8 w-8" />}
          href="/dashboard/create/resume"
        />
        <CreateMethodCard
          title="Choose from Templates"
          description="Browse our collection of templates and customize one to your liking"
          icon={<Layout className="h-8 w-8" />}
          href="/dashboard/templates"
        />
        <CreateMethodCard
          title="From LinkedIn"
          description="Connect your LinkedIn profile to create a portfolio based on your experience"
          icon={<Github className="h-8 w-8" />}
          href="/dashboard/create/linkedin"
        />
      </div>
    </div>
  )
}

function CreateMethodCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link href={href}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader>
          <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">{icon}</div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}

