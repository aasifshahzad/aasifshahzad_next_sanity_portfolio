import Link from 'next/link'
import getProjects from '../../sanity/sanity_utils'
import Image from 'next/image'

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className='mx-w-5xl mx-auto bg-lime-300 h-screen p-5'>
      <h1 className='text-7xl font-extrabold'>Hello, I&apos;m <span className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>Muhammad Asif Shahzad</span>!</h1>
      <p className='mt-4 text-4xl text-gray-500'>Aloha! Everyone.Check out my projects! </p>
      <h2 className='mt-8 text-3xl font-bold text-gray-700'>My Projects</h2>
      <div className='mt-4 grid md:grid-cols-3 text-center'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border border-gray-500 rounded-lg mt-4 mr-4'
          >
            {project.project_image && (
              <Image
                src={project.project_image}
                alt={project.project_name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className='font-extrabold text-3xl bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>{project.project_name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}