import type { NextAuthOptions } from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {  
    providers: [ 
        CredentialsProvider({
            name: 'Email and Password',
            credentials: {
                email: { 
                    label: "Email", 
                    type: "text", 
                    placeholder: "example@example.com" 
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            }, // verify if a user exists in the database
            async authorize(credentials) {
                const user = { id: "1", name: 'Admin', email: 'admin@gmail.com'}

                return user
            }
        })
    ],
}
