"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

// Gate data from the constants.js file
const gates = [
  { number: 1, name: "The Creative", gateOf: "Self-Expression", hexagram: "䷀" },
  { number: 2, name: "The Receptive", gateOf: "Direction of Self", hexagram: "䷁" },
  { number: 3, name: "Difficulties at the Beginning", gateOf: "Ordering", hexagram: "䷂" },
  { number: 4, name: "Youthful Folly", gateOf: "Formulization", hexagram: "䷃" },
  { number: 5, name: "Waiting", gateOf: "Fixed Rhythms", hexagram: "䷄" },
  { number: 6, name: "Conflict", gateOf: "Friction", hexagram: "䷅" },
  { number: 7, name: "The Army", gateOf: "Role of the Self in Interaction", hexagram: "䷆" },
  { number: 8, name: "Holding Together", gateOf: "Contribution", hexagram: "䷇" },
  { number: 9, name: "The Taming Power of the Small", gateOf: "Focus", hexagram: "䷈" },
  { number: 10, name: "Treading", gateOf: "Behavior of the Self", hexagram: "䷉" },
  { number: 11, name: "Peace", gateOf: "Ideas", hexagram: "䷊" },
  { number: 12, name: "Standstill", gateOf: "Caution", hexagram: "䷋" },
  { number: 13, name: "The Fellowship of Man", gateOf: "the Listener", hexagram: "䷌" },
  { number: 14, name: "Possession in Great Measure", gateOf: "Power Skills", hexagram: "䷍" },
  { number: 15, name: "Modesty", gateOf: "Extremes", hexagram: "䷎" },
  { number: 16, name: "Enthusiasm", gateOf: "Skills", hexagram: "䷏" },
  { number: 17, name: "Following", gateOf: "Opinions", hexagram: "䷐" },
  { number: 18, name: "Work on What Has Been Spoilt", gateOf: "Correction", hexagram: "䷑" },
  { number: 19, name: "Approach", gateOf: "Wanting", hexagram: "䷒" },
  { number: 20, name: "Contemplation", gateOf: "the Now", hexagram: "䷓" },
  { number: 21, name: "Biting Through", gateOf: "the Hunter/Huntress", hexagram: "䷔" },
  { number: 22, name: "Grace", gateOf: "Openness", hexagram: "䷕" },
  { number: 23, name: "Splitting Apart", gateOf: "Assimilation", hexagram: "䷖" },
  { number: 24, name: "Returning", gateOf: "Rationalizing", hexagram: "䷗" },
  { number: 25, name: "Innocence", gateOf: "Spirit of Self", hexagram: "䷘" },
  { number: 26, name: "The Taming Power of the Great", gateOf: "the Egotist", hexagram: "䷙" },
  { number: 27, name: "Nourishment", gateOf: "Caring", hexagram: "䷚" },
  { number: 28, name: "Preponderance of the Great", gateOf: "the Game Player", hexagram: "䷛" },
  { number: 29, name: "The Abysmal", gateOf: "Saying Yes", hexagram: "䷜" },
  { number: 30, name: "The Clinging Fire", gateOf: "Recognition of Feelings", hexagram: "䷝" },
  { number: 31, name: "Influence", gateOf: "Leading", hexagram: "䷞" },
  { number: 32, name: "Duration", gateOf: "Continuity", hexagram: "䷟" },
  { number: 33, name: "Retreat", gateOf: "Privacy", hexagram: "䷠" },
  { number: 34, name: "The Power of the Great", gateOf: "Might", hexagram: "䷡" },
  { number: 35, name: "Progress", gateOf: "Change", hexagram: "䷢" },
  { number: 36, name: "Darkening of the Light", gateOf: "Crisis", hexagram: "䷣" },
  { number: 37, name: "The Family", gateOf: "Friendship", hexagram: "䷤" },
  { number: 38, name: "Opposition", gateOf: "Fighter", hexagram: "䷥" },
  { number: 39, name: "Obstruction", gateOf: "the Provocateur", hexagram: "䷦" },
  { number: 40, name: "Deliverance", gateOf: "Aloneness", hexagram: "䷧" },
  { number: 41, name: "Decrease", gateOf: "Contraction", hexagram: "䷨" },
  { number: 42, name: "Increase", gateOf: "Growth", hexagram: "䷩" },
  { number: 43, name: "Breakthrough", gateOf: "Insight", hexagram: "䷪" },
  { number: 44, name: "Coming to Meet", gateOf: "Alertness", hexagram: "䷫" },
  { number: 45, name: "Gathering Together", gateOf: "Gatherer", hexagram: "䷬" },
  { number: 46, name: "Pushing Upward", gateOf: "the Determination of the Self", hexagram: "䷭" },
  { number: 47, name: "Oppression", gateOf: "Realizing", hexagram: "䷮" },
  { number: 48, name: "The Well", gateOf: "Depth", hexagram: "䷯" },
  { number: 49, name: "Revolution", gateOf: "Rejection", hexagram: "䷰" },
  { number: 50, name: "The Cauldron", gateOf: "Values", hexagram: "䷱" },
  { number: 51, name: "The Arousing", gateOf: "Shock", hexagram: "䷲" },
  { number: 52, name: "Keeping Still", gateOf: "Inaction", hexagram: "䷳" },
  { number: 53, name: "Development", gateOf: "Beginnings", hexagram: "䷴" },
  { number: 54, name: "The Marrying Maiden", gateOf: "Ambition", hexagram: "䷵" },
  { number: 55, name: "Abundance", gateOf: "Spirit", hexagram: "䷶" },
  { number: 56, name: "The Wanderer", gateOf: "Stimulation", hexagram: "䷷" },
  { number: 57, name: "The Gentle", gateOf: "Intuition", hexagram: "䷸" },
  { number: 58, name: "The Joyous", gateOf: "Aliveness", hexagram: "䷹" },
  { number: 59, name: "Dispersion", gateOf: "Sexuality", hexagram: "䷺" },
  { number: 60, name: "Limitation", gateOf: "Acceptance", hexagram: "䷻" },
  { number: 61, name: "Inner Truth", gateOf: "Mystery", hexagram: "䷼" },
  { number: 62, name: "Preponderance of the Small", gateOf: "Detail", hexagram: "䷽" },
  { number: 63, name: "After Completion", gateOf: "Doubt", hexagram: "䷾" },
  { number: 64, name: "Before Completion", gateOf: "Confusion", hexagram: "䷿" },
]

