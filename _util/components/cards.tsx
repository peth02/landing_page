"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

interface ProjectCardProps {
  name?: string;
  link: string;
  about: string;
  img: string;
  sources1?: string;
  sources2?: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-300 shadow-lg"
    >
      {/* Left side (70%) */}
      <div className="w-full md:w-[70%] space-y-3">
        {props.name && (
          <h2 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 ease-in-out capitalize">
            {" "}
            <Link href={props.link} target="_blank" className="underline">
              {props.name}
            </Link>
          </h2>
        )}

        <div className="space-y-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            About this project
          </h3>
          <p className="text-zinc-300 leading-relaxed">{props.about}</p>
        </div>

        <p className="text-sm text-zinc-400">This project is for ...</p>
        <p className="text-xs text-zinc-500">Created using ...</p>

        {(props.sources1 || props.sources2) && (
          <div className="pt-3 border-t border-zinc-800 mt-4">
            <p className="font-medium text-xs text-zinc-400 mb-2">
              Source Code
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              {props.sources1 && (
                <Link
                  href={props.sources1}
                  target="_blank"
                  className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition"
                >
                  Repository 1 ↗
                </Link>
              )}
              {props.sources2 && (
                <Link
                  href={props.sources2}
                  target="_blank"
                  className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition"
                >
                  Repository 2 ↗
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right side (30%) */}
      <div className="w-full md:w-[30%] flex justify-center items-center">
        <Link
          href={props.link}
          target="_blank"
          className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 group"
        >
          <Image
            src={props.img}
            alt={props.name || "project image"}
            width={300}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    </motion.div>
  );
}
