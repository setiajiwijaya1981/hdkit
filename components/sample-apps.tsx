import { ExternalLink } from "lucide-react"

const sampleApps = [
  {
    name: "hdblacklist-client",
    language: "JavaScript, React",
    description: "Minimal front end for a React-on-Rails app with bodygraph rendering",
    path: "sample-apps/hdblacklist-client",
  },
  {
    name: "hdkit_sample_app",
    language: "Ruby on Rails",
    description: "Complete demo for generating bodygraphs with SVG graphics",
    path: "sample-apps/hdkit_sample_app",
  },
  {
    name: "pdf-maker",
    language: "JavaScript, Node, React",
    description: "Server and client for generating PDF Human Design reports",
    path: "sample-apps/pdf-maker",
  },
  {
    name: "rave-mandala",
    language: "HTML (SVG), JavaScript",
    description: "Programmatically generating an SVG Rave Mandala wheel",
    path: "sample-apps/rave-mandala",
  },
  {
    name: "v1",
    language: "JavaScript",
    description: "Utility methods for bodygraph calculation and data processing",
    path: "sample-apps/v1",
  },
]

export function SampleApps() {
  return (
    <section id="sample-apps" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sample Applications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore working examples in multiple frameworks to jumpstart your
            development.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Application
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Language/Framework
                  </th>
                  <th className="hidden px-6 py-4 text-left text-sm font-semibold sm:table-cell">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleApps.map((app, index) => (
                  <tr
                    key={app.name}
                    className={index !== sampleApps.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="px-6 py-4">
                      <a
                        href={`https://github.com/jdempcy/hdkit/tree/main/${app.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
                      >
                        {app.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {app.language}
                    </td>
                    <td className="hidden px-6 py-4 text-sm text-muted-foreground sm:table-cell">
                      {app.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
