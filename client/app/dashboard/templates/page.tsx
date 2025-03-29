"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Eye, Star } from "lucide-react"
import { portfolioTemplates } from "@/data/portfolioTemplates"
import { useRouter } from "next/navigation"

export default function TemplatesPage() {
  const router = useRouter()

  const handleTemplateClick = (id: string) => {
    router.push(`/dashboard/templates/${id}/edit`)
  }

  return (
    <div className="space-y-6 w-full max-w-none">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Templates</h2>
        <p className="text-muted-foreground mt-1">Choose from our collection of professional portfolio templates</p>
      </div>

<<<<<<< HEAD
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
        {templates.map((template) => (
=======
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioTemplates.map((template) => (
>>>>>>> e2959a0c6dcbad4f6943350b597171c08c1a1bcb
          <TemplateCard
            key={template.id}
            id={String(template.id)}
            name={template.name}
            image="/placeholder.svg"
            onUseTemplate={handleTemplateClick}
          />
        ))}
      </div>
    </div>
  )
}

function TemplateCard({
  id,
  name,
  image,
  onUseTemplate,
}: {
  id: string
  name: string
  image: string
  onUseTemplate: (id: string) => void
}) {
  return (
    <Card className="overflow-hidden w-full">
      <div className="relative">
        <div className="aspect-[16/9] bg-muted"></div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{name}</h3>
          </div>
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button size="sm" onClick={() => onUseTemplate(id)}>Use Template</Button>
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD

const templates = [
  {
    id: "1",
    name: "Minimal Developer",
    category: "Developer",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Creative Designer",
    category: "Designer",
    image: "/placeholder.svg",
    isFeatured: false,
  },
  {
    id: "3",
    name: "Professional Business",
    category: "Business",
    image: "/placeholder.svg",
    isFeatured: false,
  },
  {
    id: "4",
    name: "Modern Writer",
    category: "Writer",
    image: "/placeholder.svg",
    isFeatured: false,
  },
  {
    id: "5",
    name: "Photographer Portfolio",
    category: "Photographer",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    id: "6",
    name: "Startup Founder",
    category: "Business",
    image: "/placeholder.svg",
    isFeatured: false,
  },
  {
    id: "7",
    name: "Technical",
    category: "Business",
    image: "/placeholder.svg",
    isFeatured: false,
  },
  {
    id: "8",
    name: "Web Developer",
    category: "Business",
    image: "/placeholder.svg",
    isFeatured: false,
  },
]

=======
>>>>>>> e2959a0c6dcbad4f6943350b597171c08c1a1bcb
