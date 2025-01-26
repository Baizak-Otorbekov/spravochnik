import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function SplpchsPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>СПЛПЧС</h2>
      <Table departmentKey="sluzhba-plps" isAdmin={isAdmin} />
    </div>
  );
}

export default SplpchsPage;