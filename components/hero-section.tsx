"use client"

import Image from "next/image"
import { PhoneMockup } from "@/components/phone-mockup"

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-sm text-silver font-mono">On-Device AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                <span className="text-foreground">AutoDentifyr</span>{" "}
                <span className="text-cyan">Damage Decoded.</span>
              </h1>
              <p className="text-lg sm:text-xl text-silver max-w-xl leading-relaxed">
                Professional-grade car damage detection and cost estimation, powered by on-device AI.
              </p>
            </div>

             <div className="flex flex-wrap gap-4 items-end justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.vineetsarpal.autodentifyr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={250}
                  height={80}
                  className="h-[80px] sm:h-[96px] w-auto"
                  unoptimized
                />
              </a>

              <div className="relative mb-[10px] sm:mb-[14px]">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="transition-transform hover:scale-105 opacity-60"
                >
                  <Image
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                    alt="Download on the App Store"
                    width={250}
                    height={80}
                    className="h-[52px] sm:h-[66px] w-auto"
                    unoptimized
                  />
                </a>
                <span className="absolute -top-4 -right-2 px-2 py-1 text-[6px] sm:text-xs font-bold text-cyan bg-card/90 backdrop-blur-sm rounded-full border border-cyan/50 shadow-lg whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-cyan font-mono">100%</p>
                <p className="text-sm text-silver">Offline</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-cyan font-mono">{'<'}50ms</p>
                <p className="text-sm text-silver">Inference</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-cyan font-mono">0</p>
                <p className="text-sm text-silver">Data Leaks</p>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
