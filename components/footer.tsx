import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="font-mono text-sm font-bold text-primary-foreground">
                HD
              </span>
            </div>
            <span className="font-semibold">HDKit</span>
          </div>

          <p className="text-sm text-muted-foreground">
            MIT License. Copyright (c) 2016-2025 Jonah Dempcy
          </p>

          <Link
            href="https://github.com/jdempcy/hdkit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}
