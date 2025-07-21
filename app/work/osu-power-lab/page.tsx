import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OSUPowerLabPage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">FPGA</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Power Electronics</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">ESC Design</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Simulation</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Research</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">OSU Power Electronics Lab</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Collaborative research projects at Oregon State University focusing on power electronics designs 
              and FPGA-based Electronic Speed Controller (ESC) simulations for advanced motor control systems.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/osu-power.png"
                alt="OSU Power Electronics Lab Setup"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Research Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Collaboration with Oregon State University's Power Electronics Laboratory on cutting-edge 
                research in motor control systems, FPGA-based implementations, and electronic speed controller 
                design. Projects focus on improving efficiency, reducing electromagnetic interference, and 
                advancing digital control techniques.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• FPGA-based ESC control algorithm development</li>
                <li>• Power electronics circuit design and optimization</li>
                <li>• Real-time motor control system implementation</li>
                <li>• EMI reduction techniques and analysis</li>
                <li>• High-frequency switching converter design</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Focus Areas</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>FPGA Development:</strong> Xilinx and Intel platforms</li>
                <li>• <strong>Motor Control:</strong> BLDC and PMSM algorithms</li>
                <li>• <strong>Power Converters:</strong> Buck, boost, and flyback topologies</li>
                <li>• <strong>Simulation:</strong> MATLAB/Simulink and SPICE modeling</li>
                <li>• <strong>Testing:</strong> High-frequency measurement techniques</li>
                <li>• <strong>Standards:</strong> IEEE and IEC compliance testing</li>
              </ul>
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Research Projects</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">FPGA-Based ESC Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Development of advanced Electronic Speed Controllers using FPGA hardware for real-time 
                  motor control. The project implements sophisticated control algorithms including field-oriented 
                  control (FOC) and direct torque control (DTC) for brushless DC motors. Custom hardware 
                  architectures achieve microsecond response times with precise current regulation.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Power Electronics Circuit Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Research into high-efficiency power conversion circuits with focus on minimizing switching 
                  losses and electromagnetic interference. Projects include design of novel gate driver circuits, 
                  soft-switching techniques, and advanced magnetic component design. Efficiency improvements 
                  of 3-5% achieved through optimized switching strategies.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">EMI Reduction Techniques</h3>
                <p className="text-gray-300 leading-relaxed">
                  Investigation of electromagnetic interference reduction methods in high-frequency switching 
                  converters. Research includes spread spectrum techniques, optimized PCB layout strategies, 
                  and active EMI filtering. Developed novel shielding techniques that reduce conducted 
                  emissions by 15-20 dB across critical frequency ranges.
                </p>
              </div>
            </div>
          </div>

          {/* Research Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Research Outcomes & Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">95%+</div>
                <div className="text-gray-300">Power Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">&lt;1μs</div>
                <div className="text-gray-300">Control Response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">-20dB</div>
                <div className="text-gray-300">EMI Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">3</div>
                <div className="text-gray-300">Publications</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Technical Achievements</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Novel FPGA architecture for motor control</li>
                  <li>• Improved switching converter efficiency</li>
                  <li>• Advanced EMI mitigation techniques</li>
                  <li>• Real-time control algorithm optimization</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Industry Impact</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Patent applications for novel control methods</li>
                  <li>• Technology transfer to industry partners</li>
                  <li>• Standards committee contributions</li>
                  <li>• Student training and education programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Laboratory Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Laboratory Equipment & Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Test Equipment</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• High-bandwidth oscilloscopes (&gt;1 GHz)</li>
                  <li>• Precision power analyzers</li>
                  <li>• EMI/EMC test chambers</li>
                  <li>• Thermal imaging systems</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Development Tools</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Xilinx and Intel FPGA dev boards</li>
                  <li>• Real-time control prototyping systems</li>
                  <li>• PCB design and fabrication capabilities</li>
                  <li>• 3D modeling and simulation software</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Safety Systems</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• High-voltage safety protocols</li>
                  <li>• Emergency shutdown systems</li>
                  <li>• Proper grounding and isolation</li>
                  <li>• Personal protective equipment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Research */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Future Research Directions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Wide Bandgap Semiconductors</h3>
                <p className="text-gray-300 leading-relaxed">
                  Investigation of Silicon Carbide (SiC) and Gallium Nitride (GaN) devices for 
                  next-generation power electronics with higher efficiency and power density.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">AI-Enhanced Control</h3>
                <p className="text-gray-300 leading-relaxed">
                  Integration of machine learning algorithms for adaptive motor control and 
                  predictive maintenance in power electronic systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
