import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Eye, Star } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Templates</h2>
        <p className="text-muted-foreground mt-1">Choose from our collection of professional portfolio templates</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            name={template.name}
            category={template.category}
            image={template.image}
            isFeatured={template.isFeatured}
          />
        ))}
      </div>
    </div>
  )
}

function TemplateCard({
  id,
  name,
  category,
  image,
  isFeatured,
}: {
  id: string
  name: string
  category: string
  image: string
  isFeatured: boolean
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-[16/9] bg-muted"></div>
        {isFeatured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
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
        <Button size="sm">Use Template</Button>
      </CardFooter>
    </Card>
  )
}

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
]

