import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Sidebar from '@/components/Sidebar'; 

export const metadata: Metadata = {
  title: 'Academic Portfolio',
  description: 'Academic portfolio showcasing research, teaching, and achievements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

