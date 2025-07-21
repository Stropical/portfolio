import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ExternalLink, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center justify-between">
          <Link className="text-lg font-bold" href="/">
            ETHAN MARREEL
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#work" className="text-sm hover:text-gray-300">
              WORK
            </Link>
            <Link href="#about" className="text-sm hover:text-gray-300">
              ABOUT
            </Link>
            <Link href="https://www.linkedin.com/in/ethan-marreel-0090ab1b6/" target="_blank">
              <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:ethan.marreel@gmail.com">
              <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">
                <Mail className="h-4 w-4 mr-2" />
                CONTACT
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex min-h-[80vh] flex-col items-start justify-center px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">PORTLAND, OR</span>
                </div>
                <h1 className="text-6xl font-bold tracking-tighter md:text-8xl mb-6">
                  ROBOTICS +
                  <br />
                  FULLSTACK
                  <br />
                  <span className="text-[#FF3366]">ENGINEER</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mb-8">
                  3+ years delivering ML‑driven, low‑latency, and production‑grade solutions across financial trading, robotics simulation, embedded FPGA DSP, and healthcare compliance.
                </p>
                <div className="flex gap-4">
                  <Link href="#work">
                    <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">VIEW MY WORK</Button>
                  </Link>
                  <Link href="/portfolio" target="_blank">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      PORTFOLIO SITE
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <Image
                    src="/pfp.jpg"
                    alt="Ethan Marreel"
                    fill
                    className="object-cover rounded-full border-4 border-[#FF3366]/20"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="featured-projects" className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-12">FEATURED PROJECTS</h2>
            <div className="space-y-16">
              {/* 1) Image Left, Text Right */}
              <div className="md:flex md:items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/projects/vcrypt.jpg"
                    alt="Vcrypt Financial Platform"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold mb-4">Vcrypt Financial Platform</h3>
                  <p className="text-gray-300 mb-4">
                    A Rust & Node.js–based algorithmic trading platform with ML-driven signal generation,
                    sub-second order execution, and Proxmox-automated deployment—scaling from 1 to 100 accounts
                    with sub-200 ms latency.
                  </p>
                  <div className="row flex flex-col gap-2">
                    <Link href="/work/vcrypt" className="text-[#FF3366] font-semibold flex items-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                    <Link href="/work/vcrypt" className="text-[#FF3366] font-semibold flex items-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </div>

              {/* 2) Text Left, Image Right */}
              <div className="md:flex md:items-center md:flex-row-reverse">
                <div className="md:w-1/2">
                  <Image
                    src="/images/exo_1.png"
                    alt="Exo Skeleton Arm"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold mb-4">Exo Skeleton Arm</h3>
                  <p className="text-gray-300 mb-4">
                    A PyBullet-driven robotic exoskeleton arm, using realistic vine-grape interactions to
                    train reinforcement learning models for precision harvesting in a vineyard simulation.
                  </p>
                  <Link href="/work/exo-skeleton-arm" className="text-[#FF3366] font-semibold flex items-center">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* 3) Image Left, Text Right */}
              <div className="md:flex md:items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/projects/hydrogen-engine.jpg"
                    alt="Hydrogen Engine Conversion"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold mb-4">Hydrogen Engine Conversion</h3>
                  <p className="text-gray-300 mb-4">
                    A custom-built hydrogen-fuel conversion project, redesigning ignition and injection
                    systems to run a combustion engine on clean hydrogen, including safety validation and
                    performance benchmarking.
                  </p>
                  <Link href="/work/hydrogen-engine" className="text-[#FF3366] font-semibold flex items-center">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-20 border-t border-white/10">
          <div className="container px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold">MORE PROJECTS</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Vcrypt",
                  subtitle: "ML‑Driven Trading Platform",
                  description: "Architected a high-frequency futures trading engine in Rust integrating XGBoost and ONNX for low-latency signal generation.",
                  image: "/images/vcrypt.png",
                  link: "/work/vcrypt",
                  tags: ["Rust", "ML", "ONNX"],
                },
                {
                  title: "Exo Skeleton Bicep",
                  subtitle: "Robotic Simulation & Control",
                  description: "Designed and simulated an exoskeletal arm in PyBullet for precise grasping tasks within vineyard environments.",
                  image: "/images/exo_1.png",
                  link: "/work/exo-skeleton-arm",
                  tags: ["Robotics", "PyBullet", "Simulation"],
                },
                {
                  title: "Hydrogen Engine",
                  subtitle: "Custom Engine Design",
                  description: "Developed a prototype hydrogen combustion engine, modeling thermodynamics and performance in CAD simulations.",
                  image: "/images/hydrogen-engine.png",
                  link: "/work/hydrogen-engine",
                  tags: ["Mechanical", "Thermodynamics", "CAD"],
                },
                {
                  title: "Custom Designed Speaker",
                  subtitle: "Audio DSP & Fabrication",
                  description: "Engineered a custom audio speaker with integrated DSP, optimizing enclosure acoustics for high-fidelity sound.",
                  image: "/images/speaker.png",
                  link: "/work/custom-speaker",
                  tags: ["Audio", "DSP", "Fabrication"],
                },
                {
                  title: "Biomotum",
                  subtitle: "Medical PDF Generator",
                  description: "Built a medical chronology PDF generator in Python, converting patient JSON records into structured reports.",
                  image: "/images/biomotum.png",
                  link: "/work/biomotum",
                  tags: ["Python", "PDF", "Healthcare"],
                },
                {
                  title: "LED Behind Bed",
                  subtitle: "Smart Lighting Integration",
                  description: "Implemented a Wi-Fi controlled LED system behind a bed using ESP32, enabling dynamic ambient lighting scenes.",
                  image: "/images/led-bed.png",
                  link: "/work/led-behind-bed",
                  tags: ["IoT", "ESP32", "Lighting"],
                },
                {
                  title: "OSU Power Electronics Lab",
                  subtitle: "ESC & FPGA Projects",
                  description: "Collaborated on power electronics designs and FPGA-based ESC simulations within Oregon State University labs.",
                  image: "/images/osu-power.png",
                  link: "/work/osu-power-lab",
                  tags: ["FPGA", "Power Electronics", "Lab"],
                },
                {
                  title: "Custom RUST Compiler",
                  subtitle: "PineScript to LLVM IR",
                  description: "Developed a Pinescript compiler driver in Rust, translating scripts into LLVM IR for seamless execution.",
                  image: "/images/rust-compiler.png",
                  link: "/work/rust-compiler",
                  tags: ["Rust", "LLVM", "Compiler"],
                },
                {
                  title: "E‑Bike",
                  subtitle: "Electric Conversion",
                  description: "Converted a standard bicycle to electric assist, integrating motor controllers, batteries, and custom firmware.",
                  image: "/images/e-bike.png",
                  link: "/work/e-bike",
                  tags: ["Embedded", "Battery", "Firmware"],
                },
              ].map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-white/10">
          <div className="container px-4 max-w-4xl">
            <h2 className="text-5xl font-bold mb-8">ABOUT ME</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Software Engineer & Algorithmic Trading Specialist with 14 years of coding experience (3+ years professionally) architecting ML‑driven, low‑latency trading systems and automation platforms across futures markets, robotics simulation, and embedded FPGA domains. Proven in converting quantitative research and stakeholder requirements into scalable, production‑grade solutions. Adept in Python, C#, Rust, ONNX model integration, Proxmox‑based infrastructure automation, and FPGA‑based DSP.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-gray-900">
          <div className="container px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">LET'S CONNECT</h2>
            <div className="flex justify-center gap-4 mb-8">
              <Link href="mailto:ethan.marreel@gmail.com">
                <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90 px-8 py-6">
                  <Mail className="h-5 w-5 mr-2" />
                  EMAIL ME
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/ethan-marreel-0090ab1b6/" target="_blank">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 bg-transparent">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LINKEDIN
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-gray-400">© 2025 ETHAN MARREEL. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, subtitle, description, image, link, tags }: { title: string; subtitle: string; description: string; image: string; link: string; tags: string[] }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#FF3366]/50 transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-video w-full overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <Image src={image} alt={title} fill className="object-cover opacity-60" />
          <div className="absolute bottom-0 left-0 p-4 z-20">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{subtitle}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-[#FF3366]/30 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={link}>
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
              VIEW CASE STUDY
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}