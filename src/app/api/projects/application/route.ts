import Projects from "@/models/Projects"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

interface PageProps {
    params: {
        application: string
    }
}

export const GET = async (request: any, { params }: PageProps) => {


    try {
        await connect()

        const theApplicationProjsRes = await Projects.find({ category: 'Application' })
        return new NextResponse(JSON.stringify(theApplicationProjsRes), { status: 200 })
    }
    catch (err) {
        return new NextResponse(err as any, { status: 500 })
    }


}