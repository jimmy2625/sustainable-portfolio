import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditInvestmentForm = ({ investment, updateInvestment }) => {
  const [editedInvestment, setEditedInvestment] = useState({ ...investment });

  useEffect(() => {
    setEditedInvestment({ ...investment });
  }, [investment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInvestment({ ...editedInvestment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('An investment has been edited!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true
    });

    updateInvestment(editedInvestment);
  };

  return (
    <form onSubmit={handleSubmit} className="investment-form">
      <input
        type="text"
        name="name"
        placeholder="Investment name"
        value={editedInvestment.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Investment category"
        value={editedInvestment.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount invested"
        value={editedInvestment.amount}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={editedInvestment.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Investment</button>
    </form>
  );
};

export default EditInvestmentForm;