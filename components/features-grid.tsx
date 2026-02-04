"use client"

import { Zap, Eye, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-time Detection",
    description: "Instant on-device identification of dents and scratches using advanced Computer Vision inference.",
  },
  {
    icon: Eye,
    title: "Visual Estimates",
    description: "Live cost overlays for immediate damage assessment directly on your camera feed.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "100% offline processing—no data ever leaves your device. Your images stay yours.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-cyan">Precision</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Enterprise-grade damage detection that respects your privacy and delivers results in milliseconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-cyan/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-6 group-hover:bg-cyan/20 group-hover:border-cyan/50 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-cyan" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-silver leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
