'use client'

import { Button } from "@/components/ui/button";
import { LinkToTeaching, teachingData, theme, animations } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
      <div className={`max-w-${theme.layout.maxWidth} mx-auto px-4 relative`}>
      <div className={`flex flex-col gap-4 md:flex-row md:items-center justify-between ${theme.spacing.section}`}>
        <motion.h1 
          className={`text-4xl font-bold text-${theme.colors.primary}`}
          {...animations.headerAnimation}
        >
          Teaching Experience
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className=""
        >
          <Button 
            asChild 
            variant="link" 
              className="text-lg text-blue-900 border-2 border-blue-600 bg-white group relative"
          >
            <a href={LinkToTeaching} className="flex items-center gap-2">
              More about teaching experience 
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
        </div>



        <div className="space-y-8">
          {teachingData.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                  <p className="text-sm font-medium text-blue-600 mt-1">{course.years}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{course.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
