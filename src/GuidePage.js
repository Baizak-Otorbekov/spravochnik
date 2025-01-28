import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Table from './Table';
import './App.css';

function GuidePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  const handleBack = () => {
    navigate('/home'); 
  };

  return (
    <div className="guide-page central-office-container"> 
      <h2>Руководство</h2>
      <Table departmentKey="guide" isAdmin={isAdmin} />

      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default GuidePage;