import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { NextAuthProvider } from "@/providers/auth"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Discord Auth",
  description: "Autenticação com Discord",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  )
}

