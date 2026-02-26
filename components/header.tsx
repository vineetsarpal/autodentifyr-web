"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Download } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Autodentifyr Logo"
              width={64}
              height={64}
              className="rounded-lg w-16 h-16 sm:w-24 sm:h-24"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground truncate max-w-[120px] sm:max-w-none">
              AutoDentifyr
            </span>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="group border-silver/30 text-foreground transition-all duration-300 hover:bg-cyan/90"
              asChild
            >
              <a
                href="https://github.com/vineetsarpal/autodentifyr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 transition-colors" />
                <span className="hidden sm:inline ml-2">GitHub</span>
              </a>
            </Button>
            {/* <Button
              size="sm"
              className="bg-cyan text-background hover:bg-cyan/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/vineetsarpal/autodentifyr/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}
