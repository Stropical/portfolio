"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ExternalLink, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
            transition={{ delay: 0.2, duration: 0.4 }}
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
              <Link href="mailto:ethan@marreel.com">
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
          className="flex min-h-[80vh] flex-col items-start justify-center px-4 relative overflow-hidden"
        >
          {/* Background Image */}
            <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            >
            <video
              ref={(el) => {
              if (el) el.playbackRate = 1.25;
              }}
              src="/bg.mp4"
              autoPlay
              muted
              loop
              className="object-cover opacity-40 w-full h-full "
            />
            {/* Bottom fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-[30%] opacity-80" />
            {/* Vignette effect */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)'
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          
          
          <div className="container relative z-10">
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
                  EMBEDDED
                  <br />
                  <motion.span 
                    className="text-[#FF3366]"
                    animate={{ 
                      textShadow: [
                        "0 0 0px #FF3366",
                        "0 0 0px #FF3366",
                        "0 0 0px #FF3366"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
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
                  Designing and delivering engineering solutions across embedded systems, machine learning, cloud infrastructure, and algorithmic trading platforms.
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
                    <Link href="https://www.linkedin.com/in/ethan-marreel-0090ab1b6/" target="_blank">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Check out my LinkedIn
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
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              FEATURED PROJECTS
            </motion.h2>
            <div className="space-y-16">
              {/* 1) Image Left, Text Right */}
              <motion.div 
                className="md:flex md:items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <motion.div 
                  className="md:w-1/2 relative mb-8 md:mb-0"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="relative w-full h-[500px] md:h-[650px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/e-bike.JPG"
                      alt="E‑Bike"
                      fill
                      className="object-cover"
                    />
                
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    E‑Bike — High‑Power Inverter & Battery
                  </motion.h3>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Designed a high‑power 3‑phase inverter, implemented a PI control loop for precise motor control, and engineered a custom battery pack with integrated BMS for high‑current performance and safety.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <Link href="/work/e-bike" className="text-[#FF3366] font-semibold flex items-center">
                        View E‑Bike <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
    
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <Link href="/work/e-bike#battery" className="text-[#FF3366] font-semibold flex items-center">
                        Battery Design <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </motion.div>

                </motion.div>
              </motion.div>

              {/* 2) Text Left, Image Right */}
              <motion.div 
                className="md:flex md:items-center md:flex-row-reverse gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <motion.div 
                  className="md:w-1/2 mb-8 md:mb-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-[500px] md:h-[650px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/exo_1.png"
                      alt="Exoskeleton Bicep"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Exoskeleton Bicep
                  </motion.h3>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Nerve sensing exoskeletal bicep. 4-stage filtering circuit for nerve extraction, arduino and motor driver circuit control for actuation. High strength PVC and aluminum design.
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
                className="md:flex md:items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <motion.div 
                  className="md:w-1/2 mb-8 md:mb-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/robotics.png"
                    alt="Tualatin Robotics"
                    width={1200}
                    height={800}
                    className="rounded-lg object-cover w-full h-[500px] md:h-[650px]"
                  />
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Tualatin Robotics
                  </motion.h3>
                    <motion.p 
                    className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    >
                    Lead my high school robotics team: coordinating three hardware and one software subteam to deliver competition‑ready robots. Established consistent software practices, firmware CI, and development workflows while mentoring teammates. Designed and integrated autonomous systems and dev. practices that made our autonomous system nearly unbeatable.
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

        {/* Professional Timeline Section */}
        <motion.section 
          id="timeline" 
          className="py-20 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              PROFESSIONAL TIMELINE
            </motion.h2>
            <Timeline
              data={[
                {
                  title: "Aug 2025 – Present",
                  content: (
                    <div>
                      
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Technical Lead — <em>Crackajack Digital</em>
                      </h3>
                      
                      <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Leading the engineering team building a new e‑commerce site and companion mobile app. Responsible for architecture, delivery, and mentoring.
                      </p>
                      <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                        <li>Defined platform architecture (Next.js + serverless backend) and mobile strategy.</li>
                        <li>Introduced CI/CD pipelines, automated testing, and release processes.</li>
                        <li>Hiring, mentoring, and sprint planning for a cross‑functional engineering team.</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "Jun 2024 – Sep 2024",
                  content: (
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Software Engineer — <em>CaseMark</em>
                        <a href="https://www.linkedin.com/search/results/all/?keywords=CaseMark" target="_blank" rel="noopener noreferrer" className="inline-block ml-3 align-middle">
                          <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEzGMKn_VQqUQ/company-logo_100_100/company-logo_100_100/0/1728307245179/casemark_logo?e=1759968000&v=beta&t=-vIHFlCmdMJXePnU9zHH3WzFaigYghFajdbkb8IZo9M" className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Worked on inital summary engine, then designed their medical chronology summarizer. Created LLM routing, parsing, and chunking engines that scale with inference.
                      </p>
               
                        <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                        <li>Implemented the medical chronology summarizer in Python to convert clinical records into structured timelines.</li>
                        <li>Built an LLM routing, parsing, and chunking algorithm (Python) that optimized token usage and inference, cutting costs ~6x and time ~4x.</li>
                        <li>Designed containerized infrastructure (Docker/Kubernetes) for scalable, cost‑efficient batch processing and inference.</li>
                        <li>Developed robust preprocessing and parsing pipelines with error handling to improve summary accuracy and reliability.</li>
                        <li>Added automated tests and monitoring to ensure stable deployments and observability across workloads.</li>
                        </ul>
                        <a href="https://www.linkedin.com/company/casemark/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 mb-6">
                          <img
                            src="https://cdn.prod.website-files.com/66c4fcffeb606e663284c300/67e3427d96c9af7851895c30_0783c54722e7e39fef68d00a74846619_open-graph%20%281%29.png"
                            alt="CaseMark logo"
                            className="h-50 w-100 object-cover rounded-[10%]"
                          />
                        </a>
                    </div>
                  ),
                },
                {
                  title: "Jan 2024 – Present",
                  content: (
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Founder / CEO — <em>VCRYPT Financial</em>
                        <a href="https://www.linkedin.com/search/results/all/?keywords=VCRYPT%20Financial" target="_blank" rel="noopener noreferrer" className="inline-block ml-3 align-middle">
                          <img src="https://media.licdn.com/dms/image/v2/D560BAQGAvjeVlZRgew/company-logo_100_100/company-logo_100_100/0/1713818616639?e=1759968000&v=beta&t=KHnQ7dqH0wI4i3j2U_4k0iko4BX540U-hC2RATMWxA4" className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Founded VCRYPT to develop high‑performance algorithmic trading systems and financial software; lead engineering and product strategy.
                      </p>
                      <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                        <li>Architected low‑latency trading engines (Rust, C#) and ML signal pipelines (Python, ONNX).</li>
                        <li>Managed a distributed engineering team and production infrastructure on cloud platforms.</li>
                      </ul>
                        <div className="grid grid-cols-2 gap-4">
                        <Image
                          src="https://assets.aceternity.com/templates/startup-1.webp"
                          alt="startup template"
                          width={500}
                          height={500}
                          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                          src="https://assets.aceternity.com/templates/startup-2.webp"
                          alt="startup template"
                          width={500}
                          height={500}
                          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                          src="https://assets.aceternity.com/templates/startup-3.webp"
                          alt="startup template"
                          width={500}
                          height={500}
                          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                          src="https://assets.aceternity.com/templates/startup-4.webp"
                          alt="startup template"
                          width={500}
                          height={500}
                          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Nov 2023 – Jan 2024",
                  content: (
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Embedded Software Engineer — <em>BIOMOTUM, Inc.</em>
                        <a href="https://www.linkedin.com/search/results/all/?keywords=BIOMOTUM" target="_blank" rel="noopener noreferrer" className="inline-block ml-3 align-middle">
                          <img src="https://media.licdn.com/dms/image/v2/C560BAQFgp8xtdEV-oA/company-logo_100_100/company-logo_100_100/0/1630645935402/biomotum_logo?e=1759968000&v=beta&t=-27sK0Rox4h8_P8ZWlW38LmSWk4NXTQvowbcgd00ebw" className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Contract role developing firmware for exoskeleton prosthetics and range‑extension devices, improving responsiveness and reliability.
                      </p>
                      <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                        <li>Implemented BLE, WiFi (REST API) and SD tracking firmware</li>
                        <li>Worked on optimizing power and range</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "May 2023 – Sep 2023",
                  content: (
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Software Intern — <em>Schrodinger</em>
                        <a href="https://www.linkedin.com/search/results/all/?keywords=Schrodinger" target="_blank" rel="noopener noreferrer" className="inline-block ml-3 align-middle">
                          <img src="https://media.licdn.com/dms/image/v2/C560BAQF0popc4i-92Q/company-logo_100_100/company-logo_100_100/0/1656681024395/schr_dinger_logo?e=1759968000&v=beta&t=5AE6e6ddsEcXjIud08C9MrTwQyIRc7T0zOETaCTdkPo" className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Modernized UI and resolved bugs for desktop applications using Qt/QML and C++; focused on component refactors and stability.
                      </p>
                      <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                        <li>Refactored UI components and improved application stability.</li>
                        <li>Fixed and stabilized memory errors</li>
                        <li>Worked with QA on improving CI pipelines</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "May 2021",
                  content: (
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Software Programming Instructor — <em>Code Ninjas</em>
                        <a href="https://www.linkedin.com/search/results/all/?keywords=Code%20Ninjas" target="_blank" rel="noopener noreferrer" className="inline-block ml-3 align-middle">
                          <img src="https://media.licdn.com/dms/image/v2/D4E0BAQGNgS0IOGKDTw/company-logo_100_100/company-logo_100_100/0/1735687347709/codeninjas_logo?e=1759968000&v=beta&t=fgGQazi7dROmLMv6CSoBQeAklz836r97PRQVcZNsNw4" className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Taught younger students programming fundamentals and helped develop problem‑solving skills.
                      </p>
                      <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                        <li>Designed lesson plans and guided students through hands‑on projects.</li>
                        <li>Focus on fundamentals, debugging, and logical thinking.</li>
                      </ul>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </motion.section>

        {/* Projects Section
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
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">MORE PROJECTS</h2>
            </motion.div>
            <motion.div 
              className="grid gap-6 md:gap-8 md:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  title: "E‑Bike",
                  subtitle: "High‑Power 3‑Phase Inverter & Battery",
                  description: "Designed a high‑power 3‑phase inverter, implemented a PI control loop for precise motor control, and engineered a custom battery pack with integrated BMS for high‑current performance and safety.",
                  image: "/images/e-bike.png",
                  link: "/work/e-bike",
                  tags: ["Embedded", "Power Electronics", "Battery"],
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
        </motion.section> */}

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-20 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container px-4 max-w-4xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
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
              className="mb-6 text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
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
                transition={{ duration: 0.15 }}
              >
                <Link href="mailto:ethan.marreel@gmail.com">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.location.href = "mailto:ethan@marreel.com"
                    }}
                    className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90 px-8 py-6"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    EMAIL ME
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
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