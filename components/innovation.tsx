import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Brain, Factory, Network } from "lucide-react"

const innovationAreas = [
  {
    title: "R&D Excellence",
    description: "Our global network of research centers drives continuous innovation across all divisions, from drone technology to space exploration.",
    icon: Lightbulb,
    initiatives: [
      "Advanced Materials Research",
      "Propulsion Systems",
      "AI & Autonomy",
      "Space Technologies"
    ]
  },
  {
    title: "AI & Automation",
    description: "Leveraging artificial intelligence and machine learning to enhance navigation, optimize performance, and ensure safety across our platforms.",
    icon: Brain,
    initiatives: [
      "Neural Networks",
      "Autonomous Systems",
      "Predictive Analytics",
      "Safety Protocols"
    ]
  },
  {
    title: "Smart Manufacturing",
    description: "State-of-the-art automated factories equipped with advanced robotics and AI-driven quality control systems.",
    icon: Factory,
    initiatives: [
      "Automated Production",
      "Quality Assurance",
      "Supply Chain Innovation",
      "Sustainable Manufacturing"
    ]
  },
  {
    title: "Global Collaboration",
    description: "Building strong partnerships with governments, research institutions, and industry leaders to accelerate innovation.",
    icon: Network,
    initiatives: [
      "International Partnerships",
      "Academic Collaboration",
      "Industry Alliances",
      "Technology Exchange"
    ]
  }
]

export function Innovation() {
  return (
    <section className="container py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Innovation Hub</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Driving Technological Advancement
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Our commitment to innovation spans multiple disciplines, ensuring we remain at the forefront
          of aerospace and space technology.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
        {innovationAreas.map((area) => (
          <Card key={area.title} className="border-2 transition-colors hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3">
                <area.icon className="h-6 w-6 text-primary" />
                {area.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{area.description}</CardDescription>
              <div className="grid grid-cols-2 gap-2">
                {area.initiatives.map((initiative) => (
                  <span
                    key={initiative}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
                  >
                    {initiative}
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