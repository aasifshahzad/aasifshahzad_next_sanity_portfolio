import { PortableTextBlock } from "sanity";

export type Project = {
    _id:string;
    _createdAt: Date;
    project_name: string;
    slug:string;
    project_image:string;
    project_url:string;
    project_content:PortableTextBlock[];
}

export type Props = {
    params:{project:string}
}