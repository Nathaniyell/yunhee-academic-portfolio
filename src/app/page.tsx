import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">WELCOME TO MY PORTFOLIO</h1>
        <p className="text-lg mb-4">
          Hello! I&apos;m <span className="font-semibold">Yunhee Lee</span>, a{' '}
          <span className="italic">Ph.D. Assistant Research Professor</span> in{' '}
          <span className="font-semibold">Department</span> at the University .....
        </p>
        <p className="text-lg mb-8">
          From optimizing{' '}
          <span className="font-semibold">
            data analytics, machine learning,
          </span>{' '}
          and <span className="font-semibold">urban planning</span> to bridge the
          gap between research and impactful real-world applications.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Research Interests & Expertise
        </h2>
        <div className="border-t-4 border-yellow-400 w-48 mb-4"></div>
        <ul className="list-disc list-inside space-y-2">
          <li>Interest 1</li>
          <li>Interest 2</li>
          <li>Interest 3</li>
          <li>Interest 4</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Recognitions & Achievements
        </h2>
        <div className="border-t-4 border-yellow-400 w-48 mb-4"></div>
        <div className="border-l-4 border-blue-600 pl-4">
          <p>I am honored to have received several awards, I......</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Connect with Me
        </h2>
        <div className="border-t-4 border-yellow-400 w-48 mb-4"></div>
        <p>
          Let&apos;s build the cities of tomorrow! Reach out via my{' '}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact page
          </Link>{' '}
          or connect on{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            LinkedIn
          </Link>
          .
        </p>
      </section>
    </div>
  )
}

