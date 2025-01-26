import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function NstrPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Нарын строй</h2>
      <Table departmentKey="naryn-stroj" isAdmin={isAdmin} />
    </div>
  );
}

export default NstrPage;