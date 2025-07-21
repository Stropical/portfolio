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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">NextJS</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Vcrypt Financial Platform</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A comprehensive financial technology startup developing cutting-edge algorithmic trading systems and web applications. 
              Leading multiple teams to build production-grade solutions for automated trading with ML-driven signal generation.
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
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
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
                <li>• <strong>Machine Learning:</strong> XGBoost models integrated via ONNX runtime</li>
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
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Trading Engine (Rust)</h3>
                <p className="text-gray-300 leading-relaxed">
                  The core trading engine is built in Rust for maximum performance and memory safety. 
                  It handles real-time market data processing, signal generation, risk management, and order execution. 
                  The system integrates ONNX models for ML inference directly in the trading loop, achieving sub-200ms latency 
                  from signal generation to order placement.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Machine Learning Pipeline</h3>
                <p className="text-gray-300 leading-relaxed">
                  XGBoost models are trained on historical market data and converted to ONNX format for optimized inference. 
                  The ML pipeline includes feature engineering, model training, validation, and deployment automation. 
                  Models are continuously updated and A/B tested in live trading environments.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Web Application (NextJS)</h3>
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
                <div className="text-4xl font-bold text-[#FF3366] mb-2">&lt;200ms</div>
                <div className="text-gray-300">Order Execution Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">1-100</div>
                <div className="text-gray-300">Scalable Account Range</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">24/7</div>
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
