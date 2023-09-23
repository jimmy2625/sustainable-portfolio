import React, { useState } from 'react';
import './styles.css'; 

const InvestmentForm = ({ addInvestment }) => {
  const [investment, setInvestment] = useState({
    name: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestment({ ...investment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvestment(investment);
    setInvestment({ name: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="investment-form">
      <input
        type="text"
        name="name"
        placeholder="Investment name"
        value={investment.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Investment category"
        value={investment.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount invested"
        value={investment.amount}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={investment.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Investment</button>
    </form>
  );
};

export default InvestmentForm;
