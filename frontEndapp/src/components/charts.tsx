import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import MailsService from "../services/mails";

import '../style/charts.css';

type Category = {
  category: string;
  count: number;
};

type Data = {
  color: string;
  value: number;
  title: string | number;
};

function CategoryCharts({ handleCategorySelection, totalCategories, categories }: {
  handleCategorySelection: (category: string) => void;
  totalCategories: Category[];
  categories: Category[];
}) {
  const [formattedData, setFormattedData] = useState<Data[]>([]);
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

  useEffect(() => {
    formatData();
  }, [totalCategories, categories]);

  const formatData = () => {
    const colors = [
      '#6728B7',
      '#5182CC',
      '#01114A',
      '#D7A31E',
      '#B1297B',
      '#F2C94C',
      '#F2994A',
      '#6728B7',
      '#5182CC',
      '#01114A',
      '#D7A31E',
    ];

    const data: Data[] = categories.map((category, index) => ({
      title: category.category,
      value: category.count,
      color: pickColor(index, colors),
    }));
    setFormattedData(data);
  };

  const pickColor = (currentIndex: number, colors: string[]) => {
    let color = colors[currentIndex];
    if (currentIndex > 0 && currentIndex < colors.length) {
      color = colors[currentIndex + 1];
    }
    if (currentIndex === colors.length) {
      color = colors[0];
    }
    return color;
  };

  const handleCategoryClick = (event: React.MouseEvent, category: number) => {
    setSelectedCategory(formattedData[category].title as string);
    handleCategorySelection(formattedData[category].title as string);
  };
  const defaultLabelStyle = {
    fontSize: '0.5em',
    fontFamily: 'sans-serif',
  };
  const shiftSize = 7;
  return (
    <div className="app">
      <PieChart
        data={formattedData}
        paddingAngle={2}
        animate={true}
        animationDuration={10000}
        lineWidth={35}
        rounded={true}
        radius={42  - shiftSize}
       /*  segmentsShift={(index) => (index === 0 ? shiftSize : 0.9)} */
        label={({ dataEntry }) => dataEntry.value +  '%'}
        labelStyle={(index) => ({
          fill: formattedData[index].color,
          fontSize: '0.5em',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        })}
        labelPosition={112}
        onClick={(event, category) => handleCategoryClick(event, category)}
      />
      {selectedCategory && (
        <div>
          <h3>Selected Category: {selectedCategory}</h3>
        </div>
      )}
    </div>
  );
}

export default CategoryCharts;
