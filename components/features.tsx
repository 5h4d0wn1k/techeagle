import { Bone as Drone, Plane, Shield, Rocket, Globe, Zap, Satellite, Radar } from "lucide-react"

const features = [
  {
    name: "Advanced Drone Systems",
    description: "Revolutionary drone solutions for e-commerce logistics and emergency services, powered by AI and autonomous navigation.",
    icon: Drone,
  },
  {
    name: "Aerospace Innovation",
    description: "Cutting-edge air mobility solutions and advanced propulsion systems for the next generation of flight.",
    icon: Plane,
  },
  {
    name: "Defense Excellence",
    description: "Supporting armed forces with next-generation fighter jets and integrated defense systems.",
    icon: Shield,
  },
  {
    name: "Space Technology",
    description: "Partnering with ISRO and global space agencies to advance space exploration and satellite technology.",
    icon: Rocket,
  },
  {
    name: "Global Infrastructure",
    description: "Building automated manufacturing facilities and R&D centers for aerospace innovation worldwide.",
    icon: Globe,
  },
  {
    name: "Rapid Innovation",
    description: "Continuous R&D through global hackathons and partnerships with leading research institutions.",
    icon: Zap,
  },
  {
    name: "Satellite Systems",
    description: "Developing advanced satellite technology for communication, navigation, and earth observation.",
    icon: Satellite,
  },
  {
    name: "Defense Systems",
    description: "Creating integrated space and earth defense solutions for global security.",
    icon: Radar,
  },
]

export function Features() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Advanced Technology</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
            Comprehensive Aerospace Solutions
          </p>
          <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
            From revolutionary drone delivery systems to advanced space technology, we're building
            integrated solutions that push the boundaries of what's possible in aerospace.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-muted-foreground">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}