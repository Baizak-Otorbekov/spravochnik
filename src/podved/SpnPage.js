import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function SpnPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>СПН</h2>
      <Table departmentKey="spn" isAdmin={isAdmin} />
    </div>
  );
}

export default SpnPage;