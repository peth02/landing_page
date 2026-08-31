"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Skill from "@/_data/skill.json";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title & Header Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left flex flex-col justify-items-center items-center"
        >
          <h1 className="text-4xl tracking-tight md:text-5xl md:tracking-widest font-extrabold bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent capitalize text-center">
            About
          </h1>
          <p className="text-zinc-400 mt-2 text-m md:text-3xl md:tracking-widest text-center font-medium">
            Jedsadakorn Wichitrakanlikit
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm shadow-lg space-y-4"
        >
          <h3 className="text-2xl font-bold text-white tracking-wide border-b border-zinc-800 pb-3">
            Education
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-lg font-medium">
                Kasetsart University
                <p className="text-sm font-medium text-gray-400">
                  Bachelor of Science (Computer Science) with Second Class
                  Honours | 2026
                </p>
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Skill Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-bold text-white tracking-wide border-b border-zinc-800 pb-3">
            Skill
          </h3>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Framework
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {Skill.framework.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 text-sm font-medium hover:bg-zinc-700 hover:text-white transition duration-300 ease-in-out shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Language
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {Skill.language.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 text-sm font-medium hover:bg-zinc-700 hover:text-white transition duration-300 ease-in-out shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              ML
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {Skill.ml.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 text-sm font-medium hover:bg-zinc-700 hover:text-white transition duration-300 ease-in-out shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Tool
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {Skill.tool.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 text-sm font-medium hover:bg-zinc-700 hover:text-white transition duration-300 ease-in-out shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Links / Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-5 md:justify-start pt-2"
        >
          <Link
            href="https://github.com/peth02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium border border-zinc-700 transition duration-300 ease-in-out shadow-md hover:shadow-zinc-700/20  hover:underline"
          >
            GitHub ↗
          </Link>
          <Link
            href="https://drive.google.com/file/d/1VENPLLaQ1lHP4E3aQrNgtyonhFWyEJzB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium border border-zinc-700 transition duration-300 ease-in-out shadow-md hover:shadow-zinc-700/20  hover:underline"
          >
            Resume ↗
          </Link>
          <Link
            href="https://drive.google.com/file/d/1MJWgrgz104epLflrkMSdAHh_7yJRgzFU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium border border-zinc-700 transition duration-300 ease-in-out shadow-md hover:shadow-zinc-700/20  hover:underline"
          >
            Transcript ↗
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
