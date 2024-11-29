"use client"
import Link from 'next/link'
import { useState } from 'react'
import { UserRound } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Header from './Header'

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
  const pathname = usePathname()

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`
        fixed top-0 left-0 z-10
        w-64 bg-blue-600 text-white h-screen
        transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 overflow-y-auto 
        lg:[&::-webkit-scrollbar]:hidden lg:scrollbar-hide
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="min-h-full p-4 pt-20 lg:pt-4">
          <div className="hidden lg:flex items-center justify-center mb-8">
            <UserRound className="w-16 h-16 text-white bg-blue-600 rounded-full p-2" />
          </div>
          <div className="text-center my-8">
            <h2 className="font-bold">Name</h2>
            <p className="text-sm">Ph.D. | Position | Industry Cities</p>
          </div>
          <nav className="space-y-1 pb-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-center
                  ${pathname === item.href ? 'bg-yellow-400 text-blue-900' : ''}`}
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

