"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// Center positions in the bodygraph (relative positioning)
const centers = [
  { id: "head", name: "Head", color: "yellow", x: 50, y: 5, defined: false },
  { id: "ajna", name: "Ajna", color: "green", x: 50, y: 18, defined: false },
  { id: "throat", name: "Throat", color: "brown", x: 50, y: 32, defined: false },
  { id: "g", name: "G Center", color: "yellow", x: 50, y: 48, defined: false },
  { id: "ego", name: "Ego", color: "red", x: 30, y: 52, defined: false },
  { id: "spleen", name: "Spleen", color: "brown", x: 20, y: 65, defined: false },
  { id: "sacral", name: "Sacral", color: "red", x: 50, y: 70, defined: false },
  { id: "solar", name: "Solar Plexus", color: "brown", x: 80, y: 65, defined: false },
  { id: "root", name: "Root", color: "brown", x: 50, y: 88, defined: false },
]

// Channel connections between centers
const channels = [
  { from: "head", to: "ajna", gates: [64, 47] },
  { from: "head", to: "ajna", gates: [61, 24] },
  { from: "head", to: "ajna", gates: [63, 4] },
  { from: "ajna", to: "throat", gates: [17, 62] },
  { from: "ajna", to: "throat", gates: [43, 23] },
  { from: "ajna", to: "throat", gates: [11, 56] },
  { from: "throat", to: "g", gates: [20, 10] },
  { from: "throat", to: "g", gates: [31, 7] },
  { from: "throat", to: "g", gates: [8, 1] },
  { from: "throat", to: "g", gates: [33, 13] },
  { from: "throat", to: "ego", gates: [21, 45] },
  { from: "throat", to: "solar", gates: [12, 22] },
  { from: "throat", to: "solar", gates: [35, 36] },
  { from: "throat", to: "sacral", gates: [34, 20] },
  { from: "throat", to: "spleen", gates: [16, 48] },
  { from: "g", to: "ego", gates: [51, 25] },
  { from: "g", to: "spleen", gates: [10, 57] },
  { from: "g", to: "sacral", gates: [34, 10] },
  { from: "g", to: "sacral", gates: [5, 15] },
  { from: "g", to: "sacral", gates: [2, 14] },
  { from: "g", to: "sacral", gates: [29, 46] },
  { from: "ego", to: "spleen", gates: [44, 26] },
  { from: "ego", to: "solar", gates: [37, 40] },
  { from: "spleen", to: "sacral", gates: [50, 27] },
  { from: "spleen", to: "sacral", gates: [57, 34] },
  { from: "spleen", to: "root", gates: [54, 32] },
  { from: "spleen", to: "root", gates: [38, 28] },
  { from: "spleen", to: "root", gates: [58, 18] },
  { from: "sacral", to: "solar", gates: [6, 59] },
  { from: "sacral", to: "root", gates: [53, 42] },
  { from: "sacral", to: "root", gates: [60, 3] },
  { from: "sacral", to: "root", gates: [52, 9] },
  { from: "solar", to: "root", gates: [19, 49] },
  { from: "solar", to: "root", gates: [39, 55] },
  { from: "solar", to: "root", gates: [41, 30] },
]

type AuraType = "Generator" | "Manifesting Generator" | "Manifestor" | "Projector" | "Reflector"

interface BodygraphDemoProps {
  className?: string
}

