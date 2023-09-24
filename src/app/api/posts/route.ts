import Posts from "@/models/Posts";
import connect from "@/utils/db"
import { NextResponse } from "next/server";
export const GET = async (request: any) => {

    // const url = request.url
    // const em = url?.searchParams?.get("email")
    const connected = await connect()
    // console.log(url?.searchParams);
    // console.log(connected);
    const url = new URL(request.url)
    // console.log(url.searchParams.get("email"));
    const em = url.searchParams.get("email")

    if (connected == 1) {
        try {
            const thePosts = await Posts.find(em as String && { blogBy: em as String })
            return new NextResponse(JSON.stringify(thePosts) as any, { status: 200 })
        }
        catch (err) {
            return new NextResponse("Error", { status: 500 })
        }
    }
}

export const POST = async (request: any) => {

    await connect()

    const { _id, url, heading, para, desc, blogBy, blogByImg } = await request.json()

    const newPost = new Posts({
        url,
        heading,
        para,
        desc,
        blogBy,
        blogByImg,
    })

    try {
        await newPost.save()
        return new NextResponse("New Post is posted", {
            status: 201
        })
    }
    catch (err) {
        console.log(err);
        return new NextResponse("Post not posted", {
            status: 500
        })
    }
}