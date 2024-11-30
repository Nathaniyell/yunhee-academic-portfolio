import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Header from '@/components/Header';
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
          <Header />
          <main className="flex-1 mt-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

