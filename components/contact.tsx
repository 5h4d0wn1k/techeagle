import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section className="container px-4 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Contact Us</CardTitle>
            <CardDescription className="text-base sm:text-lg">
              Get in touch to learn more about our solutions and partnership opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Input placeholder="First name" />
                </div>
                <div className="grid gap-2">
                  <Input placeholder="Last name" />
                </div>
              </div>
              <div className="grid gap-2">
                <Input placeholder="Email" type="email" />
              </div>
              <div className="grid gap-2">
                <Textarea placeholder="Your message" className="min-h-[120px]" />
              </div>
              <Button className="w-full sm:w-auto">Send message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}