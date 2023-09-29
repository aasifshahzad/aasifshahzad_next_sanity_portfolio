import { createClient, groq } from "next-sanity"
import { Project } from "../types/Projects"
import config from "./config/client-config";
import { Page } from "../types/Page";
import clientConfig from "./config/client-config";

// import { createClient } from "@sanity/client";
// import { groq } from "next-sanity";
// import { Project } from "./types"; // Replace with your types import

export default async function getProjects(): Promise<Project[]> {
    ;
    return createClient(config).fetch(
        groq`*[_type == "project"]{
                    _id,
                    _createdAt,
                    project_name,
                    "slug": slug.current,
                    "project_image": project_image.asset->url,
                    project_url,
                    project_content
                }`
        ,
        {},
        { cache: "no-store" }
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(config).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        project_name,
        "slug": slug.current,
        "project_image": project_image.asset->url,
        project_url,
        project_content
        }`,
        { slug }

    )
}


export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq `*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,

        }`
    )
}

export async function getPage(slug:string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq `*[_type == "page" && slug.current == $slug ][0]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,
            content,
        }`,
        {slug},
        {cache:"no-store"}
    )
}