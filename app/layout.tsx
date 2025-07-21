import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethan Marreel - Robotics and Full Stack Engineer",
  description:
    "Robotics and Full Stack Engineer with 3+ years delivering ML-driven, low-latency, and production-grade solutions across financial trading, robotics simulation, embedded FPGA DSP, and healthcare compliance.",
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
