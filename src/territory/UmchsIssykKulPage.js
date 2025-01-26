import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css';

function UmchsIssykKulPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Территориальное подразделение УМЧС Иссык-Кульской области</h2>
      <Table departmentKey="umchs-issyk-kul" isAdmin={isAdmin} /> 
    </div>
  );
}

export default UmchsIssykKulPage;
