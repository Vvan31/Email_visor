import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const password = await hash('admin', 10)
    
    const user = await prisma.user.upsert({
        where: { email: 'a@a.com' },
        update: {},
        create: {
            email: 'a@a.com',
            name: 'Admin',
            password,
        },
    });
    console.log(user);
}

main()
.then(() => prisma.$disconnect())
.catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});