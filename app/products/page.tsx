"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { getAllProducts } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"

export default function ProductsPage() {
  const { language } = useLanguage()
  const allProducts = getAllProducts(language)

  const pageTitle = language === "en" ? "All Products" : "ផលិតផលទាំងអស់"

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <div className="relative mb-8 h-64 w-full">
          <Image
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop"
            alt="Products banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <h1 className="font-serif text-4xl font-semibold text-white">{pageTitle}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <ProductFilters />
            </div>
            <div className="md:col-span-3">
              <ProductGrid products={allProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
