// CategoryCharts
import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import MailsService from "../services/mails";
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
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

type CategoryChartsProps = {
  handleCategorySelection: (category: string | null) => void;
  totalCategories: Category[];
  categories: Category[];
};

function CategoryCharts({ handleCategorySelection, totalCategories, categories }: CategoryChartsProps) {
  const [formattedData, setFormattedData] = useState <Data[]>([]);
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
        //console.log(response.data);
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

  const handleAllEmailsClick = () => {
    setSelectedCategory(null);
    handleCategorySelection(null);
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
        radius={42 - shiftSize}
        label={({ dataEntry }) => dataEntry.title + ': ' + dataEntry.value + '%'}
        labelStyle={(index) => ({
          fill: formattedData[index].color,
          fontSize: '0.5em',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        })}
        labelPosition={112}
        onClick={(event, category) => handleCategoryClick(event, category)}
      />
      <div className='titleContainer'>
        {selectedCategory != null ? (
          <div className='selectedCategory'>
            <h3>{selectedCategory}</h3>
            <Button onClick={() => handleAllEmailsClick()} >All emails</Button>
          </div>
        ) : (
          <div className='selectedCategory'>
            <h3>All mail</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryCharts;
