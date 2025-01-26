import React, { useState, useEffect } from 'react';
import Table from '../Table';
import '../App.css'; 

function CuksPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>ЦУКС</h2>
      <Table departmentKey="cuks" isAdmin={isAdmin} />
    </div>
  );
}

export default CuksPage;