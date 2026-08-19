import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  link: string;
  about: string;
  img: string;
  sources1?: string;
  sources2?: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 p-6 border rounded-xl shadow-sm bg-white">
      {/* ฝั่งซ้าย (70%) */}
      <div className="w-full md:w-[70%] space-y-3">
        <h3 className="text-xl font-bold text-gray-800">about this project</h3>
        <p className="text-gray-600">{props.about}</p>
        <p className="text-gray-600">this project is for ...</p>
        <p className="text-sm text-gray-500">this project is created using ...</p>

        {(props.sources1 || props.sources2) && (
          <div className="pt-2 border-t mt-4">
            <p className="font-semibold text-sm text-gray-700 mb-1">Source Code:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {props.sources1 && (
                <li>
                  <Link href={props.sources1} target="_blank" className="text-blue-600 hover:underline">
                    Repository 1
                  </Link>
                </li>
              )}
              {props.sources2 && (
                <li>
                  <Link href={props.sources2} target="_blank" className="text-blue-600 hover:underline">
                    Repository 2
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* ฝั่งขวา (30%) */}
      <div className="w-full md:w-[30%] flex justify-center items-center">
        <Link href={props.link} className="relative aspect-video w-full overflow-hidden rounded-lg hover:opacity-90 transition">
          <Image
            src={props.img}
            alt="project image"
            width={300}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
}