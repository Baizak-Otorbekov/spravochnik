import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Table from '../Table'; 
import '../App.css';

function LesPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  const handleBack = () => {
    navigate('/subordinate'); 
  };

  return (
    <div className="territorial-page">
      <h2>Лесная служба</h2>
      <Table departmentKey="lesnaya-sluzhba" isAdmin={isAdmin} />

      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default LesPage;
