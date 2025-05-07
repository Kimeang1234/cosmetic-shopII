"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/language-context"

export function ProductFilters() {
  const { language } = useLanguage()
  const [priceRange, setPriceRange] = useState([0, 100])

  const categoriesText = language === "en" ? "Categories" : "ប្រភេទ"
  const skincareText = language === "en" ? "Skincare" : "ផលិតភัณฑ์ថែរក្សាស្បែក"
  const makeupText = language === "en" ? "Makeup" : "គ្រឿងសម្អាង"
  const fragranceText = language === "en" ? "Fragrance" : "ទឹកអប់"
  const haircareText = language === "en" ? "Haircare" : "ផលិតផលថែរក្សាសក់"
  const priceRangeText = language === "en" ? "Price Range" : "ចន្លោះតម្លៃ"
  const brandText = language === "en" ? "Brand" : "ម៉ាក"
  const elegantText = language === "en" ? "Elegant" : "Elegant"
  const naturalsText = language === "en" ? "Naturals" : "Naturals"
  const luxeText = language === "en" ? "Luxe" : "Luxe"
  const glowText = language === "en" ? "Glow" : "Glow"

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-medium text-gray-900">{categoriesText}</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="skincare" />
            <Label htmlFor="skincare" className="text-sm font-normal">
              {skincareText}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="makeup" />
            <Label htmlFor="makeup" className="text-sm font-normal">
              {makeupText}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="fragrance" />
            <Label htmlFor="fragrance" className="text-sm font-normal">
              {fragranceText}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="haircare" />
            <Label htmlFor="haircare" className="text-sm font-normal">
              {haircareText}
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium text-gray-900">{priceRangeText}</h3>
        <Slider
          defaultValue={[0, 100]}
          max={100}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="py-4"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">${priceRange[0]}</span>
          <span className="text-sm text-gray-500">${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium text-gray-900">{brandText}</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="elegant" />
            <Label htmlFor="elegant" className="text-sm font-normal">
              {elegantText}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="naturals" />
            <Label htmlFor="naturals" className="text-sm font-normal">
              {naturalsText}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="luxe" />
            <Label htmlFor="luxe" className="text-sm font-normal">
              {luxeText}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="glow" />
            <Label htmlFor="glow" className="text-sm font-normal">
              {glowText}
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}
