import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RustCompilerPage() {
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
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">LLVM</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">Compiler Design</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">PineScript</Badge>
              <Badge variant="outline" className="border-[#FF3366]/30 text-gray-300">IR Generation</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">Custom Rust Compiler</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A sophisticated PineScript compiler driver developed in Rust that translates trading strategy scripts 
              into optimized LLVM Intermediate Representation (IR) for high-performance execution in financial applications.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/rust-compiler.png"
                alt="Custom Rust Compiler Architecture"
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
                This custom compiler project bridges the gap between high-level PineScript trading strategies 
                and low-level machine code execution. Built entirely in Rust, the compiler provides a complete 
                toolchain for parsing, analyzing, optimizing, and generating efficient code for financial 
                trading algorithms.
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Complete PineScript language parser and lexer</li>
                <li>• Abstract Syntax Tree (AST) generation and optimization</li>
                <li>• LLVM IR code generation for multiple target architectures</li>
                <li>• Advanced optimization passes for trading algorithm performance</li>
                <li>• Runtime library for financial data structures and operations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• <strong>Frontend:</strong> Recursive descent parser with error recovery</li>
                <li>• <strong>Middle-end:</strong> AST optimization and analysis passes</li>
                <li>• <strong>Backend:</strong> LLVM IR generation and optimization</li>
                <li>• <strong>Runtime:</strong> Minimal runtime for trading operations</li>
                <li>• <strong>Tooling:</strong> Debugger, profiler, and analysis tools</li>
                <li>• <strong>Testing:</strong> Comprehensive test suite with fuzzing</li>
              </ul>
            </div>
          </div>

          {/* Compiler Pipeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Compiler Pipeline & Implementation</h2>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Lexical Analysis & Parsing</h3>
                <p className="text-gray-300 leading-relaxed">
                  The frontend implements a complete lexer and recursive descent parser for PineScript syntax. 
                  Advanced error recovery techniques provide meaningful error messages and continue parsing 
                  after syntax errors. The parser generates a detailed Abstract Syntax Tree with full source 
                  location information for debugging and error reporting.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Semantic Analysis & Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  The middle-end performs comprehensive semantic analysis including type checking, symbol 
                  resolution, and control flow analysis. Multiple optimization passes eliminate dead code, 
                  inline functions, and optimize trading-specific operations like technical indicator 
                  calculations. The optimizer is specifically tuned for financial algorithm patterns.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">LLVM IR Code Generation</h3>
                <p className="text-gray-300 leading-relaxed">
                  The backend translates the optimized AST into efficient LLVM Intermediate Representation. 
                  Custom code generation strategies handle PineScript's unique features like series data types, 
                  historical references, and real-time execution models. The generated IR is further optimized 
                  by LLVM's optimization passes before final code generation.
                </p>
              </div>
            </div>
          </div>

          {/* Performance & Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Performance & Capabilities</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">10x</div>
                <div className="text-gray-300">Performance Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">&lt;1ms</div>
                <div className="text-gray-300">Compilation Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">95%</div>
                <div className="text-gray-300">PineScript Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF3366] mb-2">0</div>
                <div className="text-gray-300">Runtime Dependencies</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Language Features</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Complete PineScript v5 syntax support</li>
                  <li>• Advanced type system with inference</li>
                  <li>• Series data types and historical operators</li>
                  <li>• Built-in technical analysis functions</li>
                </ul>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Optimization Features</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Loop unrolling for indicator calculations</li>
                  <li>• Vectorization of mathematical operations</li>
                  <li>• Memory layout optimization for time series</li>
                  <li>• Branch prediction optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Challenges & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Series Data Model</h3>
                <p className="text-gray-300 leading-relaxed">
                  PineScript's unique series data model requires special handling in the compiler. 
                  Implemented efficient memory management for historical data access patterns 
                  and optimized the runtime for real-time streaming operations.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Real-time Execution</h3>
                <p className="text-gray-300 leading-relaxed">
                  Trading algorithms must execute with minimal latency. The compiler generates 
                  code with predictable execution times and minimal memory allocations to ensure 
                  consistent performance in live trading environments.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Error Handling</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive error handling throughout the compilation pipeline provides 
                  clear diagnostics for syntax errors, type mismatches, and runtime issues. 
                  Advanced error recovery enables continued compilation after errors.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Cross-platform Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  LLVM backend enables compilation to multiple target architectures including 
                  x86_64, ARM, and WebAssembly for deployment across different trading platforms 
                  and environments.
                </p>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Applications & Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">High-Frequency Trading</h3>
                <p className="text-gray-300 leading-relaxed">
                  Compiled trading strategies achieve microsecond execution times critical for 
                  high-frequency trading applications.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Backtesting Systems</h3>
                <p className="text-gray-300 leading-relaxed">
                  Optimized code enables rapid backtesting of strategies across large historical 
                  datasets with minimal computational overhead.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Research Platforms</h3>
                <p className="text-gray-300 leading-relaxed">
                  Academic and institutional research benefits from fast iteration cycles and 
                  performance analysis capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
