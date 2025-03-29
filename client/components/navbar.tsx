"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import AuthModal from "@/components/auth-modal";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");

  // Don't show the navbar on dashboard pages as they have their own header
  if (isDashboard) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              portfolio.ai
            </h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 ml-6">
            <Link href="/features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/templates" className="text-sm font-medium hover:text-primary">
              Templates
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AuthModal type="login" />
          <AuthModal type="signup" />
        </div>
      </div>
    </header>
  );
}