export function GatesExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGate, setSelectedGate] = useState<typeof gates[0] | null>(null)

  const filteredGates = gates.filter(
    (gate) =>
      gate.number.toString().includes(searchQuery) ||
      gate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gate.gateOf.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="gates" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the <span className="text-primary">64 Gates</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse all 64 gates with their I Ching hexagrams and Human Design meanings
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by gate number or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Gates Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
              {filteredGates.map((gate) => (
                <button
                  key={gate.number}
                  onClick={() => setSelectedGate(gate)}
                  className={cn(
                    "flex aspect-square flex-col items-center justify-center rounded-md border transition-all hover:scale-105",
                    selectedGate?.number === gate.number
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  )}
                >
                  <span className="text-lg font-mono font-bold">{gate.number}</span>
                  <span className="text-xl opacity-50">{gate.hexagram}</span>
                </button>
              ))}
            </div>
            {filteredGates.length === 0 && (
              <div className="mt-8 text-center text-muted-foreground">
                No gates found matching your search.
              </div>
            )}
          </div>

          {/* Gate Details */}
          <div className="lg:col-span-1">
            {selectedGate ? (
              <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
                    <span className="text-4xl">{selectedGate.hexagram}</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Gate</div>
                    <div className="text-2xl font-bold text-primary">
                      {selectedGate.number}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">{selectedGate.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  The Gate of {selectedGate.gateOf}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-md bg-muted/50 p-4">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      I Ching Hexagram
                    </div>
                    <div className="mt-1 font-mono text-sm">
                      Hexagram {selectedGate.number}: {selectedGate.name}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>
                      This gate represents one of the 64 archetypes in the Human
                      Design system, derived from the I Ching. Each gate has 6
                      lines, creating 384 unique combinations when combined with
                      planetary positions.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-6 text-center lg:h-auto lg:min-h-[300px]">
                <div className="text-muted-foreground">
                  <p className="text-lg font-medium">Select a gate</p>
                  <p className="mt-1 text-sm">
                    Click on any gate to view its details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
