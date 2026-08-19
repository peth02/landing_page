"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/_util/components/cards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent capitalize">
            Projects
          </h1>
          <p className="text-zinc-400 mt-2 text-sm md:text-base">
            A collection of projects I&apos;ve worked on.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <ProjectCard
            name="temp"
            link="https://google.com"
            about="new project"
            img="/image/placeholder.png"
          />          <ProjectCard
            name="temp"
            link="https://google.com"
            about="new project"
            img="/image/placeholder.png"
          />          <ProjectCard
            name="temp"
            link="https://google.com"
            about="new project"
            img="/image/placeholder.png"
          />
          <ProjectCard
            name="temp"
            link="https://google.com"
            about="new project"
            img="/image/placeholder.png"
          />
        </div>
      </div>
    </main>
  );
}