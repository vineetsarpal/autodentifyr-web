"use client"

import { CheckCircle2, Clock, Sparkles } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    status: "current",
    title: "Core Damage Detection + Cost Estimation",
    description: "Real-time damage detection with baseline cost estimation models.",
    icon: CheckCircle2,
  },
  {
    phase: "Phase 2",
    status: "coming",
    title: "Contextual Pricing",
    description: "Vehicle Make/Model integration for tailored cost estimation.",
    icon: Clock,
  },
  {
    phase: "Phase 3",
    status: "future",
    title: "Severity Reasoning",
    description: "Insurance-grade reports with detailed damage severity analysis.",
    icon: Sparkles,
  },
]

export function RoadmapSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The <span className="text-cyan">Roadmap</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Our vision for the future of AI-powered vehicle inspection.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-cyan/50 to-border md:-translate-x-px hidden sm:block" />

          <div className="space-y-12">
            {phases.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.status === "current"
                        ? "bg-cyan border-cyan shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                        : item.status === "coming"
                          ? "bg-background border-cyan/50"
                          : "bg-background border-border"
                    }`}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 sm:pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`group p-6 rounded-xl bg-card border transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] ${
                      item.status === "current"
                        ? "border-cyan/50"
                        : "border-border hover:border-cyan/30"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span
                        className={`px-3 py-1 text-xs font-mono rounded-full ${
                          item.status === "current"
                            ? "bg-cyan/20 text-cyan"
                            : item.status === "coming"
                              ? "bg-silver/20 text-silver"
                              : "bg-border text-muted-foreground"
                        }`}
                      >
                        {item.phase}
                      </span>
                      <item.icon
                        className={`w-5 h-5 ${
                          item.status === "current"
                            ? "text-cyan"
                            : "text-silver"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-silver">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
