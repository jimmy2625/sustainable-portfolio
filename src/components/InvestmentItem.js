import React from 'react';
import './styles.css'; 

const InvestmentItem = ({ investment, deleteInvestment, editInvestment }) => {
  const handleDelete = () => {
    deleteInvestment(investment.id);
  };

  const handleEdit = () => {
    editInvestment(investment.id);
  }

  return (
    <li className="investment-item">
      <div className="investment-details">
        <strong>{investment.name}</strong> ({investment.category})
      </div>
      <div className="investment-amount">Amount: {investment.amount} DKK</div>
      <div className="investment-date">Date: {investment.date}</div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
    </li>
  );
};

export default InvestmentItem;