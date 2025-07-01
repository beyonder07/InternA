import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles",
  description:
    "Compassionate therapy for anxiety, relationships, and trauma recovery. Licensed clinical psychologist offering in-person and virtual sessions in Los Angeles, CA.",
  keywords: "clinical psychologist, therapy, anxiety, relationships, trauma, Los Angeles, virtual therapy, EMDR, CBT",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
