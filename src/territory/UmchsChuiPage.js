import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css';

function UmchsChuiPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Территориальное подразделение УМЧС Чуйской области</h2>
      <Table departmentKey="umchs-chui" isAdmin={isAdmin} /> 
    </div>
  );
}

export default UmchsChuiPage;
