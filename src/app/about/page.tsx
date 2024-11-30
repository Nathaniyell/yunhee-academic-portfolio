'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, BookOpen, Newspaper, PenTool } from 'lucide-react'
import aboutImg from "@/public/images/about2.jpg"
import { publications, news, blogArticles } from '@/lib/data'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-12 relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={aboutImg}
            alt="Professor Yunhee Lee"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <motion.h1
            className="absolute bottom-8 left-8 text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            About Me
          </motion.h1>
        </motion.div>

        <div className="space-y-12">
          <AboutSection />
          <ResearchFocus />
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="publications"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
              >
                Publications
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
              >
                News
              </TabsTrigger>
              <TabsTrigger
                value="blog"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
              >
                Blog
              </TabsTrigger>
            </TabsList>
            <TabsContent value="publications">
              <PublicationsSection />
            </TabsContent>
            <TabsContent value="news">
              <NewsSection />
            </TabsContent>
            <TabsContent value="blog">
              <BlogSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <motion.section {...fadeInUp}>
      <Card>
        <CardContent className="p-6">
          <p className="text-lg text-slate-500">
            As a Ph.D. Assistant Research Professor in the Department of ... at the ... University,
            I am dedicated to bridging the gap between academic research and real-world applications
            in urban planning and sustainability.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Academic Background</h2>
          <p className="text-lg text-slate-500 mt-4">
            With a Ph.D. in ..., my research journey has been focused on developing innovative
            solutions for urban challenges through the application of data analytics and machine
            learning technologies.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Current Projects</h2>
          <p className="text-lg text-slate-500 mt-4">
            I am currently leading several research initiatives that focus on sustainable urban
            development and the implementation of smart city solutions. These projects aim to
            create more livable, efficient, and environmentally conscious urban spaces.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Teaching & Mentorship</h2>
          <p className="text-lg text-slate-500 mt-4">
            Beyond research, I am passionate about nurturing the next generation of urban planners
            and researchers. I regularly supervise graduate students and teach courses in urban
            planning, sustainability, and data analytics.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  )
}

function ResearchFocus() {
  const focusAreas = [
    { title: "Urban Planning & Development", icon: <ChevronRight className="h-5 w-5" /> },
    { title: "Environmental Sustainability", icon: <ChevronRight className="h-5 w-5" /> },
    { title: "Smart City Technologies", icon: <ChevronRight className="h-5 w-5" /> },
    { title: "Data Analytics in Urban Systems", icon: <ChevronRight className="h-5 w-5" /> },
  ]

  return (
    <motion.section {...fadeInUp}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-600">Research Focus</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2 text-lg text-slate-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {area.icon}
                <span>{area.title}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.section>
  )
}

function PublicationsSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  {pub.title}
                </h3>
                <p className="text-slate-500 mt-2">{pub.description}</p>
                <Button asChild variant="link" className="mt-2 p-0">
                  <a href={pub.link}>Read Publication</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  )
}

function NewsSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <Newspaper className="h-5 w-5 mr-2 text-blue-600" />
                  {item.title}
                </h3>
                <p className="text-slate-500 mt-2">{item.description}</p>
                <Button asChild variant="link" className="mt-2 p-0">
                  <a href={item.link}>Read More</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  )
}

function BlogSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {blogArticles.slice(0, 4).map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <PenTool className="h-5 w-5 mr-2 text-blue-600" />
                  {article.title}
                </h3>
                <p className="text-slate-500 mt-2">{article.tldr}</p>
                <Button asChild variant="link" className="mt-2 p-0">
                  <a href={article.link}>Read Article</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center pt-4"
        >
          <Button asChild variant="link" className="mt-2 text-blue-600">
            <a href="/blog">View More Articles</a>
          </Button>
        </motion.div>
      </div>
    </ScrollArea>
  )
}

