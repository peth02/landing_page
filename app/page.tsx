import { ProjectCard } from "@/_util/templates/cards";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ProjectCard link="https://google.com" about="new project" img="/image/placeholder.png"/>
      <ProjectCard link="https://google.com" about="new project" img="/image/placeholder.png"/>
    </div>
  );
}
