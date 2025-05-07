"use client"

import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/types"
import { useLanguage } from "@/lib/language-context"

export function ProductGrid({ products }: { products: Product[] }) {
  const { language } = useLanguage()

  const sortByText = language === "en" ? "Sort by:" : "តម្រៀបតាម:"
  const featuredText = language === "en" ? "Featured" : "ពិសេស"
  const newestText = language === "en" ? "Newest" : "ថ្មីបំផុត"
  const priceLowText = language === "en" ? "Price: Low to High" : "តម្លៃ៖ ពីទាបទៅខ្ពស់"
  const priceHighText = language === "en" ? "Price: High to Low" : "តម្លៃ៖ ពីខ្ពស់ទៅទាប"
  const showingText = language === "en" ? "Showing" : "បង្ហាញ"
  const productsText = language === "en" ? "products" : "ផលិតផល"

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {showingText} {products.length} {productsText}
        </div>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-gray-700">
            {sortByText}
          </label>
          <select
            id="sort"
            className="rounded-md border-gray-300 text-sm focus:border-pink-500 focus:ring-pink-500"
            defaultValue="featured"
          >
            <option value="featured">{featuredText}</option>
            <option value="newest">{newestText}</option>
            <option value="price-low">{priceLowText}</option>
            <option value="price-high">{priceHighText}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
