'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Search } from 'lucide-react'
import { publications, theme, animations } from '@/lib/data'

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPublications = publications.filter(publication =>
    publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
      <div className={`max-w-${theme.layout.maxWidth} mx-auto px-4`}>
        <motion.h1
          className={`text-4xl font-bold text-${theme.colors.primary} ${theme.spacing.section}`}
          {...animations.headerAnimation}
        >
          Publications
        </motion.h1>

        <motion.div
          className={theme.spacing.section}
          {...animations.fadeIn}
        >
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-${theme.colors.text.muted}`} />
            <Input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 border-${theme.colors.text.muted} focus:border-${theme.colors.primary}`}
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className={`absolute right-2 top-1/2 text-${theme.colors.accent.red.DEFAULT} transform -translate-y-1/2`}
                onClick={() => setSearchTerm('')}
              >
                Clear
              </Button>
            )}
          </div>
          {searchTerm && (
            <div className={`text-sm text-${theme.colors.text.secondary} mt-2`}>
              Showing {filteredPublications.length} of {publications.length} publications
            </div>
          )}
        </motion.div>

        <ScrollArea className="h-[calc(100vh-300px)]">
          <AnimatePresence>
            {filteredPublications.length > 0 ? (
              <div className="space-y-6">
                {filteredPublications.map((publication, index) => (
                  <motion.div
                    key={publication.title}
                    {...animations.fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`hover:${theme.layout.shadow} transition-shadow`}>
                      <CardContent className={theme.spacing.content}>
                        <h3 className={`text-xl font-semibold text-${theme.colors.primary}`}>
                          {publication.title}
                        </h3>
                        <p className={`text-${theme.colors.text.secondary} mt-2`}>
                          {publication.description}
                        </p>
                        <Button asChild variant="link" className="mt-2 p-0">
                          <a href={publication.link}>Read Publication</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                {...animations.fadeIn}
                className="text-center py-8"
              >
                <p className={`text-${theme.colors.text.secondary}`}>
                  No publications found matching <span className="font-bold">{searchTerm}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </div>
    </div>
  )
}