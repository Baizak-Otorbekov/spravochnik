import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function BpmoPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Баткен ПМО</h2>
      <Table departmentKey="batken-pmo" isAdmin={isAdmin} />
    </div>
  );
}

export default BpmoPage;