import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Building2, Microscope } from "lucide-react"

const locations = [
  {
    region: "Asia Pacific",
    description: "Headquarters and primary R&D facilities, focusing on drone technology and defense systems.",
    icon: MapPin,
    facilities: [
      "Main R&D Center",
      "Drone Manufacturing",
      "Defense Research",
      "Space Tech Hub"
    ]
  },
  {
    region: "North America",
    description: "Advanced aerospace research and commercial partnerships hub.",
    icon: Building2,
    facilities: [
      "Aerospace Center",
      "Innovation Lab",
      "Partner Network",
      "Testing Facility"
    ]
  },
  {
    region: "Europe",
    description: "Space technology development and international collaboration center.",
    icon: Microscope,
    facilities: [
      "Space Research",
      "Satellite Systems",
      "Propulsion Lab",
      "Design Studio"
    ]
  },
  {
    region: "Global Network",
    description: "Worldwide partner ecosystem and talent development initiatives.",
    icon: Users,
    facilities: [
      "Research Partners",
      "Training Centers",
      "Tech Incubators",
      "Innovation Hubs"
    ]
  }
]

export function GlobalPresence() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Global Presence</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Worldwide Innovation Network
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Our strategic presence across the globe enables us to leverage diverse talent pools and
          foster international collaboration.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
        {locations.map((location) => (
          <Card key={location.region}>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3">
                <location.icon className="h-6 w-6 text-primary" />
                {location.region}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{location.description}</CardDescription>
              <div className="grid grid-cols-2 gap-2">
                {location.facilities.map((facility) => (
                  <span
                    key={facility}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
                  >
                    {facility}
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