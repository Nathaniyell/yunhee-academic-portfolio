import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Sidebar from '@/components/Sidebar'; 
import Footer from '@/components/Footer';


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
        <div className="flex min-h-screen flex-col">
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-8 bg-white mt-16 lg:ml-60">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

