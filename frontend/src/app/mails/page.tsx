
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
//components
import { NavBar} from "@/components/navBar.component";
import { CategoryCharts } from "@/components/categoryCharts.component";
import { EmailsList }   from "@/components/emailsList.component";

export default async function MailsBoard(initialData:any) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        redirect('/');
    }

    return (
        <main className="flex">
            <div>
                <NavBar />
            </div>
            <div className=" mt-9 flex flex-col justify-top items-center h-[100vh] w-[100vw]" >
                <CategoryCharts />
                <EmailsList />
              {/*   {initialData.catGiphys.data.map((each:, index) => {
                return(
                <div key="index">
                    <h3>{each.title}</h3>
                    <img src={each.images.original.url} alt={each.title}/>
                </div>
                    )
                 })} */}
            </div>
        </main>
    )
}
export async function getStaticProps() {
    let catGiphys = await fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=8')
    catGiphys = await catGiphys.json()
    return {props: {catGiphys: catGiphys}}  
  }