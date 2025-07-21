import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a CMS or database
async function getBlogPost(slug: string) {
  // Mock data - in reality, this would fetch from your CMS
  const posts = {
    "design-systems-at-scale": {
      title: "Building Design Systems at Scale: Lessons from Janssen Pharmaceuticals",
      excerpt: "How we unified 18 pharmaceutical brands under a single, FDA-compliant design system",
      content: `
        <p>When I joined the Janssen Pharmaceuticals project at IBM iX, I was faced with a challenge that would define my approach to design systems forever. Eighteen different pharmaceutical brands, each with their own digital presence, all needing to comply with strict FDA regulations while maintaining their unique brand identities.</p>
        
        <h2>The Challenge</h2>
        <p>The pharmaceutical industry is unforgiving when it comes to design. Every pixel is scrutinized by legal teams, every interaction must meet accessibility standards, and every piece of content must be compliant with FDA regulations. Yet, patients and healthcare providers still expect intuitive, modern experiences.</p>
        
        <p>Our challenge was to create a unified design system that could:</p>
        <ul>
          <li>Maintain brand distinctiveness across 18 pharmaceutical brands</li>
          <li>Ensure 100% FDA compliance</li>
          <li>Streamline development processes</li>
          <li>Improve user experience consistency</li>
        </ul>
        
        <h2>The Approach</h2>
        <p>I led a team of 3 designers through a systematic approach that prioritized regulatory compliance without sacrificing user experience. We started with extensive stakeholder interviews, involving legal teams, brand managers, developers, and most importantly, end users.</p>
        
        <blockquote>
          <p>"Regulatory design is unforgiving. Every pixel is scrutinized by lawyers. Clarity and structure win over 'coolness'—every time."</p>
        </blockquote>
        
        <h2>Key Learnings</h2>
        <p>Through this project, I discovered that constraint breeds creativity. The strict FDA guidelines actually helped us create more focused, user-centered solutions. When you can't rely on flashy animations or complex interactions, you're forced to focus on content hierarchy, accessibility, and clear communication.</p>
        
        <p>The success of this project led to an extended partnership with Janssen and has informed my approach to design systems ever since.</p>
      `,
      publishedAt: "2024-01-15",
      readingTime: "8 min read",
      tags: ["Design Systems", "Healthcare", "FDA Compliance", "Enterprise UX"],
      author: "Stephen Bowman",
      image:
        "https://sjc.microlink.io/lb6PnrVoJlSjIWuX7CyOIoMFCW78cWbHFGCQP9uUYmz5ofv3y9SnR2NIks9iPw8UHHxogQQMMxj-xH47kVh6TA.jpeg",
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center justify-between">
          <Link className="text-lg font-bold" href="/">
            STEPHEN BOWMAN
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/blog" className="text-sm hover:text-gray-300">
              BLOG
            </Link>
            <Link href="/#work" className="text-sm hover:text-gray-300">
              WORK
            </Link>
            <Link href="/#about" className="text-sm hover:text-gray-300">
              ABOUT
            </Link>
            <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">CONTACT</Button>
          </nav>
        </div>
      </header>

      <main className="container px-4 py-12 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO BLOG
        </Link>

        <article>
          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-[#FF3366]/30 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-white/10">
              <span className="text-sm text-gray-400">Share:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={
              {
                "--tw-prose-body": "#d1d5db",
                "--tw-prose-headings": "#ffffff",
                "--tw-prose-lead": "#9ca3af",
                "--tw-prose-links": "#FF3366",
                "--tw-prose-bold": "#ffffff",
                "--tw-prose-counters": "#6b7280",
                "--tw-prose-bullets": "#6b7280",
                "--tw-prose-hr": "#374151",
                "--tw-prose-quotes": "#d1d5db",
                "--tw-prose-quote-borders": "#FF3366",
                "--tw-prose-captions": "#6b7280",
                "--tw-prose-code": "#ffffff",
                "--tw-prose-pre-code": "#d1d5db",
                "--tw-prose-pre-bg": "#1f2937",
                "--tw-prose-th-borders": "#374151",
                "--tw-prose-td-borders": "#374151",
              } as React.CSSProperties
            }
          />
        </article>

        {/* Author Bio */}
        <Card className="bg-gray-900 border-gray-800 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-[#FF3366] flex items-center justify-center text-white font-bold text-xl">
                SB
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Stephen Bowman</h3>
                <p className="text-gray-400">Senior UX & Product Designer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Senior UX & Product Designer with 6+ years delivering AI-driven, scalable, and compliant solutions across
              healthcare, telecom, aviation, and enterprise platforms.
            </p>
            <div className="flex gap-2">
              <Link href="https://www.linkedin.com/in/bowmanstephen" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Follow on LinkedIn
                </Button>
              </Link>
              <Link href="mailto:bowman.stephen92@gmail.com">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800 hover:border-[#FF3366]/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">The Future of Design Systems</h3>
                <p className="text-gray-300 mb-4">
                  How AI is changing the way we build and maintain design systems at scale.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>5 min read</span>
                  <span>Dec 2023</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 hover:border-[#FF3366]/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">UX in Regulated Industries</h3>
                <p className="text-gray-300 mb-4">
                  Best practices for designing compliant user experiences in healthcare and finance.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>7 min read</span>
                  <span>Nov 2023</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <Link href="/blog">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Posts
            </Button>
          </Link>
          <Link href="/#work">
            <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">View My Work</Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-gray-400">© 2024 STEPHEN BOWMAN. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <Link href="mailto:bowman.stephen92@gmail.com" className="text-gray-400 hover:text-white text-sm">
              bowman.stephen92@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
