"use client"

import { useState } from "react"
import Image from "next/image"
import type { Product } from "@/lib/types"

export function ProductGallery({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState(product.image)

  // In a real app, product would have multiple images
  const images = [
    product.image,
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599733589046-9f7a7e7a1e10?q=80&w=600&auto=format&fit=crop",
  ]

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image src={mainImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md ${
              mainImage === image ? "ring-2 ring-pink-500" : "ring-1 ring-gray-200"
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image src={image || "/placeholder.svg"} alt={`Product image ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
