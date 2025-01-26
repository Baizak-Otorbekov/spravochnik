import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function AserchPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Авиационное поисково-спасательное предприятие</h2>
      <Table departmentKey="aviacionno-poiskovo-spasatelnaya-sluzhba" isAdmin={isAdmin} />
    </div>
  );
}

export default AserchPage;