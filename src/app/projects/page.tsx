'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { resumeData, theme, animations } from '@/lib/data'

export default function ProjectPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
      <div className={`max-w-${theme.layout.maxWidth} mx-auto px-4`}>
        <motion.h1 
          className={`text-4xl font-bold text-${theme.colors.primary} ${theme.spacing.section}`}
          {...animations.headerAnimation}
        >
          Research Projects
        </motion.h1>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-6">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={project.name}
                {...animations.fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`hover:${theme.layout.shadow} transition-shadow`}>
                  <CardHeader>
                    <CardTitle className={`text-xl text-${theme.colors.primary}`}>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-${theme.colors.text.secondary} ${theme.spacing.element}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.areasOfInterest.slice(0, 2).map((area) => (
                        <Badge key={area} variant="secondary">{area}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}