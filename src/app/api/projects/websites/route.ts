import Projects from "@/models/Projects"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

interface PageProps {
    params: {
        websites: string
    }
}

export const GET = async (request: any, { params }: PageProps) => {


    try {
        await connect()

        const theWebsitesProjsRes = await Projects.find({ category: 'Websites' })
        return new NextResponse(JSON.stringify(theWebsitesProjsRes), { status: 200 })
    }
    catch (err) {
        return new NextResponse(err as any, { status: 500 })
    }


}