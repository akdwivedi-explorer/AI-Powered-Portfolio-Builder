"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthModal({ type = "login" }: { type: "login" | "signup" }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const payload: Record<string, string> = {}
    formData.forEach((value, key) => {
      payload[key] = value.toString()
    })

    const url = type === "signup" ? "/api/auth/signup" : "/api/auth/login"

    try {
      const response = await fetch(`http://localhost:5001${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        console.error(data.message)
        return
      }

      alert(type === "signup" ? "Account created successfully!" : "Login successful!")
      router.push("/dashboard")
      setOpen(false)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {type === "login" ? <Button variant="ghost">Login</Button> : <Button>Sign Up</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Tabs defaultValue={type} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Welcome back</DialogTitle>
                <DialogDescription>Enter your email and password to access your account</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Create an account</DialogTitle>
                <DialogDescription>Enter your details to create a new account</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Name</Label>
                  <Input id="fullName" name="fullName" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
