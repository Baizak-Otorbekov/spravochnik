import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';

function CentralOfficePage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role'); 
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false); 
    }
  }, []);

  return (
    <div>
      <h1>Центральный аппарат</h1>
      <Table departmentKey="CentralOffice" isAdmin={isAdmin} />
    </div>
  );
}

export default CentralOfficePage;