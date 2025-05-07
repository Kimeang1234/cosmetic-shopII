"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const shopText = language === "en" ? "Shop" : "ហាង"
  const skincareText = language === "en" ? "Skincare" : "ផលិតភัณฑ์ថែរក្សាស្បែក"
  const makeupText = language === "en" ? "Makeup" : "គ្រឿងសម្អាង"
  const fragranceText = language === "en" ? "Fragrance" : "ទឹកអប់"
  const haircareText = language === "en" ? "Haircare" : "ផលិតផលថែរក្សាសក់"

  const companyText = language === "en" ? "Company" : "ក្រុមហ៊ុន"
  const aboutUsText = language === "en" ? "About Us" : "អំពីយើង"
  const careersText = language === "en" ? "Careers" : "ការងារ"
  const blogText = language === "en" ? "Blog" : "ប្លុក"
  const sustainabilityText = language === "en" ? "Sustainability" : "ចីរភាព"

  const customerServiceText = language === "en" ? "Customer Service" : "សេវាកម្មអតិថិជន"
  const contactUsText = language === "en" ? "Contact Us" : "ទំនាក់ទំនងយើង"
  const faqsText = language === "en" ? "FAQs" : "សំណួរដែលសួរញឹកញាប់"
  const shippingReturnsText = language === "en" ? "Shipping & Returns" : "ការដឹកជញ្ជូន និងការប្រគល់សង"
  const privacyPolicyText = language === "en" ? "Privacy Policy" : "គោលការណ៍ឯកជនភាព"

  const footerDescription =
    language === "en"
      ? "Premium cosmetics crafted with care for the modern woman. Enhance your natural beauty with our luxurious products."
      : "គ្រឿងសម្អាងគុណភាពខ្ពស់ផលិតដោយយកចិត្តទុកដាក់សម្រាប់ស្ត្រីទំនើប។ បង្កើនសម្រស់ធម្មជាតិរបស់អ្នកជាមួយផលិតផលដ៏ប្រណិតរបស់យើង។"

  const copyrightText =
    language === "en"
      ? `© ${new Date().getFullYear()} Elegant Cosmetics. All rights reserved.`
      : `© ${new Date().getFullYear()} Elegant Cosmetics។ រក្សាសិទ្ធិគ្រប់យ៉ាង។`

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">Elegant</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{footerDescription}</p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{shopText}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/categories/skincare"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {skincareText}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/makeup"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {makeupText}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/fragrance"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {fragranceText}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/haircare"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {haircareText}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{companyText}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {aboutUsText}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {careersText}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {blogText}
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {sustainabilityText}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{customerServiceText}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {contactUsText}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {faqsText}
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {shippingReturnsText}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                >
                  {privacyPolicyText}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">{copyrightText}</p>
        </div>
      </div>
    </footer>
  )
}
