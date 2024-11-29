import Link from 'next/link'
import Image from 'next/image'

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
  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen">
      <div className="p-4">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/placeholder.svg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="text-center mb-8">
          <h2 className="font-bold">Name</h2>
          <p className="text-sm">Ph.D. | Position | Industry Cities</p>
        </div>
        <nav className="space-y-1">
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
  )
}

