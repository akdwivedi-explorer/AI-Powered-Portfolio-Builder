"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, Star } from "lucide-react";
import { portfolioTemplates } from "@/data/portfolioTemplates";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Import all images
import firstImage from "@/app/assets/first.png";
import secondImage from "@/app/assets/second.png";
import thirdImage from "@/app/assets/third.png";
import fourthImage from "@/app/assets/fourth.png";
import fifthImage from "@/app/assets/fifth.png";
import sixthImage from "@/app/assets/sixth.png";

// Array of images to assign dynamically
const templateImages = [
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
];

export default function TemplatesPage() {
  const router = useRouter();

  const handleTemplateClick = (id: string) => {
    if (!id) {
      console.error("Template ID is undefined!");
      return;
    }
    router.push(`/portfolio-editor/${id}`);
  };

  return (
    <div className="space-y-6 w-full max-w-none">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Templates</h2>
        <p className="text-muted-foreground mt-1">
          Choose from our collection of professional portfolio templates
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
        {portfolioTemplates.map((template, index) => {
          const templateId = String(template?.id);
          console.log("✅ Template ID:", templateId);

          return (
            <TemplateCard
              key={templateId}
              id={templateId}
              name={template.name}
              image={templateImages[index % templateImages.length].src}
              onUseTemplate={handleTemplateClick}
            />
          );
        })}
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
    <Card className="overflow-hidden w-full">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          className="aspect-[16/9] object-cover w-full"
          width={500}
          height={300}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{name}</h3>
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
        <Button size="sm" onClick={() => onUseTemplate(id)}>
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
}
