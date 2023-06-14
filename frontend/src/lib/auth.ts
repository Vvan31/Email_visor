import type { NextAuthOptions } from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { prisma } from './primsa'
import { log } from 'console'

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
                // aslk prisma to talk to mongo 
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                }) 
                // If exists, compare the password
                if(!user){ 
                    console.log('user not found')
                }else{
                    console.log(typeof credentials.password + " " + typeof user.password)
                    console.log(credentials.password)
                    console.log(user.password)
                    console.log(await compare(credentials.password, user.password))
                }
                if(!user || !(await compare(credentials.password, user.password))){
                    return null
                }

                // const dummy_user = { id: "1", name: 'Admin', email: 'admin@gmail.com'}

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            }
        })
    ],
}
