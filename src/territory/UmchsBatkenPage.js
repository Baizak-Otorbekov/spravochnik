import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css';

function UmchsBatkenPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Территориальное подразделение УМЧС Баткен</h2>
      <Table departmentKey="umchs-batken" isAdmin={isAdmin} />
    </div>
  );
}

export default UmchsBatkenPage;
