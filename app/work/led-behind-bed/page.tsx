import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LEDBehindBedPage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">IoT</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">ESP32</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Smart Lighting</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">WiFi Control</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Home Automation</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Smart LED Behind Bed System</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A WiFi-controlled LED lighting system installed behind a bed using ESP32 microcontroller, 
              enabling dynamic ambient lighting scenes with smartphone control and automated scheduling.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/led-bed.png"
                alt="Smart LED Behind Bed System"
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
                This smart lighting project transforms a bedroom environment with programmable LED strips 
                controlled via WiFi. The system provides customizable ambient lighting with multiple preset 
                scenes, smartphone control, and integration with daily routines for enhanced comfort and aesthetics.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• ESP32-based WiFi control system</li>
                <li>• Addressable RGB LED strips with individual pixel control</li>
                <li>• Custom mobile app for real-time control</li>
                <li>• Programmable lighting scenes and animations</li>
                <li>• Automated scheduling and wake-up routines</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Features</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Controller:</strong> ESP32 with built-in WiFi and Bluetooth</li>
                <li>• <strong>LEDs:</strong> WS2812B addressable RGB strips</li>
                <li>• <strong>Control:</strong> Web interface and mobile app</li>
                <li>• <strong>Power:</strong> 5V switching power supply with protection</li>
                <li>• <strong>Installation:</strong> Hidden mounting behind headboard</li>
                <li>• <strong>Effects:</strong> 20+ built-in lighting animations</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">System Design & Implementation</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">ESP32 Control System</h3>
                <p className="text-gray-300 leading-relaxed">
                  The ESP32 microcontroller serves as the central hub, managing WiFi connectivity, LED control, 
                  and user interface. Custom firmware implements a web server for browser-based control and 
                  handles real-time LED updates. The system supports over-the-air (OTA) updates for easy 
                  firmware upgrades and new feature additions.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">LED Strip Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  High-density WS2812B LED strips provide individually addressable RGB pixels for complex 
                  lighting effects. The strips are strategically positioned behind the bed frame for optimal 
                  light diffusion and hidden installation. Power distribution and signal integrity are 
                  maintained across the entire strip length with proper buffering and power injection.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Smart Control Interface</h3>
                <p className="text-gray-300 leading-relaxed">
                  A responsive web interface provides intuitive control over colors, brightness, effects, 
                  and scheduling. The system includes preset scenes for different activities (reading, 
                  relaxation, sleep), custom color selection, and animation speed controls. Voice control 
                  integration through smart home platforms adds hands-free operation.
                </p>
              </div>
            </div>
          </div>

          {/* Features & Functionality */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Lighting Effects & Features</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">20+</div>
                <div className="text-gray-300">Lighting Effects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">16M</div>
                <div className="text-gray-300">Color Options</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">60fps</div>
                <div className="text-gray-300">Animation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">24/7</div>
                <div className="text-gray-300">Automated Control</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Dynamic Effects</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Color-changing gradients and waves</li>
                  <li>• Breathing and pulsing animations</li>
                  <li>• Music-reactive lighting (with microphone)</li>
                  <li>• Sunrise/sunset simulation for natural wake-up</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Smart Automation</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Scheduled on/off times and scene changes</li>
                  <li>• Motion sensor integration for automatic activation</li>
                  <li>• Sleep mode with gradual dimming</li>
                  <li>• Integration with smart home ecosystems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Installation & Setup */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Installation & Technical Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Hardware Installation</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Clean cable management with hidden wiring</li>
                  <li>• Secure mounting behind bed frame structure</li>
                  <li>• Proper heat dissipation for LED longevity</li>
                  <li>• Easy access to control unit for maintenance</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Software Features</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Web-based configuration interface</li>
                  <li>• Mobile app for iOS and Android</li>
                  <li>• OTA firmware updates</li>
                  <li>• Backup and restore settings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Enhancements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Future Enhancements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">AI Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Machine learning to adapt lighting preferences based on usage patterns and time of day.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Health Monitoring</h3>
                <p className="text-gray-300 leading-relaxed">
                  Integration with sleep tracking and circadian rhythm optimization for better sleep quality.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Room Expansion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Multi-zone lighting control throughout the entire bedroom with synchronized effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
