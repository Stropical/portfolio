"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ExternalLink, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  }

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
      >
        <div className="container flex h-14 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link className="text-lg font-bold" href="/">
              ETHAN MARREEL
            </Link>
          </motion.div>
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#work" className="text-sm hover:text-gray-300 transition-colors">
                WORK
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#about" className="text-sm hover:text-gray-300 transition-colors">
                ABOUT
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://www.linkedin.com/in/ethan-marreel-0090ab1b6/" target="_blank">
                <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="mailto:ethan.marreel@gmail.com">
                <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">
                  <Mail className="h-4 w-4 mr-2" />
                  CONTACT
                </Button>
              </Link>
            </motion.div>
          </motion.nav>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <motion.section 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex min-h-[80vh] flex-col items-start justify-center px-4"
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={staggerContainer}>
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-2 mb-4"
                >
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">PORTLAND, OR</span>
                </motion.div>
                <motion.h1 
                  variants={fadeInUp}
                  className="text-6xl font-bold tracking-tighter md:text-8xl mb-6"
                >
                  ROBOTICS &
                  <br />
                  FULLSTACK
                  <br />
                  <motion.span 
                    className="text-[#FF3366]"
                    animate={{ 
                      textShadow: [
                        "0 0 0px #FF3366",
                        "0 0 8px #FF3366",
                        "0 0 0px #FF3366"
                      ]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    ENGINEER
                  </motion.span>
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 max-w-2xl mb-8"
                >
                  3+ years delivering ML‑driven, low‑latency, and production‑grade solutions across financial trading, robotics simulation, embedded FPGA DSP, and healthcare compliance.
                </motion.p>
                <motion.div 
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link href="#work">
                      <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">VIEW MY WORK</Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/portfolio" target="_blank">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        PORTFOLIO SITE
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                variants={scaleIn}
                className="flex justify-center md:justify-end"
              >
                <motion.div 
                  className="relative w-80 h-80 md:w-96 md:h-96"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src="/pfp.jpg"
                    alt="Ethan Marreel"
                    fill
                    className="object-cover rounded-full border-4 border-[#FF3366]/20"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section 
          id="featured-projects" 
          className="py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <div className="container px-4">
            <motion.h2 
              className="text-5xl font-bold mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              FEATURED PROJECTS
            </motion.h2>
            <div className="space-y-24">
              {/* 1) Image Left, Text Right */}
              <motion.div 
                className="md:flex md:items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <motion.div 
                  className="md:w-1/2 relative"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                    {/* First image - clipped diagonally, positioned to show center-right */}
                    <Image
                      src="/images/backtest.png"
                      alt="Vcrypt Financial Platform"
                      fill
                      className="object-contain"
                      style={{
                        clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
                        objectPosition: '75% center'
                      }}
                    />
                    {/* Second image - clipped diagonally, positioned to show center-left */}
                    <Image
                      src="/trademind.png"
                      alt="TradeMind Platform"
                      fill
                      className="object-contain"
                      style={{
                        clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
                        objectPosition: '25% center'
                      }}
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2 md:pl-16 mt-12 md:mt-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Vcrypt Financial
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Startup software company developing financial software. Leading a team building a production grade NextJS web app and a second team building a Rust / C# / Python based algorithmic trading platform with ML-driven signal generation.
                  </motion.p>
                  <motion.div 
                    className="row flex flex-row gap-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Link href="/work/vcrypt" className="text-[#FF3366] font-semibold flex items-center">
                        View Vcrypt <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
    
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Link href="https://trademind.pro" className="text-[#FF3366] font-semibold flex items-center">
                        Try TradeMindPro <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </motion.div>

                </motion.div>
              </motion.div>

              {/* 2) Text Left, Image Right */}
              <motion.div 
                className="md:flex md:items-center md:flex-row-reverse"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <motion.div 
                  className="md:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/exo_1.png"
                    alt="Exoskeleton Bicep"
                    width={600}
                    height={500}
                    className="rounded-lg object-contain w-full h-[500px]"
                  />
                </motion.div>
                <motion.div 
                  className="md:w-1/2 md:pr-16 mt-12 md:mt-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Exoskeleton Bicep
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Nerve sensing exoskeletal bicep. 4-stage filtering circuit for nerve extraction, arduino and motor driver circuit control for actuation. High strength PVC and alumium design.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/work/exo-skeleton-arm" className="text-[#FF3366] font-semibold flex items-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* 3) Image Left, Text Right */}
              <motion.div 
                className="md:flex md:items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <motion.div 
                  className="md:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/projects/hydrogen-engine.jpg"
                    alt="Hydrogen Engine Conversion"
                    width={600}
                    height={500}
                    className="rounded-lg object-contain w-full h-[500px]"
                  />
                </motion.div>
                <motion.div 
                  className="md:w-1/2 md:pl-16 mt-12 md:mt-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    E-Bike Battery & Control System
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Custom designed high power battery and control system for an electric bike. Integrated motor controllers, batteries, battery management systems, and custom firmware for efficient power management and performance.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/work/hydrogen-engine" className="text-[#FF3366] font-semibold flex items-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="work" 
          className="py-20 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold">MORE PROJECTS</h2>
            </motion.div>
            <motion.div 
              className="grid gap-8 md:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
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
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={{
                    initial: { opacity: 0, y: 60, scale: 0.8 },
                    animate: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-20 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 max-w-4xl">
            <motion.h2 
              className="text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Software Engineer & Algorithmic Trading Specialist with 14 years of coding experience (3+ years professionally) architecting ML‑driven, low‑latency trading systems and automation platforms across futures markets, robotics simulation, and embedded FPGA domains. Proven in converting quantitative research and stakeholder requirements into scalable, production‑grade solutions. Adept in Python, C#, Rust, ONNX model integration, Proxmox‑based infrastructure automation, and FPGA‑based DSP.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-32 bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 text-center">
            <motion.h2 
              className="mb-6 text-4xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LET'S CONNECT
            </motion.h2>
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="mailto:ethan.marreel@gmail.com">
                  <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90 px-8 py-6">
                    <Mail className="h-5 w-5 mr-2" />
                    EMAIL ME
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://www.linkedin.com/in/ethan-marreel-0090ab1b6/" target="_blank">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 bg-transparent">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LINKEDIN
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        className="border-t border-white/10 py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <motion.p 
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © 2025 ETHAN MARREEL. ALL RIGHTS RESERVED.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}

function ProjectCard({ title, subtitle, description, image, link, tags }: { title: string; subtitle: string; description: string; image: string; link: string; tags: string[] }) {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#FF3366]/50 transition-all duration-300 h-full">
        <CardContent className="p-0 h-full flex flex-col">
          <motion.div 
            className="relative aspect-video w-full overflow-hidden border-b border-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
            <Image src={image} alt={title} fill className="object-cover opacity-60" />
            <motion.div 
              className="absolute bottom-0 left-0 p-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{subtitle}</p>
            </motion.div>
          </motion.div>
          <div className="p-6 flex-1 flex flex-col">
            <motion.p 
              className="text-gray-300 mb-6 flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={link}>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300">
                  VIEW CASE STUDY
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}