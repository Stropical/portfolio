import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EBikePage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Embedded Systems</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Battery Technology</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Motor Control</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Custom Firmware</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Power Electronics</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Electric Bike Conversion</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A comprehensive electric bike conversion project featuring custom battery design, advanced motor controllers, 
              intelligent battery management systems, and optimized firmware for efficient power management and performance.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/e-bike.png"
                alt="Electric Bike Conversion"
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
                This electric bike conversion transforms a standard bicycle into a high-performance electric vehicle 
                through custom engineering and integration of advanced power systems. The project encompasses battery 
                design, motor control, power electronics, and intelligent firmware development for optimal efficiency 
                and user experience.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Custom high-capacity lithium battery pack design</li>
                <li>• Advanced Battery Management System (BMS) with cell balancing</li>
                <li>• Intelligent motor controller with regenerative braking</li>
                <li>• Integrated display and control interface</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Battery:</strong> 72V, 30Ah lithium-ion pack (up to 14kw discharge)</li>
                <li>• <strong>Motor:</strong> 6000W brushless hub motor</li>
                <li>• <strong>Range:</strong> 30+ miles on single charge</li>
                <li>• <strong>Top Speed:</strong> 50+ mph</li>
                <li>• <strong>Charging:</strong> Fast charging in 3-4 hours</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">System Design & Engineering</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Custom Battery Pack & BMS</h3>
                <p className="text-gray-300 leading-relaxed">
                  The battery system features high-energy-density 18650 lithium cells arranged in a 20S8P 
                  configuration for optimal voltage and capacity. Custom Battery Management System monitors 
                  individual cell voltages, temperatures, and current flow. Advanced balancing algorithms 
                  ensure maximum pack longevity and performance. Integrated protection circuits prevent 
                  overcharge, overdischarge, and thermal runaway conditions.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Motor Controller & Power Electronics</h3>
                <p className="text-gray-300 leading-relaxed">
                  The motor controller implements advanced field-oriented control (FOC) algorithms for smooth, 
                  efficient operation of the brushless DC hub motor. Custom firmware provides multiple power 
                  delivery modes, regenerative braking with energy recovery, and thermal protection. High-frequency 
                  switching circuits minimize losses while maintaining electromagnetic compatibility (EMC) standards.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Intelligent Control System</h3>
                <p className="text-gray-300 leading-relaxed">
                  Embedded microcontroller manages all system functions including throttle response, battery 
                  monitoring, thermal management, and user interface. Custom algorithms optimize power delivery 
                  based on riding conditions, battery state, and user preferences. Real-time telemetry provides 
                  detailed performance data and diagnostic information through integrated display system.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Performance & Efficiency</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">30+</div>
                <div className="text-gray-300">Miles Range</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">50+ mph</div>
                <div className="text-gray-300">Top Speed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">6.7kw</div>
                <div className="text-gray-300">Max Power output</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">15%</div>
                <div className="text-gray-300">Regen Recovery</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Power Management</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Adaptive power delivery based on terrain</li>
                  <li>• Regenerative braking with energy recovery</li>
                  <li>• Thermal management for sustained performance</li>
                  <li>• Sleep mode for minimal standby power consumption</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Riding Modes</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Eco mode for maximum range</li>
                  <li>• Performance mode for maximum power</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety & Reliability */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Safety & Reliability Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Battery Safety</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Individual cell monitoring and protection</li>
                  <li>• Thermal runaway prevention</li>
                  <li>• Overcurrent and overvoltage protection</li>
                  <li>• Emergency disconnect systems</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Electrical Safety</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Ground fault detection and isolation</li>
                  <li>• Waterproof connectors and enclosures</li>
                  <li>• Fail-safe motor control algorithms</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Mechanical Safety</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Secure battery mounting system</li>
                  <li>• Anti-theft and GPS tracking</li>
                  <li>• EBrakes for triple brakes</li>
                  <li>• Robust weatherproof construction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Enhancements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Future Development & Upgrades</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Technology Upgrades</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• GPS navigation and route optimization</li>
                  <li>• Smartphone app integration</li>
                  <li>• IoT connectivity for remote monitoring</li>
                  <li>• Machine learning for predictive maintenance</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Performance Improvements</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Next-generation battery chemistry</li>
                  <li>• Wireless charging capabilities</li>
                  <li>• Advanced motor control algorithms</li>
                  <li>• Integrated solar charging system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
