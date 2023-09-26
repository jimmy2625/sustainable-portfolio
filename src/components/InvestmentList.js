import React, { useState } from 'react';
import InvestmentItem from './InvestmentItem';
import './styles.css'; 

const InvestmentList = ({ investments, deleteInvestment, editInvestment }) => {
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  // Function to handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to filter investments by category
  const filteredInvestments = selectedCategory === 'All'
    ? investments
    : investments.filter((investment) => investment.category === selectedCategory);

  // Function to extract unique categories from investments
  const getUniqueCategories = () => {
    const categories = new Set();
    investments.forEach((investment) => categories.add(investment.category));
    return Array.from(categories);
  };

  return (
    <div>
      <label htmlFor="categoryFilter">Filter by Category: </label>
      <select
        className="category-filter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        {getUniqueCategories().map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      </select>
      <ul className="investment-list">
        {filteredInvestments.map((investment) => (
          <InvestmentItem
            key={investment.id}
            investment={investment}
            deleteInvestment={deleteInvestment}
            editInvestment={editInvestment}
          />
        ))}
      </ul>
    </div>
  );
};

export default InvestmentList;