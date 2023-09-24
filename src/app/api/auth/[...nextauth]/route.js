import bcrypt from 'bcryptjs';
import NextAuth, { Awaitable, RequestInternal, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import Users from "@/models/Users"


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLEINT_ID ,
            clientSecret: process.env.GOOGLE_CLEINT_SECRET 
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                //Check if the user exists.
                await connect();

                try {
                    const user = await Users.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                            
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (err) {
                    console.error("Authorization Error:", err); // Log the error
                    return null; // Return null or handle the error gracefully
                   }
            },
        }),
    ],
    pages: {
        error: '/dashboard/signin',
    }
})

export { handler as GET, handler as POST }