import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BiomotumPage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Python</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">PDF Generation</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Healthcare</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Data Processing</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Medical Records</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Biomotum Medical PDF Generator</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A comprehensive medical chronology PDF generator built in Python that converts complex patient JSON records 
              into structured, professional medical reports for healthcare providers and legal documentation.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/biomotum.png"
                alt="Biomotum Medical PDF Generator Interface"
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
                The Biomotum medical PDF generator addresses the critical need for converting complex patient 
                data into readable, structured medical chronologies. This system processes JSON medical records 
                and generates professional-grade PDF reports that meet healthcare documentation standards.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Automated parsing of complex medical JSON data structures</li>
                <li>• Template-based PDF generation with professional formatting</li>
                <li>• HIPAA-compliant data handling and security measures</li>
                <li>• Customizable report layouts for different use cases</li>
                <li>• Batch processing capabilities for multiple records</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Language:</strong> Python with advanced libraries</li>
                <li>• <strong>PDF Engine:</strong> ReportLab for professional layouts</li>
                <li>• <strong>Data Processing:</strong> Pandas for medical record analysis</li>
                <li>• <strong>Templates:</strong> Jinja2 for dynamic report generation</li>
                <li>• <strong>Security:</strong> Encryption and access controls</li>
                <li>• <strong>Performance:</strong> Optimized for large dataset processing</li>
              </ul>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">System Architecture & Features</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Data Processing Pipeline</h3>
                <p className="text-gray-300 leading-relaxed">
                  The system implements a robust data processing pipeline that validates, cleans, and transforms 
                  raw medical JSON data. Advanced parsing algorithms handle nested data structures, missing fields, 
                  and data inconsistencies. The pipeline includes data validation steps to ensure medical record 
                  integrity and compliance with healthcare data standards.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">PDF Template Engine</h3>
                <p className="text-gray-300 leading-relaxed">
                  A sophisticated template engine generates professional medical chronologies with consistent 
                  formatting, headers, footers, and page numbering. The system supports multiple template 
                  configurations for different report types including clinical summaries, treatment timelines, 
                  and legal documentation formats.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Security & Compliance</h3>
                <p className="text-gray-300 leading-relaxed">
                  HIPAA compliance is ensured through encrypted data handling, secure temporary file management, 
                  and audit logging. The system implements access controls, data anonymization options, and 
                  secure deletion of temporary files. All processing maintains patient privacy while generating 
                  comprehensive medical documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases & Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Applications & Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">95%</div>
                <div className="text-gray-300">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">1000+</div>
                <div className="text-gray-300">Records Processed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">100%</div>
                <div className="text-gray-300">HIPAA Compliance</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Healthcare Providers</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Streamlined patient record documentation</li>
                  <li>• Consistent report formatting across departments</li>
                  <li>• Reduced administrative burden on medical staff</li>
                  <li>• Improved patient care through better documentation</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Legal & Insurance</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Professional medical chronologies for legal cases</li>
                  <li>• Insurance claim documentation and support</li>
                  <li>• Expert witness report preparation</li>
                  <li>• Standardized medical timeline formats</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Performance & Scalability</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Processing Capabilities</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Handles complex nested JSON structures</li>
                  <li>• Processes multiple patient records simultaneously</li>
                  <li>• Supports various medical data formats and standards</li>
                  <li>• Optimized memory usage for large datasets</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Output Features</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Professional PDF layouts with medical branding</li>
                  <li>• Searchable text and embedded metadata</li>
                  <li>• Customizable headers, footers, and watermarks</li>
                  <li>• Support for charts, graphs, and medical imagery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Development */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Future Enhancements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">AI Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Machine learning algorithms for automated medical data analysis and insight generation.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Web Interface</h3>
                <p className="text-gray-300 leading-relaxed">
                  Browser-based interface for easier access and real-time report generation.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">API Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  REST API for integration with existing healthcare management systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
