import Projects from "@/models/Projects";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

interface PageProps {
    params: {
        theId: string
    }
}

export const DELETE = async (request: any, { params }: PageProps) => {
    const { theId } = params;

    try {
        await connect()

        const theDeletedPost = await Projects.findByIdAndDelete(theId)
        return new NextResponse(theDeletedPost + 'deleted', { status: 200 })
    }
    catch (err) {
        console.log(err);
    }
}