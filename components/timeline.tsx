import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const milestones = [
  {
    phase: "Phase 1: Foundation",
    timeframe: "Years 0-3",
    objectives: [
      "Establish R&D centers",
      "Launch drone delivery pilots",
      "Secure initial partnerships",
      "Build core team",
    ],
  },
  {
    phase: "Phase 2: Expansion",
    timeframe: "Years 3-7",
    objectives: [
      "Scale manufacturing",
      "Launch defense programs",
      "Begin space tech development",
      "Expand global presence",
    ],
  },
  {
    phase: "Phase 3: Leadership",
    timeframe: "Years 7+",
    objectives: [
      "Global market dominance",
      "Advanced space missions",
      "Integrated defense systems",
      "Industry standard-setting",
    ],
  },
]

export function Timeline() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Growth Roadmap</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Our Path to Global Leadership
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A strategic, phased approach to achieving our vision of becoming a universal leader
          in aerospace, defense, and space technology.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        {milestones.map((milestone) => (
          <Card key={milestone.phase} className="relative overflow-hidden">
            <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500" />
            <CardHeader>
              <CardTitle>{milestone.phase}</CardTitle>
              <CardDescription className="text-primary font-semibold">
                {milestone.timeframe}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {milestone.objectives.map((objective) => (
                  <li key={objective} className="flex items-center gap-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}