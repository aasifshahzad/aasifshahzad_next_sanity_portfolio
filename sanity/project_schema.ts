const project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "project_name",
            title: "Project Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "project_name" }
        },
        {
            name: "project_image",
            title: "Project Image",
            type: "image",
            option: { hotspot: true },
            fields: [{
                name:"alt",
                title:"Alt",
                type:"string"
            }]
        },
        {
            name: "project_url",
            title: "URL",
            type: "url",
        },
        {
            name: "project_content",
            title: "Content",
            type: "array",
            of:[{
                type: "block"
            }]
        },


    ]
}

export default project