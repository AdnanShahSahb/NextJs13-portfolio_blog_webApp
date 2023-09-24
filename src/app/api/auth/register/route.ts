import Users from "@/models/Users";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (request: any) => {

    const { name, email, password } = await request.json()

    await connect();
console.log(name,email,password);
    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = new Users({
        name,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()
        return new NextResponse('User has been created', { status: 201 })
    }
    catch (err: any) {
        console.log(err);
        return new NextResponse(err.message, {
            status: 500
        })
    }
}