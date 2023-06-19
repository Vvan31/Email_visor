

import * as React from "react";
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

function MailsPage() {

  const [totalCategories, setTotalCategories] = React.useState<Category[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  React.useEffect(() => {
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
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCategorySelection = (category: string | null) => {
    setSelectedCategory(category);
    //console.log("Category selected: " + category);
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
