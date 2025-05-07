"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-pink-500 dark:text-pink-400">Elegant</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden items-center space-x-4 md:flex">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block py-2 text-base font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 text-base font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block py-2 text-base font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-base font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
