import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stephen Bowman - Senior UX & Product Designer",
  description:
    "Senior UX & Product Designer with 6+ years delivering AI-driven, scalable, and compliant solutions across healthcare, telecom, aviation, and enterprise platforms.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased", inter.className)}>{children}</body>
    </html>
  )
}
