import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/sonner"
import { ExitModal } from "@/components/modals/exit-modal"
import { HeartsModal } from "@/components/modals/hearts-modal"
import { PracticeModal } from "@/components/modals/practice-modal"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kichirmichir",
  description: "🦜 An Interactive, Duolingo-Inspired Language Learning Application",
  icons: "/logo.png"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
