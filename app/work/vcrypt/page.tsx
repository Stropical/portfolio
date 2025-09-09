import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VcryptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center justify-between">
          <Link className="text-lg font-bold" href="/">
            ETHAN MARREEL
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Rust</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Machine Learning</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">ONNX</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Python</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">C#</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Typescript</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">NextJS</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Project Management</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Vcrypt Financial</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
             Financial software startup I started at Oregon State developing algorithmic trading software built for the futures market. Recruited 10+ employees and launched a production-grade trading platform. Split the company into two teams: one building a NextJS web app we called TradeMindPro and the other continuing on automated trading
            </p>
            <div className="flex gap-4">
              <Link href="https://trademind.pro" target="_blank">
                <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit TradeMindPro
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[700px] rounded-lg overflow-hidden">
              <Image
                src="/images/backtest.png"
                alt="Vcrypt Trading Platform Interface"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vcrypt Financial is a startup software company at the forefront of financial technology innovation. 
                As a key team leader, I'm spearheading the development of two critical systems:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Production-grade NextJS web application for user interfaces</li>
                <li>• Market data routing engine for cost optimized data access</li>
                <li>• High-performance algorithmic trading platform in Rust/C#/Python</li>
                <li>• ML-driven signal generation using XGBoost and ONNX models</li>
                <li>• Sub-200ms latency trading execution systems</li>
                <li>• Scalable infrastructure supporting 1-100 trading accounts</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Performance:</strong> Sub-second order execution with ML inference</li>
                <li>• <strong>Scalability:</strong> Proxmox-automated deployment architecture</li>
                <li>• <strong>Machine Learning:</strong> XGBoost + RL models integrated via ONNX runtime</li>
                <li>• <strong>Languages:</strong> Rust for core trading engine, Python for ML, C# for APIs</li>
                <li>• <strong>Frontend:</strong> Modern NextJS application with real-time data</li>
                <li>• <strong>Infrastructure:</strong> Automated deployment and scaling systems</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Trading Engine (Docker + Rust + C#)</h3>
                <p className="text-gray-300 leading-relaxed">
                  The core trading engine is built in Rust for maximum performance and memory safety. 
                  It handles real-time market data processing, signal generation, risk management, and order execution. 
                  The engine is containerized using Docker for easy deployment and scaling across multiple nodes. Our V2 architecture runs inside of NinjaTrader for enhanced connectivity, and runs a super fast ML pipeline.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Machine Learning & Execution Pipeline (ONNX + Python + C#)</h3>
                <p className="text-gray-300 leading-relaxed">
                  XGBoost models are trained on historical market data and converted to ONNX format for optimized inference. 
                  The ML pipeline includes feature engineering, model training, validation. Signals are filtered by a custom risk management system to ensure only high-confidence trades are executed. Custom order management system built to ensure optimal pricing in every entry and exit.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">TradeMindPro (NextJS + Supabase)</h3>
                <p className="text-gray-300 leading-relaxed">
                  The TradeMindPro web application provides real-time trading dashboards, portfolio management, 
                  and system monitoring. Built with NextJS, it features server-side rendering, real-time WebSocket 
                  connections, and responsive design optimized for both desktop and mobile trading.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">&lt;0.2ms</div>
                <div className="text-gray-300">Order Generation Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">1-100</div>
                <div className="text-gray-300">Scalable Account Range</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">23/6</div>
                <div className="text-gray-300">Automated Trading</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Experience TradeMindPro</h2>
            <p className="text-xl text-gray-300 mb-8">
              See the production application in action with real-time trading capabilities.
            </p>
            <Link href="https://trademind.pro" target="_blank">
              <Button className="bg-[#FF3366] text-white hover:bg-[#FF3366]/90 px-8 py-3">
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit TradeMindPro
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
