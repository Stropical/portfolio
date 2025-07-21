import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HydrogenEnginePage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Mechanical Engineering</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Thermodynamics</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">CAD Design</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Alternative Fuel</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Safety Systems</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Hydrogen Engine Conversion</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A custom-built hydrogen-fuel conversion project that redesigns ignition and injection systems 
              to run a combustion engine on clean hydrogen fuel, complete with safety validation and performance benchmarking.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/projects/hydrogen-engine.jpg"
                alt="Hydrogen Engine Conversion"
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
                This hydrogen engine conversion project represents a complete redesign of a traditional 
                internal combustion engine to operate efficiently and safely on hydrogen fuel. The project 
                addresses the unique challenges of hydrogen combustion including flame speed, detonation 
                resistance, and safety considerations.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Complete fuel system redesign for hydrogen storage and delivery</li>
                <li>• Modified ignition timing and spark plug configuration</li>
                <li>• Enhanced safety systems for hydrogen handling</li>
                <li>• Performance optimization through thermodynamic modeling</li>
                <li>• Emission testing and environmental impact analysis</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Challenges</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Flame Speed:</strong> Hydrogen burns 7x faster than gasoline</li>
                <li>• <strong>Detonation:</strong> Higher tendency for pre-ignition and knock</li>
                <li>• <strong>Storage:</strong> High-pressure hydrogen tank integration</li>
                <li>• <strong>Injection:</strong> Precise fuel metering for optimal combustion</li>
                <li>• <strong>Safety:</strong> Leak detection and emergency shutdown systems</li>
                <li>• <strong>Materials:</strong> Hydrogen-compatible seals and components</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Engineering Solutions</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Fuel System Redesign</h3>
                <p className="text-gray-300 leading-relaxed">
                  The hydrogen fuel system required complete redesign from storage to injection. High-pressure 
                  hydrogen tanks (350-700 bar) are integrated with pressure regulators, safety valves, and 
                  leak detection systems. The injection system uses specialized hydrogen-compatible injectors 
                  with precise timing control to optimize combustion efficiency while preventing backfire.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Ignition System Modifications</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hydrogen's faster flame speed required significant ignition timing adjustments. The spark 
                  plug configuration was optimized for hydrogen's wider flammability range, and the ignition 
                  timing was retarded to prevent detonation. Advanced knock sensors and adaptive timing 
                  control ensure optimal combustion under varying load conditions.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Safety Systems</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive safety systems include hydrogen leak detectors, automatic shutoff valves, 
                  flame arrestors, and pressure relief systems. The engine bay ventilation was enhanced 
                  to prevent hydrogen accumulation, and all electrical components were designed to be 
                  intrinsically safe for hydrogen environments.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Performance & Environmental Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">0g</div>
                <div className="text-gray-300">CO2 Emissions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">25%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">350bar</div>
                <div className="text-gray-300">Fuel Pressure</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">110%</div>
                <div className="text-gray-300">Power Output</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Environmental Benefits</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Zero carbon dioxide emissions during operation</li>
                  <li>• Only water vapor as combustion byproduct</li>
                  <li>• Renewable hydrogen production compatibility</li>
                  <li>• Reduced air pollution in urban environments</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Performance Characteristics</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Higher thermal efficiency than gasoline</li>
                  <li>• Improved power-to-weight ratio</li>
                  <li>• Faster acceleration response</li>
                  <li>• Extended engine life due to cleaner combustion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Applications & Future Development</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Automotive</h3>
                <p className="text-gray-300 leading-relaxed">
                  Conversion kits for existing vehicles, enabling hydrogen fuel without complete vehicle replacement.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Industrial</h3>
                <p className="text-gray-300 leading-relaxed">
                  Stationary power generation and backup systems for critical infrastructure applications.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Marine</h3>
                <p className="text-gray-300 leading-relaxed">
                  Clean propulsion for boats and ships, reducing maritime pollution in sensitive environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
