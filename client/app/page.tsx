import Link from "next/link";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/auth-modal";
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
              Create stunning portfolios with{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Build professional portfolios in minutes, not hours. Let AI do the heavy lifting
              while you focus on showcasing your best work.
            </p>
            <div className="mt-10">
              <Link href="/get-started">
                <Button size="lg" className="h-12 px-8 text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="AI-Powered"
                description="Generate professional portfolios from your resume, LinkedIn profile, or a simple description."
              />
              <FeatureCard
                title="Customizable"
                description="Choose from dozens of templates and customize every aspect to match your personal brand."
              />
              <FeatureCard
                title="Professional"
                description="Stand out with a portfolio that showcases your skills and experience in the best light."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="portfolio.ai helped me create a stunning portfolio in just 15 minutes. I got three job interviews the following week!"
                author="Sarah Johnson"
                role="UX Designer"
              />
              <TestimonialCard
                quote="The AI-generated content was spot-on. It captured my experience perfectly and made me sound professional."
                author="Michael Chen"
                role="Software Engineer"
              />
              <TestimonialCard
                quote="I was struggling to showcase my work effectively. portfolio.ai made it simple and the results look amazing."
                author="Emma Rodriguez"
                role="Marketing Specialist"
              />
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to stand out?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have elevated their online presence with portfolio.ai
            </p>
            <Link href="/get-started">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="flex flex-col p-6 bg-card rounded-lg border shadow-sm">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 flex-1">"{quote}"</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
