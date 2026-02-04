"use client"

import { Camera, Upload, Zap, Share2 } from "lucide-react"

const modes = [
  {
    title: "Live Camera",
    description: "Point your phone camera at any car damage",
    icon: Camera,
    steps: [
      "Open the app",
      "Enable camera access",
      "Frame the damaged area",
      "Get instant detection"
    ]
  },
  {
    title: "Upload Image",
    description: "Select an image from your gallery",
    icon: Upload,
    steps: [
      "Choose from gallery",
      "Select damaged area photo",
      "Confirm upload",
      "Get instant detection"
    ]
  }
]

export function HowItWorks() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">How It</span>{" "}
            <span className="text-cyan">Works</span>
          </h2>
          <p className="text-lg text-silver max-w-2xl mx-auto">
            Choose your preferred way to analyze car damage. Both modes provide instant AI-powered detection and cost estimates.
          </p>
        </div>

        {/* Two Modes Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {modes.map((mode, index) => {
            const Icon = mode.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Mode card */}
                <div className="relative h-full p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-cyan/50 hover:bg-card/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-cyan/10 border border-cyan/30 group-hover:bg-cyan/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-cyan" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {mode.title}
                      </h3>
                      <p className="text-silver text-sm mt-1">
                        {mode.description}
                      </p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-3">
                    {mode.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan/20 border border-cyan/40 text-xs font-semibold text-cyan">
                          {stepIndex + 1}
                        </div>
                        <span className="text-silver text-sm">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Convergence to Results */}
        <div className="relative">
          {/* Arrow/line pointing down to results */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-12 text-cyan/40 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>

          {/* Results section */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Get Estimates */}
            <div className="group relative">
              <div className="relative h-full p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-cyan/50 hover:bg-card/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <div className="p-3 w-fit rounded-lg bg-cyan/10 border border-cyan/30 group-hover:bg-cyan/20 transition-colors duration-300 mb-4">
                  <Zap className="w-6 h-6 text-cyan" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Get Estimates
                </h4>
                <p className="text-silver text-sm">
                  Receive instant cost estimations based on damage analysis
                </p>
              </div>
            </div>

            {/* Share Results */}
            <div className="group relative">
              <div className="relative h-full p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-cyan/50 hover:bg-card/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <div className="p-3 w-fit rounded-lg bg-cyan/10 border border-cyan/30 group-hover:bg-cyan/20 transition-colors duration-300 mb-4">
                  <Share2 className="w-6 h-6 text-cyan" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Share Results
                </h4>
                <p className="text-silver text-sm">
                  Save and share detection reports for insurance or consultations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-silver mb-4">
            Everything happens on your device. No images are uploaded, ensuring your privacy is protected.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm text-cyan font-medium">100% On-Device Processing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
