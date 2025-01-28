import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../Table'; 
import '../App.css';

function UmchsIssykKulPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); 
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  const handleBack = () => {
    navigate('/territorial'); 
  };

  return (
    <div className="territorial-page">
      <h2>Территориальное подразделение УМЧС Иссык-Кульской области</h2>
      <Table departmentKey="umchs-issyk-kul" isAdmin={isAdmin} />

      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default UmchsIssykKulPage;
