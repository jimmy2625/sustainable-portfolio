import React, { useState } from 'react';
import './App.css'; // Import your global CSS file
import InvestmentForm from './components/InvestmentForm';
import InvestmentList from './components/InvestmentList';
import EditInvestmentForm from './components/EditInvestmentForm';

function App() {
  const [investments, setInvestments] = useState([]);
  const [editingInvestmentId, setEditingInvestmentId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false); 

  // Function to add a new investment
  const addInvestment = (newInvestment) => {
    setInvestments([...investments, { ...newInvestment, id: Date.now() }]);
    setIsFormVisible(false); 
  };

  // Function to delete an investment
  const deleteInvestment = (id) => {
    const updatedInvestments = investments.filter((investment) => investment.id !== id);
    setInvestments(updatedInvestments);
  };

  // Function to edit an investment
  const editInvestment = (id) => {
    setEditingInvestmentId(id);
  };

  // Function to update an investment
  const updateInvestment = (editedInvestment) => {
    const updatedInvestments = investments.map((investment) =>
      investment.id === editedInvestment.id ? editedInvestment : investment
    );
    setInvestments(updatedInvestments);
    setEditingInvestmentId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Sustainable Investment Portfolio</h1>
        <button className="form-button" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? 'Hide Investment Form' : 'Add Investment'}
        </button>
        {isFormVisible && <InvestmentForm addInvestment={addInvestment} />}
        <InvestmentList 
          investments={investments} 
          deleteInvestment={deleteInvestment}
          editInvestment={editInvestment} 
        />
        {editingInvestmentId && (
        <EditInvestmentForm
          investment={investments.find((inv) => inv.id === editingInvestmentId)}
          updateInvestment={updateInvestment}
        />
        )}
      </div>
    </div>
  );
}

export default App;
