"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "ភាសាខ្មែរ" : "English"}</span>
    </Button>
  )
}
