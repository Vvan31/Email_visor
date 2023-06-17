import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import MailsService from "../services/mails";

import '../style/charts.css';
function CategoryCharts() {
  const [totalCategories, setTotalCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formattedData, setFormattedData] = useState<Data>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

   useEffect(() => {
    formatData();
  }, [totalCategories, categories]);
 
  type Data = {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
    [key: string]: any;
  }[];

   const formatData = () => {
    const data = categories.map((category, index) => ({
      title: category.category,
      value: category.count,
      color: pickRandomColor(),
    }));

    setFormattedData(data);
  };
 
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const pickRandomColor = () => {
    const colors = [
        '#6728B7',
        '#5182CC',
        '#01114A',
        '#D7A31E',
        '#B1297B',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
    };
  
    const handleCategoryClick = (event, category) => {
        setSelectedCategory(formattedData[category].title);
      };
    
      return (
        <div className="app">
          <PieChart 
            data={formattedData} 
            paddingAngle={2}
            animate={true}
            animationDuration={10000}
            lineWidth={25}
            rounded={true}
            onClick={(event, category) => handleCategoryClick(event, category)}
          />
          {selectedCategory && (
            <div>
              <h3>Selected Category: {selectedCategory}</h3>
              {/* Render additional information or handle selected category */}
            </div>
          )}
        </div>
      );
    }

export default CategoryCharts;
