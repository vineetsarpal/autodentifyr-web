"use client"

import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Autodentifyr Logo"
                width={64}
                height={64}
                className="rounded-lg w-16 h-16 sm:w-24 sm:h-24"
              />
              <span className="font-semibold text-foreground">AutoDentifyr</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-silver text-sm text-center md:text-left">
              Built for the future of vehicle inspection.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="mailto:tech.vinsa@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Contact Us</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-silver">
          <a href="/privacy" className="hover:text-cyan transition-colors">
            Privacy Policy
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="/terms" className="hover:text-cyan transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
