
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//components
import { NavBar} from "@/components/navBar.component";
import { CategoryCharts } from "@/components/categoryCharts.component";
import { EmailsList }   from "@/components/emailsList.component";
import { data } from "autoprefixer";
import { getEmails } from "@/utils/api"; // assuming you have a separate file for the getEmails function

type Email = {
    _id: string;
    id: number;
    sent_time: string;
    owner_name: string;
    owner_email: string;
  };
  

export default async function MailsBoard({ emails }: { emails: Email[] }) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        redirect('/');
      } else {
        console.log("emails", emails);
      }

    return (
        <main className="flex">
            <div>
                <NavBar />
            </div>
            <div className=" mt-9 flex flex-col justify-top items-center h-[100vh] w-[100vw]" >
                <CategoryCharts />
               <EmailsList emails={emails} /> 
            </div>
        </main>
    )
}



/* import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/navBar.component";
import { CategoryCharts } from "@/components/categoryCharts.component";
import { EmailsList } from "@/components/emailsList.component";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Email = {
  _id: string;
  id: number;
  sent_time: string;
  owner_name: string;
  owner_email: string;
};

export const getServerSideProps: GetServerSideProps<{
  data: Email[];
}> = async () => {
  const res = await fetch('http://localhost:8000/api/v1/emails');
  const data = await res.json();
  return { props: { data } };
};

export default async function MailsBoard({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  } else {
    console.log("data");
    console.log(data);
  }

  return (
    <main className="flex">
      <div>
        <NavBar />
      </div>
      <div className="mt-9 flex flex-col justify-top items-center h-[100vh] w-[100vw]">
        <CategoryCharts />
        <EmailsList />
            
      </div>
    </main>
  );
}
 */