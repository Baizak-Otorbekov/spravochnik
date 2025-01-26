import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function SelvodPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Сельводзащита</h2>
      <Table departmentKey="selvodzashchita" isAdmin={isAdmin} />
    </div>
  );
}

export default SelvodPage;