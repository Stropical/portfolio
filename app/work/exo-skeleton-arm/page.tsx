import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExoskeletonArmPage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Robotics</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Arduino</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Signal Processing</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">PVC Design</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Motor Control</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Exoskeleton Bicep</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A nerve-sensing exoskeletal bicep system featuring advanced signal processing, motor control, and robust mechanical design. 
              This project combines biomedical engineering with robotics to create an assistive device for arm movement amplification.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/exo_1.png"
                alt="Exoskeleton Bicep Design"
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
                The exoskeleton bicep project represents a convergence of biomedical signal processing, 
                mechanical engineering, and embedded systems. The device is designed to detect muscle nerve signals 
                and provide mechanical assistance to enhance natural arm movement.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• 4-stage analog filtering circuit for nerve signal extraction</li>
                <li>• Arduino-based microcontroller for real-time signal processing</li>
                <li>• Motor driver circuit for precise actuation control</li>
                <li>• High-strength PVC and aluminum mechanical structure</li>
                <li>• Ergonomic design for comfortable extended wear</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Signal Processing:</strong> 4-stage bandpass and amplification</li>
                <li>• <strong>Frequency Range:</strong> 10-500 Hz for EMG signals</li>
                <li>• <strong>Microcontroller:</strong> Arduino with real-time processing</li>
                <li>• <strong>Actuation:</strong> High-torque servo motor with gear reduction</li>
                <li>• <strong>Materials:</strong> PVC frame with aluminum reinforcement</li>
                <li>• <strong>Power:</strong> Rechargeable battery system</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Implementation</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Signal Processing Circuit</h3>
                <p className="text-gray-300 leading-relaxed">
                  The 4-stage filtering circuit is designed to isolate and amplify electromyographic (EMG) signals 
                  from the bicep muscle. Stage 1 provides initial amplification, Stage 2 implements a high-pass filter 
                  to remove DC offset, Stage 3 applies bandpass filtering to isolate muscle frequencies (10-500 Hz), 
                  and Stage 4 provides final amplification and signal conditioning for the Arduino ADC.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Arduino Control System</h3>
                <p className="text-gray-300 leading-relaxed">
                  The Arduino microcontroller processes the filtered EMG signals in real-time, implementing 
                  digital signal processing algorithms to detect muscle activation patterns. The system uses 
                  threshold detection and moving average filtering to determine when to activate the motor assist. 
                  PID control ensures smooth and responsive motor movement that complements natural muscle action.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Mechanical Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  The exoskeleton frame is constructed from high-strength PVC tubing with aluminum reinforcement 
                  at critical stress points. The design follows ergonomic principles to ensure comfortable fit 
                  while providing effective force transmission. Adjustable joints accommodate different arm sizes, 
                  and the lightweight construction minimizes user fatigue during extended use.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Performance & Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">10-500Hz</div>
                <div className="text-gray-300">EMG Signal Range</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">&lt;50ms</div>
                <div className="text-gray-300">Response Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">40%</div>
                <div className="text-gray-300">Force Amplification</div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Applications & Future Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Medical Rehabilitation</h3>
                <p className="text-gray-300 leading-relaxed">
                  The exoskeleton can assist patients recovering from arm injuries or those with muscle weakness. 
                  The system could be adapted for physical therapy applications with adjustable assistance levels.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Industrial Applications</h3>
                <p className="text-gray-300 leading-relaxed">
                  Workers in manufacturing or construction could benefit from reduced fatigue and injury prevention. 
                  The design could be scaled for different muscle groups and force requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
