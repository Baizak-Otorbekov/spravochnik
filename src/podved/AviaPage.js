import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function AviaPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Авиационное предприятие</h2>
      <Table departmentKey="aviacionnoe-predpriyatie" isAdmin={isAdmin} />
    </div>
  );
}

export default AviaPage;