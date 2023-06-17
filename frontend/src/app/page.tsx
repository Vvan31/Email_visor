import { LoginButton, LogoutButton, RegisterButton, EmailBoardButton  } from "@/components/buttons.component"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

async function getEmails() {
  const res = await fetch('http://localhost:8000/api/v1/emails')
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return  await res.json()
}

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = session?.user

/*   const emails = await getEmails()
  console.log(emails) */

    if (user) {
      redirect('/mails');
    }else{

    return (
      <main className="flex justify-center items-center h-[70vh]">
        <div className="text-7xl font-bold mb-3">
          <LoginButton />
        </div>
      </main>
    )
  }
}
