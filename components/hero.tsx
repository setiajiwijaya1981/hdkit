"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [copied, setCopied] = useState(false)
  const installCommand = "git clone --recursive git@github.com:jdempcy/hdkit.git"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">
              Open Source Since 2016
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Human Design{" "}
            <span className="text-primary">Programming Toolkit</span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Generate bodygraphs, calculate planetary positions, and build Human
            Design applications. The world&apos;s first open-source toolkit for Human
            Design developers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Get Started
            </a>

            <button
              onClick={handleCopy}
              className="group inline-flex h-12 w-full items-center justify-between gap-3 rounded-md border border-border bg-card px-4 text-sm font-mono transition-colors hover:bg-muted sm:w-auto"
            >
              <span className="text-muted-foreground">$</span>
              <span className="truncate text-foreground">git clone --recursive</span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Planet glyphs decoration */}
        <div className="mt-16 flex items-center justify-center gap-6 text-3xl text-muted-foreground/30 sm:gap-8">
          <span title="Sun">&#x2609;</span>
          <span title="Moon">&#x263D;</span>
          <span title="Mercury">&#x263F;</span>
          <span title="Venus">&#x2640;</span>
          <span title="Mars">&#x2642;</span>
          <span title="Jupiter">&#x2643;</span>
          <span title="Saturn">&#x2644;</span>
          <span title="Uranus">&#x2645;</span>
          <span title="Neptune">&#x2646;</span>
          <span title="Pluto">&#x2647;</span>
        </div>
      </div>
    </section>
  )
}
