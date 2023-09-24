import Projects from "@/models/Projects"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (request: any) => {

    await connect()

    const { category, url, heading, para, desc, blogBy, blogByImg } = await request.json()
    console.log(category,url,heading,para, desc, blogBy, blogByImg);
    const newProj = new Projects({
        category,
        url,
        heading,
        para,
        desc,
        blogBy,
        blogByImg
    })

    try {
        await newProj.save()
        return new NextResponse('New project is added', {
            status: 201
        })
    }
    catch (e) {
        return new NextResponse(e + ' Failed', {
            status: 500
        })
    }

}


export const GET = async (request: any) => {
    await connect()

    const url = new URL(request.url)

    const em = url.searchParams.get("email")

    try {
        const projDataResponse = await Projects.find(em as String && { blogBy: em as String })

        return new NextResponse(JSON.stringify(projDataResponse) as any, { status: 200 })

    }
    catch (err) {
        console.log(err);
    }
}