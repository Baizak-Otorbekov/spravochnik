import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Table from './Table';

function CentralOfficePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role'); 
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false); 
    }
  }, []);

  const handleBack = () => {
    navigate('/home'); 
  };

  return (
    <div className="central-office-container">
      <h1>Центральный аппарат</h1>
      <Table departmentKey="CentralOffice" isAdmin={isAdmin} />

      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default CentralOfficePage;