import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock blog posts data
const blogPosts = [
  {
    slug: "design-systems-at-scale",
    title: "Building Design Systems at Scale: Lessons from Janssen Pharmaceuticals",
    excerpt:
      "How we unified 18 pharmaceutical brands under a single, FDA-compliant design system that improved both efficiency and user experience.",
    publishedAt: "2024-01-15",
    readingTime: "8 min read",
    tags: ["Design Systems", "Healthcare", "FDA Compliance"],
    image:
      "https://sjc.microlink.io/lb6PnrVoJlSjIWuX7CyOIoMFCW78cWbHFGCQP9uUYmz5ofv3y9SnR2NIks9iPw8UHHxogQQMMxj-xH47kVh6TA.jpeg",
    featured: true,
  },
  {
    slug: "future-of-design-systems",
    title: "The Future of Design Systems: AI-Powered Components",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and maintain design systems at enterprise scale.",
    publishedAt: "2023-12-20",
    readingTime: "5 min read",
    tags: ["AI", "Design Systems", "Innovation"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    slug: "ux-regulated-industries",
    title: "UX Design in Regulated Industries: A Practical Guide",
    excerpt:
      "Best practices for creating compliant user experiences in healthcare, finance, and other heavily regulated sectors.",
    publishedAt: "2023-11-28",
    readingTime: "7 min read",
    tags: ["Compliance", "Healthcare", "Enterprise UX"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
]

export default function BlogIndex() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

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

      <main className="container px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO PORTFOLIO
        </Link>

        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            DESIGN
            <br />
            <span className="text-[#FF3366]">INSIGHTS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Thoughts on design systems, user experience, and building products that matter.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#FF3366]/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-square">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-[#FF3366]/30 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readingTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Other Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Card
                key={post.slug}
                className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#FF3366]/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-[#FF3366]/30 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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
