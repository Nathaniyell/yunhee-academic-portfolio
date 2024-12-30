'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, BookOpen, PenTool, ArrowRight, Download } from 'lucide-react'
import { publications, blogArticles, theme, animations, LinkToPublications, AboutData, AcademicBackground, LinkToCV, resumeData, heroContent } from '@/lib/data'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
      <div className={`max-w-6xl mx-auto px-4`}>
        <motion.div
          className="mb-12 relative"
          {...animations.fadeIn}
        >
          <div className={`relative h-[500px] ${theme.layout.borderRadius} overflow-hidden ${theme.layout.shadow}`}>
            <Image
              src={heroContent.image}
              alt="Professor Yunhee Lee"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1536px) 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-12">
            <motion.div
              className="max-w-3xl"
              {...animations.fadeInUp}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                About Me
              </h1>
              <p className="text-base md:text-xl text-gray-200 mb-4 lg:mb-6">
                Assistant Professor of Transportation Engineering
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Publications', value: `${publications.length}+` },
                  { label: 'Research Areas', value: resumeData.areasOfInterest.length },
                  { label: 'Languages', value: resumeData.languages.length },
                  { label: 'Years Experience', value: '10+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a href={LinkToPublications || '/publications'} className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    View Publications
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-400 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <a href={LinkToCV} className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <AboutSection />
          <ResearchFocus />
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="publications"
                className={`data-[state=active]:bg-${theme.colors.accent.blue.light} data-[state=active]:text-${theme.colors.accent.blue.DEFAULT}`}
              >
                Publications
              </TabsTrigger>

              <TabsTrigger
                value="blog"
                className={`data-[state=active]:bg-${theme.colors.accent.blue.light} data-[state=active]:text-${theme.colors.accent.blue.DEFAULT}`}
              >
                Blog
              </TabsTrigger>
            </TabsList>
            <TabsContent value="publications">
              <PublicationsSection />
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
    <motion.section {...animations.fadeInUp}>
      <Card className='rounded-none shadow-0 shadow-none border-none'>
        <CardContent className={theme.spacing.content}>
          <p className={`text-lg text-${theme.colors.text.secondary}`}>
            {AboutData}
          </p>
          <h2 className={`text-2xl font-semibold text-${theme.colors.primary} mt-8`}>Academic Background</h2>
          <p className={`text-lg text-${theme.colors.text.secondary} mt-4`}>
            {AcademicBackground}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex mt-4"
          >
            <Button
              asChild
              variant="link"
              className="text-lg text-blue-900 border-2 border-blue-600 bg-white group relative"
            >
              <a href={LinkToCV} className="flex items-center gap-2">
                Download CV
                <Download className="h-5 w-5 bounce-y" />
              </a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}


function ResearchFocus() {
  return (
    <motion.section {...animations.fadeInUp}>
      <Card className='rounded-none shadow-0 shadow-none border-none'>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-600">Research Focus</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.areasOfInterest.map((area, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2 text-lg text-slate-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ChevronRight className="h-5 w-5" />
                <span>{area}</span>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Button
            asChild
            variant="link"
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href={LinkToPublications || '/publications'} className="flex items-center gap-2">
              More publications
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
      </div>
    </ScrollArea>
  )
}



function BlogSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {blogArticles === "Coming Soon" && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold flex items-center">
                <PenTool className="h-5 w-5 mr-2 text-blue-600" />
                Coming Soon
              </h3>
              <p className="text-slate-500 mt-2">Blog articles will be available shortly.</p>
            </CardContent>
          </Card>)
          // ) : (
          //   <>
          //     {blogArticles.slice(0, 4).map((article, index) => (
          //       <motion.div
          //         key={index}
          //         initial={{ opacity: 0, y: 20 }}
          //         animate={{ opacity: 1, y: 0 }}
          //         transition={{ delay: index * 0.1 }}
          //       >
          //         <Card>
          //           <CardContent className="p-6">
          //             <h3 className="text-xl font-semibold flex items-center">
          //               <PenTool className="h-5 w-5 mr-2 text-blue-600" />
          //               {article.title}
          //             </h3>
          //             <p className="text-slate-500 mt-2">{article.tldr}</p>
          //             <Button asChild variant="link" className="mt-2 p-0">
          //               <a href={article.link}>Read</a>
          //             </Button>
          //           </CardContent>
          //         </Card>
          //       </motion.div>
          //     ))}

          //     {LinkToBlog && (
          //       <motion.div
          //         initial={{ opacity: 0 }}
          //         animate={{ opacity: 1 }}
          //         transition={{ delay: 0.5 }}
          //         className="flex justify-center"
          //       >
          //         <Button
          //           asChild
          //           variant="link"
          //           className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          //         >
          //           <a href={LinkToBlog} className="flex items-center gap-2">
          //             Visit blog
          //             <ArrowRight className="h-5 w-5 bounce-x" />
          //           </a>
          //         </Button>
          //       </motion.div>
          //     )}
          //   </>
        }
      </div>
    </ScrollArea>
  )
}