export function BodygraphDemo({ className }: BodygraphDemoProps) {
  const [selectedType, setSelectedType] = useState<AuraType>("Generator")
  const [hoveredCenter, setHoveredCenter] = useState<string | null>(null)

  // Example activations for each type
  const typeActivations: Record<AuraType, number[]> = {
    Generator: [5, 15, 29, 46, 52, 9, 53, 42],
    "Manifesting Generator": [34, 20, 5, 15, 52, 9, 57, 34],
    Manifestor: [21, 45, 35, 36, 12, 22],
    Projector: [17, 62, 43, 23, 8, 1],
    Reflector: [],
  }

  const activatedGates = typeActivations[selectedType]

  // Check if a channel is defined
  const isChannelDefined = (gates: number[]) => {
    return gates.every((gate) => activatedGates.includes(gate))
  }

  // Get defined centers based on activated channels
  const getDefinedCenters = () => {
    const defined = new Set<string>()
    channels.forEach((channel) => {
      if (isChannelDefined(channel.gates)) {
        defined.add(channel.from)
        defined.add(channel.to)
      }
    })
    return defined
  }

  const definedCenters = getDefinedCenters()

  const getCenterColor = (centerId: string, baseColor: string) => {
    if (definedCenters.has(centerId)) {
      switch (baseColor) {
        case "yellow":
          return "fill-yellow-400"
        case "green":
          return "fill-green-500"
        case "red":
          return "fill-red-500"
        case "brown":
          return "fill-amber-600"
        default:
          return "fill-muted"
      }
    }
    return "fill-muted/30"
  }

  return (
    <section id="bodygraph" className={cn("border-t border-border py-20 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Interactive <span className="text-primary">Bodygraph</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the 9 energy centers and see how different Types are defined
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Type Selector */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Select an Aura Type</h3>
              <div className="flex flex-wrap gap-2">
                {(["Generator", "Manifesting Generator", "Manifestor", "Projector", "Reflector"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={cn(
                      "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      selectedType === type
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="mb-4 font-semibold">Type: {selectedType}</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                {selectedType === "Generator" && (
                  <>
                    <p><strong className="text-foreground">Strategy:</strong> Wait to respond</p>
                    <p><strong className="text-foreground">Signature:</strong> Satisfaction</p>
                    <p><strong className="text-foreground">Not-Self Theme:</strong> Frustration</p>
                    <p className="mt-4">Generators have a defined Sacral center and make up about 37% of the population. They are the life force of the planet.</p>
                  </>
                )}
                {selectedType === "Manifesting Generator" && (
                  <>
                    <p><strong className="text-foreground">Strategy:</strong> Wait to respond, then inform</p>
                    <p><strong className="text-foreground">Signature:</strong> Satisfaction</p>
                    <p><strong className="text-foreground">Not-Self Theme:</strong> Frustration and Anger</p>
                    <p className="mt-4">Manifesting Generators have both Sacral definition and a motor connected to the Throat. They make up about 33% of the population.</p>
                  </>
                )}
                {selectedType === "Manifestor" && (
                  <>
                    <p><strong className="text-foreground">Strategy:</strong> Inform before acting</p>
                    <p><strong className="text-foreground">Signature:</strong> Peace</p>
                    <p><strong className="text-foreground">Not-Self Theme:</strong> Anger</p>
                    <p className="mt-4">Manifestors have a motor connected to the Throat but no Sacral definition. They make up about 9% of the population.</p>
                  </>
                )}
                {selectedType === "Projector" && (
                  <>
                    <p><strong className="text-foreground">Strategy:</strong> Wait for the invitation</p>
                    <p><strong className="text-foreground">Signature:</strong> Success</p>
                    <p><strong className="text-foreground">Not-Self Theme:</strong> Bitterness</p>
                    <p className="mt-4">Projectors have no Sacral definition and no motor to Throat. They make up about 20% of the population and are here to guide.</p>
                  </>
                )}
                {selectedType === "Reflector" && (
                  <>
                    <p><strong className="text-foreground">Strategy:</strong> Wait a lunar cycle</p>
                    <p><strong className="text-foreground">Signature:</strong> Surprise</p>
                    <p><strong className="text-foreground">Not-Self Theme:</strong> Disappointment</p>
                    <p className="mt-4">Reflectors have no defined centers at all. They make up about 1% of the population and are mirrors of their environment.</p>
                  </>
                )}
              </div>
            </div>

            {/* Centers Legend */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="mb-4 font-semibold">9 Energy Centers</h4>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {centers.map((center) => (
                  <div
                    key={center.id}
                    className={cn(
                      "flex items-center gap-2 rounded-md p-2 transition-colors",
                      hoveredCenter === center.id && "bg-muted"
                    )}
                    onMouseEnter={() => setHoveredCenter(center.id)}
                    onMouseLeave={() => setHoveredCenter(null)}
                  >
                    <div
                      className={cn(
                        "h-3 w-3 rounded-sm",
                        definedCenters.has(center.id)
                          ? center.color === "yellow"
                            ? "bg-yellow-400"
                            : center.color === "green"
                            ? "bg-green-500"
                            : center.color === "red"
                            ? "bg-red-500"
                            : "bg-amber-600"
                          : "bg-muted"
                      )}
                    />
                    <span className={definedCenters.has(center.id) ? "text-foreground" : "text-muted-foreground"}>
                      {center.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bodygraph Visualization */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm">
              <svg viewBox="0 0 100 120" className="h-full w-full">
                {/* Channels/Lines */}
                {channels.map((channel, index) => {
                  const fromCenter = centers.find((c) => c.id === channel.from)!
                  const toCenter = centers.find((c) => c.id === channel.to)!
                  const isDefined = isChannelDefined(channel.gates)

                  return (
                    <line
                      key={index}
                      x1={fromCenter.x}
                      y1={fromCenter.y + 5}
                      x2={toCenter.x}
                      y2={toCenter.y}
                      stroke={isDefined ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                      strokeWidth={isDefined ? 2 : 1}
                      opacity={isDefined ? 1 : 0.3}
                    />
                  )
                })}

                {/* Centers */}
                {centers.map((center) => {
                  const isHovered = hoveredCenter === center.id
                  const isDefined = definedCenters.has(center.id)

                  return (
                    <g key={center.id}>
                      {/* Different shapes for different centers */}
                      {center.id === "head" && (
                        <polygon
                          points={`${center.x},${center.y} ${center.x - 8},${center.y + 10} ${center.x + 8},${center.y + 10}`}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                          transform={`rotate(0 ${center.x} ${center.y + 5})`}
                        />
                      )}
                      {center.id === "ajna" && (
                        <polygon
                          points={`${center.x},${center.y + 10} ${center.x - 8},${center.y} ${center.x + 8},${center.y}`}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "throat" && (
                        <rect
                          x={center.x - 7}
                          y={center.y}
                          width={14}
                          height={10}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "g" && (
                        <polygon
                          points={`${center.x},${center.y - 6} ${center.x + 8},${center.y} ${center.x},${center.y + 6} ${center.x - 8},${center.y}`}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "ego" && (
                        <polygon
                          points={`${center.x},${center.y - 5} ${center.x + 6},${center.y + 4} ${center.x - 6},${center.y + 4}`}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "spleen" && (
                        <polygon
                          points={`${center.x},${center.y - 5} ${center.x + 6},${center.y + 4} ${center.x - 6},${center.y + 4}`}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "solar" && (
                        <polygon
                          points={`${center.x},${center.y + 5} ${center.x + 6},${center.y - 4} ${center.x - 6},${center.y - 4}`}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "sacral" && (
                        <rect
                          x={center.x - 7}
                          y={center.y - 5}
                          width={14}
                          height={10}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}
                      {center.id === "root" && (
                        <rect
                          x={center.x - 7}
                          y={center.y - 5}
                          width={14}
                          height={10}
                          className={cn(
                            getCenterColor(center.id, center.color),
                            "stroke-border transition-all",
                            isHovered && "scale-110 origin-center"
                          )}
                          strokeWidth={1}
                        />
                      )}

                      {/* Center labels */}
                      <text
                        x={center.x}
                        y={center.y + (center.id === "head" ? 18 : center.id === "ajna" ? -5 : 18)}
                        textAnchor="middle"
                        className="fill-muted-foreground text-[3px]"
                      >
                        {center.name}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
