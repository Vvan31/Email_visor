import React, { useEffect } from "react";
//style
import "../style/mainPage.css";
//components
import { NavBar } from "../components/navBar";
import  CategoryCharts  from "../components/charts";
import  EmailsList  from "../components/email-list";

//API 
import MailsService from "../services/mails";
function Mails() {
    const [mails, setMails] = React.useState<any[]>([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    useEffect(() => {
        retreiveMails();
    }, []);


    const retreiveMails = () =>{
        MailsService.getAllMails(currentPage)
          .then(response =>{
            console.log(response.data)
            setMails(response.data.emails) 
            setCurrentPage(response.data.page)
          })
          .catch( e =>{
            console.log(e)
          })
      }


    return (
        <main className="main">
            <div>
                <NavBar />
            </div>
            <div className="content" >
                <CategoryCharts />
               <EmailsList /> 
            </div>
        </main>
    )
}

export default Mails;