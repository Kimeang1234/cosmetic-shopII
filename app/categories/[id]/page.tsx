"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { getAllProducts, categories } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()

  // Get categories and products for the current language
  const currentCategories = categories[language]
  const allProducts = getAllProducts(language)

  // Find the category by ID
  const category = currentCategories.find((c) => c.id === params.id) || currentCategories[0]

  // Filter products by category
  const categoryProducts = allProducts.filter((p) => p.category === category.id)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <div className="relative mb-8 h-64 w-full">
          <Image
            src={category.image || "/placeholder.svg?height=400&width=1200"}
            alt={category.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <h1 className="font-serif text-4xl font-semibold text-white">{category.name}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <ProductFilters />
            </div>
            <div className="md:col-span-3">
              <ProductGrid products={categoryProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
