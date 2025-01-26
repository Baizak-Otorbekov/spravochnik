import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css';

function GssPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Территориальное подразделение ГСС</h2>
      <Table departmentKey="gss" isAdmin={isAdmin} /> 
    </div>
  );
}

export default GssPage;
