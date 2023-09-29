import { PortableText } from "@portabletext/react";
import { getPage, } from "../../../sanity/sanity_utils";
import { pageProps } from "../../../types/Projects";




export default async function Page({ params }: pageProps) {
    const page = await getPage(params.slug)

    return (
        <div >
            <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">{page.title}</h1>
            <div className="text-lg text-gray-800 mt-10">
                <PortableText value={page.content}/>    
            </div>
        </div>
    )
}   