import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomSpeakerPage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Audio DSP</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Fabrication</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Acoustics</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Woodworking</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Electronics</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Custom Designed Speaker</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              An engineered custom audio speaker with integrated DSP processing, optimized enclosure acoustics, 
              and precision fabrication for high-fidelity sound reproduction and audiophile-grade performance.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/speaker.png"
                alt="Custom Designed Speaker"
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
                This custom speaker project combines advanced acoustic engineering with precision fabrication 
                to create a high-fidelity audio system. The design integrates digital signal processing, 
                custom enclosure design, and premium components for exceptional sound quality.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Custom-designed enclosure with optimized internal acoustics</li>
                <li>• Integrated DSP for real-time audio processing and EQ</li>
                <li>• Premium driver selection and crossover design</li>
                <li>• Precision woodworking and finishing techniques</li>
                <li>• Advanced damping and resonance control</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Frequency Response:</strong> 30Hz - 20kHz ±2dB</li>
                <li>• <strong>Power Handling:</strong> 150W RMS continuous</li>
                <li>• <strong>Sensitivity:</strong> 88dB @ 1W/1m</li>
                <li>• <strong>Impedance:</strong> 8Ω nominal</li>
                <li>• <strong>DSP:</strong> 32-bit floating point processing</li>
                <li>• <strong>Crossover:</strong> 4th order Linkwitz-Riley</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Engineering & Design Process</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Acoustic Design & Simulation</h3>
                <p className="text-gray-300 leading-relaxed">
                  The enclosure design was optimized using acoustic simulation software to model frequency response, 
                  internal standing waves, and port tuning. The cabinet dimensions were calculated to minimize 
                  resonances while maximizing bass extension. Advanced damping materials and internal bracing 
                  eliminate unwanted vibrations and colorations.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Digital Signal Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  The integrated DSP system provides real-time audio processing including parametric EQ, 
                  time alignment, crossover filtering, and dynamic range control. The 32-bit floating point 
                  processor ensures high precision and low distortion. Custom firmware implements advanced 
                  algorithms for room correction and speaker protection.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Precision Fabrication</h3>
                <p className="text-gray-300 leading-relaxed">
                  The cabinet is constructed from premium hardwood using traditional woodworking techniques 
                  combined with modern precision tools. Multiple layers of finish provide both aesthetic 
                  appeal and acoustic benefits. All joints are reinforced and sealed to prevent air leaks 
                  that could compromise performance.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Measurements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Performance & Measurements</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">&lt;0.1%</div>
                <div className="text-gray-300">THD+N @ 1kHz</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">30Hz</div>
                <div className="text-gray-300">Bass Extension</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">105dB</div>
                <div className="text-gray-300">Max SPL</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">±2dB</div>
                <div className="text-gray-300">Frequency Response</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Acoustic Performance</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Exceptional clarity across full frequency range</li>
                  <li>• Deep, controlled bass response without distortion</li>
                  <li>• Wide soundstage with precise imaging</li>
                  <li>• Low background noise and coloration</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Build Quality</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Premium hardwood construction</li>
                  <li>• Hand-finished surfaces with protective coating</li>
                  <li>• Reinforced internal bracing structure</li>
                  <li>• Professional-grade component selection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Design Philosophy & Innovation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Form Meets Function</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every design decision balances aesthetic appeal with acoustic performance. The cabinet shape 
                  minimizes diffraction while creating an elegant visual presence. Premium materials and 
                  finishes ensure the speaker is as beautiful as it sounds.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Modular Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  The modular architecture allows for future upgrades and customization. DSP firmware can 
                  be updated, drivers can be swapped, and crossover components can be fine-tuned for 
                  specific applications or preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
