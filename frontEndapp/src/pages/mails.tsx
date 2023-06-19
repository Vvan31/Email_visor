/* import React, { useEffect, useState } from "react";
//style
import "../style/mainPage.css";
//components
import { NavBar } from "../components/navBar";
import  CategoryCharts  from "../components/charts";
import  EmailsList  from "../components/email-list";

//API 
import MailsService from "../services/mails";
type Category = {
    category: string;
    count: number;
  };
  type Data = {
    color: string;
    value: number;
    title: string | number;
  };
  type Mail = {
    _id: string;
    id: number;
    sent_time: string;
    owner_name: string;
    owner_email: string;
    category: string;
    title: string;
    description: string;
    content: string;
    recipient: string;
    read: boolean;
    answered: boolean;
  };
  type MailList = {
    mails: Mail[];
  };

function Mails(user: any) {
    const [currentPage, setCurrentPage] = useState(0);

    const [totalCategories, setTotalCategories] = useState<Category[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        retrieveCategories();
    }, []);

    const retrieveCategories = () => {
        MailsService.getCategories()
            .then(response => {
            setTotalCategories(response.data.emails);
            })
            .catch(error => {
            console.log(error);
            });

        MailsService.getEmailsByCategory()
            .then(response => {
            setCategories(response.data);
            console.log(response.data);
            })
            .catch(error => {
            console.log(error);
            });
    };

    const handleCategorySelection = (category: string) => {
        setSelectedCategory(category);
        console.log("Category selected: " + category);
    };
    return (
        <main className="main">
            <div>
                <NavBar />
            </div>
            <div className="content" >
                <div className="charts">
                    <CategoryCharts 
                        handleCategorySelection={handleCategorySelection}  
                        totalCategories={totalCategories}
                        categories={categories}
                    />
                </div>
                <div className='list'>
                    <EmailsList category={selectedCategory} />
                </div>
            
            </div>
        </main>
    )
}

export default Mails; */

import React, { useEffect, useState } from "react";
// style
import "../style/mainPage.css";
// components
import { NavBar } from "../components/navBar";
import CategoryCharts from "../components/charts";
import EmailsList from "../components/email-list";

// API
import MailsService from "../services/mails";

type Category = {
  category: string;
  count: number;
};

type Data = {
  color: string;
  value: number;
  title: string | number;
};

type Mail = {
  _id: string;
  id: number;
  sent_time: string;
  owner_name: string;
  owner_email: string;
  category: string;
  title: string;
  description: string;
  content: string;
  recipient: string;
  read: boolean;
  answered: boolean;
};

type MailList = {
  mails: Mail[];
};

function MailsPage(user: any) {
  const [currentPage, setCurrentPage] = useState(0);

  const [totalCategories, setTotalCategories] = useState<Category[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    retrieveCategories();
  }, []);

  const retrieveCategories = () => {
    MailsService.getCategories()
      .then((response) => {
        setTotalCategories(response.data.emails);
      })
      .catch((error) => {
        console.log(error);
      });

    MailsService.getEmailsByCategory()
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    console.log("Category selected: " + category);
  };

  return (
    <main className="main">
      <div>
        <NavBar />
      </div>
      <div className="content">
        <div className="charts">
          <CategoryCharts
            handleCategorySelection={handleCategorySelection}
            totalCategories={totalCategories}
            categories={categories}
          />
        </div>
        <div className="list">
          <EmailsList category={selectedCategory} />
        </div>
      </div>
    </main>
  );
}

export default MailsPage;
