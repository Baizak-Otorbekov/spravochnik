import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css';

function UmchsJalalPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Территориальное подразделение УМЧС Жалал-Абад</h2>
      <Table departmentKey="umchs-jalalabad" isAdmin={isAdmin} /> 
    </div>
  );
}

export default UmchsJalalPage;
