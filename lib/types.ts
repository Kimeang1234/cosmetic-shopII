export interface Product {
  id: string
  name: string
  price: number
  image: string
  shortDescription: string
  description: string
  category: string
  isNew?: boolean
  shades?: {
    name: string
    color: string
  }[]
}

export interface Category {
  id: string
  name: string
  image: string
}

export type Language = "en" | "km"
