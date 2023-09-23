import { createClient, groq } from "next-sanity"
import { Project } from "../types/Projects"
import config from "./config/client-config";

export default async function getProjects():Promise<Project[]> {
     ;
    return createClient(config).fetch(
            groq`*[_type == "project"]{
                    _id,
                    _createdAt,
                    project_name,
                    "slug": slug.current,
                    "project_image": image.asset->url,
                    project_url,
                    project_content
                }`
                ,
            {},
            { cache: "no-store" }
        )
}

export async function getProject(slug:string):Promise<Project> {
    return createClient(config).fetch(
            groq`*[_type == "project" && slug.current= $slug[0] ]{
                    _id,
                    _createdAt,
                    project_name,
                    "slug": slug.current,
                    "project_image": image.asset->url,
                    project_url,
                    project_content
                }`,
            {slug},
            { cache: "no-store" },
        )
}