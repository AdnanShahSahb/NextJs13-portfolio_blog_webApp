import Projects from "@/models/Projects"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

interface PageProps {
    params: {
        illustrations: string
    }
}

export const GET = async (request: any, { params }: PageProps) => {


    try {
        await connect()

        const theillustrationsProjsRes = await Projects.find({ category:'Illustrations' })
        return new NextResponse(JSON.stringify(theillustrationsProjsRes), { status: 200 })
    }
    catch (err) {
        return new NextResponse(err as any, { status: 500 })
    }


}