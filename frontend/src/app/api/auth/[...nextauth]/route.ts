import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}   

////////// Mongo DB //////////

/* import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '../lib/mongo'

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    ...authOptions
}) */