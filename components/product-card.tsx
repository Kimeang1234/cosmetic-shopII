import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/types"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md dark:bg-gray-800">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute right-2 top-2 rounded-full bg-pink-500 px-2 py-1 text-xs font-medium text-white">
              New
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.shortDescription}</p>
          <p className="mt-2 font-medium text-pink-500 dark:text-pink-400">${product.price.toFixed(2)}</p>
        </CardContent>
      </Link>
    </Card>
  )
}
