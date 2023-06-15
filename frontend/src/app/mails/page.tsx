import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { NavBar} from "@/components/navBar.component";
import redirectAuthenticated from "@/middleware";

export default async function MailsBoard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/');
    }
    return (
        <main>
            <NavBar />
        </main>
    )
}

