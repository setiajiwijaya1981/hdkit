import { Code2, Layers, Sparkles, GitBranch } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Bodygraph Generation",
    description:
      "Generate complete Human Design bodygraphs with all 9 centers, 36 channels, and 64 gates. SVG-based rendering for crisp visuals at any size.",
  },
  {
    icon: Sparkles,
    title: "Planetary Positions",
    description:
      "Calculate planetary positions for any date and time. Get gate, line, and color data for Sun, Moon, and all planets.",
  },
  {
    icon: Code2,
    title: "Multiple Frameworks",
    description:
      "Sample apps in JavaScript, React, Rails, and Node.js. Use the library in your preferred stack or learn from working examples.",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description:
      "MIT licensed and actively maintained since 2016. Contribute, fork, or use in your commercial projects with no restrictions.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build{" "}
            <span className="text-primary">Human Design apps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive toolkit with utilities, data, and sample applications
            to jumpstart your Human Design project.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
