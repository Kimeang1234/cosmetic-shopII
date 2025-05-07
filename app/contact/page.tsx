import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center font-serif text-4xl font-semibold text-gray-900">Contact Us</h1>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">Send Message</Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="mr-4 h-6 w-6 text-pink-500" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">info@elegantcosmetics.com</p>
                        <p className="text-gray-600">support@elegantcosmetics.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-4 h-6 w-6 text-pink-500" />
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="mr-4 h-6 w-6 text-pink-500" />
                      <div>
                        <h3 className="font-medium text-gray-900">Address</h3>
                        <p className="text-gray-600">123 Beauty Lane</p>
                        <p className="text-gray-600">New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-900">Business Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">Monday - Friday:</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">Saturday:</span>
                      <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">Sunday:</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
