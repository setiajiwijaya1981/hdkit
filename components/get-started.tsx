"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    step: 1,
    title: "Clone the repository",
    command: "git clone --recursive git@github.com:jdempcy/hdkit.git",
    description: "Use the --recursive flag to clone all submodules",
  },
  {
    step: 2,
    title: "Navigate to sample apps",
    command: "cd hdkit/sample-apps",
    description: "Choose from 5 different sample applications",
  },
  {
    step: 3,
    title: "Start with hdkit_sample_app",
    command: "cd hdkit_sample_app && bundle install && rails db:migrate && ./bin/dev",
    description: "The Rails app is the easiest way to generate your first bodygraph",
  },
]

export function GetStarted() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (command: string, index: number) => {
    await navigator.clipboard.writeText(command)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="get-started" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow these simple steps to start building with HDKit
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <button
                onClick={() => handleCopy(step.command, index)}
                className="group mb-3 flex w-full items-center justify-between rounded-md bg-muted/50 px-4 py-3 text-left font-mono text-sm transition-colors hover:bg-muted"
              >
                <code className="overflow-x-auto text-muted-foreground">
                  <span className="text-primary">$</span> {step.command}
                </code>
                {copiedIndex === index ? (
                  <Check className="ml-3 h-4 w-4 flex-shrink-0 text-green-500" />
                ) : (
                  <Copy className="ml-3 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                )}
              </button>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
