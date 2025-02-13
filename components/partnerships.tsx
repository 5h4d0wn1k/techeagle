import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, GraduationCap, Landmark, Globe2 } from "lucide-react"

const partners = [
  {
    category: "Government Agencies",
    description: "Strategic partnerships with ISRO, Indian Air Force, and global defense organizations.",
    icon: Landmark,
    examples: ["Space Research", "Defense Projects", "Regulatory Compliance"],
  },
  {
    category: "Academic Institutions",
    description: "Collaboration with leading universities and research centers worldwide.",
    icon: GraduationCap,
    examples: ["R&D Programs", "Talent Pipeline", "Innovation Labs"],
  },
  {
    category: "Corporate Alliances",
    description: "Partnerships with e-commerce giants and aerospace industry leaders.",
    icon: Building2,
    examples: ["Drone Delivery", "Manufacturing", "Technology Integration"],
  },
  {
    category: "Global Network",
    description: "International collaborations for space exploration and defense initiatives.",
    icon: Globe2,
    examples: ["Space Programs", "Defense Systems", "Technology Exchange"],
  },
]

export function Partnerships() {
  return (
    <section className="container py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Strategic Partnerships</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Building Strong Alliances
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Our success is built on strong partnerships with government agencies, academic institutions,
          and industry leaders worldwide.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
        {partners.map((partner) => (
          <Card key={partner.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3">
                <partner.icon className="h-6 w-6 text-primary" />
                {partner.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{partner.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {partner.examples.map((example) => (
                  <span
                    key={example}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}