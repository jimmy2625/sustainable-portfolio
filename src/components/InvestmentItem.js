import React from 'react';
import './styles.css'; 
import Swal from 'sweetalert2'

const InvestmentItem = ({ investment, deleteInvestment, editInvestment }) => {
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this investment?',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      confirmButtonColor: '#ff0800',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteInvestment(investment.id);
      } 
    })
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