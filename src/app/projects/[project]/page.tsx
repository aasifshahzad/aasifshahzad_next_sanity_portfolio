import {getProject} from "../../../../sanity/sanity_utils";
import { Props } from "../../../../types/Projects";

export default async function Project({params}:Props){

    const slug  = params.project;
    const project = await getProject(slug);

    return(
    <div>
        My Project Goes here!
    </div>
    ) 
}