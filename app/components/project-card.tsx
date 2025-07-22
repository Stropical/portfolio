"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-colors">
        <motion.div 
          className="relative aspect-video overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <CardContent className="p-4">
          <motion.h3 
            className="font-semibold text-xl mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-700/50 px-2 py-1 text-xs font-medium text-gray-200 ring-1 ring-inset ring-gray-600/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={link} className="inline-flex items-center gap-2 text-sm text-[#FF3366] hover:text-[#FF3366]/80 transition-colors">
              <Github className="h-4 w-4" />
              View Project
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
