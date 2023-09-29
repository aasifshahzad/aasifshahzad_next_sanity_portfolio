// import getProject from "../../../../sanity/sanity_utils";
import { Props } from "../../../../types/Projects";
import { getProject } from "../../../../sanity/sanity_utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


export default async function Project({ params }: Props) {

    const slug = params.project;
    // console.log(slug)
    const project = await getProject(slug);
    //console.log(project)


    return (
        <div className="">
            <header className="flex item-center justify-between">
                <h1 className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold'>
                    {project.project_name}
                </h1>
                <a
                    href={project.project_url}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 rounded text-gray-700 p-2 px-3 font-bold whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
                >
                    View Project
                </a>
            </header>

            {/* content goes here */}

            <div className="text-lg text-gray-700 mt-3">
                <PortableText value={project.project_content} />
            </div>

            {/* image goes here */}

            <Image
                src={project.project_image}
                alt={project.project_name}
                width={1920}
                height={1080}
                className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />

        </div>
    )
}