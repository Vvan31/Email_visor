import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MailsBoard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/');
    }
    return (
        <main className="flex justify-center items-center h-[70vh]">
            <div>
                <h1 className="text-7xl font-bold mb-3">Emails</h1>
                <code>{JSON.stringify(session)}</code>
            </div>
        </main>
    )
}