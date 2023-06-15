import type { NextAuthOptions } from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { prisma } from './primsa'

export const authOptions: NextAuthOptions = {  
 
    // Configure one or more authentication providers
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    jwt: {
        secret: process.env.JWT_SECRET
    },

    providers: [ 
        CredentialsProvider({
            name: 'Email and Password',
            credentials: {
                email: { 
                    label: "Email", 
                    type: "email", 
                    placeholder: "example@example.com" 
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            }, // verify if a user exists in the database
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                // ask prisma to talk to MongoDB 
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                }) 
                // If user does not exist, log an error
                if(!user){ 
                    console.log('User not found')
                }
                // If user exists and password is correct, redirect and return user data
                if(user && (await compare(credentials.password, user.password))){
           /*          redirect('/mails') */
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                }
                // Invalid credentials, return null
                return null;
            }
        })
    ],
}
