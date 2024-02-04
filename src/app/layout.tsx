import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn NextJS',
  description: 'with TypeScript!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-indigo-500">
        <NavBar/>
        <main style={{minHeight: "67vh"}}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
