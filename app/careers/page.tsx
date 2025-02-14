"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const jobs = [
  {
    title: "Senior Aerospace Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    department: "R&D",
    description: "Lead the development of next-generation propulsion systems and aerodynamic designs.",
    requirements: [
      "10+ years of aerospace engineering experience",
      "Masters or PhD in Aerospace Engineering",
      "Experience with computational fluid dynamics",
      "Strong leadership skills"
    ]
  },
  {
    title: "Drone Systems Architect",
    location: "Delhi, India",
    type: "Full-time",
    department: "Drone Division",
    description: "Design and develop autonomous drone systems for commercial and defense applications.",
    requirements: [
      "8+ years of drone systems experience",
      "Expertise in flight control systems",
      "Strong background in robotics",
      "Experience with AI/ML"
    ]
  },
  {
    title: "Space Technology Researcher",
    location: "Mumbai, India",
    type: "Full-time",
    department: "Space Division",
    description: "Research and develop innovative solutions for space exploration and satellite systems.",
    requirements: [
      "PhD in relevant field",
      "Experience with satellite systems",
      "Published research papers",
      "Strong analytical skills"
    ]
  }
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const handleApply = (jobIndex: number) => {
    toast.success("Application submitted successfully! Our team will contact you soon.")
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Join Our Mission</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Help us shape the future of aerospace technology and space exploration.
          </p>
        </div>

        <div className="mt-16 grid gap-8">
          {jobs.map((job, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{job.title}</CardTitle>
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                  >
                    {selectedJob === index ? "Close" : "View Details"}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>{job.department}</span>
                  </div>
                </div>
              </CardHeader>
              {selectedJob === index && (
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Description</h3>
                      <p className="mt-1 text-muted-foreground">{job.description}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Requirements</h3>
                      <ul className="mt-1 list-disc list-inside text-muted-foreground">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full sm:w-auto"
                      onClick={() => handleApply(index)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}