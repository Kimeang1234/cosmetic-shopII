"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { getAllProducts } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()

  // Get all products for the current language
  const products = getAllProducts(language)

  // Find the product by ID
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Product Gallery */}
            <div>
              <ProductGallery product={product} />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="font-serif text-3xl font-semibold text-gray-900">{product.name}</h1>
              <div className="mt-2 text-2xl font-medium text-pink-500">${product.price.toFixed(2)}</div>

              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">{language === "en" ? "Description" : "ការពិពណ៌នា"}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>

              {product.shades && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{language === "en" ? "Shades" : "ពណ៌"}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.shades.map((shade) => (
                      <div key={shade.name} className="flex flex-col items-center">
                        <div
                          className="h-8 w-8 rounded-full border border-gray-200"
                          style={{ backgroundColor: shade.color }}
                          title={shade.name}
                        />
                        <span className="mt-1 text-xs text-gray-600">{shade.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Button className="w-full bg-pink-500 text-white hover:bg-pink-600" size="lg" asChild>
                  <Link href="https://example.com/product-purchase-link">
                    {language === "en" ? "Learn More & Purchase" : "ស្វែងយល់បន្ថែម និងទិញ"}
                  </Link>
                </Button>
              </div>

              <div className="mt-6 rounded-lg bg-pink-50 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {language === "en" ? "Product Details" : "ព័ត៌មានលម្អិតអំពីផលិតផល"}
                </h3>
                <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                  <li>{language === "en" ? "Cruelty-free and vegan" : "មិនធ្វើការពិសោធន៍លើសត្វ និងជាផលិតផលវេហ្គេន"}</li>
                  <li>{language === "en" ? "Paraben-free formula" : "រូបមន្តគ្មាន Paraben"}</li>
                  <li>{language === "en" ? "Dermatologically tested" : "បានធ្វើតេស្តដោយអ្នកជំនាញស្បែក"}</li>
                  <li>{language === "en" ? "Made in small batches for quality" : "ផលិតក្នុងបរិមាណតិចដើម្បីគុណភាពខ្ពស់"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
