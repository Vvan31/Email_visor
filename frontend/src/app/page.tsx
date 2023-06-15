import { LoginButton, LogoutButton, RegisterButton, EmailBoardButton  } from "@/components/buttons.component"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = session?.user

if (user) {
  redirect('/mails');
}else{

    return (
      <main className="flex justify-center items-center h-[70vh]">
        <div className="text-7xl font-bold mb-3">
      {/*     <h1  id="title">Hi stranger, login :) </h1> */}
          <LoginButton />
  {/*        <RegisterButton /> */}
          {/* <EmailBoardButton /> */}
  {/*         <LogoutButton /> */}
         {/*  <code>{JSON.stringify(session)}</code> */}
        </div>
      </main>
    )
  }
}
