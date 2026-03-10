import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { BodygraphDemo } from "@/components/bodygraph"
import { GatesExplorer } from "@/components/gates-explorer"
import { SampleApps } from "@/components/sample-apps"
import { GetStarted } from "@/components/get-started"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BodygraphDemo />
      <GatesExplorer />
      <SampleApps />
      <GetStarted />
      <Footer />
    </main>
  )
}
