"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { UserRound } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Publications', href: '/publications' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'Project', href: '/project' },
  { name: 'Resume', href: '/resume' },
  { name: 'Languages', href: '/languages' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Add a fixed header background for mobile */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-blue-600 z-10 md:hidden" />

      {/* Persistent image container - always visible on mobile */}
      <div className="fixed top-4 left-4 z-20 md:hidden">
        {/* <Image
          src="/placeholder.svg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        /> */}
         <UserRound className="w-10 h-10 text-white rounded-full p-2" />
      </div>

      {/* Toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-20 md:hidden p-2 rounded-md"
      >
        <svg 
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar - Updated overflow and padding */}
      <div className={`
        fixed top-0 left-0 z-10
        w-64 bg-blue-600 text-white h-screen
        transform transition-transform duration-200 ease-in-out
        md:translate-x-0 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="min-h-full p-4 pt-20 md:pt-4">
          <div className="hidden md:flex items-center justify-center mb-8">
            {/* <Image
              src="/placeholder.svg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full"
            /> */}
            <UserRound className="w-16 h-16 text-white bg-blue-600 rounded-full p-2" />
          </div>
          <div className="text-center mb-8">
            <h2 className="font-bold">Name</h2>
            <p className="text-sm">Ph.D. | Position | Industry Cities</p>
          </div>
          <nav className="space-y-1 pb-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-center"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

