import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center bg-blue-600 text-white h-full p-4 flex justify-center flex-col gap-4">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <Link target="_blank" className="underline" href="mailto:example@mail.com">
        example@mail.com
      </Link>
      <Link target="_blank" className="underline" href="https://scholar.google.com/citations?user=example&hl=en">
        Google scholar
      </Link>
    </footer>
  )
}

export default Footer