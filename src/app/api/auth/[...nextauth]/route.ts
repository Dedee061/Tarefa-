import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
    secret: process.env.JWT_SECRET,
    
})

export { handler as GET, handler as POST }