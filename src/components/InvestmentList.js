import React from 'react';
import InvestmentItem from './InvestmentItem';
import './styles.css'

const InvestmentList = ({ investments, deleteInvestment, editInvestment }) => {
  return (
    <div>
      <h2>Investments</h2>
      <ul className="investment-list">
        {investments.map((investment) => (
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
