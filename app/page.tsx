"use client";

import { motion } from "motion/react";
import { ProjectCard, ProjectCardProps } from "@/_util/components/cards";
import { useEffect, useState } from "react";
import project_type from "@/_data/project_type.json";
import project from "@/_data/project.json";

export default function Home() {
  const [sort, setSort] = useState();
  const [data, setData] = useState(Array<ProjectCardProps>);

  useEffect(() => {
    const initData = async () => {
      setData(project.project);
    };
    initData();
  }, []);
  console.log(data);
  console.log(project_type);
  console.log(project_type.name);
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left flex flex-col justify-items-center items-center"
        >
          <h1 className="text-4xl tracking-tight md:text-9xl md:tracking-widest font-extrabold bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent capitalize">
            Projects
          </h1>
          <p className="text-zinc-400 mt-2 text-sm md:text-4xl md:tracking-widest text-center">
            A collection of projects I've worked on.
          </p>
        </motion.div>

        {data.map((item, index) => {
          if(!item.name.includes('temp'))
          return (
            <div key={index} className="flex flex-col gap-6">
              <ProjectCard
                name={item.name}
                link={item.link}
                about={item.about}
                img={item.img}
                source={item.source}
                tech={item.tech}
                type={item.type}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
