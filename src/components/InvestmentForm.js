import React, { useState } from 'react';
import './styles.css'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    toast.success('An investment has been added!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true
    });
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
        min="1"
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