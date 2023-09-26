import React from 'react';
import './styles.css'; 
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InvestmentItem = ({ investment, deleteInvestment, editInvestment }) => {

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this investment?',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      confirmButtonColor: '#ff0800',
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success('An investment has been deleted!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true
        });

        deleteInvestment(investment.id);
      } 
    })
  };

  const handleEdit = () => {
    editInvestment(investment.id);
  }

  return (
    <li className="investment-item">
      <div className="investment-details"> <strong>{investment.name}</strong> ({investment.category})</div>
      <div className="investment-amount">Amount: {investment.amount} DKK</div>
      <div className="investment-date">Date: {investment.date}</div>
      <button className="delete-button" onClick={handleDelete}> Delete </button>
      <button className="edit-button" onClick={handleEdit}> Edit </button>
    </li>
  );
};

export default InvestmentItem;