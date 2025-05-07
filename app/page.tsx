"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"
import { categories, featuredProducts, newArrivals } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { language } = useLanguage()
  const currentCategories = categories[language]
  const currentFeaturedProducts = featuredProducts[language]
  const currentNewArrivals = newArrivals[language]

  const heroTitle = language === "en" ? "Discover Your Natural Beauty" : "ស្វែងរកសម្រស់ធម្មជាតិរបស់អ្នក"

  const heroDescription =
    language === "en"
      ? "Premium cosmetics crafted with care for the modern woman. Enhance your natural beauty with our luxurious products."
      : "គ្រឿងសម្អាងគុណភាពខ្ពស់ផលិតដោយយកចិត្តទុកដាក់សម្រាប់ស្ត្រីទំនើប។ បង្កើនសម្រស់ធម្មជាតិរបស់អ្នកជាមួយផលិតផលដ៏ប្រណិតរបស់យើង។"

  const shopNow = language === "en" ? "Shop Now" : "ទិញឥឡូវនេះ"
  const featuredProductsTitle = language === "en" ? "Featured Products" : "ផលិតផលពិសេស"
  const newArrivalsTitle = language === "en" ? "New Arrivals" : "ផលិតផលថ្មីៗ"
  const shopByCategoryTitle = language === "en" ? "Shop by Category" : "ទិញតាមប្រភេទ"
  const exploreText = language === "en" ? "Explore" : "រុករក"
  const ourStoryTitle = language === "en" ? "Our Story" : "រឿងរបស់យើង"
  const ourStoryText =
    language === "en"
      ? "Founded with a passion for natural beauty, Elegant Cosmetics has been creating premium, cruelty-free products since 2010. Our mission is to help every woman feel confident and beautiful in her own skin."
      : "បង្កើតឡើងដោយក្តីស្រឡាញ់ចំពោះសម្រស់ធម្មជាតិ Elegant Cosmetics បានបង្កើតផលិតផលគុណភាពខ្ពស់ មិនធ្វើការពិសោធន៍លើសត្វ តាំងពីឆ្នាំ 2010។ បេសកកម្មរបស់យើងគឺជួយឱ្យស្ត្រីគ្រប់រូបមានអារម្មណ៍ជឿជាក់ និងស្អាតនៅក្នុងស្បែករបស់នាង។"
  const learnMoreText = language === "en" ? "Learn More" : "ស្វែងយល់បន្ថែម"

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/80 to-transparent dark:from-pink-950/50" />
          <div className="container relative mx-auto px-4 py-20 md:py-32">
            <div className="max-w-lg">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{heroDescription}</p>
              <Button
                className="mt-8 bg-pink-500 text-white hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700"
                size="lg"
                asChild
              >
                <Link href="/products">{shopNow}</Link>
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beauty products collection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-gray-900 dark:text-white">
              {featuredProductsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {currentFeaturedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="bg-pink-50 py-16 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-gray-900 dark:text-white">
              {newArrivalsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {currentNewArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="bg-white py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-gray-900 dark:text-white">
              {shopByCategoryTitle}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden dark:bg-gray-800">
                  <div className="relative h-64">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-serif text-2xl font-semibold text-white">{category.name}</h3>
                      <Button
                        variant="outline"
                        className="mt-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                        asChild
                      >
                        <Link href={`/categories/${category.id}`}>{exploreText}</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Snippet */}
        <section className="bg-pink-50 py-16 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-semibold text-gray-900 dark:text-white">{ourStoryTitle}</h2>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">{ourStoryText}</p>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-500"
                asChild
              >
                <Link href="/about">{learnMoreText}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
