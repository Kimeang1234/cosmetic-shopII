import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop"
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <h1 className="font-serif text-5xl font-semibold text-white">About Elegant Cosmetics</h1>
          </div>
        </div>

        {/* Our Story */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-gray-900">Our Story</h2>
              <p className="mb-4 text-lg text-gray-600">
                Founded in 2010, Elegant Cosmetics began with a simple mission: to create premium beauty products that
                enhance natural beauty without compromising on quality or ethics.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Our founder, Jane Smith, started mixing her own cosmetics in her kitchen after becoming frustrated with
                the harsh chemicals found in mainstream beauty products. What began as a personal quest quickly evolved
                into a beloved brand known for its gentle formulations and stunning results.
              </p>
              <p className="text-lg text-gray-600">
                Today, Elegant Cosmetics is proud to offer a full range of skincare, makeup, and fragrance products that
                are cruelty-free, largely vegan, and made with carefully sourced ingredients. We remain committed to our
                founding principles of quality, transparency, and ethical beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-pink-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-gray-900">Our Values</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-pink-100 p-6">
                  <Image
                    src="https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=300&auto=format&fit=crop"
                    alt="Quality"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our ingredients or formulations. Each product is meticulously
                  crafted and tested to ensure it meets our high standards.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-pink-100 p-6">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=300&auto=format&fit=crop"
                    alt="Sustainability"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental footprint through sustainable sourcing, eco-friendly
                  packaging, and responsible manufacturing practices.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-pink-100 p-6">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=300&auto=format&fit=crop"
                    alt="Inclusivity"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">Inclusivity</h3>
                <p className="text-gray-600">
                  Beauty comes in all forms. We create products for all skin types, tones, and concerns, celebrating the
                  diversity of beauty in all its forms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-gray-900">Meet Our Team</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                    <Image
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?q=80&w=300&auto=format&fit=crop`}
                      alt={`Team Member ${i}`}
                      width={256}
                      height={256}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 font-serif text-xl font-semibold text-gray-900">Jane Doe</h3>
                  <p className="mb-2 text-pink-500">Founder & CEO</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
