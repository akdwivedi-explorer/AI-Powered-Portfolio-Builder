"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, Star } from "lucide-react";
import { portfolioTemplates } from "@/data/portfolioTemplates";
import { useRouter } from "next/navigation";

export default function TemplatesPage() {
  const router = useRouter();

  const handleTemplateClick = (id: string) => {
    router.push(`/portfolio-editor/${id}`);
  };

  return (
    <div className="space-y-6 w-full max-w-none">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
        {portfolioTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            id={String(template.id)}
            name={template.name}
            image={template.image || "/placeholder.svg"}
            onUseTemplate={handleTemplateClick}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateCard({
  id,
  name,
  image,
  onUseTemplate,
}: {
  id: string;
  name: string;
  image: string;
  onUseTemplate: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button
            variant="outline"
            onClick={() => onUseTemplate(id)}
          >
            Use Template
          </Button>
        </div>
      </div>
      <CardContent>
        <h3 className="text-lg font-semibold">{name}</h3>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4" />
          <span>123</span>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4" />
          <span>45</span>
        </div>
      </CardFooter>
    </Card>
  );
}