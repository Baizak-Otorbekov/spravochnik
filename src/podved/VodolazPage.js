import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function VodolazPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>ВОДОЛАЗ</h2>
      <Table departmentKey="vodolaznaya-sluzhba" isAdmin={isAdmin} />
    </div>
  );
}

export default VodolazPage;