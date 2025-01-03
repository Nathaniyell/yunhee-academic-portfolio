import { email, googleScholarProfileLink, name  } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center bg-blue-600 text-white h-full p-4 flex justify-center flex-col md:flex-row gap-4">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      <Link target="_blank" className="underline" href={`mailto:${email}`}>
        {email}
      </Link>
      <Link target="_blank" className="underline" href={googleScholarProfileLink}>
        Google scholar
      </Link>
    </footer>
  )
}

export default Footer