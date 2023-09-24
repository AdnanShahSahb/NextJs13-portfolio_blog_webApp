import Posts from "@/models/Posts"
import connect from "@/utils/db"
import { NextResponse } from "next/server";

interface PageProps {
    params: {
        theId: string
    }
}
export const GET = async (request: any, { params }: PageProps) => {
    const { theId } = params
    try {
        await connect()

        const thePost = await Posts.findById(theId)
        return new NextResponse(JSON.stringify(thePost), { status: 200 })
    }
    catch (err) {
        console.log(err);
        return new NextResponse('error', { status: 500 })
    }
}

export const DELETE = async (request: any, { params }: PageProps) => {
    const { theId } = params

    try {
        await connect()

        const thePostToDelete = await Posts.findByIdAndDelete(theId)
        return new NextResponse(thePostToDelete + `Post with id ${theId} deleted`, { status: 200 })
    }
    catch (err) {
        console.log(err);
    }
}